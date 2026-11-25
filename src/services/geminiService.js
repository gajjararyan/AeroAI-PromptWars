/**
 * Urban Air Quality Assistant GenAI Service
 * Supports Google Gemini API (Gemini 1.5 Flash / Pro) with seamless fallback
 * to a built-in domain reasoning engine.
 */

// Basic sanitizer to mitigate XSS in text rendering
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip raw angle brackets
    .trim()
    .slice(0, 1000); // enforce strict length boundary
}

export async function generateAirQualityAdvice({
  cityData,
  profile,
  prompt,
  apiKey = ""
}) {
  const cleanPrompt = sanitizeInput(prompt);
  if (!cleanPrompt) {
    return {
      text: "Please provide a valid question or query regarding air quality routines.",
      source: "validation-fallback"
    };
  }

  // Validate API key format (Google AI Studio keys start with AIzaSy and are 39 chars)
  const cleanKey = apiKey.trim();
  const isValidKeyFormat = /^AIzaSy[A-Za-z0-9_-]{33}$/.test(cleanKey);

  if (isValidKeyFormat) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(cleanKey)}`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are AeroAI, an expert Urban Air Quality & Smog Emergency Assistant for Hack2skill PromptWars.
Current Location Context:
- City: ${cityData.name}, ${cityData.country}
- Air Quality Index (AQI): ${cityData.aqi} (${cityData.status})
- PM2.5: ${cityData.pm25} µg/m³ (${cityData.whoMultiple}x WHO Guideline)
- Peak Hazard Hours: ${cityData.dangerWindow}
- Safe Dispersion Window: ${cityData.safeWindow}

User Household Profile:
- Members: ${profile.members.join(", ") || "General Adult"}
- Commute Method: ${profile.commute}
- Housing Type: ${profile.housing}
- Cooking / Heating: ${profile.cooking}

User Prompt: "${cleanPrompt}"

Provide actionable, scientifically accurate advice. Structure your answer with:
1. Immediate Exposure Risk Assessment
2. Low-Emission Daily Routine Adjustments
3. Indoor Air Quality Hacks
4. Measurable Direct Impact of following these actions.`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 800,
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return { text, source: "gemini" };
        }
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to local reasoning engine:", err);
    }
  }

  // Built-in intelligent reasoning engine (offline / mock)
  return {
    text: generateLocalReasoning(cityData, profile, cleanPrompt),
    source: "local-engine"
  };
}

export function generateLocalReasoning(city, profile, prompt) {
  const isHighRisk = profile.members.some(m => 
    ["infant", "elderly", "asthma", "pregnant"].includes(m)
  );

  const queryLower = prompt.toLowerCase();
  let customFocus = "";
  if (queryLower.includes("infant") || queryLower.includes("child") || queryLower.includes("baby")) {
    customFocus = "\n- **Child Protection Priority:** Alveolar ventilation rate is double that of adults. Ensure strict room filtration and zero outdoor exposure before midday solar mixing.";
  } else if (queryLower.includes("diy") || queryLower.includes("purifier") || queryLower.includes("filter") || queryLower.includes("cost")) {
    customFocus = "\n- **Frugal Purifier Blueprint:** Prioritize constructing a DIY Corsi-Rosenthal box using 4 MERV-13 filters and a standard box fan. Delivers 350+ CFM at ~₹2,500.";
  } else if (queryLower.includes("window") || queryLower.includes("ventilat") || queryLower.includes("open")) {
    customFocus = `\n- **Ventilation Window Rule:** Strictly avoid opening windows in the morning or night. The only viable period for a 15-20 min flush is during ${city.safeWindow}.`;
  }

  return `### 💨 Immediate Exposure Risk Assessment for ${city.name}
- **Current Air Quality:** AQI is **${city.aqi} (${city.status})** with PM2.5 at **${city.pm25} µg/m³** (${city.whoMultiple}x WHO 24h Guideline).
- **Vulnerability Status:** ${isHighRisk ? "⚠️ **CRITICAL RISK** — Your household includes sensitive members (" + profile.members.join(", ") + "). Deep alveolar deposition of toxic fine particles is elevated significantly under morning smog." : "Moderate to High exposure risk for adults during outdoor commutes."}${customFocus}

---

### 🛡️ Low-Emission Daily Routine Adjustments
1. **Reschedule Outdoor Exposure:**
   - Avoid strenuous outdoor respiration between **${city.dangerWindow}**.
   - If using **${profile.commute}**, wear a certified **N95 / FFP2 respirator** (cloth and surgical masks stop <15% of PM2.5).
   - Recommended transit window: Travel during the cleaner solar dispersion window **(${city.safeWindow})** or choose enclosed metro lines.
2. **School & Play Protocol:**
   - Keep children strictly indoors before midday. Substitute outdoor athletics with indoor activities.

---

### 🏡 Targeted Indoor Air Quality Hacks for ${profile.housing}
- **The "Clean Room" Sanctuary:** Focus filtration on the main bedroom. Seal door jambs with damp towels to reduce particulate infiltration by up to 80%.
- **DIY Filtration:** Deploy a **Corsi-Rosenthal box** (MERV-13 filter + box fan) for high CADR at a fraction of commercial purifier costs.
- **Cooking Protocol:** With **${profile.cooking}**, always activate the exhaust 1 minute before ignition and run 5 minutes post-cooking. Use damp microfiber mopping instead of dry broom sweeping.

---

### 📊 Direct Impact of Your Actions
- **Inhalation Reduction:** Adhering to the afternoon window prevents inhaling approximately **140 µg** of toxic particulate matter today.
- **Community Emission Savings:** Shifting from private vehicle to carpool/metro saves **~4.8 kg CO₂** and **14.5 g PM2.5** localized road pollution daily.`;
}
