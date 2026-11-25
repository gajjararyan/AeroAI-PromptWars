import React from 'react';
import { Users, Car, Home, Flame, ChevronDown } from 'lucide-react';

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
    <section 
      aria-labelledby="profile-heading" 
      className="glass rounded-2xl border border-white/10 p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <Users className="w-4 h-4 text-blue-400" aria-hidden="true" />
        </div>
        <h3 id="profile-heading" className="text-sm font-bold text-white font-display">
          Household & Lifestyle Profile
        </h3>
        <span className="text-[11px] text-slate-400 ml-auto">Personalizes all AI advice</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Household Members */}
        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
            Sensitive Household Members
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Select sensitive household members">
            {MEMBERS.map(m => {
              const sel = profile.members.includes(m.id);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => toggleMember(m.id)}
                  aria-pressed={sel}
                  aria-label={`${m.label}, risk level: ${m.risk}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    sel ? 'bg-blue-600/25 border-blue-400/60 text-white shadow-sm shadow-blue-500/20 font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span role="img" aria-hidden="true">{m.emoji}</span>
                  <span>{m.label}</span>
                  {sel && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                      m.risk === 'Critical' ? 'bg-red-500/40 text-red-200 border border-red-500/50' :
                      m.risk === 'High' ? 'bg-orange-500/40 text-orange-200 border border-orange-500/50' :
                      'bg-blue-500/40 text-blue-200 border border-blue-500/50'
                    }`}>
                      {m.risk}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Commute */}
        <div>
          <label 
            htmlFor="commute-select" 
            className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 block"
          >
            <Car className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" /> Commute Method
          </label>
          <div className="relative">
            <select 
              id="commute-select"
              value={profile.commute} 
              onChange={e => setProfile({ ...profile, commute: e.target.value })}
              className="w-full bg-slate-900 border border-white/10 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none pr-8 transition-colors hover:border-white/20"
            >
              {['Metro / Rail Transit', 'Two-Wheeler / Bike', 'Personal Car / Cab', 'Walking / Cycling', 'Work from Home'].map(o =>
                <option key={o} value={o} className="bg-slate-900 text-white">{o}</option>
              )}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3.5 pointer-events-none" aria-hidden="true" />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Determines PM2.5 inhalation risk during transit</p>
        </div>

        {/* Housing + Cooking stacked */}
        <div className="space-y-3">
          <div>
            <label 
              htmlFor="housing-select"
              className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 block"
            >
              <Home className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" /> Housing Type
            </label>
            <div className="relative">
              <select 
                id="housing-select"
                value={profile.housing} 
                onChange={e => setProfile({ ...profile, housing: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none pr-8 transition-colors hover:border-white/20"
              >
                {['High-Rise Apartment (8th+ floor)', 'Ground Floor Near Main Road', 'Independent House / Villa', 'Residential Colony Flat'].map(o =>
                  <option key={o} value={o} className="bg-slate-900 text-white">{o}</option>
                )}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3.5 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          <div>
            <label 
              htmlFor="cooking-select"
              className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 block"
            >
              <Flame className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" /> Cooking / Heating
            </label>
            <div className="relative">
              <select 
                id="cooking-select"
                value={profile.cooking} 
                onChange={e => setProfile({ ...profile, cooking: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none pr-8 transition-colors hover:border-white/20"
              >
                {['LPG Gas Burner', 'Induction / Electric Cooktop', 'Biomass / Wood Stove'].map(o =>
                  <option key={o} value={o} className="bg-slate-900 text-white">{o}</option>
                )}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3.5 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
