import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface ScrollProgressProps {
  activeTab: string;
}

export default function ScrollProgress({ activeTab }: ScrollProgressProps) {
  // Use Framer Motion's springs for butter-smooth progress transitions
  const scaleY = useSpring(0, {
    damping: 35,
    stiffness: 250,
    restDelta: 0.001
  });
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollableHeight = docHeight - winHeight;

      // Only show and update progress if the tab content is actually scrollable
      if (scrollableHeight <= 20) {
        setIsScrollable(false);
        scaleY.set(0);
      } else {
        setIsScrollable(true);
        const currentProgress = scrollTop / scrollableHeight;
        scaleY.set(Math.min(1, Math.max(0, currentProgress)));
      }
    };

    // Delay calculation slightly to allow GSAP tab transition and DOM re-layout to complete
    const timer = setTimeout(() => {
      calculateProgress();
    }, 180);

    window.addEventListener('scroll', calculateProgress, { passive: true });
    window.addEventListener('resize', calculateProgress);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [activeTab, scaleY]);

  if (!isScrollable) return null;

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 w-[2px] bg-zinc-950/20 z-50 pointer-events-none"
      id="scroll-progress-container"
    >
      <motion.div 
        className="w-full bg-red-600 origin-top h-full shadow-[0_0_6px_rgba(239,68,68,0.8)]"
        style={{ scaleY }}
        id="scroll-progress-bar"
      />
    </div>
  );
}
