import React, { useEffect, useRef } from 'react';

interface BloodDrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  width: number;
  opacity: number;
  specular: boolean;
}

interface DripStream {
  x: number;
  length: number;
  maxLength: number;
  speed: number;
  bulgeRadius: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Trackers for blood droplets and top dripping lines
    const drops: BloodDrop[] = [];
    const streams: DripStream[] = [];
    const maxDrops = 140;
    const maxStreams = 45;

    // Initialize drops
    for (let i = 0; i < maxDrops; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        speed: 1.2 + Math.random() * 3.8,
        length: 10 + Math.random() * 28,
        width: 1.8 + Math.random() * 2.4,
        opacity: 0.35 + Math.random() * 0.55,
        specular: Math.random() > 0.3,
      });
    }

    // Initialize top edge drips (creeping down)
    for (let i = 0; i < maxStreams; i++) {
      streams.push({
        x: (i / maxStreams) * width + (Math.random() * 16 - 8),
        length: Math.random() * 20,
        maxLength: 40 + Math.random() * 150,
        speed: 0.04 + Math.random() * 0.12,
        bulgeRadius: 2.2 + Math.random() * 2.8,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      // Clear canvas slightly transparently to create motion trails (adds viscous trailing look)
      ctx.fillStyle = 'rgba(9, 9, 11, 0.18)'; // matches bg-zinc-950 exactly
      ctx.fillRect(0, 0, width, height);

      // 1. Draw static background blood wash (subtle vignette of crimson red at the top edge)
      const topGrad = ctx.createLinearGradient(0, 0, 0, 180);
      topGrad.addColorStop(0, 'rgba(100, 0, 0, 0.32)');
      topGrad.addColorStop(1, 'rgba(100, 0, 0, 0.0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, 180);

      // 2. Draw creeping streams from the top ceiling of the window
      streams.forEach((stream) => {
        // Slow creep downward
        stream.length += stream.speed;
        if (stream.length > stream.maxLength) {
          // Release a fresh drop from the tip!
          drops.push({
            x: stream.x,
            y: stream.length,
            speed: 2.2 + Math.random() * 2.8,
            length: 14 + Math.random() * 12,
            width: stream.bulgeRadius * 0.85,
            opacity: 0.85,
            specular: true,
          });
          // Reset the drip line
          stream.length = Math.random() * 15;
          stream.maxLength = 40 + Math.random() * 150;
        }

        // Draw the main hanging drip line
        ctx.beginPath();
        ctx.moveTo(stream.x, 0);
        ctx.quadraticCurveTo(
          stream.x + (Math.sin(stream.length * 0.05) * 3),
          stream.length / 2,
          stream.x,
          stream.length
        );
        ctx.lineWidth = stream.bulgeRadius * 0.55;
        ctx.strokeStyle = '#3d0000'; // deep dark blood
        ctx.stroke();

        // Draw the dripping head bulge
        ctx.beginPath();
        ctx.arc(stream.x, stream.length, stream.bulgeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#5c0000'; // viscous bulb
        ctx.fill();

        // Add specular glint to the bulb
        ctx.beginPath();
        ctx.arc(stream.x - stream.bulgeRadius * 0.3, stream.length - stream.bulgeRadius * 0.3, stream.bulgeRadius * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.fill();
      });

      // 3. Draw falling droplets
      drops.forEach((drop) => {
        drop.y += drop.speed;

        // If off screen, wrap back to the top
        if (drop.y > height) {
          drop.y = Math.random() * -120;
          drop.x = Math.random() * width;
          drop.speed = 1.2 + Math.random() * 3.8;
        }

        // Create radial gradient for realistic blood drop thickness
        const radGrad = ctx.createRadialGradient(
          drop.x,
          drop.y,
          0,
          drop.x,
          drop.y,
          drop.width
        );
        radGrad.addColorStop(0, `rgba(160, 4, 4, ${drop.opacity})`);
        radGrad.addColorStop(0.5, `rgba(90, 2, 2, ${drop.opacity * 0.95})`);
        radGrad.addColorStop(1, `rgba(32, 0, 0, ${drop.opacity * 0.85})`);

        // Draw teardrop shape path
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.width, 0, Math.PI); // Rounded base
        ctx.lineTo(drop.x, drop.y - drop.length); // Tapering upward tip
        ctx.closePath();
        
        ctx.fillStyle = radGrad;
        ctx.fill();

        // High gloss specular highlight reflection
        if (drop.specular) {
          ctx.beginPath();
          ctx.ellipse(
            drop.x - drop.width * 0.26,
            drop.y - drop.width * 0.22,
            drop.width * 0.14,
            drop.width * 0.38,
            Math.PI / 6,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.24)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.8 }}
    />
  );
}
