import React, { useState } from 'react';
import { Video, Copy, Check, X, Play, Clock, Sparkles, Monitor, Mic } from 'lucide-react';

export default function VideoScriptModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const script = `🎬 2-MINUTE DEMO VIDEO PITCH SCRIPT FOR HACK2SKILL PROMPTWARS
Project: AeroAI - Urban Air Quality & Smog Emergency Assistant (Challenge 06)
Creator: Aryan Gajjar (gajjararyan1509@gmail.com)
Recommended Tool: Loom, OBS, or Screen Recorder (Record screen + voiceover)

─────────────────────────────────────────────────────────────
⏱️ SECTION 1: HOOK & THE URBAN AIR CRISIS (0:00 – 0:30)
─────────────────────────────────────────────────────────────
[Action: Show the top AQI Hero Card in Delhi NCR / Lahore with the red pulsing gauge and 56.9x WHO guideline badge]

VOICEOVER:
"Hi everyone, I'm Aryan! Every winter, severe urban smog and ground-level temperature inversions trap lethal PM2.5 and nitrogen dioxide right at human breathing height. In cities like Delhi, Lahore, and Beijing, AQI numbers cross 400+, directly threatening vulnerable children, asthmatics, and daily commuters.

Most apps just display a passive number. But what families actually need is actionable, life-saving diurnal guidance. That’s why I built AeroAI using Google Antigravity and Gemini 1.5 Flash!"

─────────────────────────────────────────────────────────────
⏱️ SECTION 2: HOUSEHOLD PERSONALIZATION & DIURNAL ROUTINES (0:30 – 1:00)
─────────────────────────────────────────────────────────────
[Action: Click on 'Infant / Toddler' and 'Asthma' in the Profile Selector, then scroll through the Diurnal Routine Planner]

VOICEOVER:
"AeroAI starts by modeling your household's unique microclimate. You can configure sensitive family members—like infants or elderly asthmatics—plus your commute mode and housing level.

AeroAI instantly computes a personalized Diurnal Inversion Routine. For example, it flags the pre-dawn window between 5:30 AM and 9:00 AM as an extreme hazard trap where all exercise must be indoors. More importantly, it pinpoints the midday solar lift window—11:30 AM to 3:30 PM—as the only safe period for essential errands and quick ventilation."

─────────────────────────────────────────────────────────────
⏱️ SECTION 3: FRUGAL INDOOR IAQ HACKS (1:00 – 1:30)
─────────────────────────────────────────────────────────────
[Action: Switch to the 'Indoor IAQ Hacks' tab and click on the 'DIY Corsi-Rosenthal Box']

VOICEOVER:
"Commercial air purifiers cost thousands, but not every family can afford them. 
Under the Indoor IAQ Hacks Hub, AeroAI delivers frugal engineering blueprints:
Like this DIY Corsi-Rosenthal Box—built for under ₹2,500 using MERV-13 furnace filters and a box fan, delivering a massive 400 CFM clean air delivery rate!

We also include zero-cost behavioral hacks, like our Static Wet-Microfiber Protocol, which completely bans dry broom sweeping to prevent aerosolizing settled toxic soot."

─────────────────────────────────────────────────────────────
⏱️ SECTION 4: DIRECT IMPACT CALCULATOR & AI STRATEGIST (1:30 – 2:00)
─────────────────────────────────────────────────────────────
[Action: Switch to 'Direct Impact Engine', move the commute slider, then click 'AeroAI Consultation' to show a response]

VOICEOVER:
"To motivate community action, AeroAI's Direct Impact Engine quantifies the tangible results of your choices: from kilograms of CO2 avoided and toxic PM2.5 diverted, to deep lung alveolar sparing in milligrams. 

When scaled to a colony of 350 homes, that’s over 40 tons of CO2 prevented!

Finally, our AeroAI Strategist combines Google Gemini 1.5 Flash cloud intelligence with an offline domain reasoning engine, providing 24/7 contextual answers.

AeroAI turns ambient air quality awareness into real, life-saving climate action. Thank you Hack2skill and Google for Developers for PromptWars Virtual!"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-[#0b1120] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">2-Minute Demo Video Pitch Script</h3>
              <p className="text-xs text-slate-400">Step-by-step recording guide & voiceover script for your Hack2skill video</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-5 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-amber-200">
            <Mic className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Use this script while recording your screen using <strong>Loom</strong> or any screen recorder!</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md transition-all shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied Script!" : "Copy Full Script"}</span>
          </button>
        </div>

        {/* Script Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          <pre className="text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
            {script}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-white/2 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Pro tip: Record at 1080p, test microphone levels before speaking, and keep video under 3 minutes.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
