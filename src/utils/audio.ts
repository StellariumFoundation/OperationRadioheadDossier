class UnsettlingAmbientSynth {
  private ctx: AudioContext | null = null;
  private masterVolume: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private isPlaying: boolean = false;
  private intervalId: any = null;

  start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      this.ctx = new AudioCtx();
      
      // Master Gain for smooth volume control
      this.masterVolume = this.ctx.createGain();
      this.masterVolume.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterVolume.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 3.0); // 3-second fade-in
      this.masterVolume.connect(this.ctx.destination);

      // Low Drone Oscillator 1 (Deep base: 55Hz - A1)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sawtooth';
      this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
      
      const gainOsc1 = this.ctx.createGain();
      gainOsc1.gain.setValueAtTime(0.12, this.ctx.currentTime);

      // Low Drone Oscillator 2 (Slight detune for beating: 55.4Hz)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'triangle';
      this.osc2.frequency.setValueAtTime(55.4, this.ctx.currentTime);
      
      const gainOsc2 = this.ctx.createGain();
      gainOsc2.gain.setValueAtTime(0.18, this.ctx.currentTime);

      // Lowpass filter to cut harsh high frequencies from the sawtooth, leaving a deep dark hum
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(4, this.ctx.currentTime);

      // Connect low hum elements
      this.osc1.connect(gainOsc1);
      this.osc2.connect(gainOsc2);
      gainOsc1.connect(this.filter);
      gainOsc2.connect(this.filter);
      this.filter.connect(this.masterVolume);

      // LFO to slowly sweep the lowpass filter frequency (creates swelling movement)
      this.lfo = this.ctx.createOscillator();
      this.lfo.type = 'sine';
      this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // 1 sweep every 12 seconds
      
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(45, this.ctx.currentTime); // sweep filter frequency +/- 45Hz
      
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);

      // Start drone
      this.osc1.start();
      this.osc2.start();
      this.lfo.start();

      // Occasional haunting resonance notes playing randomly in the background (metallic cold bell tones)
      const triggerHauntingNote = () => {
        if (!this.ctx || !this.masterVolume) return;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const bandpass = this.ctx.createBiquadFilter();
        
        // Minor/dissonant frequencies: e.g., detuned C, Eb, F#, A
        const frequencies = [110, 164.81, 233.08, 311.13, 440, 523.25, 622.25];
        const freq = frequencies[Math.floor(Math.random() * frequencies.length)] * (0.98 + Math.random() * 0.04);
        
        osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        bandpass.type = 'bandpass';
        bandpass.frequency.setValueAtTime(freq, this.ctx.currentTime);
        bandpass.Q.setValueAtTime(12, this.ctx.currentTime);

        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        // Very slow attack, long release
        gain.gain.linearRampToValueAtTime(0.04 + Math.random() * 0.05, this.ctx.currentTime + 3.0);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 9.0);

        osc.connect(bandpass);
        bandpass.connect(gain);
        gain.connect(this.masterVolume);

        osc.start();
        osc.stop(this.ctx.currentTime + 10.0);
      };

      this.intervalId = setInterval(() => {
        if (Math.random() < 0.6) {
          triggerHauntingNote();
        }
      }, 4000);

      this.isPlaying = true;
    } catch (e) {
      console.warn('Web Audio Context failed to initialize:', e);
    }
  }

  stop() {
    if (!this.isPlaying) return;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.ctx && this.masterVolume) {
      const current = this.ctx.currentTime;
      // Fade out volume over 1.2 seconds to prevent clicking
      this.masterVolume.gain.setValueAtTime(this.masterVolume.gain.value, current);
      this.masterVolume.gain.linearRampToValueAtTime(0, current + 1.2);
      
      const ctxToClose = this.ctx;
      const oscs = [this.osc1, this.osc2, this.lfo];
      
      setTimeout(() => {
        try {
          oscs.forEach(osc => {
            if (osc) {
              osc.stop();
              osc.disconnect();
            }
          });
          if (this.masterVolume) this.masterVolume.disconnect();
          if (this.filter) this.filter.disconnect();
          ctxToClose.close();
        } catch (e) {
          // ignore already stopped oscillators
        }
      }, 1300);
    }

    this.osc1 = null;
    this.osc2 = null;
    this.lfo = null;
    this.filter = null;
    this.masterVolume = null;
    this.ctx = null;
    this.isPlaying = false;
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const ambientDrone = new UnsettlingAmbientSynth();
