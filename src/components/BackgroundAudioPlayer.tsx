import React, { useEffect, useRef, useState } from 'react';

const trackModules = import.meta.glob<string>('../assets/music/*.opus', { eager: true, as: 'url' });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const audioTracks = shuffle(Object.values(trackModules));

export default function BackgroundAudioPlayer() {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const url = audioTracks[currentTrackIdx];
    if (!url) return;

    const audio = new Audio(url);
    audio.preload = 'auto';
    audio.loop = false;
    audio.volume = 0.45;
    audioRef.current = audio;

    const handleTrackEnded = () => {
      const nextIdx = (currentTrackIdx + 1) % audioTracks.length;
      setCurrentTrackIdx(nextIdx);
    };

    audio.addEventListener('ended', handleTrackEnded);

    let interactionCleanup: (() => void) | null = null;

    // Try unmuted first — works on browsers with prior site engagement
    audio.play().catch(() => {
      // Autoplay blocked — play muted, unmute on first user interaction
      audio.muted = true;
      audio.currentTime = 0;
      audio.play().catch(() => {});

      const handleFirstInteraction = () => {
        if (audioRef.current) {
          audioRef.current.muted = false;
          audioRef.current.play().catch(() => {});
        }
        cleanup();
      };

      const cleanup = () => {
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('keydown', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
        interactionCleanup = null;
      };

      window.addEventListener('click', handleFirstInteraction);
      window.addEventListener('keydown', handleFirstInteraction);
      window.addEventListener('touchstart', handleFirstInteraction);
      interactionCleanup = cleanup;
    });

    return () => {
      audio.removeEventListener('ended', handleTrackEnded);
      audio.pause();
      if (interactionCleanup) interactionCleanup();
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, [currentTrackIdx]);

  return null;
}
