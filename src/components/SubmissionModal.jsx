import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  X, 
  FileText, 
  Award, 
  ExternalLink, 
  Sparkles, 
  Share2, 
  Video, 
  Gift, 
  Flame,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export default function SubmissionModal({ isOpen, onClose }) {
  const [copiedSection, setCopiedSection] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen) return null;

  const copyToClipboard = (text, sectionName) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(""), 2000);
  };

  const projectTitle = "AeroAI: Urban Air Quality & Smog Emergency Assistant";
  const challengeInfo = "Hack2skill PromptWars Virtual • Challenge 06: Urban Air Quality Assistant (Day 13 Submission Phase)";
  const authorInfo = "Participant: Aryan Gajjar (gajjararyan1509@gmail.com)";

  const projectOverview = `Project Title: AeroAI - Urban Air Quality & Smog Emergency Assistant
Participant: Aryan Gajjar (gajjararyan1509@gmail.com)
Event: Hack2skill PromptWars Virtual (Challenge 06)
Track / Theme: Urban Climate Resilience & Public Health
AI Environment: Google Antigravity & Google Gemini 1.5 Flash

Problem Statement:
"Create a GenAI-powered assistant that helps families and communities navigate severe winter smog and urban air pollution. The application should suggest low-emission daily routines, indoor air quality hacks, and sustainable alternatives tailored to their location and lifestyle, while clearly explaining the direct impact of their choices."

Solution Summary:
AeroAI is a production-grade, intent-driven web application developed with Google Antigravity to turn passive AQI numbers into personalized, life-saving diurnal action plans.

Core Features:
1. Diurnal Smog Inversion Engine: Analyzes boundary layer physics (pre-dawn cooling traps vs midday solar lift) across 6 global high-risk cities (Delhi NCR, Lahore, Mumbai, Beijing, NYC, London).
2. Multi-Axis Household Profiler: Accounts for sensitive family members (infants, asthmatics, elderly), commute modes (two-wheeler, metro, car), and housing altitude.
3. Diurnal Routine Planner: Generates hour-by-hour exposure schedules calculating when to stay indoors, seal windows, shift exercise, and wear certified N95 respirators.
4. Frugal IAQ Hacks Hub: Complete blueprints for DIY Corsi-Rosenthal boxes (CADR 400 CFM under ₹2,500), static wet mopping protocols, window microclimate sealing, and NASA botanical filtration.
5. Direct Impact & Community Multiplier: Calculates individual and collective CO2 averted (kg), PM2.5 diverted (g), and deep lung alveolar sparing (mg).
6. Dual-Engine GenAI Strategist: Google Gemini 1.5 Flash REST API integration with a local domain reasoning engine for zero-downtime offline fallback.`;

  const promptStrategy = `Prompt Engineering & Vibe Coding Strategy (Google Antigravity):
1. Intent-Driven Decomposition:
   - Deconstructed the open problem into 4 clinical objectives: exposure risk diagnosis, temporal behavior modification, hardware-free mitigation hacks, and quantitative climate feedback loops.
2. Contextual Meteorological Prompting:
   - Embedded atmospheric inversion dynamics, WHO 24-hour PM2.5 thresholds (5 µg/m³), and alveolar deposition fractions into system prompts to ensure medical and scientific accuracy.
3. Structured State Injection:
   - Injected real-time user state (sensitive members, transit type, housing floor level) directly into LLM prompt contexts, eliminating generic advice and producing tailored hour-by-hour schedules.
4. Hybrid Local/Cloud Architecture:
   - Implemented seamless fallback from Gemini 1.5 Flash cloud REST endpoints to a local heuristic reasoning engine, guaranteeing instant user response times even with zero API configuration.`;

  const linkedInPost = `🚀 Excited to launch "AeroAI: Urban Air Quality & Smog Emergency Assistant" for Hack2skill PromptWars Virtual (Challenge 06)! 💨

Severe winter smog and toxic PM2.5 trap lethal particulate matter at breathing height across cities like Delhi and Lahore, severely impacting infants, elderly citizens, and respiratory patients.

Using intent-driven vibe-coding with Google Antigravity, I built AeroAI to turn passive air quality data into personalized, life-saving action plans.

✨ Highlights of AeroAI:
1️⃣ Diurnal Inversion Engine: Pinpoints safe midday solar dispersion windows and flags hazardous early morning/evening inversion traps.
2️⃣ Household Tailoring: Customizes routines for families with asthmatics, infants, and high-exposure two-wheeler commuters.
3️⃣ Frugal IAQ Hacks Hub: Detailed blueprints for DIY Corsi-Rosenthal boxes (CADR 400 CFM for under ₹2,500), static wet mopping protocols, and botanical purification.
4️⃣ Direct Impact Abatement Engine: Live calculators quantifying CO2 saved, grams of PM2.5 diverted, and neighborhood scaling up to 1,000 homes.
5️⃣ Gemini 1.5 Flash GenAI: Intelligent consultation engine for real-time smog mitigation strategies.

Check out the live project and roadmap! 🌍

#PromptWars #Hack2skill #GoogleForDevelopers #BuildWithAI #GenerativeAI #VibeCoding #Antigravity #CleanAir #UrbanSustainability #AirQuality #ClimateTech`;

  const instagramReelScript = `📱 INSTAGRAM REEL SCRIPT (+4,000 PROMPT CREDITS BONUS!)
Goal: Post an Instagram Reel showcasing your project to claim the +4,000 stackable bonus credits!

Caption to Paste on Instagram:
"Can a simple prompt save lives during 400+ AQI winter smog? 💨 
I built AeroAI using Google Antigravity for #PromptWars Virtual Challenge 06! 
Instead of just showing passive AQI numbers, AeroAI gives you diurnal inversion routines, ₹2,500 DIY Corsi-Rosenthal purifiers, and real-time lung exposure calculations! 🫁✨

#PromptWars #Hack2skill #GoogleForDevelopers #BuildWithAI #Antigravity #AI #TechReels #Coding #CleanAir"

-------------------------------------------------------------
🎬 30-SECOND VISUAL REEL RECORDING FLOW:
-------------------------------------------------------------
[0:00 - 0:05] Hook:
Visual: Record screen on the Delhi AQI 418 dial pulsing red.
Spoken audio: "Your AQI app is lying to you! A number like 418 doesn't tell you WHEN you can actually breathe safely outside..."

[0:05 - 0:15] Solution Demo:
Visual: Quick scroll to Diurnal Routine Planner showing the green Midday Solar Window (11:30 AM - 3:30 PM).
Spoken audio: "This is AeroAI, built using Google Antigravity. It maps the atmospheric boundary layer so you know the EXACT 2-hour window when smog disperses upward!"

[0:15 - 0:25] Frugal IAQ Hacks:
Visual: Click the 'Indoor IAQ Hacks' tab and show the DIY Corsi-Rosenthal Box blueprint.
Spoken audio: "Can't afford a ₹25,000 purifier? AeroAI gives you blueprints for a ₹2,500 DIY Corsi-Rosenthal box that cleans 400 cubic feet of air per minute."

[0:25 - 0:30] CTA / Call to Action:
Visual: Show the AeroAI Consultation chat giving advice.
Spoken audio: "Check out AeroAI for Hack2skill PromptWars! Link in bio!"`;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-[#0b1120] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">Challenge 06 Submission & Rewards Packet</h3>
              <p className="text-xs text-slate-400">{challengeInfo} · {authorInfo}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-2.5 overflow-x-auto no-scrollbar bg-black/20">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "overview" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Project Overview
          </button>
          <button
            onClick={() => setActiveTab("reel")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "reel" ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" /> Instagram Reel (+4,000 Credits Bonus)
          </button>
          <button
            onClick={() => setActiveTab("linkedin")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "linkedin" ? "bg-sky-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" /> LinkedIn Narrative
          </button>
          <button
            onClick={() => setActiveTab("prompt")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "prompt" ? "bg-purple-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Antigravity Prompt Strategy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* TAB 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Technical Solution Description (For Hack2skill Form)
                </h4>
                <button
                  onClick={() => copyToClipboard(projectOverview, "overview")}
                  className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  {copiedSection === "overview" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedSection === "overview" ? "Copied!" : "Copy Description"}
                </button>
              </div>
              <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {projectOverview}
              </pre>
            </div>
          )}

          {/* TAB 2: Instagram Reel Script (+4,000 Credits Bonus) */}
          {activeTab === "reel" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-indigo-500/15 border border-pink-500/30 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-pink-200">
                  <Flame className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>
                    <strong>Official Hack2skill Reward Rule:</strong> Posting an Instagram Reel about your project earns you <strong>+4,000 Stackable Prompt Credits</strong> (almost equal to Rank 1)!
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(instagramReelScript, "reel")}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-3 py-1 rounded-lg text-xs font-bold shrink-0 transition-all shadow-md flex items-center gap-1"
                >
                  {copiedSection === "reel" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedSection === "reel" ? "Copied!" : "Copy Reel Script"}
                </button>
              </div>
              <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {instagramReelScript}
              </pre>
            </div>
          )}

          {/* TAB 3: LinkedIn Post */}
          {activeTab === "linkedin" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-sky-400" />
                  LinkedIn "Build-in-Public" Narrative (Required for Submission)
                </h4>
                <button
                  onClick={() => copyToClipboard(linkedInPost, "linkedin")}
                  className="text-xs bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  {copiedSection === "linkedin" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedSection === "linkedin" ? "Copied!" : "Copy LinkedIn Post"}
                </button>
              </div>
              <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {linkedInPost}
              </pre>
            </div>
          )}

          {/* TAB 4: Prompt Strategy */}
          {activeTab === "prompt" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Prompt Engineering Architecture (Google Antigravity)
                </h4>
                <button
                  onClick={() => copyToClipboard(promptStrategy, "prompt")}
                  className="text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  {copiedSection === "prompt" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedSection === "prompt" ? "Copied!" : "Copy Strategy"}
                </button>
              </div>
              <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {promptStrategy}
              </pre>
            </div>
          )}
        </div>

        {/* Footer with Swag Store reminder */}
        <div className="p-4 border-t border-white/5 bg-white/2 flex items-center justify-between flex-wrap gap-2">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-purple-400" />
            <span>Target: <strong>5,000 Rank 1 PC + 4,000 Reel Bonus = 9,000 PC</strong> (Redeemable until Jan 1, 2027)</span>
          </div>
          <a
            href="https://hack2skill.com/event/pwvirtual1/dashboard/submissions"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 ml-auto"
          >
            Open Hack2skill Submissions <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
