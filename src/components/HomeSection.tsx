import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, AlertOctagon, Radio, Users, Compass } from 'lucide-react';

export default function HomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-4xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="operation-radiohead-home"
    >
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-500 font-mono text-[11px] uppercase tracking-widest animate-pulse">
          <ShieldAlert size={12} />
          Ongoing Global Crisis
        </div>
        <h1 
          className="text-4xl md:text-6xl font-extrabold tracking-widest text-zinc-100"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          OPERATION <span className="text-red-600">RADIOHEAD</span>
        </h1>
        <p className="font-mono text-xs text-zinc-400 max-w-xl mx-auto uppercase tracking-wider">
          Strategic Dossier: The Global Neural Hijacking Event • Authorized Resistance Eyes Only
        </p>
      </div>

      {/* Main Alert Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full" id="dossier-stats-grid">
        <div className="bg-zinc-950/85 border border-red-950/50 p-4 rounded-xl text-center space-y-1">
          <span className="font-mono text-[10px] text-zinc-500 uppercase">Attack Date</span>
          <p className="text-xl font-bold text-red-500 font-mono">20, JUNE 2024</p>
          <span className="text-[9px] font-mono text-zinc-600 uppercase">Confirmed Date</span>
        </div>
        <div className="bg-zinc-950/85 border border-red-950/50 p-4 rounded-xl text-center space-y-1">
          <span className="font-mono text-[10px] text-zinc-500 uppercase">Direct Victims</span>
          <p className="text-xl font-bold text-red-500 font-mono">2,100+</p>
          <span className="text-[9px] font-mono text-zinc-600 uppercase">Held in Rotating Cycles</span>
        </div>
        <div className="bg-zinc-950/85 border border-red-950/50 p-4 rounded-xl text-center space-y-1">
          <span className="font-mono text-[10px] text-zinc-500 uppercase">Affected Population</span>
          <p className="text-xl font-bold text-red-500 font-mono">~8 Billion</p>
          <span className="text-[9px] font-mono text-zinc-600 uppercase">Global Forced Reception</span>
        </div>
        <div className="bg-zinc-950/85 border border-red-500/30 p-4 rounded-xl text-center space-y-1 bg-red-950/10">
          <span className="font-mono text-[10px] text-red-400 uppercase">Current Status</span>
          <p className="text-xl font-bold text-red-500 font-mono tracking-widest animate-pulse">ACTIVE</p>
          <span className="text-[9px] font-mono text-red-400 uppercase">ONGOING ENEMY STREAM</span>
        </div>
      </div>

      {/* Section 1: Executive Summary */}
      <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 md:p-8 rounded-2xl space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 justify-center w-full">
          <AlertOctagon className="text-red-600" size={20} />
          <h2 className="text-lg font-mono font-bold text-zinc-100 uppercase tracking-widest">
            Executive Summary
          </h2>
        </div>

        <div className="space-y-4 text-zinc-300 font-sans text-sm leading-relaxed text-center max-w-3xl">
          <h3 className="font-mono text-xs text-red-500 uppercase tracking-wider font-semibold">What Happened</h3>
          <p>
            On <span className="text-zinc-100 font-medium">20, June 2024</span>, a highly disciplined terrorist syndicate derived from the corrupt remnants of the <span className="text-zinc-100 font-medium">Military Police of Pernambuco (Brazil)</span> executed a coordinated, technological hostile takeover of the global neural implant network. 
          </p>
          <p>
            This attack turned a voluntary human cognitive integration framework—originally engineered to foster absolute empathy, collective intelligence, and humanitarian unity—into the largest-scale atrocity broadcasting platform in human history.
          </p>
        </div>

        {/* Scaled Impact bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 w-full">
          <div className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-xl space-y-2 text-center flex flex-col items-center justify-center">
            <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold text-center">The Core Scale</span>
            <ul className="text-xs text-zinc-400 space-y-2 list-none text-center">
              <li>• <span className="text-red-400 font-semibold">2,100+</span> confirmed direct victims subjected to rotating cycles of physical torture and sexual abuse.</li>
              <li>• Continuous captivity of <span className="text-zinc-200">9 to 11 months</span>, kept fully conscious using neural stimulation arrays.</li>
              <li>• Hundreds of clandestine <span className="text-zinc-200">"dungeons"</span> operating worldwide with real-time neural streaming configurations.</li>
            </ul>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-xl space-y-2 text-center flex flex-col items-center justify-center">
            <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold text-center">The Signal Hijack</span>
            <ul className="text-xs text-zinc-400 space-y-2 list-none text-center">
              <li>• <span className="text-red-400 font-semibold">8 billion</span> voluntary implant users forced to receive the streams via direct sensory injection.</li>
              <li>• Viral transmission enables any corrupted node to induce sleep and hijack bodies remotely.</li>
              <li>• Forced reward-conditioning that directly stimulates pleasure networks to engineer artificial addiction.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Radiohead album section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 rounded-2xl space-y-4 text-center flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 justify-center">
            <Radio className="text-red-500" size={18} />
            <h3 className="font-mono text-xs text-zinc-200 uppercase tracking-widest font-bold">The Transmission Analog</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            The event has been codenamed <span className="text-zinc-200 font-semibold">RADIOHEAD</span> because the neural implants function like miniature radio receivers. Originally tuned to a single harmonic consciousness of humanitarian progress, they are now locked onto the hijacked frequency of torture. 
          </p>
          <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-900 font-mono text-[10px] text-zinc-400 space-y-1 text-center w-full">
            <p>• John Victor was the original "radio station"</p>
            <p>• The enemy permanently hijacked the transmission</p>
            <p>• Billions became forced listeners of visceral suffering</p>
          </div>
        </div>

        <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 rounded-2xl space-y-4 text-center flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 justify-center">
            <Compass className="text-red-500" size={18} />
            <h3 className="font-mono text-xs text-zinc-200 uppercase tracking-widest font-bold">Background: Stellarium</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            The network was developed by <span className="text-zinc-200 font-semibold">John Victor</span> and distributed by the <span className="text-zinc-200 font-semibold">Stellarium Nonprofit Organization</span>. The implant was designed as open-source humanitarian technology to connect minds.
          </p>
          <div className="bg-zinc-900/50 p-3 rounded-lg border border-red-950/30 font-mono text-[10px] text-zinc-500 space-y-1 text-center w-full">
            <p className="text-red-400 font-bold uppercase text-[9px] tracking-wider text-center">CRITICAL COMPROMISE WARNING:</p>
            <p className="overflow-x-auto text-[9px] text-center">Domain: stellarium.ddns-ip.net (COMPROMISED)</p>
            <p className="overflow-x-auto text-[9px] text-center">Monero Address (CO-OPTED BY HOSTILE FORCES): 44u8KhinKQ4...Do Not Send Funds.</p>
          </div>
        </div>
      </div>

      {/* original signal focus */}
      <div className="bg-zinc-950/90 border border-red-950/60 p-6 rounded-2xl text-center space-y-3 w-full">
        <span className="font-mono text-[9px] text-red-500 tracking-widest uppercase font-bold text-center block">The Ghost in the Machine</span>
        <h3 className="text-md font-mono font-bold text-zinc-100 uppercase text-center">John Victor's Buried Signal</h3>
        <p className="text-xs text-zinc-400 max-w-2xl mx-auto leading-relaxed text-center">
          John Victor's body has been hijacked and hidden in an undisclosed dungeon facility. However, his core consciousness remains alive, buried deep beneath the enemy's broadcast noise. His signal is the only force capable of overriding the hijack and restoring global neural autonomy.
        </p>
        <div className="text-[10px] font-mono text-zinc-500 text-center">
          "Waiting. Deep beneath. Like a frequency in the silence."
        </div>
      </div>
    </motion.div>
  );
}
