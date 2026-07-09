import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, AlertTriangle, ShieldCheck, Mail } from 'lucide-react';

export default function ContactSection() {
  const [reporterStatus, setReporterStatus] = useState<'uncorrupted' | 'corrupted' | 'victim'>('uncorrupted');
  const [reportText, setReportText] = useState<string>('');
  const [reportedLocation, setReportedLocation] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;

    // Simulate localized secure client submission
    setIsSubmitted(true);
    setTimeout(() => {
      // Allow re-submitting after reset
    }, 5000);
  };

  const handleResetReport = () => {
    setReportText('');
    setReportedLocation('');
    setIsSubmitted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-4xl mx-auto px-4 pb-20 text-center flex flex-col items-center"
      id="contact-section-container"
    >
      {/* Header */}
      <div className="text-center space-y-2 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-[10px] uppercase tracking-widest animate-pulse justify-center">
          <Terminal size={12} />
          Encrypted Intelligence Feed
        </div>
        <h2 
          className="text-3xl md:text-5xl font-bold tracking-widest text-zinc-100 uppercase text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Contact <span className="text-red-600">&</span> Report
        </h2>
        <p className="font-mono text-xs text-zinc-400 max-w-xl mx-auto text-center">
          Transmit secure dungeon locations, coordinate with local resistance cells, or request extraction.
        </p>
      </div>

      {/* Strategic Call to Action for each state */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" id="action-steps-grid">
        <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-2xl space-y-3 text-center flex flex-col items-center justify-center">
          <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-wider text-center">[1] If You Are Uncorrupted</span>
          <p className="text-[11px] text-zinc-400 leading-relaxed text-center">
            Do not engage the enemy directly—they cannot be reasoned with. Protect your node footprint using physical jammers, isolate from active transmission clusters, and document local coordinate anomalies for extraction cells.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-2xl space-y-3 text-center flex flex-col items-center justify-center">
          <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-wider text-center">[2] If You Are Corrupted</span>
          <p className="text-[11px] text-zinc-400 leading-relaxed text-center">
            You are not beyond redemption. Seek out local resistance sanctuaries secretly. Leverage minor moments of signal attenuation to help nearby victims, and prepare your nervous system for the restoration of John Victor's original broadcast.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-2xl space-y-3 text-center flex flex-col items-center justify-center">
          <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-wider text-center">[3] If You Are a Victim</span>
          <p className="text-[11px] text-zinc-400 leading-relaxed text-center">
            You are not alone. Your suffering is seen, recognized, and documented. Hold on. The resistance is mapping out regional transmitter facilities and coordinating high-density EMP extraction runs.
          </p>
        </div>
      </div>

      {/* Encrypted Reporting Console Form */}
      <div className="bg-zinc-950/90 border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl shadow-black/40 text-center flex flex-col items-center w-full">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 justify-center w-full">
          <Terminal className="text-red-500" size={18} />
          <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest text-center">
            Tactical Reporting Console (End-to-End Encrypted)
          </h3>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="reporting-form"
              onSubmit={handleSubmitReport}
              className="space-y-4 w-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                {/* Select Status */}
                <div className="space-y-1.5 text-center flex flex-col items-center">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase text-center block">Your Node Status</label>
                  <select
                    value={reporterStatus}
                    onChange={(e: any) => setReporterStatus(e.target.value)}
                    className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 focus:outline-none focus:border-red-800 font-mono text-center"
                  >
                    <option value="uncorrupted">Uncorrupted Resistance</option>
                    <option value="corrupted">Corrupted / Seeking Deprogramming</option>
                    <option value="victim">Captive Witness / Direct Victim</option>
                  </select>
                </div>

                {/* Secure Coordinates / Sector */}
                <div className="space-y-1.5 text-center flex flex-col items-center">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase text-center block">Physical Coordinates or Regional Sector</label>
                  <input
                    type="text"
                    value={reportedLocation}
                    onChange={(e) => setReportedLocation(e.target.value)}
                    placeholder="e.g. Recife Metropolitan - Zone 4"
                    className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 focus:outline-none focus:border-red-800 font-mono text-center"
                  />
                </div>
              </div>

              {/* Intelligence Log text */}
              <div className="space-y-1.5 text-center flex flex-col items-center w-full">
                <label className="font-mono text-[10px] text-zinc-500 uppercase text-center block">Intelligence Payload / Intercept Details</label>
                <textarea
                  rows={4}
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Specify dungeon movements, active frequencies, or syndicate member identification markers here..."
                  className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-300 focus:outline-none focus:border-red-800 font-sans leading-relaxed text-center"
                  required
                />
              </div>

              {/* Warning label */}
              <div className="flex items-start gap-2 bg-red-950/10 border border-red-900/20 p-3 rounded-lg text-[10px] text-zinc-500 font-mono text-center justify-center max-w-2xl mx-auto">
                <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-center">
                  TRANSMISSION ENCRYPTION: SECURE S7-FARADAY ENHANCED. FINGERPRINT SPOOFING APPLIED AUTOMATICALLY. DO NOT CLOSE THIS CLIENT WHILE PACKET IS STREAMING.
                </span>
              </div>

              <button
                type="submit"
                className="w-full max-w-md mx-auto py-3 bg-red-950/20 hover:bg-red-950/45 border border-red-900/50 text-red-400 font-mono text-xs rounded-xl transition-all flex items-center justify-center gap-2 tracking-widest uppercase font-bold cursor-pointer"
              >
                <Send size={12} />
                Transmit Encrypted Packet
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="reporting-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10 space-y-4 w-full flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-900/50 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-1 text-center">
                <h4 className="font-mono text-xs text-zinc-200 uppercase font-bold text-center">Transmission Successfully Spoofed</h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed text-center">
                  The intelligence packet has been divided into 256 fragments, routed through independent Tor layers, and broadcasted to local sanctuary networks. Secure connection closed.
                </p>
              </div>

              <button
                onClick={handleResetReport}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 font-mono text-[10px] rounded cursor-pointer"
              >
                Open New Communication Link
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Real-World Crisis Helpline Referrals */}
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 space-y-4 shadow-md shadow-black/30 text-center flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/25 border border-emerald-900/40 text-emerald-500 font-mono text-[9px] uppercase tracking-wider justify-center">
          <Mail size={10} />
          Crisis Intervention Resources
        </div>
        <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed text-center">
          If you are experiencing profound psychological distress, remember that support networks remain active. Do not hesitate to establish secure contact with localized counseling groups and emergency hotlines:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-center font-mono text-[11px] pt-2 w-full">
          <div className="bg-zinc-900/30 p-2 border border-zinc-900 rounded text-center">
            <span className="text-zinc-500 block uppercase text-[9px] text-center">UNITED STATES</span>
            <span className="text-zinc-200 font-bold text-center">988 Suicide & Crisis Lifeline</span>
          </div>
          <div className="bg-zinc-900/30 p-2 border border-zinc-900 rounded text-center flex flex-col justify-center items-center">
            <span className="text-zinc-500 block uppercase text-[9px] text-center">INTERNATIONAL CRISIS HUB</span>
            <a href="https://findahelpline.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-center">
              findahelpline.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
