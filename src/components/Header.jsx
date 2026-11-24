import React, { useState, useEffect } from 'react';
import { Wind, Zap, ChevronDown, Key, FileText, Radio, ExternalLink } from 'lucide-react';
import { CITIES_DATA } from '../data/mockData';

export default function Header({ selectedCity, setSelectedCity, apiKey, setApiKey, onOpenSubmission }) {
  const [scrolled, setScrolled] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSaveKey = () => { setApiKey(tempKey); setShowKeyModal(false); };
  const city = CITIES_DATA[selectedCity];

  return (
    <>
      {/* Event Banner */}
      <div className="relative z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-white text-xs">
            <span className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              PromptWars Virtual
            </span>
            <span className="font-semibold">Challenge 06 · Urban Air Quality Assistant · <span className="text-green-300">On-going Now</span></span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://hack2skill.com/event/pwvirtual1/dashboard/roadmap" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors">
              <ExternalLink className="w-3 h-3" /> Roadmap
            </a>
            <span className="text-white/30">|</span>
            <button onClick={onOpenSubmission}
              className="flex items-center gap-1.5 bg-white text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-full text-xs font-bold shadow-sm transition-all">
              <FileText className="w-3 h-3" /> Submission Packet
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
                 : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Wind className="w-5 h-5 text-white" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#030712] live-dot" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white font-display tracking-tight leading-none">AeroAI</h1>
              <p className="text-[10px] text-slate-400 leading-none mt-0.5">Urban Air Quality Assistant</p>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* City selector */}
            <div className="relative flex items-center gap-2 glass rounded-xl px-3 py-2 cursor-pointer group">
              <span className="text-lg">{city.flag}</span>
              <select
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer appearance-none pr-5"
              >
                {Object.entries(CITIES_DATA).map(([key, d]) => (
                  <option key={key} value={key} className="bg-slate-900 text-white">
                    {d.name} · AQI {d.aqi}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 pointer-events-none" />
            </div>

            {/* Gemini key */}
            <button onClick={() => setShowKeyModal(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                apiKey ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                       : 'glass border-white/10 text-slate-400 hover:text-white'
              }`}>
              <Key className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{apiKey ? 'Gemini Connected' : 'Add Gemini Key'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="glass rounded-2xl max-w-sm w-full p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">Gemini API Configuration</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Optional — connect your Gemini API key to enable live cloud inference. Without it, AeroAI uses its built-in domain reasoning engine seamlessly.
            </p>
            <input type="password" placeholder="AIzaSy..."
              value={tempKey} onChange={e => setTempKey(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 mb-4 transition-colors"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowKeyModal(false)} className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-lg transition-colors">Cancel</button>
              <button onClick={handleSaveKey} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-semibold shadow-lg hover:opacity-90 transition-all">Save & Connect</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
