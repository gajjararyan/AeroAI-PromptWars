# 💨 AeroAI: Urban Air Quality & Smog Emergency Assistant

[![Built for PromptWars](https://img.shields.io/badge/PromptWars-Virtual%20Challenge%2006-blue.svg)](https://hack2skill.com/event/pwvirtual1)
[![Powered by Google Antigravity](https://img.shields.io/badge/Google%20Antigravity-Intent--Driven%20AI-4285F4.svg)](https://hack2skill.com)
[![GenAI Engine](https://img.shields.io/badge/Google%20Gemini-1.5%20Flash%20REST-8B5CF6.svg)](https://ai.google.dev)
[![React 19 + Vite](https://img.shields.io/badge/Frontend-React%2019%20%2B%20TailwindCSS-06B6D4.svg)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Built by:** Aryan Gajjar (`gajjararyan1509@gmail.com`)  
> **Challenge:** PromptWars: Virtual — Challenge 06 (Urban Air Quality Assistant)  
> **Organizers:** Hack2skill & Google for Developers  
> **Live Demo:** [Deploy with Vercel / Netlify]

---

## 🎯 The Problem Addressed

During winter months in cities like **Delhi NCR, Lahore, and Beijing**, temperature inversions trap extreme concentrations of fine particulate matter (**PM2.5 > 280–320 µg/m³**, over **56× to 62× the WHO safe limit**) near the ground. 

Most existing AQI apps only display passive numbers without explaining:
1. **When** it is safe or lethal to go outside (diurnal boundary layer dynamics).
2. **How** families with infants, elderly, or asthmatics should adapt routines.
3. **What** zero-cost or frugal indoor hacks (Corsi-Rosenthal box, static wet-mopping) can clean home air without ₹20,000 commercial purifiers.
4. **The measurable impact** of collective sustainable alternatives on personal lung health and urban emissions.

**AeroAI** bridges this gap by turning passive monitoring into personalized, life-saving diurnal action plans.

---

## 🌟 Key Features

### 1. 🎛️ Dynamic AQI & Diurnal Inversion Engine
- Real-time meteorological models across **Delhi NCR, Lahore, Mumbai, Beijing, NYC, and London**.
- Custom SVG radial needle gauge tracking US AQI, hazard bands, and WHO multiples.
- Pinpoints the **Midday Solar Dispersion Window** (only safe time for errands and brief ventilation) vs. **Pre-Dawn & Evening Inversion Traps**.

### 2. 👨‍👩‍👧‍👦 Multi-Axis Household Profiler
- Accounts for sensitive members (**Infants, Elderly, Asthmatics, Pregnant women, Pets**).
- Modulates risk based on commute modes (**Metro, Two-Wheeler, Car recirculation, Walking**) and housing microclimate (**high-rise vs ground floor traffic soot exposure**).

### 3. 🗓️ Diurnal Routine Planner
- Hour-by-hour exposure schedule calculating when to stay indoors, seal windows, shift exercise, and wear certified N95 respirators.
- Reduces inhaled PM2.5 by up to **68%** through timing adjustments alone.

### 4. 🔧 Frugal Indoor Air Quality (IAQ) Hacks Hub
Step-by-step blueprints and CADR efficiency scores for:
- **DIY Corsi-Rosenthal Box:** 4× MERV-13 filters + box fan delivering **350–450 CFM** CADR under ₹2,500 ($30).
- **Static Wet-Microfiber Protocol:** Complete ban on dry broom sweeping to stop PM2.5 resuspension.
- **Window Microclimate Sealing:** Silicone draft-proofing and positive pressure "clean room" sanctuaries.
- **NASA Clean Air Botanical Trio:** Snake Plant, Areca Palm, and Peace Lily for nighttime O₂ saturation.
- **Cooking Protocol:** Induction transition and range hood timing to prevent 600 µg/m³ indoor NO₂ spikes.

### 5. 📊 Direct Impact & Community Multiplier
- Interactive sliders calculating:
  - **Avoided CO₂** (kg) from transit shifts.
  - **PM2.5 Tailpipe Diverted** (grams).
  - **Deep Alveolar Sparing** (mg of toxic particulate kept out of deep lungs).
  - **Community Scaling:** Simulates neighborhood adoption across up to 1,000 homes.

### 6. 🤖 Dual-Engine AeroAI Strategist (Google Antigravity & Gemini)
- Integrated with **Google Gemini 1.5 Flash REST API** for live cloud intelligence.
- Zero-downtime built-in **local domain reasoning engine** ensuring instant, scientifically accurate responses even without an API key.

---

## 📐 Architecture & Tech Stack

```
                          ┌───────────────────────────┐
                          │   User Household Profile   │
                          │(Infants, Asthmatics, Transit)│
                          └─────────────┬─────────────┘
                                        │
                                        ▼
┌───────────────────────────┐     ┌───────────┐     ┌───────────────────────────┐
│     City AQI Datasets     ├───► │  AeroAI   │ ◄───┤ Google Antigravity Prompt │
│(Inversion Physics, WHO DB)│     │Orchestratr│     │    Strategy & Context     │
└───────────────────────────┘     └─────┬─────┘     └───────────────────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            │                           │                           │
            ▼                           ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│Diurnal Routine Planner│   │   Indoor Hacks Hub    │   │ Impact Abatement Calc │
│ (5 Time-of-Day Slots) │   │ (Corsi-Rosenthal Box) │   │ (CO2 & Lung Sparing)  │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
                                        │
                                        ▼
                            ┌───────────────────────┐
                            │ Gemini 1.5 Flash API  │
                            │  + Offline Fallback   │
                            └───────────────────────┘
```

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 3.4 (Custom glassmorphic dark UI + particle canvas)
- **Icons:** Lucide React
- **Animations:** Framer Motion + Canvas 2D Particle Engine
- **AI Core:** Google Antigravity & Google Gemini 1.5 Flash

---

## 🚀 Quickstart & Local Setup

```bash
# Clone the repository
git clone https://github.com/your-username/aeroai-promptwars.git
cd aeroai-promptwars

# Install dependencies
npm install

# Start local dev server
npm run dev
# -> Opens http://localhost:5173/

# Create production build
npm run build
# -> Builds optimized bundle in dist/
```

---

## 🏆 Evaluation Alignment (Hack2skill PromptWars Rubric)

| Judging Criteria | Weight | AeroAI Implementation |
|---|---|---|
| **Problem Statement Match** | 25% | Solves winter smog routines, IAQ hacks, lifestyle alternatives, and direct impact calculation. |
| **Google Antigravity & AI** | 25% | Built using intent-driven prompts, Google Antigravity environment, and Gemini 1.5 Flash API. |
| **UI/UX & Visual Polish** | 25% | Modern dark cyberpunk glassmorphism, responsive mobile layout, custom SVG needle gauge, particle canvas. |
| **Social & Community Proof** | 25% | LinkedIn "Build-in-Public" narrative + Instagram Reel script to claim the **+4,000 Stackable Bonus Credits**. |

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
Built with ❤️ for **PromptWars: Virtual (Challenge 06)** by Aryan Gajjar.
