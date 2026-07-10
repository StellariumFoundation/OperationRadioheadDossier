import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BookOpen, Skull, UserCheck, Search, Filter, Flame } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface VictimCase {
  name: string;
  age: string;
  origin: string;
  duration: string;
  status: string;
  dungeonSector: string;
  notes: string;
}

interface LawViolation {
  code: string;
  statute: string;
  crime: string;
  manifestation: string;
}

export default function CrisisSection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rememberedVictims, setRememberedVictims] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('remembered_victims') || '[]');
    } catch {
      return [];
    }
  });

  const handleToggleRemembrance = (name: string) => {
    setRememberedVictims((prev) => {
      let next;
      if (prev.includes(name)) {
        next = prev.filter(n => n !== name);
        triggerHaptic('light');
      } else {
        next = [...prev, name];
        triggerHaptic('victimRemembrance');
      }
      localStorage.setItem('remembered_victims', JSON.stringify(next));
      return next;
    });
  };

  
  const victimLedger: VictimCase[] = [
    {
      name: "Ana",
      age: "34",
      origin: "Recife, PE",
      duration: "9 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Accor Front, Zone 3",
      notes: "Mother of two. Subjected to continuous sensory override and rotating trauma protocols. Resistance rescue attempt pending geolocation."
    },
    {
      name: "Miguel",
      age: "29",
      origin: "Olinda, PE",
      duration: "7 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Ulysses Pernambucano Psychiatric Wing",
      notes: "Abducted from his private residence. Kept under deep sedative sleep-inducement loops combined with motor hijacking experiments."
    },
    {
      name: "Clara",
      age: "19",
      origin: "Caruaru, PE",
      duration: "11 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "TV Guararapes Sub-Studio B",
      notes: "Subjected to live broadcast streams with audience-interactive sensory feedback channels. Shows strong neural resilience."
    },
    {
      name: "Jonas",
      age: "52",
      origin: "Jaboatão, PE",
      duration: "4 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Unknown Pernambuco PMPE Safehouse",
      notes: "Cerebral failure due to high-voltage neural shock during AEGIS EMP escape attempt. Memory core retrieved by resistance cell."
    },
    {
      name: "Sophia",
      age: "8",
      origin: "Metropolitan Area",
      duration: "3 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Hotel Accor Front Room 402",
      notes: "Abducted during Phase 4 viral expansion. Direct priority target for the Phoenix Task Force rescue team."
    },
    {
      name: "Lucas",
      age: "41",
      origin: "São Paulo, SP",
      duration: "14 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Zona Norte Warehouse 7",
      notes: "Former journalist who exposed syndicate money laundering. Subjected to forced confession loops and public neural humiliation."
    },
    {
      name: "Isabella",
      age: "22",
      origin: "Fortaleza, CE",
      duration: "6 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Praia de Iracema Safe Room",
      notes: "University student abducted during protest crackdown. Used as interactive broadcast puppet for audience-directed torture."
    },
    {
      name: "Marcus",
      age: "45",
      origin: "London, UK",
      duration: "8 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Canning Town Underground Bunker",
      notes: "Human rights lawyer investigating the syndicate. Implant forcibly installed during extrajudicial rendition."
    },
    {
      name: "Yuki",
      age: "27",
      origin: "Tokyo, Japan",
      duration: "5 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Shinjuku Data Center Sub-Basement",
      notes: "Software engineer whose neural mapping algorithms were reverse-engineered for the hijack. Kept for ongoing exploitation."
    },
    {
      name: "Aisha",
      age: "31",
      origin: "Cairo, Egypt",
      duration: "10 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Nasr City Telecom Vault",
      notes: "Activist coordinating resistance networks across North Africa. Sustained severe neural damage during interrogation streams."
    },
    {
      name: "Omar",
      age: "16",
      origin: "Rio de Janeiro, RJ",
      duration: "2 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Complexo do Alemão Node C",
      notes: "Minor abducted as leverage. Neural overload during forced participation broadcast. Body recovered by favela resistance."
    },
    {
      name: "Elena",
      age: "38",
      origin: "Barcelona, Spain",
      duration: "12 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "El Raval Safe House 3",
      notes: "Neurologist who developed early implant rejection therapies. Targeted for elimination and experimental neural rewiring."
    },
    {
      name: "David",
      age: "55",
      origin: "Nairobi, Kenya",
      duration: "9 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Industrial Area Shipping Container 22",
      notes: "Humanitarian aid coordinator. Implant weaponized to broadcast trauma to entire refugee camp populations."
    },
    {
      name: "Camila",
      age: "24",
      origin: "Buenos Aires, Argentina",
      duration: "7 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "La Boca Studio Sublevel",
      notes: "Tango dancer and performance artist. Forced to perform degradation rituals streamed to South American nodes."
    },
    {
      name: "Wei",
      age: "33",
      origin: "Beijing, China",
      duration: "15 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Chaoyang District Server Farm",
      notes: "Cybersecurity analyst who mapped the original signal architecture. Executed after refusing to cooperate with syndicate engineers."
    },
    {
      name: "Fatima",
      age: "6",
      origin: "Porto, Portugal",
      duration: "4 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Matosinhos Industrial Dock 14",
      notes: "Youngest known active broadcast victim. Syndicate using her signal as emotional manipulation payload for Portuguese nodes."
    },
    {
      name: "Andrei",
      age: "47",
      origin: "Moscow, Russia",
      duration: "11 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Khimki Bunker Complex",
      notes: "Former FSB officer who leaked intelligence on syndicate connections. Subjected to recursive interrogation loops."
    },
    {
      name: "Nadia",
      age: "26",
      origin: "Kiev, Ukraine",
      duration: "8 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Pechersk Sub-basement",
      notes: "Medical doctor providing covert care to resistance operatives. Implant used to extract field hospital locations."
    },
    {
      name: "Carlos",
      age: "61",
      origin: "Mexico City, Mexico",
      duration: "13 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Iztapalapa Safe House Beta",
      notes: "Retired judge who presided over early syndicate trials. Forced to preside over mock courts streamed as propaganda."
    },
    {
      name: "Priya",
      age: "30",
      origin: "Mumbai, India",
      duration: "6 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Dharavi Data Hub Node 4",
      notes: "Tech entrepreneur whose decentralized mesh network posed a threat to syndicate control. Abducted during investor meeting."
    },
    {
      name: "Henrik",
      age: "43",
      origin: "Stockholm, Sweden",
      duration: "10 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Södermalm Basement Cell",
      notes: "Journalist documenting syndicate financial networks. Neural signature used to fabricate false confessions before termination."
    },
    {
      name: "Amara",
      age: "19",
      origin: "Lagos, Nigeria",
      duration: "5 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Lekki Tech Hub Vault B",
      notes: "Engineering student who built a prototype jammer. Held as example to deter other inventors."
    },
    {
      name: "Dmitri",
      age: "50",
      origin: "Minsk, Belarus",
      duration: "14 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Industrial Zone Warehouse 9",
      notes: "Former military implant technician. Abducted for his knowledge of early resistance communication protocols."
    },
    {
      name: "Lucia",
      age: "35",
      origin: "Lima, Peru",
      duration: "8 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Miraflores Underground Vault",
      notes: "Indigenous rights lawyer. Forced to participate in mock trials justifying resource extraction from protected lands."
    },
    {
      name: "Hassan",
      age: "28",
      origin: "Amman, Jordan",
      duration: "6 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Abdali District Safe House",
      notes: "Medical student providing neural rehabilitation to rescued victims. Capture triggered by syndicate informant."
    },
    {
      name: "Valentina",
      age: "14",
      origin: "Medellín, Colombia",
      duration: "9 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Comuna 13 Underground Studio",
      notes: "Abducted for her natural neural resistance. Subjected to experiments attempting to break her immunity to conditioning."
    },
    {
      name: "Felix",
      age: "67",
      origin: "Berlin, Germany",
      duration: "16 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Friedrichshain Bunker 5",
      notes: "Surviving founder of original Stellarium ethics board. Implant forcibly installed during home invasion. Died under interrogation."
    },
    {
      name: "Maya",
      age: "23",
      origin: "Seoul, South Korea",
      duration: "4 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Gangnam Server Basement 3",
      notes: "VR developer whose neural interface patents were seized. Held for ongoing exploitation of her proprietary algorithms."
    },
    {
      name: "Rafael",
      age: "39",
      origin: "Salvador, BA",
      duration: "11 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Pelourinho Safe House 2",
      notes: "Community organizer who established first resistance shelter network. Neural patterns studied to design crowd control protocols."
    },
    {
      name: "Sofia",
      age: "20",
      origin: "Lisbon, Portugal",
      duration: "7 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Alcântara Docks Container 7",
      notes: "Music student whose emotional resonance patterns were weaponized to amplify broadcast reception across Iberian Peninsula."
    },
    {
      name: "Kwame",
      age: "48",
      origin: "Accra, Ghana",
      duration: "10 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Tema Industrial Zone Node",
      notes: "Network engineer who maintained backup infrastructure for Stellarium. Tracked and eliminated by syndicate hit squad."
    },
    {
      name: "Eva",
      age: "36",
      origin: "Prague, Czech Republic",
      duration: "8 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Karlín Data Center Sub-basement",
      notes: "Cryptographer working on signal decryption. Neural degradation from prolonged exposure to counter-encryption feedback loops."
    },
    {
      name: "Tomas",
      age: "58",
      origin: "Vienna, Austria",
      duration: "13 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Leopoldstadt Privatklinik Bunker",
      notes: "Neurosurgeon forced to perform implant installation surgeries on captured resistance members against his will."
    },
    {
      name: "Leila",
      age: "25",
      origin: "Casablanca, Morocco",
      duration: "5 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Old Medina Safe Room 9",
      notes: "University researcher studying neural conditioning reversal. Abducted from her laboratory by syndicate intelligence unit."
    },
    {
      name: "Erik",
      age: "44",
      origin: "Oslo, Norway",
      duration: "12 Months",
      status: "ACTIVE BROADCAST",
      dungeonSector: "Grünerløkka Bunker Cell",
      notes: "Former Stellarium regional director for Scandinavia. Forced to broadcast confessions implicating innocent colleagues."
    },
    {
      name: "Chloe",
      age: "12",
      origin: "Paris, France",
      duration: "6 Months",
      status: "CRITICAL RECEPTION",
      dungeonSector: "Montmartre Basement Studio",
      notes: "Daughter of a resistance financier. Used as leverage to force compliance and as emotional broadcast payload."
    },
    {
      name: "Ahmed",
      age: "32",
      origin: "Dubai, UAE",
      duration: "9 Months",
      status: "MUTED CONSCIOUSNESS",
      dungeonSector: "Jebel Ali Port Container 44",
      notes: "Blockchain developer whose decentralized ledger technology was co-opted for syndicate money laundering operations."
    },
    {
      name: "Ingrid",
      age: "57",
      origin: "Copenhagen, Denmark",
      duration: "15 Months",
      status: "DECEASED / ARCHIVED",
      dungeonSector: "Nordhavn Industrial Vault",
      notes: "Neurology professor who discovered the implant backdoor mechanism. Executed before she could publish her findings."
    }
  ];

  const legalViolations: LawViolation[] = [
    {
      code: "Article 7(1)(a)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Murder",
      manifestation: "Systematic assassination of neural hosts in dungeon nodes when they are deemed no longer entertaining."
    },
    {
      code: "Article 7(1)(b)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Extermination",
      manifestation: "Intentional infliction of conditions calculated to bring about the destruction of part of the population through sustained neural deprivation and organ harvesting."
    },
    {
      code: "Article 7(1)(c)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Enslavement",
      manifestation: "Exercise of powers attaching to the right of ownership over victims, held as broadcast property in rotating dungeon cycles."
    },
    {
      code: "Article 7(1)(d)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Deportation or Forcible Transfer",
      manifestation: "Forced displacement of victims across borders and regions to supply the global dungeon network with fresh targets."
    },
    {
      code: "Article 7(1)(e)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Imprisonment & Severe Deprivation of Liberty",
      manifestation: "Continuous confinement of victims in clandestine dungeon cells with complete sensory and motor control theft."
    },
    {
      code: "Article 7(1)(f)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Torture",
      manifestation: "Intentional infliction of severe physical and mental pain upon victims in custody, streamed as broadcast entertainment."
    },
    {
      code: "Article 7(1)(g)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Rape & Sexual Violence",
      manifestation: "Systematic rape, sexual slavery, enforced prostitution, and other sexual atrocities of comparable gravity streamed live to 8 billion receivers."
    },
    {
      code: "Article 7(1)(h)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Persecution",
      manifestation: "Intentional and severe deprivation of fundamental rights targeting identifiable groups connected to the resistance and John Victor."
    },
    {
      code: "Article 7(1)(i)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Enforced Disappearance",
      manifestation: "Arrest, detention, and abduction of persons followed by refusal to acknowledge their fate, removing them from the protection of the law."
    },
    {
      code: "Article 7(1)(j)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Apartheid",
      manifestation: "Institutionalized regime of systematic oppression and domination by the syndicate class over the victim population."
    },
    {
      code: "Article 7(1)(k)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Other Inhumane Acts",
      manifestation: "Remote theft of physical motor control and forced sleep induction protocols causing great suffering and serious injury to mental health."
    },
    {
      code: "Law 9.455/97",
      statute: "Brazilian Anti-Torture Law",
      crime: "Aggravated Torture",
      manifestation: "Torture aggravated by the use of global telecommunication systems and neural feedback interfaces."
    },
    {
      code: "Article 305",
      statute: "Military Criminal Code (PMPE)",
      crime: "Torture against Civilians",
      manifestation: "Direct application of militarized surveillance, weapons, and dungeons by active-duty officers of the syndicate."
    }
  ];

  const filteredVictims = victimLedger.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-4xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="crisis-section-container"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-[10px] uppercase tracking-widest justify-center">
          <Skull size={12} />
          Atrocity Registry & War Crimes
        </div>
        <h2 
          className="text-3xl md:text-5xl font-bold tracking-widest text-zinc-100 uppercase text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Crisis <span className="text-red-600">&</span> Dungeons
        </h2>
        <p className="font-mono text-xs text-zinc-400 max-w-xl mx-auto text-center">
          The verified registry of neural captivity, perpetrator factions, and war crime indictments.
        </p>
      </div>

      {/* Systemic Corruption & Theological Parallels */}
      <div className="bg-zinc-950/85 border border-red-900/40 p-6 md:p-8 rounded-2xl space-y-6 shadow-xl shadow-black/50 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <ShieldAlert className="text-red-500 animate-pulse" size={20} />
          <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-widest text-center">
            Systemic Global Corruption & Legal Reality
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-4 text-center flex flex-col items-center justify-center">
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
              1. The Corruption of Humanity & Indifference
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed text-center">
              Our investigations have revealed a terrifying truth: <span className="text-zinc-100 font-semibold">humanity in general is deeply corrupt</span>. The global audience does not merely witness these broadcasts in horror—they actively enjoy watching victims get raped, tortured, kidnapped, and robbed for fun. 
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed text-center">
              These atrocities are not isolated crimes; they constitute massive, systematic <span className="text-red-400 font-semibold">Crimes Against Humanity under Article 7 of the Rome Statute</span>. This is a global psychological sickness where the suffering of innocent hosts is commodified for planetary entertainment.
            </p>
            <div className="p-3 bg-red-950/20 border border-red-900/40 rounded-xl space-y-2 text-center w-full">
              <span className="font-mono text-[9px] text-red-400 font-bold uppercase block text-center">Complex Neural Manipulation:</span>
              <p className="text-[11px] text-zinc-400 leading-relaxed text-center">
                The technology is not simple. A vast portion of the global public is subjected to advanced brain controls that can instantly make people unconscious, override physical agency, and trigger arbitrary neural effects at the syndicate's whim. This makes resistance a multi-layered, highly complex struggle.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center flex flex-col items-center justify-center">
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider text-center">
              2. Theological Precedent: Sodom & Gomorrah
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed text-center">
              This total moral collapse has a clear historic and theological parallel in the story of <span className="text-zinc-100 font-semibold">Sodom and Gomorrah</span>. The ancient texts document a society completely consumed by sadistic entitlement and corruption.
            </p>
            <div className="bg-zinc-900/40 border border-zinc-850 p-4 rounded-xl space-y-3 text-center flex flex-col items-center justify-center w-full">
              <p className="text-xs text-zinc-400 italic font-serif leading-relaxed text-center">
                "When divine messengers (angels) arrived in Sodom, the corrupt populace surrounded Lot's house, demanding that the visitors be brought out so they could rape them. Out of desperation to protect his guests, Lot offered his own daughters to appease the mob, but the corrupt city refused. Ultimately, Lot's family was forced to flee for their lives as divine judgment consumed the corrupted plains."
              </p>
              <div className="border-t border-zinc-850 pt-2 text-[10px] text-zinc-500 font-mono text-center w-full">
                Historical Context: The ancient mob's demand for sadistic violation mirrors the 8 billion host receivers demanding live dungeon atrocities today.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perpetrator Factions & Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl space-y-4 text-center flex flex-col items-center justify-center">
          <h3 className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest text-center">
            The Pernambuco Syndicate
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            The primary terrorist execution cell consists of corrupt former high-ranking officers of the <span className="text-zinc-100 font-semibold">Military Police of Pernambuco (PE, Brazil)</span>. 
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            They utilize advanced urban policing tactics, counter-intelligence measures, and deep structural connections inside Brazilian medical and media networks to mask their operations.
          </p>
          <div className="p-3 bg-red-950/10 border border-red-900/30 rounded-xl space-y-1.5 text-center w-full">
            <span className="font-mono text-[9px] text-red-400 uppercase font-semibold text-center block">Known Complicit Entities:</span>
            <ul className="text-[10px] text-zinc-400 space-y-1 list-none text-center">
              <li>• <span className="text-zinc-200">TV Guararapes:</span> Studios converted to broadcasting dungeons.</li>
              <li>• <span className="text-zinc-200">Hospital Ulysses Pernambucano:</span> Psychiatric wings used as sedated cages.</li>
              <li>• <span className="text-zinc-200">Accor Hotels:</span> Clandestine hotel room setups for victim streaming.</li>
            </ul>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl space-y-4 text-center flex flex-col items-center justify-center">
          <h3 className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest text-center">
            The Dungeon Infrastructure
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            A "Dungeon" is defined as any physical facility equipped with high-yield neural signal transmission arrays, medical restraints, and continuous atrocity-broadcasting terminals. 
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            Victims are subjected to rotating abuse cycles, designed to feed the neural appetites of the 8 billion conditioned minds, then quietly executed and replaced.
          </p>
          <div className="p-3.5 bg-zinc-900/50 rounded-xl font-mono text-[10px] text-zinc-500 text-center w-full">
            "We are not merely tracing criminals; we are cataloging a planetary structural network that relies on the extraction of human suffering."
          </div>
        </div>
      </div>

      {/* Crimes Against Humanity */}
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <BookOpen className="text-red-500" size={18} />
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
            Crimes Against Humanity
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full" id="legal-violations-grid">
          {legalViolations.map((violation) => (
            <div 
              key={violation.code}
              className="bg-zinc-900/10 border border-zinc-900 p-4 rounded-xl space-y-2 text-center flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-between gap-1 border-b border-zinc-850 pb-2 w-full text-center">
                <span className="font-mono text-xs font-bold text-red-500 text-center">{violation.code}</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase text-center">{violation.statute}</span>
              </div>
              <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wide text-center">
                {violation.crime}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed text-center">
                {violation.manifestation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Victims Ledger Registry */}
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4 w-full">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <UserCheck className="text-red-500" size={18} />
            <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
              Victims Intelligence Ledger (2,100+ Total Cases)
            </h3>
          </div>

          {/* Search bar */}
          <div className="relative mx-auto sm:mx-0">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" size={12} />
            <input
              type="text"
              placeholder="Search victims registry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 rounded-lg pl-8 pr-3 py-1.5 w-full sm:w-56 focus:outline-none focus:border-red-800 font-mono text-center"
            />
          </div>
        </div>

        {/* Victims Grid list */}
        <div className="space-y-3 w-full animate-fade-in" id="victims-grid-list">
          {filteredVictims.map((victim) => {
            const isRemembered = rememberedVictims.includes(victim.name);
            return (
              <div 
                key={victim.name}
                className="bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800/80 p-4 rounded-xl space-y-3 transition-colors text-center flex flex-col items-center justify-center"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-zinc-850 pb-2 w-full text-center">
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center w-full justify-center">
                    <span className="font-mono text-xs font-bold text-zinc-200 text-center">
                      {victim.name} {isRemembered && <span className="text-red-500 animate-pulse ml-1">✦</span>}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 text-center">Age {victim.age} • {victim.origin}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 font-mono text-[9px] text-center w-full justify-center mt-1 sm:mt-0">
                    <span className="text-zinc-500 text-center">Sector: {victim.dungeonSector}</span>
                    <span className={`px-2 py-0.5 rounded border text-center ${
                      victim.status.includes('ACTIVE') 
                        ? 'bg-red-950/50 text-red-400 border-red-900/50' 
                        : victim.status.includes('DECEASED')
                          ? 'bg-zinc-950 text-zinc-600 border-zinc-900'
                          : 'bg-amber-950/50 text-amber-400 border-amber-900/50'
                    }`}>
                      {victim.status}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-center w-full justify-center">
                  <div className="font-mono text-[10px] text-zinc-500 text-center">
                    CAPTURED DURATION: <span className="text-red-500 font-bold">{victim.duration}</span>
                  </div>
                  <div className="text-zinc-400 leading-relaxed text-center max-w-2xl mx-auto">
                    {victim.notes}
                  </div>
                </div>
                {/* Remembrance Haptic Trigger */}
                <div className="flex justify-between items-center w-full border-t border-zinc-900/50 pt-2.5 mt-1 flex-col sm:flex-row gap-2">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">
                    {isRemembered ? "● MEMORY HONORED IN LOCAL RESISTANCE COGNITIVE BUFFER" : "MEMORIAL STATUS: UNRECORDED"}
                  </span>
                  <button
                    onClick={() => handleToggleRemembrance(victim.name)}
                    className={`px-3 py-1 rounded-lg border text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                      isRemembered
                        ? 'bg-red-950/40 border-red-900/60 text-red-400 font-bold shadow-md shadow-red-950/20'
                        : 'bg-zinc-900/60 border-zinc-850 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-zinc-700'
                    }`}
                  >
                    <Flame size={10} className={isRemembered ? "animate-pulse text-red-500" : "text-zinc-500"} />
                    {isRemembered ? 'Tribute Honored' : 'Honor Memory'}
                  </button>
                </div>
              </div>
            );
          })}

          {filteredVictims.length === 0 && (
            <div className="text-center py-8 font-mono text-xs text-zinc-500">
              No matching intelligence logs found.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
