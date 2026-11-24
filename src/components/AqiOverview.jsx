import React from 'react';
import { AlertTriangle, Clock, Eye, Wind, Thermometer, Droplets, Gauge } from 'lucide-react';
import { CITIES_DATA } from '../data/mockData';

export default function AqiOverview({ selectedCity }) {
  const city = CITIES_DATA[selectedCity] || CITIES_DATA.delhi;

  const getAqiBadgeColor = (aqi) => {
    if (aqi <= 50) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
    if (aqi <= 100) return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
    if (aqi <= 200) return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
    if (aqi <= 300) return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
    return 'bg-red-950/80 text-red-300 border-red-700 animate-pulse';
  };

  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-lg backdrop-blur">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-5 border-b border-slate-700/60">
        {/* Left: Main AQI Display */}
        <div className="flex items-center gap-5">
          <div className="relative flex items-center justify-center">
            <div 
              className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-xl border-2"
              style={{ 
                backgroundColor: city.aqi > 300 ? '#450a0a' : '#1e293b', 
                borderColor: city.color 
              }}
            >
              <span className="text-3xl font-extrabold tracking-tight text-white">{city.aqi}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 mt-0.5">AQI US</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${getAqiBadgeColor(city.aqi)}`}>
                {city.status}
              </span>
              <span className="text-xs text-rose-400 font-medium flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {city.whoMultiplier}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">{city.name}, {city.country}</h2>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              {city.smogCondition}
            </p>
          </div>
        </div>

        {/* Right: Windows & Quick Timers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-3">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold mb-1">
              <AlertTriangle className="w-4 h-4" />
              Peak Hazardous Window
            </div>
            <p className="text-sm font-bold text-slate-100">{city.peakSmogHours}</p>
            <p className="text-[11px] text-slate-400">Strict indoor containment recommended</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
              <Clock className="w-4 h-4" />
              Lowest Smog Dispersion Window
            </div>
            <p className="text-sm font-bold text-slate-100">{city.safeVentilationWindow}</p>
            <p className="text-[11px] text-slate-400">Solar mixing reduces boundary layer</p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium">PM 2.5 (Fine Particulates)</span>
          <p className="text-base font-bold text-red-400 mt-0.5">{city.pm25} <span className="text-[10px] text-slate-400 font-normal">µg/m³</span></p>
        </div>
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium">PM 10 (Coarse Dust)</span>
          <p className="text-base font-bold text-amber-400 mt-0.5">{city.pm10} <span className="text-[10px] text-slate-400 font-normal">µg/m³</span></p>
        </div>
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium">NO2 (Vehicular Gas)</span>
          <p className="text-base font-bold text-sky-400 mt-0.5">{city.no2} <span className="text-[10px] text-slate-400 font-normal">ppb</span></p>
        </div>
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <Thermometer className="w-3 h-3 text-slate-400" /> Temp
          </span>
          <p className="text-base font-bold text-slate-200 mt-0.5">{city.temp}</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <Droplets className="w-3 h-3 text-slate-400" /> Humidity
          </span>
          <p className="text-base font-bold text-slate-200 mt-0.5">{city.humidity}</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-2.5 text-center">
          <span className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <Wind className="w-3 h-3 text-slate-400" /> Wind Speed
          </span>
          <p className="text-base font-bold text-slate-200 mt-0.5">{city.wind}</p>
        </div>
      </div>
    </div>
  );
}
