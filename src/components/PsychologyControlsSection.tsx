import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Flame, 
  Cpu, 
  Wifi, 
  ShieldAlert, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  description: string;
  specs: string[];
}

export default function PsychologyControlsSection() {
  const [subTab, setSubTab] = useState<'psychology' | 'controls'>('psychology');
  const [activeTechId, setActiveTechId] = useState<string>('jammer');

  const counterTechs: TechItem[] = [
    {
      id: 'jammer',
      name: 'Guardian Angel Home Jammer',
      status: 'ACTIVE DISTRIBUTION',
      statusColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-900/50',
      description: 'Creates a localized electromagnetic dead zone that decouples implants from the global broadcast. Protects individuals and small family units within residential structures.',
      specs: [
        'Effective Range: 50 – 200 meters spherical radius',
        'Payload: Blocks high-frequency neurological signal injection',
        'Requirements: Standard 12V auxiliary power bank or fuel cells',
        'Deployment: Place centrally inside structural walls'
      ]
    },
    {
      id: 'emp',
      name: 'AEGIS Precision EMP Device',
      status: 'RESTRICTED COMBAT USE',
      statusColor: 'text-amber-400 bg-amber-950/45 border-amber-900/50',
      description: 'A directed-energy weapon utilized in tactical operations to permanently burn out and disable targeted neural implants. Designed to rescue victims held in active physical transit or dungeons.',
      specs: [
        'Range: 20 meters directional conic dispersion',
        'Deactivates: Instantly destroys the receiver layer of implants',
        'Safety: Highly risky; triggers high-temperature neural shock',
        'Battery: High-density graphite cell (3 discharge limit)'
      ]
    },
    {
      id: 'array',
      name: 'Signal Amplification Array',
      status: 'THEORETICAL MODEL',
      statusColor: 'text-red-400 bg-red-950/40 border-red-900/50',
      description: 'A theoretical global mega-antenna constructed using multi-point server towers. The array could forcefully amplify and broadcast John Victor\'s suppressed original signal, instantly deprogramming and overriding the hijack frequency.',
      specs: [
        'Requires: John Victor\'s physical rescue from dungeons',
        'Power Draw: Estimated 120 Gigawatts (requires main grid lock)',
        'Efficacy: Overrides all active Pernambuco syndicate streams',
        'Project Status: Blueprints distributed across safe cells'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-4xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="psychology-controls-merged-section"
    >
      {/* Title Header */}
      <div className="text-center space-y-3 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-[10px] uppercase tracking-widest justify-center">
          <Brain size={12} />
          Systems, Conditioning & Intercepts
        </div>
        <h2 
          className="text-3xl md:text-5xl font-bold tracking-widest text-zinc-100 uppercase text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Psychology <span className="text-red-600">&</span> Systems
        </h2>
        <p className="font-mono text-xs text-zinc-400 max-w-xl mx-auto text-center">
          The tactical convergence of neural hijack technology, psychological conditioning, and resistance defensive operations.
        </p>

        {/* Sub-navigation selector with design pairing */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex p-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-xl shadow-lg">
            <button
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(20);
                setSubTab('psychology');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                subTab === 'psychology'
                  ? 'bg-red-950/30 text-red-400 border border-red-900/30 shadow'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Brain size={14} />
              Neural Conditioning
            </button>
            <button
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(20);
                setSubTab('controls');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                subTab === 'controls'
                  ? 'bg-red-950/30 text-red-400 border border-red-900/30 shadow'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Cpu size={14} />
              Systems & Hardware
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {subTab === 'psychology' ? (
          <motion.div
            key="psychology-subtab"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 w-full"
          >
            {/* Main Psychological Mechanism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 rounded-2xl space-y-4 shadow-lg shadow-black/30 text-center flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 justify-center w-full">
                  <Brain className="text-red-500" size={18} />
                  <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-widest text-center">
                    Reward Conditioning
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed text-center">
                  The enemy does not merely broadcast physical atrocities; they have injected <span className="text-zinc-100 font-semibold">synthetic neurological triggers</span> into the signal. The atrocity stream is synchronized with micro-jolts that stimulate the brain's primary dopamine and pleasure centers. 
                </p>
                <div className="bg-red-950/15 border border-red-900/30 p-3.5 rounded-xl space-y-2 text-center w-full">
                  <p className="font-mono text-[10px] text-red-400 font-semibold uppercase text-center">Forced Addiction Mechanism:</p>
                  <p className="text-xs text-zinc-400 text-center">
                    By pairing neural footage of extreme violence with absolute, synthetic pleasure-center excitation, the enemy creates an artificial chemical addiction to sadistic suffering within the 8 billion host minds.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 rounded-2xl space-y-4 shadow-lg shadow-black/30 text-center flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 justify-center w-full">
                  <Flame className="text-red-500" size={18} />
                  <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-widest text-center">
                    Malignant Narcissistic Hivemind
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-semibold text-red-400 text-center">
                  It is a malignant narcissistic hivemind—people feel the same feelings, have the same options, and are willing to do the same things as the rapists, torturers, and thieves because of the dungeons streaming on their heads.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed text-center">
                  Due to active neural dungeons streaming directly on their heads, individuals are stripped of their cognitive sovereignty. Fused into a unified matrix, the compromised population feels and executes identical sadistic impulses synchronized with the syndicate's core perpetrators.
                </p>
                <div className="font-mono text-[10px] space-y-2 text-zinc-500 pt-1 text-center w-full">
                  <div className="flex gap-2 justify-center">
                    <span className="text-red-500 font-bold">[1]</span>
                    <span>Synchronized emotional waves aligned with the primary perpetrator cells.</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <span className="text-red-500 font-bold">[2]</span>
                    <span>Homogenized action selection: willing participation in torture, rape, and abduction.</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <span className="text-red-500 font-bold">[3]</span>
                    <span>Total erasure of individual conscience in favor of the syndicate stream's sadistic agenda.</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ) : (
          <motion.div
            key="controls-subtab"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 w-full"
          >
            {/* Hijack Mechanism Block */}
            <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 md:p-8 rounded-2xl space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
              <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 justify-center w-full">
                <Wifi className="text-red-500 animate-pulse" size={20} />
                <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-widest text-center">
                  The Neural Hijacking Vector (Specs)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                <div className="md:col-span-4 bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-3 text-center">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block text-center">Network Core Features</span>
                  <div className="space-y-2 font-mono text-[11px] text-zinc-400 text-center w-full">
                    <div className="p-2 bg-zinc-950/50 border border-zinc-900 rounded text-center">
                      <span className="text-red-500 font-bold block text-center">1. SIGNAL OVERRIDE</span>
                      Broadcasts malicious frequencies over John Victor's original central server node.
                    </div>
                    <div className="p-2 bg-zinc-950/50 border border-zinc-900 rounded text-center">
                      <span className="text-red-500 font-bold block text-center">2. COMMAND INJECTION</span>
                      Enables remote sleep induction, sensory manipulation, pain triggers, and complete motor-skill theft.
                    </div>
                    <div className="p-2 bg-zinc-950/50 border border-zinc-900 rounded text-center">
                      <span className="text-red-500 font-bold block text-center">3. VIRAL SPREAD</span>
                      Any compromised user can transmit and infect nearby node interfaces.
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4 text-center flex flex-col items-center justify-center">
                  <h4 className="font-sans text-sm font-semibold text-zinc-200 text-center">How the Hijack Controls Human Bodies</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed text-center">
                    The original Stellarium implant was developed by John Victor to support sensory sharing and emotional integration. Once the Pernambuco Syndicate physically abducted John, they forced a firmware update across all connected minds. 
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed text-center">
                    This malicious protocol allows the syndicate to issue remote motor override triggers. When active, a victim's voluntary motor control is entirely severed; they remain awake inside their minds, acting as mute spectators while the enemy operates their physical bodies like puppets.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 bg-red-950/10 border border-red-900/30 p-4 rounded-xl text-center justify-center">
                    <AlertCircle size={18} className="text-red-500 shrink-0" />
                    <div className="space-y-1 text-center">
                      <span className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider text-center block">Security Warning</span>
                      <p className="text-xs text-zinc-400 text-center">
                        Do not attempt to establish direct diagnostic connections to any active implant receiver. The incoming broadcast contains high-intensity neural shocks designed to fry monitoring hardware and cause cerebral hemorrhage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Technologies Section */}
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-2 justify-center w-full">
                <Sparkles className="text-red-500" size={16} />
                <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold text-center">
                  Resistance Tech Modules (Select to Inspect)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {counterTechs.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => {
                      if (navigator.vibrate) navigator.vibrate(15);
                      setActiveTechId(tech.id);
                    }}
                    className={`p-4 rounded-2xl border transition-all flex flex-col items-center justify-center text-center ${
                      activeTechId === tech.id
                        ? 'bg-zinc-900/80 border-red-800 shadow-xl'
                        : 'bg-zinc-950/80 border-zinc-900 hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono border text-center ${tech.statusColor}`}>
                        {tech.status}
                      </span>
                      <span className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-wide text-center">
                        {tech.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detailed Spec Display with animations */}
              <AnimatePresence mode="wait">
                {counterTechs.map((tech) => tech.id === activeTechId && (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-zinc-950/90 border border-zinc-900 p-6 rounded-2xl space-y-4 shadow-xl text-center flex flex-col items-center w-full"
                  >
                    <div className="space-y-1 text-center">
                      <span className="font-mono text-[9px] text-red-500 uppercase text-center block">Interactive Device Blueprint</span>
                      <h4 className="text-md font-mono font-bold text-zinc-100 uppercase text-center">{tech.name}</h4>
                    </div>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-xl">
                      {tech.description}
                    </p>

                    <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-850 space-y-2 text-center w-full max-w-2xl mx-auto">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-center block">Technical Specifications:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                        {tech.specs.map((spec, idx) => (
                          <div key={idx} className="flex gap-2 text-xs text-zinc-400 items-start justify-center text-center">
                            <span className="text-red-500 font-mono text-center">•</span>
                            <span className="text-center">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
