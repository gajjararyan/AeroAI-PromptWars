import React, { useState } from 'react';
import { Clock, Shield, ArrowRight, CheckCircle2, Sunrise, Sunset, Moon } from 'lucide-react';
import { CITIES_DATA } from '../data/mockData';

const SLOTS = (city, profile) => [
  {
    time: '05:30 – 09:00 AM',
    phase: 'Pre-Dawn Inversion Trap',
    icon: Moon,
    danger: 'extreme',
    aqiZone: 'Worst of the day',
    desc: `Ground-level inversion locks PM2.5 at breathing height. Absolutely no outdoor exercise. ${
      profile.members.includes('infant') ? '⚠️ Critical: Keep infants away from windows.' : ''
    }`,
    action: 'Stay fully indoors. Run your DIY CR-box purifier on HIGH. Keep all windows & doors sealed.',
  },
  {
    time: '09:00 – 11:30 AM',
    phase: 'Morning Commute Window',
    icon: Sunrise,
    danger: 'high',
    aqiZone: 'Very High — traffic peak',
    desc: `${
      profile.commute === 'Two-Wheeler / Bike' || profile.commute === 'Walking / Cycling'
        ? '🔴 You are directly exposed. Wear a certified N95/FFP2 respirator — surgical masks stop <15% of PM2.5.'
        : profile.commute === 'Personal Car / Cab'
        ? '🟠 Set AC to Internal Recirculation mode to avoid sucking diesel exhaust from the car ahead.'
        : '🟡 Enclosed metro is safer. Walk briskly between station & destination.'
    }`,
    action: 'Avoid waiting at road intersections — idling buses create localized PM spike zones.',
  },
  {
    time: '11:30 AM – 03:30 PM',
    phase: 'Solar Dispersion Window ✅',
    icon: Clock,
    danger: 'safe',
    aqiZone: `Best window: ${city.safeWindow}`,
    desc: 'Sun heats the ground, which lifts the temperature inversion and allows pollutants to disperse upward. This is the safest outdoor period.',
    action: 'Outdoor errands, essential exercise (brisk walk OK). Open windows for max 20 mins to flush stale indoor air.',
  },
  {
    time: '03:30 – 09:00 PM',
    phase: 'Evening Inversion & Rush',
    icon: Sunset,
    danger: 'high',
    aqiZone: 'Severe second peak',
    desc: 'Sun sets → boundary layer collapses → heavy road dust + cold air creates secondary particulate trap. Children should be inside by 4 PM.',
    action: 'Wet-mop all hallways with damp microfiber. Keep shoes outside the door.',
  },
  {
    time: '09:00 PM – 05:30 AM',
    phase: 'Overnight Sealed Sanctuary',
    icon: Moon,
    danger: 'moderate',
    aqiZone: 'Continuous accumulation',
    desc: 'Sleep in your designated clean room with sealed doors and purifier running. Snake plant provides O₂ overnight.',
    action: 'Maintain indoor PM2.5 below 25 µg/m³. This window allows pulmonary alveolar clearance during deep sleep.',
  },
];

const dangerConfig = {
  extreme: { bg: 'bg-red-950/30', border: 'border-red-700/40', badge: 'bg-red-500/20 text-red-300 border-red-500/30' },
  high:    { bg: 'bg-orange-950/20', border: 'border-orange-700/30', badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  moderate:{ bg: 'bg-yellow-950/20', border: 'border-yellow-700/30', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  safe:    { bg: 'bg-emerald-950/20', border: 'border-emerald-700/30', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
};

export default function RoutinePlanner({ selectedCity, profile }) {
  const [expanded, setExpanded] = useState(null);
  const city = CITIES_DATA[selectedCity] || CITIES_DATA.delhi;
  const slots = SLOTS(city, profile);

  return (
    <section 
      aria-labelledby="routine-heading" 
      className="glass rounded-2xl border border-white/10 p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <h3 id="routine-heading" className="text-sm font-bold text-white font-display">
              AI Diurnal Routine Planner
            </h3>
            <p className="text-[11px] text-slate-400">Tailored to {city.name}'s diurnal smog inversion pattern</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 glass-green rounded-full px-2.5 py-1 border border-emerald-500/40">
          <Shield className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Reduces inhaled PM by ~68%</span>
        </div>
      </div>

      <div className="space-y-2.5" role="list" aria-label="Hourly diurnal smog schedule">
        {slots.map((slot, i) => {
          const cfg = dangerConfig[slot.danger];
          const Icon = slot.icon;
          const open = expanded === i;
          const panelId = `routine-panel-${i}`;
          const buttonId = `routine-btn-${i}`;
          return (
            <div 
              key={i} 
              role="listitem"
              className={`rounded-xl border ${cfg.bg} ${cfg.border} overflow-hidden transition-all duration-300`}
            >
              <button 
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="w-full flex items-center gap-3 p-3.5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setExpanded(open ? null : i)}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cfg.bg} border ${cfg.border}`}>
                  <Icon className="w-4 h-4 text-slate-200" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-white">{slot.time}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                      {slot.aqiZone}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 truncate">{slot.phase}</p>
                </div>
                <div className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`} aria-hidden="true">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </button>

              {open && (
                <div 
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-3.5 pb-4 space-y-2 border-t border-white/5 pt-3"
                >
                  <p className="text-xs text-slate-200 leading-relaxed">{slot.desc}</p>
                  <div className="flex items-start gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-xs text-slate-300">
                      <strong className="text-blue-300 font-semibold">Action: </strong>{slot.action}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
