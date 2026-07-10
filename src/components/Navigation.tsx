import React from 'react';
import { motion } from 'motion/react';
import { Home, Brain, Skull, Heart, Terminal, Sparkles } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type ActiveTab = 'home' | 'psychology_controls' | 'stellarium' | 'crisis' | 'support' | 'contact';

const PATH_TO_TAB: Record<string, ActiveTab> = {
  '/home': 'home',
  '/system': 'psychology_controls',
  '/stellarium': 'stellarium',
  '/crisis': 'crisis',
  '/support': 'support',
  '/contact': 'contact',
};

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab: ActiveTab = PATH_TO_TAB[location.pathname] || 'home';
  return (
    <nav 
      className="fixed bottom-0 left-0 w-full z-40 bg-zinc-950/90 backdrop-blur-lg border-t border-red-950/40 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-2xl shadow-black/100"
      id="hud-bottom-navbar"
    >
      <div className="max-w-5xl mx-auto px-2 grid grid-cols-6 gap-1 md:flex md:justify-center md:gap-8 lg:gap-12 text-center">
        
        {/* Home Tab */}
        <motion.button
          onClick={() => navigate('/home')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-home"
          title="Dossier Overview"
        >
          <Home size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Home</span>
        </motion.button>

        {/* Psychology & Controls Tab */}
        <motion.button
          onClick={() => navigate('/system')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'psychology_controls'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-psychology-controls"
          title="Neural Conditioning & Systems Controls"
        >
          <Brain size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Systems</span>
        </motion.button>

        {/* Stellarium Tab */}
        <motion.button
          onClick={() => navigate('/stellarium')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'stellarium'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-stellarium"
          title="The Stellarium Vision & Products"
        >
          <Sparkles size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Stellarium</span>
        </motion.button>

        {/* Crisis Tab */}
        <motion.button
          onClick={() => navigate('/crisis')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'crisis'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-crisis"
          title="Atrocity Dungeons & Victims"
        >
          <Skull size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Crisis</span>
        </motion.button>

        {/* Support Tab */}
        <motion.button
          onClick={() => navigate('/support')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'support'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-support"
          title="Grounding & Sanctuaries"
        >
          <Heart size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Support</span>
        </motion.button>

        {/* Contact Tab */}
        <motion.button
          onClick={() => navigate('/contact')}
          whileHover={{
            skewX: [-3, 3, -1, 1, 0],
            scale: 1.03,
            color: '#ef4444'
          }}
          transition={{
            skewX: { duration: 0.25, ease: 'easeInOut' },
            color: { duration: 0.15 },
            scale: { duration: 0.15 }
          }}
          className={`flex flex-col items-center justify-center py-1 md:w-24 rounded-xl transition-all cursor-pointer ${
            activeTab === 'contact'
              ? 'text-red-500 bg-red-950/15 border border-red-900/20'
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
          id="nav-tab-contact"
          title="Encrypted Reporting"
        >
          <Terminal size={16} />
          <span className="font-mono text-[9px] tracking-wider uppercase mt-1">Contact</span>
        </motion.button>

      </div>
    </nav>
  );
}
