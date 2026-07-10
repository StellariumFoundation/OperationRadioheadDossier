import React, { useEffect, useRef } from 'react';

const trackModules = import.meta.glob<string>('../assets/music/*.opus', { eager: true, query: '?url', import: 'default' });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const audioTracks = shuffle(Object.values(trackModules));

let ctx: AudioContext | null = null;
function getCtx(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

export default function BackgroundAudioPlayer() {
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const idxRef = useRef(0);
  const unlockedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function playTrack() {
      if (cancelled) return;
      const url = audioTracks[idxRef.current];
      if (!url) return;

      const context = getCtx();

      // Resume context if suspended (autoplay policy)
      if (context.state === 'suspended') {
        await context.resume();
      }

      try {
        const resp = await fetch(url);
        const arrayBuffer = await resp.arrayBuffer();
        if (cancelled) return;

        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        if (cancelled) return;

        // Stop previous
        try { sourceRef.current?.stop(); } catch {}
        sourceRef.current?.disconnect();

        const source = context.createBufferSource();
        source.buffer = audioBuffer;

        const gain = context.createGain();
        gain.gain.value = 0.45;
        gainRef.current = gain;

        source.connect(gain);
        gain.connect(context.destination);
        source.start(0);
        sourceRef.current = source;

        // Schedule next track
        source.onended = () => {
          if (cancelled) return;
          idxRef.current = (idxRef.current + 1) % audioTracks.length;
          playTrack();
        };
      } catch {
        // Skip to next on error
        if (!cancelled) {
          idxRef.current = (idxRef.current + 1) % audioTracks.length;
          playTrack();
        }
      }
    }

    // Unlock audio context on first user interaction
    function unlock() {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      const c = getCtx();
      if (c.state === 'suspended') c.resume();
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
      playTrack();
    }

    // Try immediate play
    playTrack().catch(() => {
      window.addEventListener('click', unlock);
      window.addEventListener('keydown', unlock);
      window.addEventListener('touchstart', unlock);
    });

    return () => {
      cancelled = true;
      try { sourceRef.current?.stop(); } catch {}
      sourceRef.current?.disconnect();
    };
  }, []);

  return null;
}
