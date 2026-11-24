import React, { useState } from 'react';
import { BarChart3, TrendingDown, Users, Leaf, ShieldAlert, Sparkles, Building2, Heart } from 'lucide-react';

export default function ImpactCalculator({ selectedCity }) {
  const [commuteShift, setCommuteShift] = useState(18); // km shifted to metro/carpool daily
  const [avoidedBiomass, setAvoidedBiomass] = useState(true); // electric heater vs wood/fire burning
  const [indoorFiltrationDays, setIndoorFiltrationDays] = useState(30); // days active
  const [communityHomes, setCommunityHomes] = useState(350); // households adopting in neighborhood

  // Environmental calculations
  // Car commute emits ~160g CO2/km & ~0.08g PM2.5/km (exhaust + brake dust)
  const personalCo2 = ((commuteShift * 0.16 * indoorFiltrationDays) + (avoidedBiomass ? 12.5 : 0)).toFixed(1); // kg
  const personalPm = ((commuteShift * 0.08 * indoorFiltrationDays) + (avoidedBiomass ? 65 : 0)).toFixed(1); // grams
  const lungAvertedMg = ((indoorFiltrationDays * 0.72) * (avoidedBiomass ? 1.5 : 1.0)).toFixed(1); // mg PM2.5 kept out of deep alveoli

  // Community scaling
  const communityCo2Tons = ((personalCo2 * communityHomes) / 1000).toFixed(2);
  const communityPmKg = ((personalPm * communityHomes) / 1000).toFixed(2);
  const communityTrees = Math.round(Number(personalCo2) * communityHomes / 21);

  return (
    <div className="glass rounded-2xl border border-white/5 p-5 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              Direct Impact & Emission Abatement Engine
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold">
                Quantifiable Metrics
              </span>
            </h3>
            <p className="text-xs text-slate-400">Real-time climate and pulmonary exposure calculation model</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Side */}
        <div className="lg:col-span-5 space-y-5 bg-white/2 rounded-2xl p-4 border border-white/5">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Adjust Lifestyle Parameters</p>

          {/* Commute Shift */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Solo Car Commute Replaced by Transit:</span>
              <span className="text-blue-400 font-bold">{commuteShift} km / day</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="2"
              value={commuteShift}
              onChange={(e) => setCommuteShift(Number(e.target.value))}
              className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>0 km</span>
              <span>25 km</span>
              <span>50 km</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Winter Smog Duration (Days of Active Containment):</span>
              <span className="text-blue-400 font-bold">{indoorFiltrationDays} Days</span>
            </div>
            <input
              type="range"
              min="7"
              max="90"
              step="7"
              value={indoorFiltrationDays}
              onChange={(e) => setIndoorFiltrationDays(Number(e.target.value))}
              className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1 Week</span>
              <span>1 Month</span>
              <span>3 Months</span>
            </div>
          </div>

          {/* Clean Heating Toggle */}
          <label className="flex items-start gap-3 bg-white/3 border border-white/5 p-3 rounded-xl cursor-pointer hover:border-white/15 transition-all">
            <input
              type="checkbox"
              checked={avoidedBiomass}
              onChange={(e) => setAvoidedBiomass(e.target.checked)}
              className="w-4 h-4 mt-0.5 accent-emerald-500 rounded cursor-pointer shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-white block">
                Zero Open Biomass / Waste Space Heating
              </span>
              <span className="text-[11px] text-slate-400 leading-relaxed block mt-0.5">
                Using electric infrared/oil radiators instead of burning scrap wood, coal, or yard waste.
              </span>
            </div>
          </label>

          {/* Community Adoption Slider */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Community Adoption Scale (Homes in Colony):</span>
              <span className="text-violet-400 font-bold">{communityHomes} Homes</span>
            </div>
            <input
              type="range"
              min="20"
              max="1000"
              step="20"
              value={communityHomes}
              onChange={(e) => setCommunityHomes(Number(e.target.value))}
              className="w-full accent-violet-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Results Cards Side */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Card 1: Personal CO2 */}
          <div className="glass rounded-2xl p-4 border border-emerald-500/20 bg-emerald-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-emerald-300">Your Avoided CO₂</span>
              <Leaf className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl font-extrabold text-white font-display">{personalCo2}</span>
              <span className="text-xs text-emerald-400 font-semibold ml-1.5">kg CO₂</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Eliminated directly by shifting away from low-efficiency combustion vehicles.
            </p>
          </div>

          {/* Card 2: Toxic PM2.5 Abated */}
          <div className="glass rounded-2xl p-4 border border-sky-500/20 bg-sky-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-sky-300">PM2.5 Tailpipe Diverted</span>
              <TrendingDown className="w-4 h-4 text-sky-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl font-extrabold text-sky-400 font-display">{personalPm}</span>
              <span className="text-xs text-sky-300 font-semibold ml-1.5">Grams</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Fine toxic particles prevented from settling at street respiration levels.
            </p>
          </div>

          {/* Card 3: Deep Lung Inhalation Spared */}
          <div className="glass rounded-2xl p-4 border border-rose-500/20 bg-rose-500/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-rose-300">Deep Alveolar Sparing</span>
              <ShieldAlert className="w-4 h-4 text-rose-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl font-extrabold text-rose-400 font-display">{lungAvertedMg}</span>
              <span className="text-xs text-rose-300 font-semibold ml-1.5">mg Particulate</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Kept out of pulmonary circulation by skipping early morning inversion workouts.
            </p>
          </div>

          {/* Card 4: Community Multiplier */}
          <div className="glass rounded-2xl p-4 border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-indigo-950/40 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-violet-300">
              <span className="font-semibold">Neighborhood Multiplier ({communityHomes} Homes)</span>
              <Users className="w-4 h-4 text-violet-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl font-extrabold text-white font-display">{communityCo2Tons}</span>
              <span className="text-xs text-violet-300 font-semibold ml-1.5">Tons CO₂</span>
            </div>
            <p className="text-[11px] text-violet-200 leading-relaxed">
              + <strong className="text-white">{communityPmKg} kg</strong> of toxic smoke eliminated. Equivalent to growing <strong className="text-emerald-300">{communityTrees} mature trees</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
