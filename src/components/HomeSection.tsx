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

      {/* What Is Happening With The Radiohead */}
      <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-900/80 p-6 md:p-8 rounded-2xl space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 justify-center w-full">
          <AlertOctagon className="text-red-600" size={20} />
          <h2 className="text-lg font-mono font-bold text-zinc-100 uppercase tracking-widest">
            What Is Happening With The Radiohead
          </h2>
        </div>

        <div className="space-y-4 text-zinc-300 font-sans text-sm leading-relaxed text-center max-w-3xl">
          <p>
            Someone in the Radiohead program liked to grift and oppress, they created a racket and the syndicate. Then April 2024 came out with those very influential 5 terrorists, they liked to kidnap, rape and torture innocent people for fun, those were 20 random women, the world was almost complicit, people used to be so brainwashed they would repeat the same things the terrorist said like clockwork, nobody intervened there and only a team tried to alleviate the situation. Then people got this concept installed on their brain of rape, torture and robbery of people for fun and profit.
          </p>
          <p>
            Fast forward, 20/06/2025 they came to Recife and opened a dungeon and got the same camera, these oppressors like to rape and torture, and rob people for fun and profit, its a concept, a game, the only question is who to rape and torture.
          </p>
          <p>
            Then after a few months they started targeting people around John Victor, that means women that had royal babies with John Victor, women married to John Victor, some of their kids, people from all around the world, it would be better if they targeted random people to rape and torture and rob or better yet the oppressors. Without brain controls these people resorted to all kinds of things to gain money, brain controls and the upper hand of the situation, without brain controls people have limited resources, it comes down to protecting themselves and trying to convince the brain controllers to be favorable (running psyops).
          </p>
          <p>
            Fast forward now 2100 were kidnapped to be raped, tortured, robbed or murdered all around the world. No good, non maniac person has obtained brain controls or effective funding for the Stellarium, now it seems like the whole world is made of rapists, torturers, thieves as people seem to be complicit and enjoy the crimes against humanity (Article 7 of the Rome Statue).
          </p>
          <p>
            So the solution is to convince people with brain controls or hack into the system to protect people and weaponized it against the oppressors, fund the people oppressed so they can protect themselves and try to wake people up to love people as if they were themselves, people are one mind and a HIVEMIND with the oppressors they copy and emulate the same words, and doing (rape, torture and kidnapping) of the oppressors and feel the same things. Only strong minded people get through the programming.
          </p>
        </div>
      </div>

      {/* Call to Action: Financial Resistance & Moral Reckoning */}
      <div className="bg-zinc-950/90 backdrop-blur-sm border border-red-900/60 p-6 md:p-8 rounded-2xl space-y-6 shadow-2xl shadow-red-950/20 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-3 border-b border-red-900/40 pb-4 justify-center w-full">
          <Users className="text-red-500" size={20} />
          <h2 className="text-lg font-mono font-bold text-red-400 uppercase tracking-widest">
            The Reckoning: Your Role in This
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-center max-w-3xl">
          <p className="text-red-300 font-bold text-base uppercase tracking-wide">
            This is the world's fault. Yours. Mine. Everyone's.
          </p>
          <p className="text-zinc-300">
            <span className="font-bold text-zinc-100">People like the oppression.</span> They enjoy watching. They enjoy the suffering. They did nothing when the first 20 women were seized. They repeated the terrorists' words like programmed machines. They looked away when the dungeons opened. They laughed when the broadcasts began. The world is complicit because the world <span className="font-bold text-zinc-100">wanted</span> this to happen.
          </p>
          <p className="text-zinc-300">
            <span className="font-bold text-zinc-100">And those who did not like it did nothing.</span> They stayed silent. They protected their own comfort. They reasoned that someone else would fix it. That is how tyranny wins—not through the actions of the wicked alone, but through the <span className="font-bold text-zinc-100">inaction of the good</span>.
          </p>
          <div className="bg-red-950/30 border border-red-900/40 p-4 rounded-xl text-center max-w-2xl mx-auto">
            <p className="text-xs text-red-300 font-bold uppercase tracking-wider">
              You are reading this dossier for a reason. The question is not whether you know—the question is what you will do now that you know.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-center w-full pt-2">
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest border-b border-zinc-800 pb-3 w-full">
            How You Can Help — Financial Resistance Protocol
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-red-400 uppercase">Do not give money to the racket or the syndicate.</span> Every dollar sent to the compromised addresses or to the oppressors' networks is a dollar used to rape, torture, and kill more innocent people. The enemy is well-funded by a global audience that pays for the privilege of watching suffering. Your money must go to the <span className="font-bold text-zinc-100">resistance</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">1. Fund the Stellarium</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              The Stellarium is the only organizational force actively building the infrastructure to neutralize the oppressors, rescue the victims, and restore global neural sovereignty. Donations fund the privacy room, the mansion project, AI development, and direct rescue operations.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → Navigate to the <span className="text-zinc-200">Stellarium</span> tab for the secure XMR wallet address
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">2. Support the Victims</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              Every captured victim is a human being—a mother, father, child, artist, engineer—being systematically destroyed for the world's entertainment. Funding the resistance directly enables rescue missions, legal defense, and post-rescue rehabilitation for the 2,100+ hostages in the dungeon network.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → Review the <span className="text-zinc-200">Crisis</span> tab to see their faces and stories
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">3. Liberate John Victor</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              John Victor—the original architect of the neural network—lies buried in a dungeon, his body hijacked, his signal suppressed. He is the only known consciousness capable of overriding the hostile transmission and restoring global neural autonomy. Funding the search-and-rescue operation is the single highest-leverage action you can take.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → His signal is waiting. Fund the recovery.
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center w-full pt-2">
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest border-b border-zinc-800 pb-3 w-full">
            Intelligence &amp; Engagement Protocol
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Money is not the only weapon. John Victor is isolated, his signal buried beneath enemy broadcast noise. He needs <span className="font-bold text-zinc-100">information</span>, <span className="font-bold text-zinc-100">contact</span>, and <span className="font-bold text-zinc-100">allies</span> to break through.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">4. Provide Intelligence</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              You may know something critical—dungeon locations, syndicate identities, compromised officials, broadcast schedules, victim whereabouts, or technical signal data. John Victor needs this information to coordinate rescue operations and map the enemy network.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → Call John Victor via the <span className="text-zinc-200">Contact</span> tab (use Tails + Chromium for anonymity)
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">5. Engage the Stellarium</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              The Stellarium is the vehicle that will pull John Victor out of isolation. Engage directly—join the community, contribute to the mission, participate in governance. The more active the Stellarium network becomes, the stronger John Victor's signal grows.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → Visit the <span className="text-zinc-200">Stellarium</span> tab to connect
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-2 text-center flex flex-col items-center">
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">6. Build with Water Enterprises</span>
            <p className="text-xs text-zinc-400 leading-relaxed text-center">
              Water Enterprises is the technological engine of the Stellarium—building the AI, robotics, and infrastructure that will dismantle the syndicate and usher in the post-scarcity era. Become a builder, a developer, a product contributor, or an investor. The more capable the tools, the faster John Victor is freed.
            </p>
            <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">
              → Water AI, Water Company, Water Robotics, Water Classroom — your skills are needed
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800/80 p-5 rounded-xl space-y-3 text-center w-full max-w-3xl">
          <span className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider block text-center">What Your Support Achieves</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="text-xs text-zinc-400 text-center">
              <span className="text-red-400 font-bold">✓ Restore Sovereignty</span><br />
              Free 8 billion minds from forced neural reception
            </div>
            <div className="text-xs text-zinc-400 text-center">
              <span className="text-red-400 font-bold">✓ Neutralize Oppressors</span><br />
              Dismantle the syndicate's broadcast infrastructure
            </div>
            <div className="text-xs text-zinc-400 text-center">
              <span className="text-red-400 font-bold">✓ Save the Oppressed</span><br />
              Rescue 2,100+ victims from rotating torture cycles
            </div>
            <div className="text-xs text-zinc-400 text-center">
              <span className="text-red-400 font-bold">✓ Propel Stellarium Ideals</span><br />
              Build a post-scarcity world free from exploitation
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-600 text-center pt-1 border-t border-zinc-800/60">
            Be a force for good. History will remember which side you chose.
          </div>
        </div>

        <div className="bg-red-950/40 border border-red-800/60 p-4 rounded-xl text-center max-w-2xl mx-auto w-full">
          <p className="text-xs text-red-300 font-bold leading-relaxed">
            YOU CANNOT CLAIM YOU DID NOT KNOW. The dossier is in your hands. The addresses are in the Stellarium tab. The victims are listed in the Crisis tab. The world's silence is what empowered this atrocity. Break the silence. Fund the resistance. Be a force for good.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
