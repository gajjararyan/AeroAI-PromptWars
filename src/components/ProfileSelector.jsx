import React, { useState } from 'react';
import { Baby, Users, HeartPulse, ShieldCheck, Car, Home, Flame, ChevronDown } from 'lucide-react';

const MEMBERS = [
  { id: 'infant', label: 'Infant / Toddler', emoji: '👶', risk: 'Critical' },
  { id: 'elderly', label: 'Elderly 65+', emoji: '👴', risk: 'High' },
  { id: 'asthma', label: 'Asthma / Respiratory', emoji: '🫁', risk: 'High' },
  { id: 'pregnant', label: 'Pregnant', emoji: '🤰', risk: 'High' },
  { id: 'pets', label: 'Pets (Dogs/Cats)', emoji: '🐾', risk: 'Moderate' },
  { id: 'adults', label: 'Healthy Adults', emoji: '🙋', risk: 'Normal' },
];

export default function ProfileSelector({ profile, setProfile }) {
  const toggleMember = (id) => {
    const updated = profile.members.includes(id)
      ? profile.members.filter(m => m !== id)
      : [...profile.members, id];
    setProfile({ ...profile, members: updated });
  };

  return (
    <div className="glass rounded-2xl border border-white/5 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <Users className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-bold text-white font-display">Household & Lifestyle Profile</h3>
        <span className="text-[11px] text-slate-500 ml-auto">Personalises all AI advice</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Household Members */}
        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Sensitive Members</p>
          <div className="flex flex-wrap gap-2">
            {MEMBERS.map(m => {
              const sel = profile.members.includes(m.id);
              return (
                <button key={m.id} onClick={() => toggleMember(m.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                    sel ? 'bg-blue-500/15 border-blue-500/40 text-blue-200 shadow-sm shadow-blue-500/10'
                        : 'bg-white/3 border-white/8 text-slate-400 hover:border-white/15 hover:text-slate-200'
                  }`}>
                  <span>{m.emoji}</span>
                  <span>{m.label}</span>
                  {sel && <span className={`text-[9px] px-1 py-0.5 rounded font-bold ${
                    m.risk === 'Critical' ? 'bg-red-500/30 text-red-300' :
                    m.risk === 'High' ? 'bg-orange-500/30 text-orange-300' :
                    'bg-blue-500/30 text-blue-300'
                  }`}>{m.risk}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Commute */}
        <div>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Car className="w-3 h-3" /> Commute Method
          </p>
          <div className="relative">
            <select value={profile.commute} onChange={e => setProfile({ ...profile, commute: e.target.value })}
              className="w-full bg-white/5 border border-white/8 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500/50 cursor-pointer appearance-none pr-7 transition-colors hover:border-white/15">
              {['Metro / Rail Transit', 'Two-Wheeler / Bike', 'Personal Car / Cab', 'Walking / Cycling', 'Work from Home'].map(o =>
                <option key={o} value={o} className="bg-slate-900">{o}</option>
              )}
            </select>
            <ChevronDown className="w-3 h-3 text-slate-500 absolute right-2.5 top-3 pointer-events-none" />
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">Determines PM2.5 inhalation during transit</p>
        </div>

        {/* Housing + Cooking stacked */}
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Home className="w-3 h-3" /> Housing Type
            </p>
            <div className="relative">
              <select value={profile.housing} onChange={e => setProfile({ ...profile, housing: e.target.value })}
                className="w-full bg-white/5 border border-white/8 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500/50 cursor-pointer appearance-none pr-7 transition-colors hover:border-white/15">
                {['High-Rise Apartment (8th+ floor)', 'Ground Floor Near Main Road', 'Independent House / Villa', 'Residential Colony Flat'].map(o =>
                  <option key={o} value={o} className="bg-slate-900">{o}</option>
                )}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-500 absolute right-2.5 top-3 pointer-events-none" />
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Flame className="w-3 h-3" /> Cooking / Heating
            </p>
            <div className="relative">
              <select value={profile.cooking} onChange={e => setProfile({ ...profile, cooking: e.target.value })}
                className="w-full bg-white/5 border border-white/8 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500/50 cursor-pointer appearance-none pr-7 transition-colors hover:border-white/15">
                {['LPG Gas Burner', 'Induction / Electric Cooktop', 'Biomass / Wood Stove'].map(o =>
                  <option key={o} value={o} className="bg-slate-900">{o}</option>
                )}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-500 absolute right-2.5 top-3 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
