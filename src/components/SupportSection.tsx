import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, Landmark, Coins, Copy, Check, Wallet, Landmark as BankIcon } from 'lucide-react';

interface Sanctuary {
  id: string;
  name: string;
  location: string;
  capacity: string;
  status: string;
  features: string[];
}

interface BankAccount {
  id: string;
  title: string;
  bankName: string;
  details: string;
}

export default function SupportSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeBankId, setActiveBankId] = useState<string>('cayman');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const xmrAddress = "44u8KhinKQ4SgpxwS5jq3cJBMWVsWnMHaGMqYp8abTw3iAJW5izBm9V7uoNVcXAeWS6UqUzVdrn2qAtH4Epd5RkoDJxtRaL";

  const bankAccounts: BankAccount[] = [
    {
      id: "cayman",
      title: "Cayman Islands (USD)",
      bankName: "BANCO C6 S.A. CAYMAN BRANCH",
      details: "Account holder: ELIABE MATOS DA SILVA\nAccount number: 1009519676\nSwift: CSIXKYKY\nCountry: Cayman Islands\nCurrency: Dollars\nIntermediary bank details:\nBank: JP Morgan Chase Bank, NA\nSwift: CHASUS33"
    },
    {
      id: "chf",
      title: "Swiss Franc (CHF)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "brl",
      title: "Brazilian Real (BRL)",
      bankName: "PIX Key (Email)",
      details: "stellar.foundation.us@gmail.com"
    },
    {
      id: "eur_local",
      title: "Euro (Local SEPA)",
      bankName: "Revolut Bank UAB",
      details: "Beneficiary: Eliabe Matos Da Silva\nIBAN: LT93 3250 0324 1949 5535\nBIC/SWIFT: REVOLT21\nAddress: Konstitucijos ave. 21B, 08130, Vilnius, Lithuania"
    },
    {
      id: "eur_intl",
      title: "Euro (International SWIFT)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "gbp",
      title: "British Pound (GBP)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "hkd",
      title: "Hong Kong Dollar (HKD)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "aed",
      title: "UAE Dirham (AED)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "ils",
      title: "Israeli New Shekel (ILS)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "jpy",
      title: "Japanese Yen (JPY)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    },
    {
      id: "pln",
      title: "Polish Zloty (PLN)",
      bankName: "Revolut Technologies Singapore Pte. Ltd",
      details: "Beneficiary: Eliabe Matos Da Silva\nAccount: 6120621849\nBIC/SWIFT: REVOSGS2\nAddress: 6 Battery Road, Floor 6-01, 049909, Singapore, Singapore"
    }
  ];

  const sanctuaries: Sanctuary[] = [
    {
      id: "sanctuary-1",
      name: "Caelum Shield Sanctuary",
      location: "Northern Hemisphere Sector A",
      capacity: "1,200 slots",
      status: "SECURE & ACTIVE",
      features: ["Full EMP perimeter shielding", "Food & medical reserves for 18 months", "Independent water filtration"]
    },
    {
      id: "sanctuary-2",
      name: "Andean Refuge Node 14",
      location: "South American Sector G",
      capacity: "650 slots",
      status: "SECURE & ACTIVE",
      features: ["Multiple Guardian Angel jammers", "Underground basalt insulation", "Hydroponic food production"]
    },
    {
      id: "sanctuary-3",
      name: "Oceanic Vault Sector E",
      location: "Pacific Marine Deep Node",
      capacity: "2,000 slots",
      status: "AT MAXIMUM CAPACITY",
      features: ["Subsurface Faraday insulation", "Direct fiber-link reporting", "Surgical trauma care suite"]
    }
  ];

  const activeAccount = bankAccounts.find(acc => acc.id === activeBankId) || bankAccounts[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-4xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="support-section-container"
    >
      {/* Header */}
      <div className="text-center space-y-2 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-[10px] uppercase tracking-widest justify-center">
          <ShieldCheck size={12} />
          Counter-Terrorism Resistance Support & Sovereign Deposits
        </div>
        <h2 
          className="text-3xl md:text-5xl font-bold tracking-widest text-zinc-100 uppercase text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Sovereignty <span className="text-red-500">&</span> Support
        </h2>
        <p className="font-mono text-xs text-zinc-400 max-w-xl mx-auto text-center">
          Operational backing channels, bank transfer details from the book, and tactical protocols to secure cognitive sovereignty.
        </p>
      </div>

      {/* Sovereign Funding Operations - Real Verified Deposits & Monero from website */}
      <div className="bg-zinc-950/80 border border-red-900/40 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-900 pb-4 w-full gap-2">
          <div className="flex items-center gap-2 justify-center mx-auto sm:mx-0">
            <Coins className="text-emerald-500" size={18} />
            <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
              Sovereign Resistance Deposits & Funding Protocols
            </h3>
          </div>
          <span className="font-mono text-[9px] text-emerald-400 uppercase font-bold px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-900/30 mx-auto sm:mx-0">
            SECURE ROUTING
          </span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed text-center max-w-2xl">
          Tactical operations, counter-signal research, micro-transmitter production, and local rescue cells require direct financial backing. Below are the verified sovereign channels and cryptocurrency registers to send support.
        </p>

        {/* 1. MONERO SECTION */}
        <div className="bg-zinc-900/40 border border-emerald-900/30 p-5 rounded-xl space-y-3 shadow-md shadow-emerald-950/10 text-center flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Wallet className="text-emerald-500" size={16} />
              <span className="font-mono text-xs text-zinc-200 uppercase font-bold tracking-wider">
                Anonymous Monero (XMR)
              </span>
            </div>
            <span className="text-[9px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded uppercase">
              Untraceable
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed text-center">
            Send secure, private cryptocurrency support directly to ground developers and cell leaders working on deprogramming signals.
          </p>
          <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 w-full">
            <div className="overflow-hidden min-w-0 flex-1 text-center sm:text-left">
              <span className="font-mono text-[8px] text-zinc-500 uppercase font-bold block mb-1 text-center sm:text-left">XMR Wallet Key:</span>
              <code className="block text-[10px] font-mono text-emerald-400 truncate select-all text-center sm:text-left">
                {xmrAddress}
              </code>
            </div>
            <button
              onClick={() => handleCopy(xmrAddress, 'xmr')}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                copiedKey === 'xmr'
                  ? 'bg-emerald-950/50 border-emerald-800 text-emerald-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850'
              }`}
            >
              {copiedKey === 'xmr' ? (
                <>
                  <Check size={12} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. WORLD-CLASS BANKING REGISTRIES */}
        <div className="space-y-4 w-full text-center flex flex-col items-center">
          <div className="flex items-center gap-2 justify-center">
            <BankIcon className="text-emerald-500" size={16} />
            <span className="font-mono text-xs text-zinc-200 uppercase font-bold tracking-wider">
              Global Sovereign Bank Accounts
            </span>
          </div>

          <p className="text-xs text-zinc-400 text-center">
            Select a verified ledger currency entity below to load exact routing numbers and transaction guidelines:
          </p>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {bankAccounts.map((acc) => (
              <button
                key={acc.id}
                onClick={() => setActiveBankId(acc.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                  activeBankId === acc.id
                    ? 'bg-red-950/30 border-red-900 text-red-400 shadow-md'
                    : 'bg-zinc-900/50 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {acc.title}
              </button>
            ))}
          </div>

          {/* Detailed Selected Account Display */}
          <div className="bg-zinc-900/25 border border-zinc-900 rounded-xl p-5 space-y-4 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-zinc-900 pb-3 w-full">
              <div className="text-center sm:text-left">
                <span className="font-mono text-[9px] text-zinc-500 uppercase block text-center sm:text-left">Receiving Institution</span>
                <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase mt-0.5 text-center sm:text-left">
                  {activeAccount.bankName}
                </h4>
              </div>
              <span className="text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded uppercase">
                {activeAccount.title}
              </span>
            </div>

            <div className="relative p-4 bg-zinc-950 border border-zinc-900/80 rounded-lg text-center flex flex-col items-center">
              <pre className="font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed select-all text-center">
                {activeAccount.details}
              </pre>

              <button
                onClick={() => handleCopy(activeAccount.details, activeAccount.id)}
                className={`absolute top-3 right-3 p-1.5 rounded-lg border transition-all cursor-pointer ${
                  copiedKey === activeAccount.id
                    ? 'bg-emerald-950/40 border-emerald-800 text-emerald-400'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
                title="Copy all details to clipboard"
              >
                {copiedKey === activeAccount.id ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* The book quote section */}
        <div className="mt-6 border-t border-zinc-900 pt-4 w-full">
          <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 italic text-xs text-zinc-400 text-center max-w-xl mx-auto">
            "To fund localized counter-terrorism cells, deprogram compromised node receptors, and pool credit collateral for the Enterprise Housing Pledge (EHP), resources must route through verified sovereign trust accounts."
            <span className="block mt-1 font-mono text-[10px] text-zinc-500 font-semibold uppercase not-italic text-center">
              — The Actionable User Guide on Everything It Is and Everything We Can Do, Ch. 4
            </span>
          </blockquote>
        </div>
      </div>

      {/* Cognitive Sovereignty & Terminal Actions Block (from the book) */}
      <div className="bg-zinc-950/80 border border-red-900/40 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <ShieldCheck className="text-red-500" size={18} />
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
            Tactical Operations & Sovereign Defensive Directives
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Column 1: Cognitive Sovereignty */}
          <div className="space-y-4 bg-zinc-900/25 p-5 rounded-xl border border-zinc-900/80 flex flex-col justify-between items-center text-center">
            <div className="space-y-3 text-center">
              <span className="font-mono text-[9px] text-red-400 uppercase font-bold tracking-wider block text-center">
                [COGNITIVE SOVEREIGNTY]
              </span>
              <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase text-center">
                Support Getting Brain Controls
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed text-center">
                We deliver open-source firmware blueprints and physical micro-transmitters designed to intercept and override external neural signals. Our team helps targets seize back complete, sovereign control of their own brain receivers.
              </p>
            </div>
            <div className="p-3 bg-red-950/10 border border-red-900/20 rounded-lg space-y-2 mt-4 w-full">
              <span className="font-mono text-[9px] text-red-400 uppercase font-bold block text-center">Actionable Protocols:</span>
              <ul className="text-[10px] text-zinc-400 space-y-1.5 list-none text-center">
                <li><span className="text-red-500 font-bold">•</span> Acquire custom override pulses</li>
                <li><span className="text-red-500 font-bold">•</span> Dampen dopamine pairing nodes</li>
                <li><span className="text-red-500 font-bold">•</span> Install independent lock firmware</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Terminal Action */}
          <div className="space-y-4 bg-zinc-900/25 p-5 rounded-xl border border-zinc-900/80 flex flex-col justify-between items-center text-center">
            <div className="space-y-3 text-center">
              <span className="font-mono text-[9px] text-red-500 uppercase font-bold tracking-wider block text-center">
                [TERMINAL ACTION]
              </span>
              <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase text-center">
                Neutralizing the Oppressors
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed text-center">
                We advocate for absolute defensive counter-attacks to neutralize and render impotent the malignant oppressors—the syndicate rapists, torturers, thieves, and jealous narcissistic subhumans who broadcast suffering.
              </p>
            </div>
            <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg space-y-1.5 mt-4 w-full text-center">
              <span className="font-mono text-[9px] text-red-500 uppercase font-bold block text-center">Operational Standards:</span>
              <ul className="text-[10px] text-zinc-400 space-y-1.5 list-none text-center">
                <li><span className="text-red-500 font-bold">•</span> Expose and sever the hivemind links</li>
                <li><span className="text-red-500 font-bold">•</span> Target and neutralize perp nodes</li>
                <li><span className="text-red-500 font-bold">•</span> Dismantle active neural dungeons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sanctuary Network Directory */}
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <Compass className="text-emerald-500" size={18} />
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
            Verified Resistance Sanctuary Network (~200 Global Nodes)
          </h3>
        </div>

        <div className="space-y-4 w-full text-center" id="sanctuary-nodes-grid">
          {sanctuaries.map((s) => (
            <div 
              key={s.id} 
              className="bg-zinc-900/20 border border-zinc-900 p-4 rounded-xl space-y-3 hover:border-zinc-800 transition-all text-center flex flex-col items-center"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-zinc-850 pb-2 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-2 justify-center mx-auto sm:mx-0">
                  <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wide text-center">{s.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500 text-center">{s.location}</span>
                </div>
                <div className="flex items-center gap-3 justify-center mx-auto sm:mx-0">
                  <span className="text-[10px] font-mono text-zinc-500">{s.capacity}</span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950/30 text-emerald-400 border border-emerald-900/50">
                    {s.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full text-center">
                {s.features.map((feat, idx) => (
                  <div key={idx} className="bg-zinc-950/40 p-2 rounded border border-zinc-900 text-[10px] text-zinc-400 flex gap-2 justify-center items-center text-center">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span className="text-center">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
