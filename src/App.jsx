import React, { useState } from 'react';
import Header from './components/Header';
import ParticleCanvas from './components/ParticleCanvas';
import AqiHeroCard from './components/AqiHeroCard';
import ProfileSelector from './components/ProfileSelector';
import RoutinePlanner from './components/RoutinePlanner';
import IndoorHacks from './components/IndoorHacks';
import ImpactCalculator from './components/ImpactCalculator';
import AiAssistantChat from './components/AiAssistantChat';
import { 
  CalendarClock, 
  Wrench, 
  BarChart3, 
  MessageSquare,
  Shield,
  Heart
} from 'lucide-react';
import { CITIES_DATA } from './data/mockData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState("delhi");
  const [apiKey, setApiKey] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  const [profile, setProfile] = useState({
    members: ["infant", "asthma"],
    commute: "Metro / Rail Transit",
    housing: "High-Rise Apartment (8th+ floor)",
    cooking: "LPG Gas Burner"
  });

  const city = CITIES_DATA[selectedCity] || CITIES_DATA.delhi;

  const tabs = [
    { id: "dashboard", label: "Smog Defense & Routines", icon: CalendarClock },
    { id: "hacks", label: "Indoor IAQ Hacks", icon: Wrench },
    { id: "impact", label: "Direct Impact Engine", icon: BarChart3 },
    { id: "assistant", label: "AeroAI Strategic Consultation", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans relative selection:bg-blue-600 selection:text-white">
      {/* Background Subtle Particle Canvas */}
      <ParticleCanvas />

      {/* Clean Modern Navbar */}
      <Header
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        apiKey={apiKey}
        setApiKey={setApiKey}
      />

      {/* Main Product Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6 relative z-10">
        {/* Top AQI Hero Status Dial Card */}
        <AqiHeroCard selectedCity={selectedCity} />

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-blue-400/40'
                    : 'glass text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Dashboard (Household Profiler + Diurnal Routines + Fast Consultation) */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 fade-in-up">
            <ProfileSelector profile={profile} setProfile={setProfile} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <RoutinePlanner selectedCity={selectedCity} profile={profile} />
              </div>
              <div className="lg:col-span-5">
                <AiAssistantChat 
                  selectedCity={selectedCity} 
                  profile={profile} 
                  apiKey={apiKey} 
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Indoor IAQ Hacks Hub */}
        {activeTab === "hacks" && (
          <div className="space-y-6 fade-in-up">
            <IndoorHacks />
          </div>
        )}

        {/* Tab 3: Direct Climate & Pulmonary Impact Engine */}
        {activeTab === "impact" && (
          <div className="space-y-6 fade-in-up">
            <ImpactCalculator selectedCity={selectedCity} />
          </div>
        )}

        {/* Tab 4: Standalone Full AI Consultation */}
        {activeTab === "assistant" && (
          <div className="space-y-6 fade-in-up">
            <ProfileSelector profile={profile} setProfile={setProfile} />
            <AiAssistantChat 
              selectedCity={selectedCity} 
              profile={profile} 
              apiKey={apiKey} 
            />
          </div>
        )}
      </main>

      {/* Clean, Minimalist Product Footer */}
      <footer className="border-t border-white/5 bg-[#030712]/90 backdrop-blur py-6 mt-12 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400 font-medium">AeroAI</span>
            <span>— Urban Air Quality & Smog Emergency Assistant</span>
          </div>
          <div className="text-slate-500 text-[11px] flex items-center gap-2">
            <span>Powered by Google Antigravity & Gemini</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Live Monitoring Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
