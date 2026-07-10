import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const FIRST_NAMES = ["Elena", "Marcus", "Sarah", "David", "Aisha", "Julian", "Maya", "Omar", "Sophia", "Wei", "Chloe", "Liam", "Mateo", "Yuki", "Priya", "Luca", "Zoe", "Amir"];
const LAST_NAMES = ["Smith", "Garcia", "Kim", "Müller", "Ali", "Ivanov", "Silva", "Chen", "Nguyen", "Kowalski", "Okafor", "Rossi", "Martinez", "Dubois", "Sato"];
const LOCATIONS = ["London, UK", "Tokyo, Japan", "New York, USA", "Cairo, Egypt", "Mumbai, India", "São Paulo, Brazil", "Sydney, Australia", "Berlin, Germany", "Nairobi, Kenya", "Toronto, Canada", "Seoul, South Korea", "Paris, France", "Mexico City, Mexico", "Lagos, Nigeria", "Istanbul, Turkey"];

interface Victim {
  id: number;
  name: string;
  age: number;
  location: string;
}

export default function VictimMemorialCard() {
  const [displayVictim, setDisplayVictim] = useState<Victim | null>(null);
  const queue = useRef<Victim[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    // Asynchronously generate victims and add to queue
    let active = true;

    const generateVictims = async () => {
      while (active) {
        // Simulate async generation delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (!active) break;
        
        const newVictim = {
          id: Date.now() + Math.random(),
          name: `${FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]} ${LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]}`,
          age: Math.floor(Math.random() * 60) + 1,
          location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
        };
        
        // Keep queue from growing too large
        if (queue.current.length < 50) {
          queue.current.push(newVictim);
        }
      }
    };
    
    generateVictims();
    
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const nextVictim = queue.current.length > 0 ? queue.current.shift() || null : null;

      if (!cardRef.current) {
        timeoutId = setTimeout(tick, 2000);
        return;
      }

      const tl = gsap.timeline();

      if (isVisible.current) {
        tl.to(cardRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.in"
        });
        isVisible.current = false;
      }

      tl.call(() => {
        setDisplayVictim(nextVictim);
      });

      if (nextVictim) {
        tl.fromTo(cardRef.current,
          { opacity: 0, y: 10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out", delay: 0.1 }
        );
        isVisible.current = true;
      }

      // 2 seconds per cycle
      timeoutId = setTimeout(tick, 2000);
    };

    // start the loop
    timeoutId = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timeoutId);
      gsap.killTweensOf(cardRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+4.5rem)] left-0 right-0 z-40 pointer-events-none flex flex-col items-center justify-center">
      <div
        ref={cardRef}
        className="bg-black/90 backdrop-blur-md border border-red-900/40 p-2.5 rounded-lg shadow-2xl shadow-red-900/10 text-center w-48 relative overflow-hidden opacity-0"
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
        
        <div className="font-mono text-[8px] text-red-500/80 mb-1 tracking-widest uppercase">Victim Memory</div>
        <div className="font-serif text-zinc-200 text-sm mb-0.5">{displayVictim ? displayVictim.name : '\u00A0'}</div>
        <div className="font-mono text-[9px] text-zinc-500">
          {displayVictim ? `Age ${displayVictim.age} • ${displayVictim.location}` : '\u00A0'}
        </div>
      </div>
    </div>
  );
}
