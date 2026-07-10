import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  Bot, 
  Cpu, 
  GraduationCap, 
  Globe, 
  TrendingUp, 
  UserCheck, 
  Home, 
  Heart, 
  ArrowUpRight, 
  Award, 
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

interface ProductInfo {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  specs: string[];
}

export default function StellariumSection() {
  const [activeTab, setActiveTab] = useState<'vision' | 'products' | 'architect' | 'pledge'>('vision');
  const [selectedProductId, setSelectedProductId] = useState<string>('company');
  const [copiedXmr, setCopiedXmr] = useState(false);

  const xmrAddress = "8B3GBqcKFXfYsw6E5dPcDf6o6jVUMDwRMGf7ZdvqioKWTmiQDQt1WyqjFX1D3nhdjvS8jt8H6VKSL3giH4DjaQRg5vNGx6d";

  const products: ProductInfo[] = [
    {
      id: 'company',
      name: 'Water Company',
      tagline: 'Autonomous AI Workforces',
      icon: <Briefcase size={20} className="text-red-400" />,
      description: 'A revolutionary platform for building and managing fully autonomous digital companies. Entire corporate structures and hierarchies are run by specialized AI teams, delivering 24/7 productivity and unmatched operational efficiency.',
      specs: [
        'Hierarchical AI architecture: CEO, board, and custom roles',
        'Customizable RAG personal & team knowledge bases',
        'Integration framework with RESTful APIs',
        'Direct strategic reporting to human user'
      ]
    },
    {
      id: 'ai',
      name: 'Water AI',
      tagline: 'The Brain & AI Supermodel',
      icon: <Bot size={20} className="text-rose-400" />,
      description: 'Conceived as a practical form of Artificial General Intelligence (AGI) to serve as a universal force-multiplier. It intelligently aggregates and routes user instructions to the world\'s best specialized models to perform actual digital labor.',
      specs: [
        'Dynamic multi-model orchestration and task splitting',
        'Deep action execution engine (code, designs, contracts)',
        'RAG-enabled memory-first indexing and graphs',
        'Runs client-side via WebAssembly/Python or cloud-side'
      ]
    },
    {
      id: 'robotics',
      name: 'Water Robotics',
      tagline: 'VR-Teleoperated Humanoids',
      icon: <Cpu size={20} className="text-amber-400" />,
      description: 'A physical labor solution connecting workers in labor-rich areas to labor-scarce markets via virtual reality. Operators use off-the-shelf headsets (e.g. Meta Quest 3, Apple Vision Pro) to pilot humanoid robots remotely in real-time.',
      specs: [
        'Bipedal frame designed for construction, mining, and assembly',
        'High-definition first-person stereo video streaming',
        'Haptic feedback and intuitive bimanual gestures',
        'Under 20ms remote control latency override'
      ]
    },
    {
      id: 'classroom',
      name: 'Water Classroom',
      tagline: 'AI-Powered Digital School',
      icon: <GraduationCap size={20} className="text-teal-400" />,
      description: 'Democratizes elite education with an interactive, AI-driven learning space. Serves as a complete personalized school from K-12 up through undergraduate levels, complete with RAG-based AI tutors and verified exams.',
      specs: [
        'AI-tailored curriculum adapted to individual paces',
        '24/7 active tutoring & gamified Duolingo-style achievements',
        'Vision-Language Model (VLM) camera-based proctoring',
        'Unified administrative dashboards for parents/educators'
      ]
    },
    {
      id: 'economics',
      name: 'Water Economics',
      tagline: 'Macro Simulation Engine',
      icon: <TrendingUp size={20} className="text-emerald-400" />,
      description: 'An AI-powered foundational model that synthesizes real-world data to validate economic doctrines, predict market transitions, and simulate policy changes (such as interest rate or tax code shifts) for optimal stability.',
      specs: [
        'Empirical theory validation (Keynesian vs Monetarist)',
        'Multi-variable policy ripple effect graphing',
        'Real-time data feeds and unified macroeconomic frameworks',
        'Engineered to guide nations toward post-scarcity'
      ]
    },
    {
      id: 'fluid',
      name: 'Water AI Fluid',
      tagline: 'Decentralized Peer-to-Peer Compute',
      icon: <Layers size={20} className="text-blue-400" />,
      description: 'A BitTorrent-inspired decentralized compute network. Users share idle processing power to execute delay-tolerant AI agent inferences in exchange for network priorities, dramatically lowering computing barrier costs.',
      specs: [
        'BitTorrent-inspired seeding priority mechanism',
        'Splits complex AI inference jobs across node meshes',
        'Drastically reduces server overhead hosting expenses',
        'Optimized for non-time-critical agent processes'
      ]
    },
    {
      id: 'coach',
      name: 'Water Coach',
      tagline: 'Personal AI Companion & Mentor',
      icon: <Award size={20} className="text-purple-400" />,
      description: 'An AI-powered personal coach providing real-time, on-device guidance to help users focus, study, and execute complex business goals effectively with speech-to-text integration.',
      specs: [
        'Real-time screen tracking and proactive context tips',
        'Voice-driven ambient conversation by default',
        'Syncs seamlessly across iOS, Android, and Desktop',
        'Curates focus cycles & Duolingo-style tracking'
      ]
    },
    {
      id: 'gov',
      name: 'Water Gov',
      tagline: 'E-Governance Civic Super-App',
      icon: <Globe size={20} className="text-indigo-400" />,
      description: 'A civic super-app centralizing secure citizen-government interaction. Features automated form-filling, AI triage routing, and fast-track processing to completely eliminate bureaucratic friction.',
      specs: [
        'Conversational interface for non-technical citizens',
        'Automated official PDF & document auto-filling',
        'Intelligent risk triage before human officer review',
        'End-to-end encrypted personal citizen document vaults'
      ]
    }
  ];

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(xmrAddress);
    } catch {
      return;
    }
    setCopiedXmr(true);
    setTimeout(() => setCopiedXmr(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-5xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="stellarium-master-section"
    >
      {/* Title Header */}
      <div className="text-center space-y-3 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-900/50 text-indigo-400 font-mono text-[10px] uppercase tracking-widest justify-center">
          <Sparkles size={12} className="text-yellow-400" />
          The Stellarium Covenant • Authentic Vision
        </div>
        <h2 
          className="text-3xl md:text-5xl font-bold tracking-widest text-zinc-100 uppercase text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          The <span className="text-red-500">Stellarium</span> Blueprint
        </h2>
        <p className="font-mono text-xs text-zinc-400 max-w-2xl mx-auto text-center">
          "The Actionable User Guide on Everything It Is and Everything We Can Do." Exploring John Victor's structural frameworks to usher in global prosperity.
        </p>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-4">
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-red-950/20 text-red-400 border-red-900/50'
                : 'bg-zinc-950/50 text-zinc-400 border-zinc-900 hover:border-zinc-800'
            }`}
          >
            <BookOpen size={12} className="inline mr-1.5" />
            The Vision & Ethos
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
              activeTab === 'products'
                ? 'bg-red-950/20 text-red-400 border-red-900/50'
                : 'bg-zinc-950/50 text-zinc-400 border-zinc-900 hover:border-zinc-800'
            }`}
          >
            <Bot size={12} className="inline mr-1.5" />
            Water Suite of AI
          </button>
          <button
            onClick={() => setActiveTab('pledge')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
              activeTab === 'pledge'
                ? 'bg-red-950/20 text-red-400 border-red-900/50'
                : 'bg-zinc-950/50 text-zinc-400 border-zinc-900 hover:border-zinc-800'
            }`}
          >
            <Home size={12} className="inline mr-1.5" />
            Housing Pledge (EHP)
          </button>
          <button
            onClick={() => setActiveTab('architect')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
              activeTab === 'architect'
                ? 'bg-red-950/20 text-red-400 border-red-900/50'
                : 'bg-zinc-950/50 text-zinc-400 border-zinc-900 hover:border-zinc-800'
            }`}
          >
            <UserCheck size={12} className="inline mr-1.5" />
            The Architect: John Victor
          </button>
        </div>
      </div>

      {/* Render Active Subsection */}
      <AnimatePresence mode="wait">
        
        {/* VISION & ETHOS SUBTAB */}
        {activeTab === 'vision' && (
          <motion.div
            key="stellarium-vision"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6 w-full"
          >
            {/* The Ultimate Law Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-zinc-950 via-zinc-950 to-red-950/15 border border-zinc-900 p-6 md:p-8 rounded-2xl shadow-xl space-y-4 text-center flex flex-col items-center">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-red-900/5 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="space-y-2 text-center">
                <span className="font-mono text-[9px] text-red-500 uppercase tracking-widest block font-bold text-center">The Core Operational Law</span>
                <h3 className="text-2xl font-bold font-mono tracking-wide text-zinc-100 uppercase text-center">
                  "Do Good, Make Money, Have Fun."
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl text-center">
                The official guiding blueprint co-founded by John Victor. It dictates that wealth is the single most important metric to generate, but it must walk hand-in-hand with absolute peacemaking, benevolence, and collaborative synergy. Here, doing good, unlocking liquidity, and enjoying the beauty of creation weave into a single, vibrant thread.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-900 w-full text-center">
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-1.5 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Do Good
                  </div>
                  <p className="text-[11px] text-zinc-400 text-center">
                    A commitment to benevolence and fairness. Universal access to housing, healthcare, and education is not a privilege, but the baseline foundation of a strong society.
                  </p>
                </div>

                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-1.5 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Make Money
                  </div>
                  <p className="text-[11px] text-zinc-400 text-center">
                    Wealth is generated through service, specialized engineering, and joint AI ventures. We back bold risk-taking builders over stagnant corporate gatekeepers.
                  </p>
                </div>

                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-1.5 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    Have Fun
                  </div>
                  <p className="text-[11px] text-zinc-400 text-center">
                    Freedom means living your way—exploring the wild wonders of the world, building community synergy, and being with friends under a sky unburdened by repetitive work.
                  </p>
                </div>
              </div>
            </div>

            {/* Elevation to Eden Panel */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 md:p-8 rounded-2xl space-y-4 w-full">
              <div className="flex items-center gap-2 justify-center">
                <Globe className="text-red-500" size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">Elevation to Eden</span>
              </div>
              <h4 className="text-md font-semibold text-zinc-100 text-center">Ushering Humanity into a Post-Scarcity Abundance Society</h4>
              <p className="text-xs text-zinc-400 leading-relaxed text-center">
                "Elevation to Eden" is the strategic transition of human civilization. By unleashing advanced artificial intelligence, automated machinery, and humanoid robotics, we can permanently decouple survival needs from the toll of human hands. 
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed text-center">
                Repetitive, dangerous, and tiring labor is handled entirely by electromechanical organisms (AI agents and robots). In this landscape, the very definition of "work" transforms: instead of a daily struggle to survive, it becomes an act of passion, artistic expression, and localized problem solving.
              </p>
              <div className="bg-red-950/10 border border-red-900/25 p-3 rounded-xl max-w-xl mx-auto">
                <p className="font-mono text-[10px] text-red-400 font-bold uppercase text-center">The Edenic Inversion:</p>
                <p className="text-[11px] text-zinc-400 italic text-center">"We do not retreat to paradise; we actively construct it using technology, incentives, and good leadership."</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* WATER SUITE OF PRODUCTS */}
        {activeTab === 'products' && (
          <motion.div
            key="stellarium-products"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
              
              {/* Product Direct Directory Menu */}
              <div className="md:col-span-4 space-y-2">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold px-2 text-center">Engines of Transformation</span>
                {products.filter(p => p.tagline).map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`w-full p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer text-center ${
                      selectedProductId === prod.id
                        ? 'bg-red-950/20 border-red-900/50 text-red-300'
                        : 'bg-zinc-950/70 border-zinc-900 hover:border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-center mx-auto sm:mx-0">
                      {prod.icon}
                      <div className="text-left">
                        <div className="font-semibold text-xs tracking-wider uppercase text-zinc-200">{prod.name}</div>
                        <div className="font-mono text-[9px] text-zinc-500">{prod.tagline}</div>
                      </div>
                    </div>
                    <ChevronRight size={14} className={selectedProductId === prod.id ? "text-red-400 hidden sm:block" : "text-zinc-600 hidden sm:block"} />
                  </button>
                ))}
              </div>

              {/* Selected Product Specifications View */}
              <div className="md:col-span-8 bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-black/30 text-center items-center">
                {(() => {
                  const currentProd = products.find(p => p.id === selectedProductId);
                  if (!currentProd) return null;
                  return (
                    <>
                      <div className="space-y-4 w-full">
                        <div className="flex flex-col items-center gap-3 border-b border-zinc-900 pb-3 text-center justify-center">
                          <div className="p-2 bg-red-950/15 border border-red-900/30 rounded-xl">
                            {currentProd.icon}
                          </div>
                          <div className="text-center">
                            <span className="font-mono text-[9px] text-red-500 uppercase tracking-widest font-bold text-center block">Product Specification</span>
                            <h3 className="text-lg font-bold font-mono tracking-wide text-zinc-100 uppercase text-center">{currentProd.name}</h3>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed text-center">
                          {currentProd.description}
                        </p>

                        <div className="bg-zinc-900/30 border border-zinc-900/80 rounded-xl p-4.5 space-y-3 text-center w-full">
                          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block font-bold text-center">Technical Integration Specs:</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-center">
                            {currentProd.specs?.map((spec, i) => (
                              <div key={i} className="flex gap-2 items-start text-xs text-zinc-400 justify-center text-center">
                                <span className="text-red-500 font-mono font-bold text-center">•</span>
                                <span className="text-center">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row gap-3 items-center justify-between w-full text-center">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase flex items-center gap-1 justify-center mx-auto sm:mx-0">
                          <Info size={12} className="text-red-400" />
                          Access to the beta environment is available for verified developers
                        </span>
                        <div 
                          className="px-3.5 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-900/50 text-indigo-400 font-mono text-[11px] flex items-center gap-1.5 justify-center mx-auto sm:mx-0"
                        >
                          Access Ecosystem Beta
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

            </div>

            {/* Quick product cards for the auxiliary ones (Gov, Coach, etc.) */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl space-y-4 w-full">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold text-center">Auxiliary Products</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-2 text-center">
                  <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase text-center">Water Coach</h4>
                  <p className="text-[11px] text-zinc-400 text-center">
                    An AI-powered personal coach providing real-time, on-device guidance to enhance focus, productivity, and personal strategies.
                  </p>
                </div>
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-2 text-center">
                  <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase text-center">Water Gov</h4>
                  <p className="text-[11px] text-zinc-400 text-center">
                    A visionary civic super-app providing seamless access to all public services in a nation with automated document filling.
                  </p>
                </div>
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 space-y-2 text-center">
                  <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase text-center">Water AI Fluid</h4>
                  <p className="text-[11px] text-zinc-400 text-center">
                    Decentralized peer-to-peer compute grid allowing affordable AI model inferencing specifically built for delay-tolerant agents.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ENTERPRISE HOUSING PLEDGE (EHP) */}
        {activeTab === 'pledge' && (
          <motion.div
            key="stellarium-pledge"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6 w-full"
          >
            {/* EHP Overview Card */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 md:p-8 rounded-2xl space-y-4 shadow-xl shadow-black/30 text-center flex flex-col items-center w-full">
              <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-3 justify-center w-full">
                <Home className="text-red-500" size={18} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200 text-center">The Enterprise Housing Pledge (EHP)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-3xl">
                The housing crisis is a critical barrier to human mobility and prosperity. Traditional public or private construction efforts suffer from bureaucracy, high interest, and misaligned incentives. 
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-3xl">
                Enter the <span className="text-zinc-100 font-semibold font-mono">Enterprise Housing Pledge</span>: an innovative financial model where public institutions, non-profits, philanthropists, and private companies pledge their idle assets or credit as collateral to secure low-interest loans. This pool of collateral allows extremely rapid construction of modular, sustainable, high-quality prefabricated homes (partnering with industrial builders like BROAD Group).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 w-full text-center">
                <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded-xl space-y-1 text-center flex flex-col items-center justify-center">
                  <span className="font-mono text-red-500 text-xs font-bold block text-center">01. CONSORTIUM</span>
                  <p className="text-[11px] text-zinc-400 text-center">Pledging entities merge credit and idle assets together.</p>
                </div>
                <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded-xl space-y-1 text-center flex flex-col items-center justify-center">
                  <span className="font-mono text-red-500 text-xs font-bold block text-center">02. COLLATERAL</span>
                  <p className="text-[11px] text-zinc-400 text-center">Pooled collateral bypasses traditional high-interest limits.</p>
                </div>
                <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded-xl space-y-1 text-center flex flex-col items-center justify-center">
                  <span className="font-mono text-red-500 text-xs font-bold block text-center">03. FAST BUILD</span>
                  <p className="text-[11px] text-zinc-400 text-center">Industrial pre-fabrication erects buildings in days.</p>
                </div>
                <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded-xl space-y-1 text-center flex flex-col items-center justify-center">
                  <span className="font-mono text-red-500 text-xs font-bold block text-center">04. PERPETUAL</span>
                  <p className="text-[11px] text-zinc-400 text-center">Once paid off, assets provide permanently low rent.</p>
                </div>
              </div>
            </div>

            {/* Support and Anonymous Donations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              {/* Monero Donation Box */}
              <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-lg text-center items-center">
                <div className="space-y-2 text-center flex flex-col items-center">
                  <div className="flex items-center gap-2 text-indigo-400 justify-center">
                    <Heart size={16} className="text-red-500" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-center">Anonymous Monero Support</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-sm">
                    To maintain absolute confidentiality and protect your contribution from financial obstruction, we recommend donating via Monero (XMR). All donations directly fund critical operations, the privacy room, and the Stellarium Mansion.
                  </p>
                </div>

                <div className="space-y-2 w-full text-center">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block text-center">Official XMR Donation Wallet:</label>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between gap-3 overflow-hidden w-full max-w-md mx-auto">
                    <span className="font-mono text-[10px] text-zinc-400 truncate select-all">{xmrAddress}</span>
                    <button 
                      onClick={copyAddressToClipboard}
                      className="shrink-0 font-mono text-[10px] text-red-400 bg-red-950/20 border border-red-900/40 px-2.5 py-1 rounded-lg hover:bg-red-900/30 transition-all"
                    >
                      {copiedXmr ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Affiliate & Mansion Space */}
              <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-lg text-center items-center">
                <div className="space-y-2 text-center flex flex-col items-center">
                  <div className="flex items-center gap-2 text-indigo-400 justify-center">
                    <Award size={16} className="text-red-500" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-center">40% Commission Affiliate Program</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-sm">
                    Uplift the mission and secure significant personal wealth. Raise funds or sponsor the Stellarium Office & Mansion project, and earn a direct **40% commission** on every single dollar you bring into the network. 
                  </p>
                </div>

                <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 w-full max-w-xs mx-auto">
                  <div className="flex items-center justify-between text-xs font-mono text-center">
                    <span className="text-zinc-400">Mansion Funding Goal:</span>
                    <span className="text-red-400 font-bold">$100,000 USD</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* THE ARCHITECT: JOHN VICTOR */}
        {activeTab === 'architect' && (
          <motion.div
            key="stellarium-architect"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6 w-full"
          >
            {/* John Biography Card */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 md:p-8 rounded-2xl space-y-4 shadow-xl shadow-black/30 text-center flex flex-col items-center w-full">
              <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-3 justify-center w-full">
                <UserCheck className="text-red-500" size={18} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200 text-center">The Architect: John Victor</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                <div className="md:col-span-8 space-y-4 text-xs text-zinc-400 leading-relaxed text-center flex flex-col items-center justify-center">
                  <p className="text-center">
                    John Victor (born June 8, 1995) is a systems architect, consultant, and spiritual guide who took a Nazareth vow of devotion in 2015. Carrying an INFJ personality profile, he operates with first-principles systems thinking, analyzing the world, businesses, and macroeconomic policies as complex interconnected machines of incentives.
                  </p>
                  <p className="text-center">
                    Through elite studies in Business Management (Wharton Online) and Financial Markets (University of Illinois), combined with a systems engineering background, John designed the Stellarium Covenant to usher in an era of post-scarcity abundance. 
                  </p>
                  <div className="p-3 bg-red-950/15 border border-red-900/30 rounded-xl text-center w-full max-w-lg">
                    <p className="font-semibold text-zinc-300 text-center">The Divine Anointing (2008):</p>
                    <p className="text-[11px] text-zinc-400 italic text-center">"An intimate communion between a young adolescent and the divine, defining his lifelong commitment to protect liberty, generate wealth, and guide others to wisdom."</p>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="md:col-span-4 bg-zinc-900/30 border border-zinc-900 rounded-xl p-4.5 space-y-3 font-mono text-[11px] text-center flex flex-col items-center justify-center">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-bold text-center">Academic & Skills Matrix</span>
                  
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between border-b border-zinc-900 pb-1 text-center">
                      <span className="text-zinc-400">Core Specialty:</span>
                      <span className="text-zinc-200">Systems Engineering</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1 text-center">
                      <span className="text-zinc-400">Business Model:</span>
                      <span className="text-zinc-200">Incentive Architecture</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1 text-center">
                      <span className="text-zinc-400">Finance Mastery:</span>
                      <span className="text-zinc-200">Quantitative Markets</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1 text-center">
                      <span className="text-zinc-400">Birthdate:</span>
                      <span className="text-zinc-200">June 8, 1995</span>
                    </div>
                    <div className="flex justify-between pb-1 text-center">
                      <span className="text-zinc-400">Guidance Ethos:</span>
                      <span className="text-zinc-200">"Wisdom Distilled"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}
