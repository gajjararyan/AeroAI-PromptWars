import React, { useState } from 'react';
import { Wrench, ChevronRight, Leaf, Zap, Clock, DollarSign, Activity } from 'lucide-react';
import { IAQ_HACKS } from '../data/mockData';

const CAT_COLORS = {
  'Hardware':       { bg: 'bg-blue-500/15', border: 'border-blue-500/30', text: 'text-blue-300' },
  'Daily Habit':    { bg: 'bg-emerald-500/15', border: 'border-emerald-500/30', text: 'text-emerald-300' },
  'Sealing':        { bg: 'bg-violet-500/15', border: 'border-violet-500/30', text: 'text-violet-300' },
  'Bio-Filtration': { bg: 'bg-green-500/15', border: 'border-green-500/30', text: 'text-green-300' },
  'Cooking':        { bg: 'bg-orange-500/15', border: 'border-orange-500/30', text: 'text-orange-300' },
};

export default function IndoorHacks() {
  const [selected, setSelected] = useState(IAQ_HACKS[0]);

  return (
    <div className="glass rounded-2xl border border-white/5 p-5">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
          <Wrench className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white font-display">Indoor Air Quality (IAQ) Hacks</h3>
          <p className="text-[11px] text-slate-500">Science-backed, frugal methods to slash indoor PM2.5</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Hack list */}
        <div className="lg:col-span-5 space-y-2 max-h-[480px] overflow-y-auto pr-1 no-scrollbar">
          {IAQ_HACKS.map(hack => {
            const cat = CAT_COLORS[hack.category] || CAT_COLORS['Daily Habit'];
            const isSel = selected.id === hack.id;
            return (
              <button key={hack.id} onClick={() => setSelected(hack)}
                className={`w-full text-left rounded-xl p-3.5 border transition-all group ${
                  isSel ? 'bg-white/5 border-blue-500/40 shadow-lg shadow-blue-500/5'
                        : 'bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/4'
                }`}>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{hack.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cat.bg} ${cat.border} ${cat.text}`}>
                        {hack.category}
                      </span>
                      <span className="text-[10px] text-slate-500">{hack.time}</span>
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">{hack.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{hack.summary}</p>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 text-slate-500 mt-1 shrink-0 transition-transform ${isSel ? 'rotate-90 text-blue-400' : 'group-hover:translate-x-0.5'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-7 bg-white/3 border border-white/8 rounded-xl p-5 flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-3 pb-4 border-b border-white/5 mb-4">
            <span className="text-3xl">{selected.emoji}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).bg} ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).border} ${(CAT_COLORS[selected.category] || CAT_COLORS['Daily Habit']).text}`}>
                  {selected.category}
                </span>
                <span className="text-[10px] text-slate-500">{selected.difficulty}</span>
                <span className="text-[10px] text-slate-500">⏱ {selected.time}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{selected.title}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{selected.summary}</p>
            </div>
          </div>

          {/* Quick badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-green-400" />
              <span className="text-xs font-semibold text-green-300">{selected.cost}</span>
            </div>
            <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">{selected.cadr}</span>
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Step-by-Step Blueprint</p>
            <div className="space-y-2.5">
              {selected.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="rounded-xl p-3 bg-blue-500/5 border border-blue-500/15">
              <p className="text-[11px] font-bold text-blue-300 flex items-center gap-1.5 mb-1">
                <Leaf className="w-3 h-3" /> Scientific Impact
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">{selected.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
