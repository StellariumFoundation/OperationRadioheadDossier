import { opusStream } from './opusStream';

export type CallState = 'idle' | 'calling' | 'in_call' | 'ended' | 'no_answer' | 'failed';

type Listener = () => void;

const CALL_SERVER = 'https://callserver-jyzl.onrender.com';

const decoder = new TextDecoder();

function readUint32BE(buf: Uint8Array, offset: number): number {
  return ((buf[offset] << 24) | (buf[offset + 1] << 16) | (buf[offset + 2] << 8) | buf[offset + 3]) >>> 0;
}

class StreamParser {
  private buffer = new Uint8Array(0);

  push(data: Uint8Array, onControl: (msg: any) => void, onAudio: (payload: Uint8Array) => void) {
    const tmp = new Uint8Array(this.buffer.length + data.length);
    tmp.set(this.buffer);
    tmp.set(data, this.buffer.length);
    this.buffer = tmp;

    while (this.buffer.length >= 5) {
      const type = this.buffer[0];
      const length = readUint32BE(this.buffer, 1);
      const frameSize = 5 + length;
      if (this.buffer.length < frameSize) break;

      const payload = this.buffer.slice(5, frameSize);
      if (type === 0) {
        try {
          onControl(JSON.parse(decoder.decode(payload)));
        } catch {}
      } else if (type === 1) {
        onAudio(payload);
      }
      this.buffer = this.buffer.slice(frameSize);
    }
  }

  clear() { this.buffer = new Uint8Array(0); }
}

class CallClient {
  private _callState: CallState = 'idle';
  private _errorText = '';
  private _queuePosition: number | null = null;
  private abortController: AbortController | null = null;
  private reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  private callTimeout: ReturnType<typeof setTimeout> | null = null;
  private recording = false;
  private _callEnded = false;
  private parser = new StreamParser();
  private listeners = new Set<Listener>();

  get callState() { return this._callState; }
  get errorText() { return this._errorText; }
  get queuePosition() { return this._queuePosition; }

  subscribe(cb: Listener) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private notify() {
    this.listeners.forEach(cb => cb());
  }

  private setState(state: CallState) {
    this._callState = state;
    this.notify();
  }

  private setError(text: string) {
    this._errorText = text;
    this.notify();
  }

  private setQueue(pos: number | null) {
    this._queuePosition = pos;
    this.notify();
  }

  async startCall(): Promise<void> {
    this.setError('');
    this.setQueue(null);
    this._callEnded = false;
    this.parser.clear();
    this.abortController = new AbortController();
    this.setState('calling');

    try {
      await opusStream.initStream();
    } catch (e: any) {
      this.setError(e.message || 'Microphone setup failed');
      this.setState('failed');
      return;
    }

    try {
      const response = await fetch(`${CALL_SERVER}/caller`, {
        method: 'GET',
        signal: this.abortController.signal
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => 'Call failed');
        this.setError(errText);
        this.setState('failed');
        return;
      }

      this.reader = response.body!.getReader();
      this.readLoop();

      this.callTimeout = setTimeout(() => {
        if (!this._callEnded && this._callState === 'calling') {
          this.setError('No answer. Try again.');
          this.endCall();
          this.setState('no_answer');
        }
      }, 30000);
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      this.setError('Connection failed. Try again.');
      this.setState('failed');
    }
  }

  private async readLoop() {
    while (this.reader && !this._callEnded) {
      try {
        const { done, value } = await this.reader.read();
        if (done || this._callEnded) break;
        if (value.length === 0) continue;

        this.parser.push(
          value,
          (msg) => this.handleMessage(msg),
          (payload) => {
            opusStream.playPacket(payload).catch((e: any) => console.error('playPacket error:', e));
          }
        );
      } catch (err: any) {
        if (err.name === 'AbortError' || this._callEnded) break;
        console.error('Read error:', err);
        break;
      }
    }
    if (!this._callEnded) {
      this.setState('ended');
      opusStream.stop();
    }
  }

  private handleMessage(msg: any) {
    switch (msg.type) {
      case 'call_answered':
        this.setQueue(null);
        if (this.callTimeout) clearTimeout(this.callTimeout);
        this.setState('in_call');
        break;
      case 'queue_position':
        if (this.callTimeout) clearTimeout(this.callTimeout);
        this.setState('calling');
        this.setQueue(msg.position);
        break;
      case 'connected':
        this.setQueue(null);
        this.setState('calling');
        this.callTimeout = setTimeout(() => {
          if (!this._callEnded && this._callState === 'calling') {
            this.setError('No answer. Try again.');
            this.endCall();
            this.setState('no_answer');
          }
        }, 30000);
        break;
      case 'error':
        this.setQueue(null);
        if (this.callTimeout) clearTimeout(this.callTimeout);
        this.setState('failed');
        this.setError(msg.message || 'Call failed');
        break;
      case 'hangup':
        this.setQueue(null);
        if (this.callTimeout) clearTimeout(this.callTimeout);
        this.setState('ended');
        opusStream.stop();
        break;
    }
  }

  async startTransmitting(): Promise<void> {
    if (this._callState !== 'in_call') return;
    if (this.recording) return;
    this.recording = true;

    try {
      const packet = await opusStream.startRecording();
      if (this._callEnded) return;

      const response = await fetch(`${CALL_SERVER}/caller`, {
        method: 'POST',
        body: packet as BodyInit,
        headers: { 'Content-Type': 'application/octet-stream' }
      });

      if (!response.ok) {
        console.error('Transmit failed:', await response.text().catch(() => ''));
      }
    } catch (e: any) {
      if (e.name === 'AbortError') return;
      console.error('PTT recording failed:', e);
    }
    this.recording = false;
  }

  stopTransmitting(): void {
    opusStream.stopRecording();
  }

  endCall(): void {
    if (this.callTimeout) clearTimeout(this.callTimeout);
    this._callEnded = true;
    this.setQueue(null);

    fetch(`${CALL_SERVER}/caller`, { method: 'DELETE' }).catch(() => {});

    this.abortController?.abort();
    this.reader = null;
    this.parser.clear();
    this.setState('ended');
    opusStream.stop();
  }

  resetCall(): void {
    this.abortController?.abort();
    this.abortController = null;
    this.reader = null;
    this._callEnded = false;
    this.parser.clear();
    this.setState('idle');
    this.setError('');
    this.setQueue(null);
    if (this.callTimeout) clearTimeout(this.callTimeout);
    opusStream.stop();
  }
}

export const callClient = new CallClient();
