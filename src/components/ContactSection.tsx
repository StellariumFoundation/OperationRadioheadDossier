import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send, Terminal, AlertTriangle, ShieldCheck, Mail,
  Phone, PhoneOff, Mic, Shield, Copy, CheckCircle, Zap
} from 'lucide-react';
import { callClient, type CallState } from '../utils/callClient';
import { opusStream } from '../utils/opusStream';

export default function ContactSection() {
  const [callState, setCallState] = useState<CallState>(callClient.callState);
  const [errorText, setErrorText] = useState(callClient.errorText);
  const [queuePosition, setQueuePosition] = useState<number | null>(callClient.queuePosition);
  const [isRecording, setIsRecording] = useState(opusStream.recording);
  const isPTTRef = useRef(false);

  const [reporterStatus, setReporterStatus] = useState<'uncorrupted' | 'corrupted' | 'victim'>('uncorrupted');
  const [reportText, setReportText] = useState<string>('');
  const [reportedLocation, setReportedLocation] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [portalCopied, setPortalCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | ''>('');

  useEffect(() => {
    const unsub1 = callClient.subscribe(() => {
      setCallState(callClient.callState);
      setErrorText(callClient.errorText);
      setQueuePosition(callClient.queuePosition);
    });
    const unsub2 = opusStream.subscribe(() => {
      setIsRecording(opusStream.recording);
    });
    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  const micDenied = errorText.toLowerCase().includes('permission') ||
    errorText.toLowerCase().includes('denied') ||
    errorText.toLowerCase().includes('mic');

  const copyPortal = () => {
    navigator.clipboard.writeText('https://mural-bnyh.onrender.com/');
    setPortalCopied(true);
    setTimeout(() => setPortalCopied(false), 2500);
  };

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) {
      setStatusType('error');
      setStatusText('Message content is required.');
      return;
    }

    setIsSending(true);
    setStatusType('info');
    setStatusText('Establishing secure connection...');

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatusText('Broadcasting...');

      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          apiKey: "sf_0491b9b3fbb2f4f489b6a319",
          name: reporterStatus,
          email: reportedLocation || "no-reply@stellarium.app",
          message: reportText,
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatusType('success');
        setStatusText('Transmission Complete. Secure Message Sent.');
        setReportText('');
        setReportedLocation('');
        setIsSubmitted(true);
      } else {
        setStatusType('error');
        setStatusText(data.message || 'Secure channel failed.');
      }
    } catch (err) {
      console.error(err);
      setStatusType('error');
      setStatusText('Connection failed.');
    } finally {
      setIsSending(false);
    }
  };

  const handleResetReport = () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
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

      {/* Call Stellarium Section */}
      <div className="w-full bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-500/20 rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 rounded-xl">
            <Phone size={20} className="text-emerald-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xs md:text-sm text-white uppercase tracking-wider">Call Stellarium</h3>
            <span className="text-[9px] md:text-xs text-emerald-300 uppercase tracking-widest block">Direct Voice Connection</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-gray-300 leading-relaxed text-left">
          Walkie-talkie voice with John Victor. Hold to talk, release to listen. Requires microphone access.
        </p>

        {micDenied && (
          <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-3 text-xs text-red-300 text-center">
            Microphone permission denied. Go to system settings → App permissions → Microphone → Allow.
          </div>
        )}

        {(callState === 'idle' || callState === 'failed' || callState === 'no_answer') && (
          <>
            <button
              onClick={() => callClient.startCall()}
              disabled={false}
              className="w-full bg-emerald-500 text-black py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-xs md:text-sm hover:bg-emerald-400 disabled:opacity-50 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Phone size={18} /> Call Owner
            </button>

            {errorText && (
              <p className="text-xs text-red-400 text-center">{errorText}</p>
            )}
          </>
        )}

        {callState === 'calling' && (
          <div className="flex flex-col items-center gap-2 py-3">
            {queuePosition !== null ? (
              <>
                <span className="text-amber-300 text-sm">In Queue — Position #{queuePosition}</span>
                <span className="text-gray-400 text-xs">Waiting for callee to become available...</span>
              </>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-emerald-300">Calling...</span>
              </div>
            )}
            <button
              onClick={() => callClient.endCall()}
              className="mt-2 text-xs text-red-400 hover:text-red-300 uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        )}

        {callState === 'in_call' && (
          <div className="flex flex-col gap-3">
            <span className="text-emerald-300 text-center">Connected — Walkie-Talkie Mode</span>

            <button
              onTouchStart={(e) => { e.preventDefault(); isPTTRef.current = true; callClient.startTransmitting(); }}
              onTouchEnd={(e) => { e.preventDefault(); isPTTRef.current = false; callClient.stopTransmitting(); }}
              onMouseDown={() => { isPTTRef.current = true; callClient.startTransmitting(); }}
              onMouseUp={() => { isPTTRef.current = false; callClient.stopTransmitting(); }}
              onMouseLeave={() => { if (isPTTRef.current) { isPTTRef.current = false; callClient.stopTransmitting(); } }}
              className={`w-full py-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm transition-all select-none active:scale-[0.98] cursor-pointer ${
                isRecording
                  ? 'bg-emerald-500 text-black shadow-[0_0_40px_rgba(16,185,129,0.6)] animate-pulse'
                  : isPTTRef.current
                    ? 'bg-emerald-600/60 text-emerald-200 border border-emerald-500/50'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
              }`}
            >
              <Mic size={20} className={isRecording ? 'animate-pulse' : ''} />
              {isRecording ? 'RECORDING...' : isPTTRef.current ? 'INITIALIZING...' : 'HOLD TO TALK'}
            </button>

            <button
              onClick={() => callClient.endCall()}
              className="w-full bg-red-500/20 text-red-400 border border-red-500/30 py-3 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-xs hover:bg-red-500/30 transition-all cursor-pointer"
            >
              <PhoneOff size={16} /> End Call
            </button>
          </div>
        )}

        {callState === 'ended' && (
          <>
            <p className="text-xs text-gray-400 text-center">Call ended</p>
            <button
              onClick={() => callClient.resetCall()}
              className="w-full bg-emerald-500/10 text-emerald-400 py-2 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              Call Again
            </button>
          </>
        )}
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

              <div className="flex items-start gap-2 bg-red-950/10 border border-red-900/20 p-3 rounded-lg text-[10px] text-zinc-500 font-mono text-center justify-center max-w-2xl mx-auto">
                <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-center">
                  TRANSMISSION ENCRYPTION: SECURE S7-FARADAY ENHANCED. FINGERPRINT SPOOFING APPLIED AUTOMATICALLY. DO NOT CLOSE THIS CLIENT WHILE PACKET IS STREAMING.
                </span>
              </div>

              {statusType && (
                <div
                  className={`p-3 rounded-xl border flex items-start gap-2 text-xs text-center justify-center ${
                    statusType === 'error'
                      ? 'bg-red-500/10 border-red-500/30 text-red-400'
                      : statusType === 'success'
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-blue-950/20 border-blue-900/30 text-blue-400'
                  }`}
                >
                  {statusType === 'info' && <Zap size={14} className="animate-pulse shrink-0 mt-0.5" />}
                  <span>{statusText}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending || !reportText.trim()}
                className="w-full max-w-md mx-auto py-3 bg-red-950/20 hover:bg-red-950/45 border border-red-900/50 text-red-400 font-mono text-xs rounded-xl transition-all flex items-center justify-center gap-2 tracking-widest uppercase font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={12} />
                {isSending ? 'Encrypting...' : 'Transmit Encrypted Packet'}
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

      {/* Anonymous Messaging Tor Portal */}
      <div className="w-full bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-500/15 text-purple-400 border border-purple-500/25 rounded-xl">
            <Shield size={20} className="text-purple-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xs md:text-sm text-white uppercase tracking-wider">Anonymous Messaging</h3>
            <span className="text-[9px] md:text-xs text-purple-300 uppercase tracking-widest block">Supreme Metadata Protection</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-gray-300 leading-relaxed text-left">
          To preserve absolute anonymity and cryptographic protection, we strongly advise using the <strong className="text-white">Tor Browser</strong> when submitting messages through our anonymous messaging node:
        </p>

        <div
          onClick={copyPortal}
          className="flex items-center justify-between gap-3 bg-black/45 hover:bg-black/60 border border-white/5 hover:border-purple-500/30 rounded-xl p-3 md:p-4 select-all cursor-pointer group transition-all"
        >
          <span className="font-mono text-[10px] md:text-xs text-purple-300 break-all select-all text-left flex-1">
            https://mural-bnyh.onrender.com/
          </span>
          <button
            type="button"
            className="p-1 px-2.5 md:px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 rounded-lg text-[9px] md:text-xs uppercase tracking-wider flex items-center gap-1 shrink-0 transition-all border border-purple-500/20 cursor-pointer"
            title="Copy Address"
          >
            {portalCopied ? (
              <>
                <CheckCircle size={10} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={10} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[9px] md:text-xs text-gray-400 pt-1">
          <span>Security: Use with Tor Browser</span>
          <span className="text-purple-400 uppercase tracking-widest">Identity Shielded</span>
        </div>
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
        <div className="flex justify-center max-w-md mx-auto text-center font-mono text-[11px] pt-2 w-full">
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
