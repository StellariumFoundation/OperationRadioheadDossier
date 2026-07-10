const BITRATE = 96000;
const PREFERRED_TYPES = ['audio/webm;codecs=opus', 'audio/webm'];

type Listener = () => void;

class OpusStream {
  private mediaRecorder: MediaRecorder | null = null;
  private mediaStream: MediaStream | null = null;
  private resolveCurrent: ((data: Uint8Array) => void) | null = null;
  private selectedMimeType = '';
  private _initialized = false;
  private _recording = false;
  private listeners = new Set<Listener>();

  get initialized() { return this._initialized; }
  get recording() { return this._recording; }

  subscribe(cb: Listener) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private notify() {
    this.listeners.forEach(cb => cb());
  }

  init(): void {
    this._initialized = true;
    this.notify();
  }

  async initStream(): Promise<void> {
    if (this.mediaStream) return;

    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error('getUserMedia not available. Check microphone permissions.');
    }

    const supported = PREFERRED_TYPES.find(t => MediaRecorder.isTypeSupported(t));
    if (!supported) throw new Error('No supported audio MIME type');
    this.selectedMimeType = supported;

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
      });
    } catch (err: any) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        throw new Error('Microphone permission denied. Grant mic access in settings and try again.');
      }
      if (err.name === 'NotFoundError') {
        throw new Error('No microphone found. Connect a mic and try again.');
      }
      throw new Error(`Microphone access failed: ${err.message || 'Unknown error'}`);
    }

    this.mediaRecorder = new MediaRecorder(this.mediaStream, {
      mimeType: this.selectedMimeType,
      audioBitsPerSecond: BITRATE
    });

    this.mediaRecorder.ondataavailable = (event) => {
      if (!event.data || event.data.size === 0) return;
      event.data.arrayBuffer().then((buffer) => {
        this.resolveCurrent?.(new Uint8Array(buffer));
        this.resolveCurrent = null;
      });
    };
  }

  async startRecording(): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder || !this.mediaStream) {
        reject(new Error('Not initialized. Call initStream() first.'));
        return;
      }
      if (this.mediaRecorder.state === 'recording') {
        reject(new Error('Already recording'));
        return;
      }

      this.resolveCurrent = resolve;
      this.mediaRecorder.start();
      this._recording = true;
      this.notify();
    });
  }

  stopRecording(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this._recording = false;
    this.notify();
  }

  releaseStream(): void {
    this.stopRecording();
    this.mediaRecorder = null;
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = null;
    }
    this._initialized = false;
    this.notify();
  }

  async playPacket(packet: Uint8Array): Promise<void> {
    const blob = new Blob([packet as BlobPart], { type: this.selectedMimeType || PREFERRED_TYPES[0] });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    return new Promise((resolve) => {
      audio.onended = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      audio.play().catch(() => {
        URL.revokeObjectURL(url);
        resolve();
      });
    });
  }

  stop(): void {
    this.releaseStream();
  }

  free(): void {
    this.releaseStream();
  }
}

export const opusStream = new OpusStream();
