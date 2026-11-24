import React, { useState } from 'react';
import { 
  Play, 
  Video, 
  Calendar, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Gift, 
  Clock, 
  BookOpen,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { YOUTUBE_SESSIONS } from '../data/mockData';

export default function RoadmapVideoHub() {
  const [activeTab, setActiveTab] = useState("videos");

  const phases = [
    {
      phase: "Phase 1",
      name: "Challenge Release",
      timing: "Day 1 (Every Alternate Monday)",
      status: "Active for Challenge 06",
      desc: "Real-world industry problem statement drops live on the Hack2skill dashboard. Scope the requirements, assess the constraints, and prepare your prompt strategy.",
      badge: "Completed",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
    },
    {
      phase: "Phase 2",
      name: "PS Explainer & Engineering Live Stream",
      timing: "Day 5 (Friday Following Drop)",
      status: "Watch Recording Available",
      desc: "Google AI engineers and Hack2skill mentors break down the use case, explain the evaluation rubric, and answer live participant questions.",
      badge: "Stream Live / Recorded",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/40"
    },
    {
      phase: "Phase 3",
      name: "Solution & Narrative Submission",
      timing: "By Day 13",
      status: "CURRENT ACTION PHASE",
      desc: "Submit your technical solution (deployed live preview link + public GitHub repo) along with your 'Build-in-Public' LinkedIn narrative and prompt strategy writeup.",
      badge: "In Progress",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40"
    },
    {
      phase: "Phase 4",
      name: "Expert Evaluation & Prompt Credits",
      timing: "Day 14",
      status: "Upcoming",
      desc: "Jury evaluates apps based on functionality, prompt sophistication, and user experience. Points and Prompt Credits (PC) are credited to unlock the Swag Store.",
      badge: "Pending",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40"
    }
  ];

  const swagTiers = [
    { rank: "Top 1", credits: "5,000 PC", example: "Premium Backpack, Desk Pad, Desk Organizer, Hoodie, Mobile Stand & Diary" },
    { rank: "Top 2", credits: "4,500 PC", example: "Premium Backpack, Desk Pad, Desk Organizer, Sweatshirt & Laptop Sleeve" },
    { rank: "Top 3", credits: "4,000 PC", example: "Premium Backpack, Desk Pad, Desk Organizer & Diary" },
    { rank: "Top 4-5", credits: "3,000 - 3,500 PC", example: "Premium Backpack, Desk Pad & Mobile Stand" },
    { rank: "Top 6-10", credits: "2,000 - 2,500 PC", example: "Premium Backpack & Desk Pad" },
  ];

  return (
    <div className="glass rounded-2xl border border-white/5 p-5 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              PromptWars Official Roadmap & Video Explainer Hub
              <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded-full font-semibold">
                Official Hack2skill Sessions
              </span>
            </h3>
            <p className="text-xs text-slate-400">Instructions, evaluation criteria, and masterclass recordings</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-white/3 border border-white/8 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "videos" ? "bg-red-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Watch Sessions ({YOUTUBE_SESSIONS.length})
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "roadmap" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Roadmap & Rubric
          </button>
          <button
            onClick={() => setActiveTab("credits")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "credits" ? "bg-purple-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Prompt Credits & Swag
          </button>
        </div>
      </div>

      {/* View 1: Video Explainer Sessions */}
      {activeTab === "videos" && (
        <div className="space-y-4">
          <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-red-200">
              <Play className="w-4 h-4 text-red-400 fill-red-400 shrink-0" />
              <span>
                <strong>Featured Session:</strong> Challenge 6 (Urban Air Quality) Introductory & Problem Statement Explainer is live on YouTube!
              </span>
            </div>
            <a
              href="https://www.youtube.com/live/vOSkN7UqDFE?si=MN5Fas_sXuqIA2nL"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shrink-0 transition-all shadow-md"
            >
              Watch Now <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {YOUTUBE_SESSIONS.map((sess, idx) => (
              <div
                key={idx}
                className="bg-white/3 border border-white/8 hover:border-red-500/40 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between"
              >
                {/* Video thumbnail simulation */}
                <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${sess.id}/hqdefault.jpg`} 
                    alt={sess.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <a
                    href={sess.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center absolute shadow-xl group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </a>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur border border-white/10">
                    {sess.date}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-1.5"
                      style={{ backgroundColor: `${sess.badgeColor}20`, color: sess.badgeColor }}
                    >
                      {sess.badge}
                    </span>
                    <h4 className="text-xs font-bold text-white leading-snug group-hover:text-red-300 transition-colors">
                      {sess.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {sess.desc}
                    </p>
                  </div>

                  <a
                    href={sess.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 text-[11px] text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 self-start"
                  >
                    Open on YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Complete 4-Phase Roadmap & Guidelines */}
      {activeTab === "roadmap" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {phases.map((p, idx) => (
              <div key={idx} className="bg-white/3 border border-white/8 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">{p.phase}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{p.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold flex items-center gap-1 mb-2">
                    <Clock className="w-3 h-3 text-slate-500" /> {p.timing}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Official Evaluation Rubric & Mandatory Rules */}
          <div className="bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-900/50 rounded-2xl p-5 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Official Hack2skill Submission Criteria & Rules (From Roadmap)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                <span className="font-bold text-blue-300 block mb-1">1. Tool Requirement</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  You <strong>must use Google Antigravity</strong> as part of the vibe-coding / intent-driven workflow to be eligible for leaderboard rankings.
                </p>
              </div>
              <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                <span className="font-bold text-emerald-300 block mb-1">2. Two-Part Submission</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Both <strong>Technical</strong> (Live URL + GitHub repo) and <strong>Narrative</strong> (LinkedIn Build-in-Public post) must be submitted by Day 13.
                </p>
              </div>
              <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                <span className="font-bold text-purple-300 block mb-1">3. Evaluation Rubric</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Apps are evaluated on functional problem resolution, prompt depth, UI elegance, and how effectively real-world constraints are solved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Prompt Credits & Swag Store Guide */}
      {activeTab === "credits" && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-purple-950/30 border border-purple-900/50 rounded-2xl p-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Gift className="w-4 h-4 text-purple-400" />
                Prompt Credits (PC) Economy
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Every valid challenge submission unlocks Prompt Credits that can be redeemed in the Hack2skill Swag Store!
              </p>
            </div>
            <a
              href="https://swagstore.hack2skill.com/items"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-all shrink-0"
            >
              Visit Swag Store <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-white/8 rounded-xl overflow-hidden">
              <thead className="bg-white/5 text-slate-300 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3">Rank Tier</th>
                  <th className="p-3">Prompt Credits per Challenge</th>
                  <th className="p-3">Example Swag Unlocked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {swagTiers.map((t, idx) => (
                  <tr key={idx} className="hover:bg-white/2 transition-colors">
                    <td className="p-3 font-bold text-white">{t.rank}</td>
                    <td className="p-3 font-semibold text-purple-300">{t.credits}</td>
                    <td className="p-3 text-slate-300 text-[11px]">{t.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
