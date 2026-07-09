import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';

// Components
import InteractiveCanvas from './components/InteractiveCanvas';
import HomeSection from './components/HomeSection';
import PsychologyControlsSection from './components/PsychologyControlsSection';
import StellariumSection from './components/StellariumSection';
import CrisisSection from './components/CrisisSection';
import SupportSection from './components/SupportSection';
import ContactSection from './components/ContactSection';
import BackgroundAudioPlayer from './components/BackgroundAudioPlayer';
import BloodSplatterBackground from './components/BloodSplatterBackground';
import ScrollProgress from './components/ScrollProgress';

import Header from './components/Header';
import Navigation from './components/Navigation';

export type ActiveTab = 'home' | 'psychology_controls' | 'stellarium' | 'crisis' | 'support' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Track and persist the scroll state of each tab individually
  const scrollPositions = useRef<Record<ActiveTab, number>>({
    home: 0,
    psychology_controls: 0,
    stellarium: 0,
    crisis: 0,
    support: 0,
    contact: 0,
  });

  useEffect(() => {
    // Soft GSAP entrance transition when the site loads
    gsap.fromTo(
      '.exhibition-frame',
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  // Trigger advanced staggered glitch/blood-drip GSAP animations on tab change
  useEffect(() => {
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        '.exhibition-frame p, .exhibition-frame h1, .exhibition-frame h2, .exhibition-frame h3, .exhibition-frame h4, .exhibition-frame li, .exhibition-frame .font-mono, .exhibition-frame blockquote'
      );
      if (targets.length > 0) {
        gsap.killTweensOf(targets);
        
        // Initial state set: offset, skewer skew, and clip path slide down
        gsap.fromTo(
          targets,
          {
            opacity: 0,
            y: -15,
            skewX: -2,
            clipPath: 'inset(0% 0% 100% 0%)'
          },
          {
            opacity: 1,
            y: 0,
            skewX: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.75,
            stagger: 0.035, // sleek line-by-line reveal
            ease: 'power2.out',
            clearProps: 'all' // prevents visual artifacts on layout change
          }
        );
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Sync scroll position when activeTab changes (restoring its saved state)
  useEffect(() => {
    const savedPos = scrollPositions.current[activeTab] || 0;
    window.scrollTo(0, savedPos);
  }, [activeTab]);

  // Handle high-fidelity GSAP exit transition before switching tabs
  const changeTab = (nextTab: ActiveTab) => {
    if (nextTab === activeTab) return;

    // Play a loud square wave 808 style pop sound
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filterNode = ctx.createBiquadFilter();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.2);
        
        filterNode.type = 'lowpass';
        filterNode.frequency.setValueAtTime(300, ctx.currentTime);
        filterNode.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(1.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        
        osc.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch (e) {
      // Ignore if audio context is not supported or blocked
    }

    // Record the current scroll position before unmounting
    scrollPositions.current[activeTab] = window.scrollY;

    const targets = document.querySelectorAll(
      '.exhibition-frame p, .exhibition-frame h1, .exhibition-frame h2, .exhibition-frame h3, .exhibition-frame h4, .exhibition-frame li, .exhibition-frame .font-mono, .exhibition-frame blockquote, .exhibition-frame .grid, .exhibition-frame img, .exhibition-frame button'
    );

    if (targets.length > 0) {
      gsap.killTweensOf(targets);
      gsap.to(targets, {
        opacity: 0,
        y: 15,
        skewX: 1.5,
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 0.35,
        stagger: {
          each: 0.008,
          from: 'end'
        },
        ease: 'power2.in',
        onComplete: () => {
          setActiveTab(nextTab);
        }
      });
    } else {
      setActiveTab(nextTab);
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'psychology_controls':
        return <PsychologyControlsSection />;
      case 'stellarium':
        return <StellariumSection />;
      case 'crisis':
        return <CrisisSection />;
      case 'support':
        return <SupportSection />;
      case 'contact':
        return <ContactSection />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans relative overflow-x-hidden selection:bg-red-950 selection:text-white pb-32">
      
      {/* 1. Falling Blood Rain Background */}
      <div className="fixed inset-0 w-full h-full z-10 pointer-events-none opacity-75">
        <InteractiveCanvas />
      </div>

      {/* 2. Glowing Vignette Shadow Overlay (Keeps text content beautifully readable) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(9,9,11,0.96)_100%)] z-15 pointer-events-none" />

      {/* 3. Global HUD Top Bar */}
      <Header changeTab={changeTab} />

      {/* 4. Main Body Page Space */}
      <main className="relative z-20 pt-20 exhibition-frame">
        <AnimatePresence mode="wait">
          {renderActiveSection()}
        </AnimatePresence>
      </main>

      <Navigation activeTab={activeTab} changeTab={changeTab} />

      <BackgroundAudioPlayer />
      <BloodSplatterBackground />
      <ScrollProgress activeTab={activeTab} />

    </div>
  );
}
