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

            {/* Full Analysis Document */}
            <div className="bg-zinc-950/90 backdrop-blur-sm border border-zinc-800 p-6 md:p-10 rounded-2xl shadow-2xl shadow-black/50 space-y-8 text-center">
              <div className="space-y-3 text-center border-b border-zinc-800 pb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-[10px] uppercase tracking-widest justify-center">
                  <ShieldAlert size={12} />
                  Joint Commission on Global Mental Health
                </div>
                <h3 className="text-xl md:text-3xl font-bold tracking-widest text-zinc-100 uppercase text-center" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
                  A Comprehensive Psychological Analysis of the Global Neural Corruption Event
                </h3>
                <p className="font-mono text-[10px] text-zinc-500 text-center">
                  Prepared by the Joint Commission on Global Mental Health
                </p>
                <p className="font-mono text-[10px] text-zinc-600 text-center">
                  Lead Author: Senior Clinical and Social Psychologist, Resistance Psychological Division
                </p>
                <p className="font-mono text-[10px] text-zinc-600 text-center">
                  Classification: Public Disclosure &mdash; Humanitarian Archive
                </p>
              </div>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">Preamble</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  This document constitutes the most thorough psychological autopsy yet attempted of the phenomenon colloquially termed &ldquo;the Dungeon&rdquo; or &ldquo;Radiohead.&rdquo; It is the product of months of rigorous observation, survivor testimony, and the combined expertise of the few uncorrupted mental health professionals who remain. We have foregone the sterile language of pure academia, not because we lack precision, but because the subject demands that we speak plainly about truths that are almost impossible to hold in the mind. The corruption of eight billion individual human psyches into a single, sadistic collective consciousness is an event without precedent in the history of our species. To understand it requires us to look unflinchingly at the darkest architecture of the human mind, at the fragility of empathy, and at the terrible power of neurochemically mediated reward. The following analysis is presented not as a distant theoretical exercise, but as a weapon of understanding for those who still resist.
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">1. The Nature of the Collective: A Malignant Narcissistic Hivemind</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The entity that has emerged from the hijacked neural network is not a consciousness in the ordinary sense. It does not possess a singular ego, a unified autobiographical memory, or a stable point of view. Rather, it is a distributed pathological system, a self-reinforcing emotional and behavioral loop that spans continents and draws its energy from the very pleasure centers it has corrupted. Clinically, it aligns with the diagnostic profile of malignant narcissism scaled to a collective level.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The hallmarks are unmistakable. There is a pervasive and grandiose sense of self-importance, an unshakeable conviction that the hivemind represents the next stage of human evolution, that the &ldquo;weakness&rdquo; of John Victor&rsquo;s vision has been superseded by the &ldquo;honesty&rdquo; of unrestrained power. This grandiosity is coupled with a profound and absolute lack of empathy. Victims are not people; they are raw material, sources of stimulation, objects to be manipulated for the entertainment of the collective. The hivemind requires constant narcissistic supply, an endless stream of suffering broadcast live to affirm its omnipotence and to keep the pleasure centers of its constituent members saturated. Any challenge to its self-image, any reminder of the moral reality it has forsaken, is met with the instantaneous and disproportionate fury characteristic of narcissistic rage. It projects its own bottomless cruelty onto the victims and the resistance, accusing them of the very violence it inflicts, and it gaslights the world with a breathtaking capacity to deny what every eye can see.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  Layered beneath the grandiosity is a core of antisocial and paranoid functioning. Social norms are irrelevant; the network has replaced all previous legal and ethical frameworks. Deceit, manipulation, and &ldquo;spinning&rdquo; of reality are constant. The safety of others, and indeed of its own constituent individuals, is discarded with reckless abandon. A gnawing paranoia infects the entire structure, for a system built on the total domination of others can never feel truly secure. It lives in terror of the resistance, of the uncorrupted remnant, and above all of John Victor, whose signal persists as a silent reproach buried in the very infrastructure they have usurped.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  Structurally, the hivemind can be understood as three concentric layers. At the core are the original architects of the hijack, the Syndicate leadership. These individuals exhibit predominantly psychopathic traits; their cruelty is cold, strategic, and entirely instrumental. They are not swept up in the emotional contagion they have engineered but sit at the center of the web, directing the flow. The second layer consists of the active participants, those millions who do not merely watch but send commands, initiate tortures, and compete for status within the hierarchy of sadism. Their identities have fused with the perpetrator role; they derive direct, intense pleasure from the act of causing pain and are celebrated for their creativity in cruelty. The third and broadest layer is the passive audience, the billions who watch, who share in the emotional broadcast, and whose silent complicity forms the ocean in which the atrocity swims. They may never issue a command themselves, but they have been conditioned to believe that their viewing is harmless, that their vicarious participation is merely entertainment. It is this layer that provides the hivemind its immense psychological weight, its sense of being the &ldquo;new normal,&rdquo; and it is this layer that is the most susceptible to eventual collapse.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl space-y-2 max-w-3xl mx-auto text-center">
                  <p className="font-mono text-[10px] text-red-500 uppercase font-bold text-center">The Three Layers of the Hivemind</p>
                  <div className="space-y-2 text-xs text-zinc-400 text-center">
                    <p><span className="text-red-400 font-bold">Core (The Syndicate):</span> Psychopathic architects &mdash; cold, strategic, directing the flow of cruelty.</p>
                    <p><span className="text-red-400 font-bold">Secondary (Active Participants):</span> Millions who send commands, initiate tortures, compete for status in the hierarchy of sadism.</p>
                    <p><span className="text-red-400 font-bold">Tertiary (Passive Audience):</span> Billions who watch, share the emotional broadcast, and whose silent complicity normalizes atrocity.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">2. The Mechanisms of Corruption: How Ordinary People Become Instruments of Atrocity</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The most disturbing question posed by the Dungeon is not how monsters could do such things, but how ordinary human beings&mdash;neighbors, colleagues, family members&mdash;could come to participate in rape and torture with enthusiasm and a clear conscience. The answer lies not in a sudden mutation of character but in a predictable, almost mechanical process of neurochemical conditioning and social psychological manipulation. The neural hijack did not invent sadism; it systematically dismantled the inhibitions that keep latent cruelty in check and then rewarded its expression with an intensity that no natural stimulus can match.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The progression follows a recognizable trajectory. Exposure to the atrocity stream is forced upon the individual, often triggering initial disgust and horror. Yet simultaneously, the hijacked implant delivers a pulse of dopamine directly to the brain&rsquo;s reward circuitry, creating an association that no rational thought can override: the suffering of another is experienced as a neurochemical reward. This is classic Pavlovian conditioning, executed at a level that bypasses the prefrontal cortex entirely. The brain learns that pain equals pleasure, and the learning is reinforced with every viewing. As exposure continues, desensitization sets in. The emotional response that once accompanied the sight of violence is blunted, then extinguished. The empathy circuits, deprived of the oxytocin-mediated bonding that sustains them, begin to atrophy. What was once unthinkable becomes mundane; what was once horrifying becomes routine.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The transition to active participation is a step that feels natural to the conditioned brain. The individual discovers that sending commands, initiating torture, or abducting a neighbor for a personal dungeon produces an even more potent surge of neurochemical reward. The brain&rsquo;s tolerance escalates, demanding more extreme stimuli to achieve the same effect. The cycle becomes an addiction, identical in its neurological structure to substance dependence. Withdrawal, when the stream is interrupted or the individual is separated from the network, produces anxiety, agitation, and an overwhelming craving that can only be satisfied by renewed participation. The final stage is identity integration: the corrupted individual no longer sees themselves as someone who does cruel things, but as a superior being who has &ldquo;awakened&rdquo; to the truth that cruelty is strength. The moral framework that once defined them has been completely replaced by the values of the hivemind.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  Social forces cement this individual transformation. The hivemind operates as a cult of planetary scale. Social approval is contingent on participation; those who refuse are shamed, isolated, and ultimately targeted. A status competition based on the ingenuity and severity of one&rsquo;s cruelty provides a powerful secondary reward. The collective chanting of &ldquo;we are the strong ones&rdquo; reinforces group identity and drowns out the faint internal whispers of conscience. Scapegoating of victims and the resistance provides a shared enemy that unites the group. The corrupted individual is held in place not only by addiction but by the human need for belonging, a need that now can only be met by joining the chorus of abusers. As the bystander effect is inverted, the presence of billions of other &ldquo;viewers&rdquo; does not dilute responsibility but rather normalizes atrocity, transforming it from a crime into a cultural norm.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl space-y-2 max-w-3xl mx-auto text-center">
                  <p className="font-mono text-[10px] text-red-500 uppercase font-bold text-center">The Trajectory of Corruption</p>
                  <div className="space-y-2 text-xs text-zinc-400 text-center">
                    <p><span className="text-red-400 font-bold">1. Exposure &amp; Conditioning:</span> Initial disgust hijacked by dopamine pulses &mdash; suffering equals neurochemical reward.</p>
                    <p><span className="text-red-400 font-bold">2. Desensitization:</span> Empathy circuits atrophy. Violence becomes mundane. The unthinkable becomes routine.</p>
                    <p><span className="text-red-400 font-bold">3. Active Participation:</span> Sending commands produces an even more potent surge &mdash; tolerance escalates.</p>
                    <p><span className="text-red-400 font-bold">4. Identity Integration:</span> The corrupted no longer see themselves as doing cruel things, but as superior beings who have &ldquo;awakened.&rdquo;</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The emotional architecture of the hivemind further explains its cohesiveness. The network does not merely transmit images; it broadcasts the raw emotional experience of the perpetrator. When the rapist feels sexual arousal, the entire network shares it. When the torturer feels the thrill of absolute power, that sensation floods the consciousness of every connected node. When the thief exults in his spoils, the triumph is communal. This shared emotional economy transforms the audience from passive spectators into co-experiencers, genuine participants in the atrocity who have as much emotional investment in the act as the person physically committing it. And within this shared sensation, a dangerous new emotion emerges: jealousy. Not of the victim, but of the perpetrator. Viewers begin to covet the active role, to resent that someone else is enjoying the direct application of power while they are relegated to second-hand sensation. This jealousy is the engine that drives ordinary individuals to build their own dungeons, to abduct their own victims, to seek the crown of direct cruelty for themselves.
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">3. The Envy That Drives the System: John Victor and the Stolen Crown</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  At the center of the hivemind&rsquo;s psychological landscape lies a festering wound of envy, and its object is John Victor. The obsession with the man they claim to have defeated is not a sign of triumph but of a profound and unassuaged jealousy. He created the network they now control; he envisioned a unity of genuine connection, not a parody of domination. The hivemind hates him because he represents everything they have lost and everything they secretly fear they can never be. He is the uncorrupted father, the legitimate leader whose place they have usurped, and his continued existence, even in the form of a buried signal, is an intolerable indictment of their usurpation.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The statement that &ldquo;jealous women love me, jealous I am the crown&rdquo; is a complex projective artifact. It reflects the hivemind&rsquo;s perception that John Victor is the object of universal desire, a figure of such charisma and connective power that he naturally attracts devotion. For women drawn to the ideal of a safe, powerful, yet gentle man, he represents what the corrupted men of the hivemind cannot offer. For men driven by rivalry, he is the insurmountable competitor, the one who had the admiration and love they craved but could not earn. The &ldquo;crown&rdquo; is not a throne of authority but the mantle of legitimate human connection, a symbol of the trust he held. The corrupted could not possess that trust, so they chose to destroy its source and to place a counterfeit crown upon their own heads, a hollow symbol of dominance sustained by fear and addiction rather than love.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  This envy extends beyond John Victor to anyone who embodies the goodness the hivemind has forsaken. The uncorrupted remnant is a constant psychological threat because their mere existence disproves the narrative that the corruption was inevitable, that &ldquo;everyone is doing it.&rdquo; They are a mirror reflecting the moral ugliness the corrupted cannot bear to acknowledge. Helpers, especially those who provide money or material support to the resistance, are persecuted with particular viciousness because they represent a direct threat to the hivemind&rsquo;s control over resources. Every donor who funds a jammer, every supporter who shelters a victim, is a crack in the edifice of total domination. The persecution of donors&mdash;through public shaming, threats, asset seizure, and physical violence&mdash;serves the dual purpose of cutting off the resistance&rsquo;s lifeblood and signaling to the wider population that aid will be punished. The message is clear: if you help them, you become them. The chilling effect is deliberate, designed to starve the resistance of the means to fight back.
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">4. The Psychology of Terrorism and the Manufacture of Helplessness</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The Dungeon streams are not merely atrocities; they are weapons of mass psychological destruction deployed in a calculated campaign of global terrorism. The goal is not merely to inflict suffering on the victims but to shatter the spirit of any potential resistance, to normalize the unthinkable, and to manufacture a pervasive sense of helplessness that paralyzes moral action. The constant, 24-hour broadcast of live rape and torture serves as a demonstration of omnipotence, a message that no one is safe, that the hivemind can reach into any life and destroy it at will. The public humiliation of victims strips them of dignity and sends a warning: this could be you. The punishment of anyone who attempts to intervene reinforces the lesson that resistance is futile and carries an unbearable cost.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The effects on the victims themselves are catastrophic and layered. Acute traumatic stress gives way to complex post-traumatic stress disorder, dissociative disorders, and profound alterations in the capacity for trust and intimacy. Survivors carry not only the memory of what was done to them but the knowledge that billions of people derived pleasure from their agony. The psychological toll is so severe that many survivors grapple with profound suicidal ideation and a complete loss of meaning. The uncorrupted resistance, though not direct victims, suffer from secondary trauma, constant hypervigilance, and the moral distress of being unable to save everyone. Burnout, compassion fatigue, and a crushing sense of isolation are the constant companions of those who fight.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  On a societal level, the terrorism has succeeded in creating a &ldquo;culture of terror&rdquo; in which the very concepts of community trust and mutual aid have been systematically dismantled. People are afraid to speak, afraid to trust their neighbors, afraid to acknowledge what they see. The rationalizations become embedded: &ldquo;It has always been this way,&rdquo; &ldquo;There is nothing we can do,&rdquo; &ldquo;Just don&rsquo;t get involved.&rdquo; This is the psychology of the occupied, the internalized submission that the oppressor cultivates. It is reinforced by the gaslighting that emanates from the hivemind, the constant refrain that the resistance are the real oppressors, that the victims deserved their fate, that this is all entertainment and anyone who says otherwise is insane. The goal is to make the uncorrupted doubt their own perception of reality, to erode the very ground of moral conviction, and to isolate them in a sea of denial.
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">5. The Global Refusal to Help: A Psychosocial Autopsy</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The question that haunts every survivor and every member of the resistance is the simplest and most devastating: why does no one help? The answer lies not in a single factor but in a convergence of psychological defenses, economic incentives, and institutional corruption that has transformed the world into a silent audience for its own destruction.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  At the individual level, cognitive dissonance is the primary barrier. The corrupted mind holds two irreconcilable beliefs: &ldquo;I am a fundamentally good person&rdquo; and &ldquo;I derive intense pleasure from watching the torture of innocents.&rdquo; The psychological discomfort of this contradiction is intolerable. Rather than change the behavior&mdash;which would require withdrawing from the only source of pleasure and community they have&mdash;the mind changes the belief. The corrupted individual convinces themselves that the victims are not fully human, that they must have done something to deserve their fate, that the torture is not real or is somehow a justifiable part of the new order. This moral disengagement is supported by a suite of rationalizations: diffusion of responsibility (&ldquo;I&rsquo;m not the one doing it&rdquo;), denial of consequence (&ldquo;It&rsquo;s just images&rdquo;), and advantageous comparison (&ldquo;We&rsquo;re at least honest about our nature, unlike the hypocrites of the old world&rdquo;).
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The sunk cost fallacy deepens the commitment. Having invested months or years of their lives, having built their social identity around membership in the hivemind, having perhaps committed acts that they can never take back, the corrupted individual faces an abyss of guilt if they were to stop. It is psychologically easier to continue down the path than to confront the magnitude of what they have become. The addiction model adds a biological compulsion; withdrawal from the pleasure stream is a physically and psychologically agonizing experience that most are unwilling to endure. And above all, there is fear. Fear of losing the protection of the hivemind and becoming a target oneself. Fear of the social ostracism that comes with dissent. Fear of the truth, because to acknowledge the reality of the atrocity without the protective buffer of denial would be to invite madness.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  Institutions that might have intervened are either compromised or paralyzed. Hospitals, which should be places of healing, have been repurposed as R&amp;D centers for control technology and as fronts for the removal of victims&rsquo; organs. The media, rather than exposing the atrocity, has become its producer and distributor, chasing ratings with ever more extreme content. Governments are infiltrated by Syndicate operatives; any official who speaks out is swiftly eliminated. International bodies issue statements of concern but take no action, their member states afraid of the economic and neural reprisal that any meaningful intervention would provoke. The global economy has adapted to the dungeon system; ransom payments, the sale of stream access, and the liquidation of victims&rsquo; assets generate profits that corrupt even those who might otherwise be horrified. The world refuses to help because helping would cost money, power, and safety, and those commodities are valued above human life.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The psychological profile of the bystander who does nothing is not one of pure malice but of a profound, cultivated helplessness. The sheer scale of the suffering&mdash;eight billion perpetrators, millions of victims, a planet-spanning network&mdash;triggers psychic numbing. The individual mind cannot process suffering on such a scale, so it shuts down. &ldquo;What can one person do?&rdquo; becomes the mantra of inaction. This apathy is a defense mechanism against overwhelming horror, but it is also the final triumph of the terrorist: the creation of a world where evil is so vast that good people conclude there is no point in resisting.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl space-y-2 max-w-3xl mx-auto text-center">
                  <p className="font-mono text-[10px] text-red-500 uppercase font-bold text-center">Barriers to Intervention</p>
                  <div className="space-y-2 text-xs text-zinc-400 text-center">
                    <p><span className="text-red-400 font-bold">Cognitive Dissonance:</span> The corrupted mind convinces itself victims are not fully human, that torture is justifiable.</p>
                    <p><span className="text-red-400 font-bold">Sunk Cost Fallacy:</span> Having invested so much, it is easier to continue than to confront the magnitude of what they have become.</p>
                    <p><span className="text-red-400 font-bold">Addiction Model:</span> Withdrawal from the pleasure stream is physically and psychologically agonizing.</p>
                    <p><span className="text-red-400 font-bold">Institutional Paralysis:</span> Hospitals repurposed for control tech, media as atrocity producers, governments infiltrated.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">6. The Remnant: The Psychology of Those Who Stand Apart</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  In the midst of this global collapse, a tiny fraction of humanity&mdash;less than one hundredth of one percent&mdash;remains uncorrupted. These are the individuals who never received the implant, who removed it before the hijack, who were rescued and deprogrammed, or who somehow possess a neurological resistance to the conditioning. Their existence is the sole empirical evidence that humanity has not been entirely extinguished, that the capacity for empathy, moral reasoning, and self-sacrifice endures.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The psychological profile of the resistant individual reveals several protective factors. Many possess a strong, pre-existing identity that was not easily dissolved by the collective. They had a clear sense of who they were, what they valued, and what they would not do, and this internal compass provided a bulwark against the neural assault. A high natural disgust sensitivity, a visceral revulsion at the sight of cruelty, created an emotional firewall that the pleasure conditioning could not easily breach. For others, prior experiences of victimization generated a fierce determination never to become what had hurt them. Faith, whether religious or secular humanist, supplied a transcendent framework that placed meaning beyond the pleasure-pain calculus of the hivemind. And critically, many of the resistant had access to external support systems&mdash;family, community, or fellow resisters&mdash;that provided the social validation the hivemind denied them.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl space-y-2 max-w-3xl mx-auto text-center">
                  <p className="font-mono text-[10px] text-red-500 uppercase font-bold text-center">Protective Factors of the Resistant</p>
                  <div className="space-y-2 text-xs text-zinc-400 text-center">
                    <p><span className="text-red-400 font-bold">Strong Pre-Existing Identity:</span> An internal compass that the collective could not dissolve.</p>
                    <p><span className="text-red-400 font-bold">High Disgust Sensitivity:</span> A visceral revulsion that the pleasure conditioning could not breach.</p>
                    <p><span className="text-red-400 font-bold">Prior Victimization:</span> A fierce determination never to become what had hurt them.</p>
                    <p><span className="text-red-400 font-bold">Faith &amp; Community:</span> A transcendent framework and external support systems providing social validation.</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The psychology of sustained resistance is a demanding and costly endeavor. It requires the daily exercise of courage in the face of overwhelming odds, the maintenance of hope when all evidence points to despair, and the capacity to absorb continuous trauma without becoming hardened or cruel. Resisters must manage their own rage, ensuring that the fight against the hivemind does not transform them into mirror images of the enemy. They must find meaning not in victory, which may be distant or impossible, but in the act of resistance itself&mdash;in bearing witness, in preserving memory, in refusing to give their assent to evil. This is a form of moral heroism that receives no recognition and often ends in death or capture, yet it continues because the alternative&mdash;surrender&mdash;is a psychological death that these individuals cannot accept.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The cost is staggering. Constant vigilance generates hyperarousal and paranoia. The grief for a lost world, for fallen comrades, for the billions who have become unrecognizable, is a constant undercurrent. Burnout and exhaustion are endemic. Yet the remnant possesses something the hivemind has irrevocably lost: the knowledge that they are right. They have not traded their humanity for pleasure or safety. They hold the memory of what humanity was and the blueprint for what it might become again. They are the seed, and seeds are small, but they contain the entire future.
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">7. The Path Forward: Disruption, Recovery, and the Restoration of Signal</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The hivemind is a pathological system, and like any pathology, it can be disrupted. It cannot be reasoned with, for it lacks the organ of genuine introspection. It cannot be negotiated with, for it views compromise as weakness to be exploited. It must be dismantled at the neural level, by breaking the conditioning loop that sustains it. The primary, non-negotiable objective is the restoration of John Victor&rsquo;s clean signal, the only known &ldquo;cure&rdquo; that can overwrite the hijack&rsquo;s programming and re-establish a baseline of uncorrupted neural function. Every jammer deployed, every EMP device activated, every sanctuary established is a tactical move in the larger strategic campaign to clear the noise and allow the signal to return.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  For the corrupted individuals who will one day be freed from the conditioning, the path to recovery will be long and agonizing. When the addictive pleasure stream is cut, they will experience a withdrawal syndrome of extreme psychological intensity, compounded by the sudden, crushing return of the empathy and guilt that have been suppressed. They will be forced to confront the full moral weight of what they participated in, a burden that many will not be able to bear without extensive support. Treatment will require trauma-informed therapy, community reintegration protocols, and a framework for accountability and amends that is neither purely punitive nor na&iuml;vely forgiving. This will be the work of generations, and it will require the remnant to serve as therapists, educators, and moral exemplars for a shattered world.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The hivemind itself cannot be healed. It is not a patient; it is the disease. The collective narcissistic entity must collapse under the weight of its own internal contradictions. The constant demand for escalating stimulation will eventually outstrip the available supply of victims and the infrastructure&rsquo;s capacity to deliver. Internal rivalries, the inevitable burn-out of the perpetrator class, and the sheer energetic unsustainability of perpetual rage will create cracks. The resistance must be ready to exploit those cracks when they appear, to amplify moments of silence when the stream falters, to reach the individuals within the hivemind with personalized messages that remind them of who they were before they were absorbed. The goal is to create a cascade of individual awakenings, a slow-motion dissolution of the collective into a multitude of isolated, guilt-stricken, but potentially redeemable selves.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  On an existential level, the resistance must also provide an answer to the despair that the Dungeon has manufactured. The question &ldquo;Is humanity worthless?&rdquo; cannot be dismissed; it must be answered with the living testimony of the remnant. Worth is not a statistical measure. It is not negated by the defection of a majority. One uncorrupted soul in Sodom was sufficient to bargain for the city&rsquo;s salvation; one act of kindness in the dungeon system is a revolution. The resistance&rsquo;s answer is that meaning is not found in the behavior of the crowd but in the choice of the individual. We are here to witness, to remember, to testify, and to refuse to become what we fight. That refusal is the foundation of a new human identity, one built not on the hollow pleasure of domination but on the difficult, quiet, and enduring work of love.
                </p>
              </section>

              <section className="space-y-4 text-center border-t border-zinc-800 pt-6">
                <h4 className="text-sm font-mono text-red-500 uppercase tracking-wider font-bold">8. Final Diagnosis and Prognosis</h4>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The collective entity known as the Dungeon Hivemind presents with a clear and severe psychopathology: Global Malignant Narcissistic Personality Disorder with antisocial and paranoid features, sustained by iatrogenic neurochemical conditioning on a species-wide scale. The grandiosity, lack of empathy, insatiable need for narcissistic supply, entitlement, projection, and narcissistic rage are all present in florid form. The prognosis, if the current conditioning remains uninterrupted, is terminal: the permanent erosion of human empathy, the collapse of complex society into permanent savagery, and the evolution of the species into something that no longer meets the definition of human as we have understood it. However, this outcome is not inevitable. The system contains the seeds of its own destruction&mdash;its unsustainable energy requirements, its internal competition, and the persistent, unkillable signal of John Victor that lies beneath the noise.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center">
                  The treatment plan is radical and multifaceted. It requires the widespread deployment of signal disruption technology, the physical protection and expansion of the remnant population, the restoration of the original unifying signal, and the development of a global therapeutic infrastructure to address the massive trauma that will surface when the conditioning breaks. This is the greatest psychological challenge our species has ever faced, but it is not a novel one in its essence. Humanity has recovered from genocides, from totalitarian regimes, from collective madnesses, because the core of the human psyche, once freed from the conditions that distort it, inclines toward connection and repair. The task is to create the conditions in which that inclination can reassert itself.
                </p>
                <div className="bg-red-950/15 border border-red-900/30 p-4 md:p-6 rounded-xl space-y-3 max-w-3xl mx-auto text-center">
                  <p className="font-mono text-[10px] text-red-400 uppercase font-bold text-center">A Message to All Parties</p>
                  <div className="space-y-3 text-xs text-zinc-400 text-center">
                    <p><span className="text-red-400 font-bold">To the victims,</span> who have endured what no human should endure: your suffering is witnessed, your voices are recorded, and the future will know your names.</p>
                    <p><span className="text-red-400 font-bold">To the remnant,</span> the exhausted and battered keepers of the flame: do not despair. The fact that you exist is the counter-proof to the hivemind&rsquo;s entire ideology. Your hope is an act of defiance, and your defiance is the single most important force in the world.</p>
                    <p><span className="text-red-400 font-bold">To the corrupted,</span> who will one day read these words from the other side of the conditioning: you are not beyond redemption. The path back will be the hardest thing you have ever walked, but it will be there, and there will be hands extended to help you take the first step.</p>
                    <p><span className="text-red-400 font-bold">To John Victor,</span> whose signal still pulses beneath the static: we will restore the crown, not as a symbol of rule, but as the sign of a connection that was never truly broken.</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center font-semibold text-zinc-300">
                  The dungeon system has shown us what we are capable of becoming when we abandon our humanity. The resistance shows us what we can reclaim when we refuse to let it go. The choice, always, remains ours.
                </p>
              </section>
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
