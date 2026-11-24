export const CITIES_DATA = {
  delhi: {
    name: "Delhi NCR", country: "India", flag: "🇮🇳",
    aqi: 418, status: "Hazardous", statusColor: "#dc2626",
    pm25: 284.5, pm10: 432.0, no2: 88.2, co: 2.8, o3: 42.1,
    temp: "14°C", humidity: "76%", wind: "3 km/h",
    whoMultiple: 56.9,
    smogType: "Severe Winter Inversion",
    smogDesc: "Dense PM2.5 trapped at ground level by cold temperature inversion layer. Burn stubble haze mixing with diesel exhaust and construction dust.",
    safeWindow: "1:30 PM – 3:30 PM",
    dangerWindow: "6:00 AM – 11:00 AM  &  7:00 PM – 11:30 PM",
    lat: 28.6, lon: 77.2,
  },
  lahore: {
    name: "Lahore", country: "Pakistan", flag: "🇵🇰",
    aqi: 442, status: "Hazardous", statusColor: "#dc2626",
    pm25: 312.0, pm10: 480.0, no2: 95.0, co: 3.2, o3: 38.4,
    temp: "15°C", humidity: "82%", wind: "2 km/h",
    whoMultiple: 62.4,
    smogType: "Post-Harvest Agricultural Fire Smog",
    smogDesc: "Stagnant anticyclonic conditions trapping post-harvest burning smoke combined with brick kiln emissions and dense diesel traffic.",
    safeWindow: "2:00 PM – 3:30 PM",
    dangerWindow: "5:30 AM – 11:00 AM  &  6:30 PM – Midnight",
    lat: 31.5, lon: 74.3,
  },
  mumbai: {
    name: "Mumbai", country: "India", flag: "🇮🇳",
    aqi: 182, status: "Unhealthy", statusColor: "#ef4444",
    pm25: 98.4, pm10: 172.0, no2: 45.1, co: 1.1, o3: 61.2,
    temp: "27°C", humidity: "65%", wind: "11 km/h",
    whoMultiple: 19.6,
    smogType: "Coastal Urban Haze",
    smogDesc: "Moderate haze from dense traffic and construction dust. Sea breeze provides partial daily dispersion during afternoon hours.",
    safeWindow: "11:00 AM – 4:00 PM",
    dangerWindow: "8:00 AM – 11:00 AM  &  6:00 PM – 9:00 PM",
    lat: 19.0, lon: 72.8,
  },
  beijing: {
    name: "Beijing", country: "China", flag: "🇨🇳",
    aqi: 138, status: "Unhealthy for Sensitive Groups", statusColor: "#f97316",
    pm25: 64.2, pm10: 110.0, no2: 38.0, co: 0.9, o3: 55.0,
    temp: "2°C", humidity: "42%", wind: "14 km/h",
    whoMultiple: 12.8,
    smogType: "Managed Industrial Reduction",
    smogDesc: "Significant improvement from staged central heating controls. Remaining haze from industrial outskirts and vehicle exhaust.",
    safeWindow: "12:00 PM – 3:00 PM",
    dangerWindow: "7:00 AM – 9:30 AM",
    lat: 39.9, lon: 116.4,
  },
  london: {
    name: "London", country: "UK", flag: "🇬🇧",
    aqi: 45, status: "Good", statusColor: "#10b981",
    pm25: 11.2, pm10: 22.0, no2: 24.5, co: 0.3, o3: 48.2,
    temp: "8°C", humidity: "85%", wind: "18 km/h",
    whoMultiple: 2.2,
    smogType: "Clear Atmospheric Dispersion",
    smogDesc: "Westerly Atlantic wind systems providing effective pollutant dispersion. ULEZ zone significantly reduced roadside NO2.",
    safeWindow: "All Day",
    dangerWindow: "None",
    lat: 51.5, lon: -0.1,
  },
  newyork: {
    name: "New York", country: "USA", flag: "🇺🇸",
    aqi: 58, status: "Moderate", statusColor: "#f59e0b",
    pm25: 15.4, pm10: 31.0, no2: 29.0, co: 0.5, o3: 52.0,
    temp: "6°C", humidity: "55%", wind: "15 km/h",
    whoMultiple: 3.1,
    smogType: "Urban Vehicle Baseline",
    smogDesc: "Moderate cold-air stagnation with ground-level ozone from dense vehicle fleet. Generally manageable with standard precautions.",
    safeWindow: "All Day",
    dangerWindow: "8:00 AM – 9:30 AM (Rush hour)",
    lat: 40.7, lon: -74.0,
  }
};

export const AQI_SCALE = [
  { max: 50, label: "Good", color: "#10b981", bg: "rgba(16,185,129,0.15)", desc: "Air quality is satisfactory; little or no risk." },
  { max: 100, label: "Moderate", color: "#f59e0b", bg: "rgba(245,158,11,0.15)", desc: "Some pollutants may moderately affect very few hypersensitive people." },
  { max: 150, label: "Unhealthy for Sensitive Groups", color: "#f97316", bg: "rgba(249,115,22,0.15)", desc: "Sensitive groups may experience health effects." },
  { max: 200, label: "Unhealthy", color: "#ef4444", bg: "rgba(239,68,68,0.15)", desc: "Everyone may begin to experience health effects." },
  { max: 300, label: "Very Unhealthy", color: "#a855f7", bg: "rgba(168,85,247,0.15)", desc: "Health alert: everyone may experience serious health effects." },
  { max: 500, label: "Hazardous", color: "#dc2626", bg: "rgba(220,38,38,0.15)", desc: "Emergency conditions. Everyone is more likely to be affected." },
];

export const IAQ_HACKS = [
  {
    id: "cr-box", emoji: "🔧",
    title: "DIY Corsi-Rosenthal Box",
    category: "Hardware", difficulty: "Easy", time: "30 min", cost: "₹2,500 / $30",
    cadr: "350–450 CFM",
    summary: "4 × MERV-13 filters + box fan. Outperforms most ₹20,000 commercial purifiers at a fraction of the cost.",
    steps: [
      "Arrange four 20×20×1 MERV-13 furnace filters in a cube, arrows pointing inward.",
      "Tape the bottom closed with a 20×20 cardboard square and duct tape.",
      "Place a 20-inch box fan on top blowing air upward out of the cube.",
      "Add a cardboard shroud around fan corners to stop backdraft — boosts efficiency 40%.",
    ],
    impact: "Removes 90%+ PM2.5 in a 400 sq ft room within 25 minutes. Equivalent to medical-grade HEPA units."
  },
  {
    id: "wet-mop", emoji: "🧹",
    title: "Static Wet-Microfiber Protocol",
    category: "Daily Habit", difficulty: "Instant", time: "5 min", cost: "Free",
    cadr: "Prevents 70% PM resuspension",
    summary: "Dry brooms aerosolize toxic settled soot back into your breathing zone. Wet microfiber is the antidote.",
    steps: [
      "Ban all dry brooms and feather dusters during smog season permanently.",
      "Use damp microfiber with a few drops of dish soap for all hard surfaces twice daily.",
      "Two-bucket mop system: one with soapy water, one for rinsing — never mix dirty and clean.",
      "Park shoes outside the door — footwear tracks 60% of outdoor toxic road dust inside.",
    ],
    impact: "Reduces airborne indoor PM2.5 count by 65–80% vs. dry sweeping. Zero cost, maximum protection."
  },
  {
    id: "sealing", emoji: "🏠",
    title: "Positive Pressure Window Sealing",
    category: "Sealing", difficulty: "Easy", time: "15 min", cost: "₹400 / $5",
    cadr: "Stops 85% external infiltration",
    summary: "Smog creeps through micro-gaps around windows and doors. Silicone weather-strip tape seals them in minutes.",
    steps: [
      "Apply self-adhesive silicone weather-stripping along all window frame perimeters.",
      "Roll damp towels at base of all exterior doors during peak smog hours.",
      "Tape a MERV-13 filter over bathroom exhaust ducts when fans are off (prevents smog backdraft).",
      "Prioritize one bedroom as a 'clean room' sanctuary — seal it tightly for sleeping.",
    ],
    impact: "Cuts natural building air infiltration from 1.5 ACH to below 0.3 ACH. Halves overnight PM2.5 exposure."
  },
  {
    id: "plants", emoji: "🌿",
    title: "NASA-Validated Botanical Trio",
    category: "Bio-Filtration", difficulty: "Low maintenance", time: "Ongoing", cost: "₹800–₹1,500",
    cadr: "Complementary VOC absorption",
    summary: "Three specific plants that NASA research validated for measurable indoor air improvement.",
    steps: [
      "Snake Plant (Sansevieria): Converts CO₂ → O₂ at NIGHT — place in bedroom for sleep air quality.",
      "Areca Palm: Living humidifier removing airborne xylene and toluene from furniture off-gassing.",
      "Peace Lily: Absorbs trichloroethylene and airborne spores from moisture-prone corners.",
      "Wipe leaves with wet cloth weekly to clear PM2.5 dust from stomata pores.",
    ],
    impact: "Improves indoor VOC levels and boosts night-time oxygen saturation in sealed sleeping rooms."
  },
  {
    id: "cooking", emoji: "👨‍🍳",
    title: "Smart Kitchen Protocol",
    category: "Cooking", difficulty: "Instant", time: "0 min", cost: "Free",
    cadr: "Halves indoor ultra-fine particle spikes",
    summary: "High-heat gas cooking generates PM2.5 spikes up to 600 µg/m³ — worse than outdoor Delhi air.",
    steps: [
      "Always cover pans with lids when sautéing, boiling, or frying to trap greasy aerosols.",
      "Switch gas burners → induction cooktops during smog season to eliminate indoor NO₂.",
      "Turn kitchen exhaust hood ON 1 minute before cooking, leave it running 5 min after flame off.",
      "Keep kitchen door shut from living/bedroom areas during cooking.",
    ],
    impact: "Eliminates indoor CO and combustion NO₂ spikes that cause acute respiratory irritation and headaches."
  }
];

export const YOUTUBE_SESSIONS = [
  {
    title: "Challenge 6: Urban Air Quality — PS Explainer",
    date: "Nov 2026",
    url: "https://www.youtube.com/live/vOSkN7UqDFE?si=MN5Fas_sXuqIA2nL",
    id: "vOSkN7UqDFE",
    badge: "Live",
    badgeColor: "#dc2626",
    desc: "AI engineers break down the Urban Air Quality problem statement and optimal prompt strategies."
  },
  {
    title: "Challenge 5: Celebration & Event Planner Explainer",
    date: "23 Oct 2026",
    url: "https://www.youtube.com/live/9-forxKsm0E?si=HYWyDQb13WZEDQSM",
    id: "9-forxKsm0E",
    badge: "Past",
    badgeColor: "#6366f1",
    desc: "Deep dive into GenAI-powered event planning assistant for weddings and community events."
  },
  {
    title: "Challenge 4: Smart Stadiums FIFA 2026",
    date: "9 Jul 2026",
    url: "https://www.youtube.com/live/ItWyMPJagAw?si=uXF7NQxz1NIkKpeP",
    id: "ItWyMPJagAw",
    badge: "Past",
    badgeColor: "#6366f1",
    desc: "Optimize stadium operations and enhance FIFA World Cup 2026 live event experience."
  },
  {
    title: "Challenge 3: Carbon Footprint Platform",
    date: "10 Jun 2026",
    url: "https://www.youtube.com/live/RZKByy6sLlQ?si=wdGPA1dMYv4gPAdP",
    id: "RZKByy6sLlQ",
    badge: "Past",
    badgeColor: "#6366f1",
    desc: "Build tools that track environmental impact and carbon sustainability metrics."
  },
  {
    title: "Challenge 2: Election Process Education",
    date: "24 Apr 2026",
    url: "https://www.youtube.com/live/fdi63eSyyYM?si=p0Godvt6xWV0_470",
    id: "fdi63eSyyYM",
    badge: "Past",
    badgeColor: "#6366f1",
    desc: "Interactive election process assistant for civic education — real-world constraints unpacked."
  },
];

export const SUBMISSION_REQUIREMENTS = [
  { icon: "💻", label: "Live App Preview URL", desc: "Deployed working application (Vercel, Netlify, etc.)", required: true },
  { icon: "📦", label: "GitHub Source Code", desc: "Public repo with all source files and README", required: true },
  { icon: "🔮", label: "Google Antigravity", desc: "Must demonstrate use of Antigravity in development", required: true },
  { icon: "✍️", label: "LinkedIn Post (Build-in-Public)", desc: "Share your journey, tools used, and learnings publicly", required: true },
  { icon: "📝", label: "Technical Blog Post", desc: "Detailed writeup covering problem, approach, and solution", required: false },
];
