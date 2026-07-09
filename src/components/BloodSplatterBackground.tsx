import React, { useState, useEffect, useRef } from 'react';

interface Splatter {
  id: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  type: number; // 0, 1, or 2 to match tutorial splat variety
  color: string; // Randomized blood shade
}

export default function BloodSplatterBackground() {
  const [splatters, setSplatters] = useState<Splatter[]>([]);
  const [isAutoSpawning, setIsAutoSpawning] = useState(true);
  const splashesUsedRef = useRef<number[]>([]);

  // Distinct blood colors for deep, multi-tonal realism
  const bloodColors = [
    '#881337', // rose-900 (Deep oxidized blood)
    '#991b1b', // red-800 (Fresh arterial blood)
    '#7f1d1d', // red-900 (Coagulated dark blood)
    '#b91c1c'  // red-700 (Vibrant blood)
  ];

  // Logic to select a random splatter type (0, 1, or 2) ensuring we don't repeat immediately
  const getNextSplatterType = (): number => {
    let pool = [0, 1, 2];
    // Filter out recently used types if possible
    let available = pool.filter(t => !splashesUsedRef.current.includes(t));
    if (available.length === 0) {
      splashesUsedRef.current = [];
      available = pool;
    }
    const chosen = available[Math.floor(Math.random() * available.length)];
    splashesUsedRef.current = [...splashesUsedRef.current.slice(-2), chosen];
    return chosen;
  };

  // Helper to spawn a single random splatter on the screen
  const spawnRandomSplatter = (clientX?: number, clientY?: number) => {
    const x = clientX !== undefined ? clientX : Math.random() * window.innerWidth;
    const y = clientY !== undefined ? clientY : Math.random() * window.innerHeight;
    
    const newSplatter: Splatter = {
      id: `splatter-${Date.now()}-${Math.random()}`,
      x,
      y,
      scale: 0.35 + Math.random() * 0.55,
      rotation: Math.random() * 360,
      type: getNextSplatterType(),
      color: bloodColors[Math.floor(Math.random() * bloodColors.length)]
    };

    setSplatters((prev) => [...prev.slice(-25), newSplatter]); // Cap at 25 splatters to keep rendering smooth
  };

  // 1. Continuous Auto Spawning of Splatters (one after another)
  useEffect(() => {
    if (!isAutoSpawning) return;

    let timerId: NodeJS.Timeout;

    const tick = () => {
      spawnRandomSplatter();
      // Random delay between 1.2s and 2.5s for organic rhythm
      const nextDelay = 1200 + Math.random() * 1300;
      timerId = setTimeout(tick, nextDelay);
    };

    // Start loop
    timerId = setTimeout(tick, 500);

    return () => clearTimeout(timerId);
  }, [isAutoSpawning]);

  // 2. User Click Spawning
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Exclude interactive audio controls & buttons
      if (
        target.closest('#bg-music-toggle') || 
        target.closest('button.no-splatter') || 
        target.closest('#bloody-action-btn') ||
        target.closest('#auto-toggle-btn')
      ) {
        return;
      }

      spawnRandomSplatter(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleDocumentClick);
    return () => window.removeEventListener('click', handleDocumentClick);
  }, []);

  const removeSplatter = (id: string) => {
    setSplatters((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {splatters.map((splatter) => {
        // Render 3 distinct styles of blood splashes matching the 3-type tutorial mechanism
        return (
          <div
            key={splatter.id}
            className="absolute"
            style={{
              left: splatter.x,
              top: splatter.y,
              transform: `translate(-50%, -50%) scale(${splatter.scale}) rotate(${splatter.rotation}deg)`,
              transformOrigin: 'center center',
            }}
          >
            {splatter.type === 0 && (
              /* TYPE 0: Original Drip with Vertical run-down */
              <svg
                className="w-80 h-80 opacity-80 animate-fade-out"
                viewBox="0 0 764 713"
                xmlns="http://www.w3.org/2000/svg"
                onAnimationEnd={() => removeSplatter(splatter.id)}
              >
                <path d="M117.503 2.2C126.703 6.9 122.303 14 110.403 14C103.503 14 99.5026 11.4 99.5026 6.9C99.5026 4.7 100.303 3.5 102.703 2C107.003 -0.6 112.003 -0.5 117.503 2.2Z" fill={splatter.color} />
                <path d="M144.003 6.20018C149.503 9.10018 150.003 14.1002 145.203 17.0002C138.703 21.0002 132.203 18.5002 132.203 12.0002C132.203 6.20018 138.403 3.10018 144.003 6.20018Z" fill={splatter.color} />
                <path d="M763.503 17.1C763.503 24.3 747.303 45.5 742.403 44.8C741.103 44.6 739.903 43.7 739.703 42.7C738.503 36.6 755.003 15 760.803 15C762.903 15 763.503 15.5 763.503 17.1Z" fill={splatter.color} />
                <path d="M240.203 73.0001C242.503 73.9001 244.003 77.3001 243.003 79.0001C242.103 80.4001 238.903 80.2001 235.603 78.6001C232.503 77.0001 229.903 74.2001 230.703 73.4001C231.803 72.4001 238.103 72.1001 240.203 73.0001Z" fill={splatter.color} />
                <path d="M720.503 84.8001C720.503 87.9001 713.903 100.4 710.103 104.4C706.703 108.1 706.303 108.2 704.803 106.7C703.303 105.2 703.303 104.7 705.003 100.3C706.003 97.7001 708.103 93.6001 709.703 91.3001C714.403 84.3001 720.503 80.7001 720.503 84.8001Z" fill={splatter.color} />
                <path d="M695.503 120.2C695.503 125.9 685.803 141.7 678.003 148.9C669.203 157 670.103 150.1 679.803 135.4C685.203 127.2 690.903 120.4 693.603 119C695.203 118.1 695.503 118.3 695.503 120.2Z" fill={splatter.color} />
                
                <path
                  d="M372.902 210.401C383.302 212.801 396.402 220.201 405.902 229.101C415.802 238.401 419.502 244.701 419.502 252.501C419.502 260.501 415.902 266.601 405.302 276.201C400.402 280.701 395.102 286.501 393.702 289.001C391.202 293.201 391.002 294.501 390.502 308.801C390.102 322.501 389.802 324.301 388.102 325.601C385.502 327.401 381.202 327.401 377.502 325.501C374.202 323.801 374.002 323.401 372.502 311.501C371.702 305.601 370.502 301.101 369.002 298.501C365.502 292.501 357.202 285.001 345.502 277.201C333.802 269.501 330.302 266.201 328.202 261.001C324.702 252.801 325.302 237.701 329.502 228.301C336.002 213.701 354.202 206.201 372.902 210.401Z"
                  fill={splatter.color}
                >
                  <animate
                    attributeName="d"
                    dur="1.6s"
                    fill="freeze"
                    to="M372.902 210.399C383.302 212.799 396.402 220.199 405.902 229.099C415.802 238.399 419.502 244.699 419.502 252.499C419.502 260.499 415.902 266.6 405.302 276.2C400.402 280.7 395.102 286.5 393.702 289C391.202 293.2 389.002 381.2 388.502 395.5C388.102 409.2 391.5 406.5 388.502 410.6C385.902 412.4 381.602 412.4 377.902 410.5C373.5 408.239 377 407.4 375.5 395.5C374.7 389.6 370.502 301.1 369.002 298.5C365.502 292.5 357.202 285 345.502 277.2C333.802 269.5 330.302 266.199 328.202 260.999C324.702 252.799 325.302 237.699 329.502 228.299C336.002 213.699 354.202 206.199 372.902 210.399Z"
                  />
                </path>
              </svg>
            )}

            {splatter.type === 1 && (
              /* TYPE 1: Elongated Sideway Spray Splash */
              <svg
                className="w-80 h-80 opacity-80 animate-fade-out"
                viewBox="0 0 764 713"
                xmlns="http://www.w3.org/2000/svg"
                onAnimationEnd={() => removeSplatter(splatter.id)}
              >
                {/* Additional heavy scatter dots */}
                <circle cx="200" cy="150" r="12" fill={splatter.color} />
                <circle cx="580" cy="450" r="16" fill={splatter.color} />
                <circle cx="150" cy="400" r="8" fill={splatter.color} />
                <circle cx="620" cy="180" r="10" fill={splatter.color} />
                <circle cx="450" cy="100" r="14" fill={splatter.color} />

                {/* Rotated main splatter structure */}
                <g transform="translate(100, 50) rotate(45 382 356)">
                  <path d="M117.503 2.2C126.703 6.9 122.303 14 110.403 14C103.503 14 99.5026 11.4 99.5026 6.9Z" fill={splatter.color} />
                  <path d="M144.003 6.20018C149.503 9.10018 150.003 14.1002 145.203 17.0002Z" fill={splatter.color} />
                  <path d="M763.503 17.1C763.503 24.3 747.303 45.5 742.403 44.8Z" fill={splatter.color} />
                  <path d="M372.902 210.401C383.302 212.801 396.402 220.201 405.902 229.101C415.802 238.401 419.502 244.701 419.502 252.501C419.502 260.501 415.902 266.601 405.302 276.201C400.402 280.701 395.102 286.501 393.702 289.001C391.202 293.201 391.002 294.501 390.502 308.801C390.102 322.501 389.802 324.301 388.102 325.601C385.502 327.401 381.202 327.401 377.502 325.501C374.202 323.801 374.002 323.401 372.502 311.501C371.702 305.601 370.502 301.101 369.002 298.501C365.502 292.501 357.202 285.001 345.502 277.201C333.802 269.501 330.302 266.201 328.202 261.001C324.702 252.801 325.302 237.701 329.502 228.301C336.002 213.701 354.202 206.201 372.902 210.401Z" fill={splatter.color}>
                    <animate
                      attributeName="d"
                      dur="1.5s"
                      fill="freeze"
                      to="M372.902 210.399C383.302 212.799 396.402 220.199 405.902 229.099C415.802 238.399 419.502 244.699 419.502 252.499C419.502 260.499 415.902 266.6 405.302 276.2C400.402 280.7 395.102 286.5 393.702 289C391.202 293.2 389.002 381.2 388.502 430.5C388.102 445.2 391.5 440.5 388.502 445.6C385.902 447.4 381.602 447.4 377.902 445.5C373.5 443.239 377 440.4 375.5 430.5C374.7 415.6 370.502 301.1 369.002 298.5C365.502 292.5 357.202 285 345.502 277.2C333.802 269.5 330.302 266.199 328.202 260.999C324.702 252.799 325.302 237.699 329.502 228.299C336.002 213.699 354.202 206.199 372.902 210.399Z"
                    />
                  </path>
                </g>
              </svg>
            )}

            {splatter.type === 2 && (
              /* TYPE 2: Exploding Circular Burst Splat with Multidirectional runs */
              <svg
                className="w-80 h-80 opacity-80 animate-fade-out"
                viewBox="0 0 764 713"
                xmlns="http://www.w3.org/2000/svg"
                onAnimationEnd={() => removeSplatter(splatter.id)}
              >
                {/* Outward flying particles */}
                <circle cx="382" cy="356" r="45" fill={splatter.color} />
                
                {/* Radial drop bursts with stretch animations */}
                <g transform="translate(0,0)">
                  {/* North Drip */}
                  <line x1="382" y1="311" x2="382" y2="250" stroke={splatter.color} strokeWidth="12" strokeLinecap="round">
                    <animate attributeName="y2" dur="1.2s" fill="freeze" to="190" />
                  </line>
                  <circle cx="382" cy="250" r="14" fill={splatter.color}>
                    <animate attributeName="cy" dur="1.2s" fill="freeze" to="180" />
                  </circle>

                  {/* South Drip */}
                  <line x1="382" y1="401" x2="382" y2="470" stroke={splatter.color} strokeWidth="16" strokeLinecap="round">
                    <animate attributeName="y2" dur="1.4s" fill="freeze" to="540" />
                  </line>
                  <circle cx="382" cy="470" r="18" fill={splatter.color}>
                    <animate attributeName="cy" dur="1.4s" fill="freeze" to="550" />
                  </circle>

                  {/* East Drip */}
                  <line x1="427" y1="356" x2="500" y2="356" stroke={splatter.color} strokeWidth="12" strokeLinecap="round">
                    <animate attributeName="x2" dur="1.3s" fill="freeze" to="560" />
                  </line>
                  <circle cx="500" cy="356" r="14" fill={splatter.color}>
                    <animate attributeName="cx" dur="1.3s" fill="freeze" to="570" />
                  </circle>

                  {/* West Drip */}
                  <line x1="337" y1="356" x2="270" y2="356" stroke={splatter.color} strokeWidth="10" strokeLinecap="round">
                    <animate attributeName="x2" dur="1.1s" fill="freeze" to="200" />
                  </line>
                  <circle cx="270" cy="356" r="12" fill={splatter.color}>
                    <animate attributeName="cx" dur="1.1s" fill="freeze" to="190" />
                  </circle>
                </g>

                {/* Multi splash spots */}
                <circle cx="310" cy="280" r="14" fill={splatter.color} />
                <circle cx="460" cy="290" r="12" fill={splatter.color} />
                <circle cx="450" cy="430" r="15" fill={splatter.color} />
                <circle cx="290" cy="420" r="10" fill={splatter.color} />
              </svg>
            )}
          </div>
        );
      })}

      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(0.9); }
          80% { opacity: 0.95; }
          100% { opacity: 0; transform: scale(1.08); }
        }
        .animate-fade-out {
          animation: fadeOut 3.2s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}

