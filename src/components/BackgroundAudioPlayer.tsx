import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundAudioPlayer() {
  const audioTracks = [
    'https://www.stellarium.ddns-ip.net/dvorak.opus',
    'https://www.stellarium.ddns-ip.net/egmont.opus'
  ];

  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioTracks[currentTrackIdx]);
    audio.preload = 'auto';
    audio.loop = false;
    audio.volume = 0.45;
    audioRef.current = audio;

    // Handle track ending to cycle to next song
    const handleTrackEnded = () => {
      const nextIdx = (currentTrackIdx + 1) % audioTracks.length;
      setCurrentTrackIdx(nextIdx);
    };

    audio.addEventListener('ended', handleTrackEnded);

    // Attempt autoplay (muted first, to ensure success)
    audio.muted = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .catch((err) => {
          console.warn('Autoplay blocked. Waiting for user interaction.', err);
        });
    }

    // Unmute listener on first user interaction anywhere
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
      // Remove listeners once activated
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      audio.removeEventListener('ended', handleTrackEnded);
      audio.pause();
      if (audioRef.current) {
        audioRef.current = null;
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [currentTrackIdx]);

  return null;
}
