import React, { useState, useEffect } from 'react';
import { Wind, Zap, ChevronDown, Key } from 'lucide-react';
import { CITIES_DATA } from '../data/mockData';

export default function Header({ selectedCity, setSelectedCity, apiKey, setApiKey }) {
  const [scrolled, setScrolled] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSaveKey = () => { setApiKey(tempKey); setShowKeyModal(false); };
  const city = CITIES_DATA[selectedCity] || CITIES_DATA.delhi;

  return (
    <>
      {/* Clean Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & Product Identity */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Wind className="w-5 h-5 text-white" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#030712] live-dot" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white font-display tracking-tight leading-none">AeroAI</h1>
                <span className="hidden sm:inline-block text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/25 px-2 py-0.5 rounded-full font-medium">
                  Urban Smog Assistant
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none mt-1">Real-time Diurnal Protection & IAQ Solutions</p>
            </div>
          </div>

          {/* Controls: Location & AI Connection */}
          <div className="flex items-center gap-2.5">
            {/* City Selector */}
            <div className="relative flex items-center gap-2 glass rounded-xl px-3 py-2 cursor-pointer group hover:border-white/15 transition-all">
              <span className="text-base">{city.flag}</span>
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
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none group-hover:text-white transition-colors" />
            </div>

            {/* Gemini API Key */}
            <button 
              onClick={() => setShowKeyModal(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                apiKey ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                       : 'glass border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              <Key className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{apiKey ? 'Gemini Connected' : 'Connect Gemini API'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="glass rounded-2xl max-w-sm w-full p-6 border border-white/10 shadow-2xl bg-[#0b1120]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Gemini API Key</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Connect your Google Gemini API key to enable live cloud inference. If left empty, AeroAI seamlessly uses its high-accuracy offline domain reasoning engine.
            </p>
            <input 
              type="password" 
              placeholder="AIzaSy..."
              value={tempKey} 
              onChange={e => setTempKey(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 mb-4 transition-colors"
            />
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setShowKeyModal(false)} 
                className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveKey} 
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg transition-all"
              >
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
