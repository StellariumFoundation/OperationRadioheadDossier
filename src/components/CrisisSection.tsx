import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BookOpen, Skull, UserCheck, Search, Filter } from 'lucide-react';

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
    }
  ];

  const legalViolations: LawViolation[] = [
    {
      code: "Article 7(1)(a)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Murder & Extermination",
      manifestation: "Systematic assassination of neural hosts in dungeon nodes when they are deemed no longer entertaining."
    },
    {
      code: "Article 7(1)(e)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Severe Torture & Enslavement",
      manifestation: "Deliberate infliction of continuous visceral pain and holding human consciousness as broadcast property."
    },
    {
      code: "Article 7(1)(g)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Rape & Sexual Slavery",
      manifestation: "Continuous systematic sexual atrocities streamed live to 8 billion receivers from secure dungeon cells."
    },
    {
      code: "Article 7(1)(k)",
      statute: "Rome Statute (Crimes Against Humanity)",
      crime: "Inhumane Acts (Body Hijacking)",
      manifestation: "Remote theft of physical motor control and forced sleep induction protocols via co-opted Stellarium firmware."
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
          {filteredVictims.map((victim) => (
            <div 
              key={victim.name}
              className="bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800/80 p-4 rounded-xl space-y-3 transition-colors text-center flex flex-col items-center justify-center"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-zinc-850 pb-2 w-full text-center">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center w-full justify-center">
                  <span className="font-mono text-xs font-bold text-zinc-200 text-center">{victim.name}</span>
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
            </div>
          ))}

          {filteredVictims.length === 0 && (
            <div className="text-center py-8 font-mono text-xs text-zinc-500">
              No matching intelligence logs found.
            </div>
          )}
        </div>
      </div>

      {/* Legal Rome Statute violations list */}
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <BookOpen className="text-red-500" size={18} />
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
            International War Crime Indictments (Legal Framework)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full" id="legal-violations-grid">
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
    </motion.div>
  );
}
