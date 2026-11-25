import React, { useState } from 'react';
import { Wrench, ChevronRight, DollarSign, Activity, Check } from 'lucide-react';
import { IAQ_HACKS } from '../data/mockData';

const CAT_COLORS = {
  'Hardware':       { bg: 'bg-blue-500/20', border: 'border-blue-500/40', text: 'text-blue-200' },
  'Daily Habit':    { bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', text: 'text-emerald-200' },
  'Sealing':        { bg: 'bg-violet-500/20', border: 'border-violet-500/40', text: 'text-violet-200' },
  'Bio-Filtration': { bg: 'bg-green-500/20', border: 'border-green-500/40', text: 'text-green-200' },
  'Cooking':        { bg: 'bg-orange-500/20', border: 'border-orange-500/40', text: 'text-orange-200' },
};

export default function IndoorHacks() {
  const [selected, setSelected] = useState(IAQ_HACKS[0]);

  return (
    <section 
      aria-labelledby="iaq-heading" 
      className="glass rounded-2xl border border-white/10 p-5"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
          <Wrench className="w-4 h-4 text-violet-400" aria-hidden="true" />
        </div>
        <div>
          <h3 id="iaq-heading" className="text-sm font-bold text-white font-display">
            Indoor Air Quality (IAQ) Hacks Hub
          </h3>
          <p className="text-[11px] text-slate-400">Science-backed, frugal methods to slash indoor PM2.5</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Hack list */}
        <div 
          className="lg:col-span-5 space-y-2 max-h-[480px] overflow-y-auto pr-1 no-scrollbar"
          role="tablist"
          aria-label="Indoor air quality hacks list"
        >
          {IAQ_HACKS.map(hack => {
            const cat = CAT_COLORS[hack.category] || CAT_COLORS['Daily Habit'];
            const isSel = selected.id === hack.id;
            return (
              <button 
                key={hack.id} 
                role="tab"
                id={`hack-tab-${hack.id}`}
                aria-selected={isSel}
                aria-controls={`hack-panel-${hack.id}`}
                onClick={() => setSelected(hack)}
                className={`w-full text-left rounded-xl p-3.5 border transition-all group focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSel ? 'bg-blue-950/40 border-blue-500/50 shadow-lg shadow-blue-500/10'
                        : 'bg-white/5 border-white/5 hover:border-white/15 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" role="img" aria-hidden="true">{hack.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cat.bg} ${cat.border} ${cat.text}`}>
                        {hack.category}
                      </span>
                      <span className="text-[10px] text-slate-400">{hack.time}</span>
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">{hack.title}</p>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">{hack.summary}</p>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 text-slate-400 mt-1 shrink-0 transition-transform ${isSel ? 'rotate-90 text-blue-400' : 'group-hover:translate-x-0.5'}`} aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div 
          id={`hack-panel-${selected.id}`}
          role="tabpanel"
          aria-labelledby={`hack-tab-${selected.id}`}
          className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-start gap-3 pb-4 border-b border-white/10 mb-4">
              <span className="text-3xl" role="img" aria-hidden="true">{selected.emoji}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).bg} ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).border} ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).text}`}>
                    {selected.category}
                  </span>
                  <span className="text-[10px] text-slate-300 font-medium">Difficulty: {selected.difficulty}</span>
                  <span className="text-[10px] text-slate-300">⏱ Setup: {selected.time}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{selected.title}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selected.summary}</p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-emerald-500/30">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-300">Cost: {selected.cost}</span>
              </div>
              <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-blue-500/30">
                <Activity className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-blue-300">CADR: {selected.cadr}</span>
              </div>
            </div>

            {/* Steps */}
            <div>
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-3">
                Step-by-Step Blueprint
              </p>
              <div className="space-y-2.5">
                {selected.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-200 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="rounded-xl p-3.5 bg-blue-950/30 border border-blue-500/25">
              <p className="text-[11px] font-bold text-blue-300 flex items-center gap-1.5 mb-1">
                <Check className="w-3.5 h-3.5" aria-hidden="true" /> Scientific Verification & Impact
              </p>
              <p className="text-xs text-slate-200 leading-relaxed">{selected.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
