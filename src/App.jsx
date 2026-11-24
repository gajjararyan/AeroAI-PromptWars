import React, { useState } from 'react';
import Header from './components/Header';
import ParticleCanvas from './components/ParticleCanvas';
import AqiHeroCard from './components/AqiHeroCard';
import ProfileSelector from './components/ProfileSelector';
import RoutinePlanner from './components/RoutinePlanner';
import IndoorHacks from './components/IndoorHacks';
import ImpactCalculator from './components/ImpactCalculator';
import AiAssistantChat from './components/AiAssistantChat';
import SubmissionModal from './components/SubmissionModal';
import VideoScriptModal from './components/VideoScriptModal';
import { 
  CalendarClock, 
  Wrench, 
  BarChart3, 
  MessageSquare, 
  Sparkles,
  Video
} from 'lucide-react';
import { CITIES_DATA } from './data/mockData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState("delhi");
  const [apiKey, setApiKey] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
    { id: "assistant", label: "AeroAI Consultation", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans relative selection:bg-blue-600 selection:text-white">
      {/* Background Animated Particle Canvas */}
      <ParticleCanvas />

      {/* Top Header Bar */}
      <Header
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        apiKey={apiKey}
        setApiKey={setApiKey}
        onOpenSubmission={() => setIsSubmissionModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6 relative z-10">
        {/* Top AQI Hero Status Dial Card */}
        <AqiHeroCard selectedCity={selectedCity} />

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
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

          {/* Video Pitch Recording Script Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold glass text-amber-300 border-amber-500/30 hover:bg-amber-500/10 transition-all shrink-0"
          >
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Demo Video Script</span>
          </button>
        </div>

        {/* Tab 1: Dashboard (Profile + Routines + AI Fast Chat) */}
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

        {/* Tab 3: Impact & Community Engine */}
        {activeTab === "impact" && (
          <div className="space-y-6 fade-in-up">
            <ImpactCalculator selectedCity={selectedCity} />
          </div>
        )}

        {/* Tab 4: Standalone Full Consultation */}
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

      {/* Floating Action Pill for Quick Submission Packet */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-amber-300 px-3.5 py-2.5 rounded-full font-bold shadow-xl border border-amber-500/30 text-xs transition-all hover:scale-105 backdrop-blur-md"
        >
          <Video className="w-4 h-4 text-amber-400" />
          <span className="hidden md:inline">Video Script</span>
        </button>

        <button
          onClick={() => setIsSubmissionModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-4 py-2.5 rounded-full font-bold shadow-2xl shadow-blue-500/30 border border-white/20 text-xs transition-all transform hover:-translate-y-0.5 active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span>Hack2skill Submission Packet</span>
        </button>
      </div>

      {/* Modals */}
      <SubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
      />

      <VideoScriptModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030712]/80 backdrop-blur py-6 mt-12 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            PromptWars Virtual (Challenge 06: Urban Air Quality Assistant) • Built with Google Antigravity
          </p>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> App Ready for Submission
            </span>
            <span>•</span>
            <button onClick={() => setIsSubmissionModalOpen(true)} className="text-blue-400 hover:underline">
              Copy Submission Text
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
