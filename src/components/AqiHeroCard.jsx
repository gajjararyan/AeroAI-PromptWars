import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Wind, Droplets, Thermometer, Eye, Clock, ArrowUpRight, TrendingUp } from 'lucide-react';
import { CITIES_DATA, AQI_SCALE } from '../data/mockData';

function AqiGauge({ aqi }) {
  const r = 56, cx = 70, cy = 70;
  const startAngle = -210, totalAngle = 240;
  const pct = Math.min(aqi / 500, 1);
  const circumference = 2 * Math.PI * r;
  const arc = (totalAngle / 360) * circumference;
  const dash = arc;
  const offset = arc - pct * arc;
  const scale = AQI_SCALE.find(s => aqi <= s.max) || AQI_SCALE[AQI_SCALE.length - 1];

  // Needle angle
  const needleAngle = startAngle + pct * totalAngle;
  const needleRad = (needleAngle * Math.PI) / 180;
  const nx = cx + 42 * Math.cos(needleRad);
  const ny = cy + 42 * Math.sin(needleRad);

  // Track gradient stops
  const stops = [
    { offset: '0%', color: '#10b981' },
    { offset: '33%', color: '#f59e0b' },
    { offset: '55%', color: '#f97316' },
    { offset: '75%', color: '#ef4444' },
    { offset: '90%', color: '#a855f7' },
    { offset: '100%', color: '#dc2626' },
  ];

  return (
    <div className="relative">
      <svg width="140" height="120" viewBox="0 0 140 120">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} />)}
          </linearGradient>
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} />)}
          </linearGradient>
        </defs>
        {/* Background track */}
        <circle cx={cx} cy={cy} r={r}
          fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10"
          strokeDasharray={`${arc} ${circumference - arc}`}
          strokeDashoffset={circumference * (1 - 210 / 360) * -1}
          strokeLinecap="round"
          transform={`rotate(-210 ${cx} ${cy})`}
        />
        {/* Colored progress */}
        <circle cx={cx} cy={cy} r={r}
          fill="none" stroke="url(#gaugeGrad)" strokeWidth="10"
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="aqi-gauge-track"
          transform={`rotate(-210 ${cx} ${cy})`}
          style={{ filter: `drop-shadow(0 0 8px ${scale.color})` }}
        />
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny}
          stroke="white" strokeWidth="2" strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.5))' }}
        />
        <circle cx={cx} cy={cy} r="4" fill="white" />
        {/* AQI Value */}
        <text x={cx} y={cy + 20} textAnchor="middle" fill="white" fontSize="22" fontWeight="800" fontFamily="Inter">
          {aqi}
        </text>
        <text x={cx} y={cy + 33} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter">
          AQI US
        </text>
      </svg>
    </div>
  );
}

export default function AqiHeroCard({ selectedCity }) {
  const city = CITIES_DATA[selectedCity];
  const scale = AQI_SCALE.find(s => city.aqi <= s.max) || AQI_SCALE[AQI_SCALE.length - 1];
  const isHazardous = city.aqi > 300;

  const pollutants = [
    { label: 'PM2.5', value: city.pm25, unit: 'µg/m³', pct: Math.min(city.pm25 / 300, 1), color: '#ef4444' },
    { label: 'PM10', value: city.pm10, unit: 'µg/m³', pct: Math.min(city.pm10 / 500, 1), color: '#f97316' },
    { label: 'NO₂', value: city.no2, unit: 'ppb', pct: Math.min(city.no2 / 100, 1), color: '#a855f7' },
    { label: 'O₃', value: city.o3, unit: 'ppb', pct: Math.min(city.o3 / 100, 1), color: '#3b82f6' },
    { label: 'CO', value: city.co, unit: 'ppm', pct: Math.min(city.co / 5, 1), color: '#f59e0b' },
  ];

  return (
    <div className={`relative rounded-2xl overflow-hidden ${isHazardous ? 'hazard-pulse' : ''}`}
      style={{ background: `linear-gradient(135deg, ${scale.bg}, rgba(3,7,18,0.95))`, border: `1px solid ${scale.color}30` }}>
      {/* Glow behind */}
      <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 30% 50%, ${scale.color}40, transparent 70%)` }} />

      <div className="relative p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — Gauge + Status */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 lg:w-56 shrink-0">
            <AqiGauge aqi={city.aqi} />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{city.flag}</span>
                <div>
                  <h2 className="text-lg font-bold text-white leading-none font-display">{city.name}</h2>
                  <p className="text-xs text-slate-400">{city.country}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                style={{ backgroundColor: `${scale.color}20`, borderColor: `${scale.color}50`, color: scale.color }}>
                {isHazardous && <AlertTriangle className="w-3 h-3" />}
                {scale.label}
              </span>
              <p className="text-[11px] text-slate-400 mt-2 italic">{scale.desc}</p>
              {/* WHO */}
              <div className="mt-3 glass rounded-xl px-3 py-2">
                <p className="text-xs font-bold" style={{ color: scale.color }}>{city.whoMultiple}× WHO Guideline</p>
                <p className="text-[10px] text-slate-500">24-hour PM2.5 safe limit</p>
              </div>
            </div>
          </div>

          {/* Center — Smog info + Windows */}
          <div className="flex-1 space-y-4">
            {/* Smog type banner */}
            <div className="glass rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-xs font-bold text-blue-300">{city.smogType}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{city.smogDesc}</p>
            </div>

            {/* Time windows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl p-3 border border-red-500/20 bg-red-500/5">
                <div className="flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Peak Hazard Window</span>
                </div>
                <p className="text-sm font-bold text-white">{city.dangerWindow}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Strict indoor containment</p>
              </div>
              <div className="rounded-xl p-3 border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Safe Dispersion Window</span>
                </div>
                <p className="text-sm font-bold text-white">{city.safeWindow}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Solar boundary layer lift</p>
              </div>
            </div>

            {/* Pollutant bars */}
            <div className="space-y-2">
              {pollutants.map(p => (
                <div key={p.label} className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold text-slate-400 w-10 shrink-0">{p.label}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full progress-bar transition-all"
                      style={{ width: `${p.pct * 100}%`, backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}80` }} />
                  </div>
                  <span className="text-[11px] font-bold w-20 text-right shrink-0" style={{ color: p.color }}>
                    {p.value} <span className="text-slate-500 font-normal">{p.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:w-36 shrink-0">
            {[
              { icon: Thermometer, label: 'Temperature', value: city.temp, color: '#f97316' },
              { icon: Droplets, label: 'Humidity', value: city.humidity, color: '#3b82f6' },
              { icon: Wind, label: 'Wind Speed', value: city.wind, color: '#10b981' },
              { icon: TrendingUp, label: 'Trend', value: 'Rising ↑', color: '#ef4444' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="glass rounded-xl p-3 text-center metric-card">
                <Icon className="w-4 h-4 mx-auto mb-1" style={{ color }} />
                <p className="text-[10px] text-slate-400 mb-0.5">{label}</p>
                <p className="text-xs font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
