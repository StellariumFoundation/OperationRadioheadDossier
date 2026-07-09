import React from 'react';
import { Globe } from 'lucide-react';
import { ActiveTab } from '../App';

interface HeaderProps {
  changeTab: (nextTab: ActiveTab) => void;
}

export default function Header({ changeTab }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900 py-1.5 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <button 
          onClick={() => changeTab('home')}
          className="flex items-center gap-2 text-left group"
          id="brand-logo"
        >
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse group-hover:bg-red-500 transition-colors" />
          <div className="flex flex-col">
            <span 
              className="font-display font-bold tracking-widest text-xs text-zinc-100"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              RADIOHEAD RECORD
            </span>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-950/30 border border-red-900/30 text-[9px] font-mono text-red-500 uppercase tracking-widest">
            <Globe size={10} className="animate-spin-slow" />
            8 Billion Node Transmission
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
          <span className="font-mono text-[10px] text-zinc-500 uppercase">Live Intel Feed</span>
        </div>

      </div>
    </header>
  );
}
