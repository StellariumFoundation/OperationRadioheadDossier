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
            <div className="bg-zinc-950/90 backdrop-blur-sm border border-zinc-800 p-6 md:p-10 rounded-2xl shadow-2xl shadow-black/50 w-full overflow-x-auto">
              <div className="space-y-6 w-full text-center flex flex-col items-center">
                <h2 className="font-cinzel text-lg md:text-xl font-bold text-zinc-100 tracking-wider text-center border-b border-zinc-800 pb-4 w-full">
                  The Stellarium Guide: Principles, Governance, and The Path of the Honest Builder
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  Welcome to the definitive guide to the <span className="text-zinc-200 font-semibold">Stellarium</span>. This document outlines our systemic architecture, our core ethical standards, and our operational philosophy. It is designed to serve as both a manifesto and an operational manual for individuals, businesses, and communities looking to navigate the transition into an era of technological abundance.
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  The Stellarium is not a political movement, nor is it a religious organization. It is a practical, results-oriented global alliance built on the understanding that human beings thrive when they collaborate under transparent principles, pool resources strategically, and commit to one another's success.
                </p>

                <hr className="border-zinc-800 w-full max-w-2xl" />

                <h2 className="font-cinzel text-base font-bold text-zinc-100 tracking-wider text-center">
                  1. The Stellarium Blueprint
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  The <span className="text-zinc-200 font-semibold">Stellarium Blueprint</span> is a comprehensive systems-architecture designed to decouple human survival from manual toil, optimize corporate efficiency, and stabilize regional economies. The blueprint is divided into three key areas of technological and policy integration:
                </p>

                <div className="space-y-6 w-full max-w-4xl">
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-5 space-y-3 text-center flex flex-col items-center">
                    <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
                      A. Macroeconomic Engineering (Wealth Activism)
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">
                      We analyze cities, industries, and national markets as physical systems of inputs and outputs. Through <span className="text-zinc-200 font-semibold">Wealth Activism</span>, we actively identify missed opportunities and structural bottlenecks to wealth creation. Our strategic policy frameworks include:
                    </p>
                    <ul className="space-y-2 text-center list-none w-full">
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">The Subsidized Jobs Initiative:</span> A public-private partnership model designed to preserve workforce utility, ensure full employment, and maintain human dignity during the transition to an automated economy.
                      </li>
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">The Policy of Affordability:</span> The strategic engineering of state-owned or municipal enterprises in essential sectors (energy, basic food production, and housing) to deliver foundational goods "at cost," thereby maximizing citizens' discretionary income.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-5 space-y-3 text-center flex flex-col items-center">
                    <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
                      B. Digital and Physical Automation (The "Water" Suite)
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">
                      We build and deploy scalable, multi-agent artificial intelligence and teleoperated robotics to replace routine and hazardous labor:
                    </p>
                    <ul className="space-y-2 text-center list-none w-full">
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water AI:</span> A unified supermodel orchestrator designed to route digital workflows to the most efficient domain-specific AI models in real-time.
                      </li>
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water Company:</span> An enterprise operating system that enables organizations to deploy and manage entire corporate hierarchies staffed by specialized, collaborating AI agents.
                      </li>
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water Robotics:</span> A VR-teleoperation system allowing remote operators to control bipedal or wheeled humanoid robots in hazardous or labor-scarce environments.
                      </li>
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water AI Fluid:</span> A decentralized, peer-to-peer computing grid that slashes the inference costs of running autonomous agents by utilizing idle compute resources globally.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-5 space-y-3 text-center flex flex-col items-center">
                    <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
                      C. Social &amp; Educational Infrastructure
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">
                      We develop tools to minimize social friction and democratize access to core human needs:
                    </p>
                    <ul className="space-y-2 text-center list-none w-full">
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water Classroom:</span> A gamified, global online school designed to provide personalized education from K-12 to undergraduate levels.
                      </li>
                      <li className="text-xs text-zinc-400 leading-relaxed text-center">
                        <span className="text-zinc-200 font-semibold">Water Party:</span> A cross-platform party-matching application designed to foster local connection, community building, and coordinated social experiences through safe, curated event-hosting.
                      </li>
                    </ul>
                  </div>
                </div>

                <hr className="border-zinc-800 w-full max-w-2xl" />

                <h2 className="font-cinzel text-base font-bold text-zinc-100 tracking-wider text-center">
                  2. The Seven Principles
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  The Stellarium is built upon seven immutable axioms that guide every decision, venture, and policy we advocate. These principles are not suggestions; they are the operating system of our community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl">
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle I: Individual Sovereignty</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Each individual possesses the innate ability to thrive on their own interests and pursuits. We reject paternalistic control and honor personal autonomy.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle II: Wealth as the Primary Metric</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Wealth is the most reliable measure of value creation, productivity, and societal well-being. A wealthy society is one where individuals are free from the struggle for survival.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle III: Active Peacemaking</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">The duty of everyone is to be a peacemaker. Peace and wealth walk in one accord; conflict destroys value, while stability generates prosperity.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle IV: Anti-Conflict Posture</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">War and destructive conflict are poison to everything we build. We reject zero-sum competition and prioritize mutually beneficial, win-win collaborations.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle V: Value Through Service</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Improving and serving people is the direct mechanism of wealth creation. We compete to see who can create the most value for others.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle VI: Human Creativity as the Engine</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Human ingenuity drives innovation. We invest in creativity, encourage experimentation, and build spaces where diverse minds can collaborate.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 md:col-span-2 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Principle VII: The Law of Integration</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Our core operational directive is: <span className="text-zinc-200 font-semibold">Do Good, Make Money, Have Fun.</span></p>
                  </div>
                </div>

                <div className="bg-zinc-900/30 border border-red-900/20 rounded-xl p-5 space-y-3 text-center flex flex-col items-center w-full max-w-4xl">
                  <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">The Law of Integration Explained</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed text-center">
                    A true Stellarium venture or lifestyle does not separate these three imperatives. They must be executed simultaneously:
                  </p>
                  <ul className="space-y-2 text-center list-none w-full">
                    <li className="text-xs text-zinc-400 leading-relaxed text-center">
                      <span className="text-zinc-200 font-semibold">Do Good:</span> All initiatives must be beneficial to the collective and maintain absolute integrity.
                    </li>
                    <li className="text-xs text-zinc-400 leading-relaxed text-center">
                      <span className="text-zinc-200 font-semibold">Make Money:</span> All systems must be economically sustainable and profitable.
                    </li>
                    <li className="text-xs text-zinc-400 leading-relaxed text-center">
                      <span className="text-zinc-200 font-semibold">Have Fun:</span> The process of creation and connection must be joyful, rejecting grim, joyless drudgery.
                    </li>
                  </ul>
                </div>

                <hr className="border-zinc-800 w-full max-w-2xl" />

                <h2 className="font-cinzel text-base font-bold text-zinc-100 tracking-wider text-center">
                  3. The Universal Standard
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  The <span className="text-zinc-200 font-semibold">Universal Standard</span> is our minimal, unshakeable ethical code. It serves as the baseline boundary for civilized human collaboration across all multicultural backgrounds. Any individual or entity that violates these boundaries is immediately excluded from our network.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-4xl">
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 text-center">1. Do Not Kill</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Human life is sacred. We prohibit murder, violence, and physical harm.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 text-center">2. Do Not Steal</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Property rights are fundamental. We prohibit outright theft, fraud, embezzlement, scams, and coercion.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 text-center">3. Do Not Bear False Witness</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Truth is the currency of trust. We prohibit slander, deception, and malicious dishonesty.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 text-center">4. Love Your Neighbor as Yourself</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">We utilize practical empathy as our guiding framework for ethical living, asking: <span className="italic">&ldquo;How would I want to be treated in this situation?&rdquo;</span></p>
                  </div>
                </div>

                <hr className="border-zinc-800 w-full max-w-2xl" />

                <h2 className="font-cinzel text-base font-bold text-zinc-100 tracking-wider text-center">
                  4. The Stellarium Way of Being and Doing
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  To be an <span className="text-zinc-200 font-semibold">Honest Builder</span> within the Stellarium means adopting a specific mindset and operational protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl">
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Systems Thinking</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">We analyze the world as interconnected feedback loops. If a system is failing, we do not blame the individuals within it; we redesign the incentives using <span className="text-zinc-200 font-semibold">Structural Incentive Engineering (SIE)</span>.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Pragmatic Autonomy</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">We are self-sovereign. We do not wait to be told what to do; we identify problems, design solutions, and execute.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Radical Financial Transparency</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">Our governors and administrators are stewards, not owners, of the collective treasury. Every transaction, contribution, and expenditure is documented, verified, and made publicly accessible.</p>
                  </div>
                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 space-y-1.5 text-center flex flex-col items-center">
                    <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-wider text-center">Low-Profile and High-Impact</span>
                    <p className="text-xs text-zinc-400 leading-relaxed text-center">We avoid public grandstanding, ideological debates, and political posturing. We let our results, our software, and our economic outcomes speak for themselves.</p>
                  </div>
                </div>

                <hr className="border-zinc-800 w-full max-w-2xl" />

                <h2 className="font-cinzel text-base font-bold text-zinc-100 tracking-wider text-center">
                  5. The Vision: Elevation to Eden
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  Our ultimate trajectory is the <span className="text-zinc-200 font-semibold">Elevation to Eden</span>&mdash;a logical, technologically driven transition to a post-scarcity era. By automating routine labor and structuralizing the cost of essential services to zero, we unlock human potential, allowing individuals to focus entirely on higher pursuits: art, science, philosophy, and genuine human connection.
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-4xl">
                  We do not wait for the future; we construct it, one thriving chapter at a time.
                </p>

                <hr className="border-zinc-800 w-full max-w-2xl border-t-2" />

                <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-5 space-y-4 text-center flex flex-col items-center w-full max-w-4xl">
                  <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
                    Explore the Ecosystem and Join the Mission:
                  </h3>
                  <ul className="space-y-3 text-center list-none w-full">
                    <li className="text-xs text-zinc-400 text-center">
                      <span className="text-zinc-200 font-semibold">The Stellarium Foundation Portal:</span><br />
                      <a href="https://www.stellarium.ddns-ip.net" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline underline-offset-2 font-mono text-[11px]">https://www.stellarium.ddns-ip.net</a>
                    </li>
                    <li className="text-xs text-zinc-400 text-center">
                      <span className="text-zinc-200 font-semibold">Stellarium Literature &amp; Verified Supports:</span><br />
                      <a href="https://www.stellarium.ddns-ip.net/supports" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline underline-offset-2 font-mono text-[11px]">https://www.stellarium.ddns-ip.net/supports</a>
                    </li>
                    <li className="text-xs text-zinc-400 text-center">
                      <span className="text-zinc-200 font-semibold">Water Enterprises Technology Hub:</span><br />
                      <a href="https://water-enterprises-landing.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline underline-offset-2 font-mono text-[11px]">https://water-enterprises-landing.onrender.com/</a>
                    </li>
                    <li className="text-xs text-zinc-400 text-center">
                      <span className="text-zinc-200 font-semibold">Water Classroom (Live Build):</span><br />
                      <a href="https://waterclassroom.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline underline-offset-2 font-mono text-[11px]">https://waterclassroom.onrender.com/</a>
                    </li>
                    <li className="text-xs text-zinc-400 text-center">
                      <span className="text-zinc-200 font-semibold">Water Party (Live MVP):</span><br />
                      <a href="https://waterparty-react-14hr.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline underline-offset-2 font-mono text-[11px]">https://waterparty-react-14hr.onrender.com/</a>
                    </li>
                  </ul>
                </div>
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
