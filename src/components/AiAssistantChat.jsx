import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, RefreshCw, Lightbulb } from 'lucide-react';
import { generateAirQualityAdvice, sanitizeInput } from '../services/geminiService';
import { CITIES_DATA } from '../data/mockData';

export default function AiAssistantChat({ selectedCity, profile, apiKey }) {
  const city = CITIES_DATA[selectedCity] || CITIES_DATA.delhi;
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "ai",
      text: `Hello! I am **AeroAI**, your urban air quality and smog emergency strategist. 

I see you are located in **${city.name}** (Current AQI: **${city.aqi} - ${city.status}**), and your household profile includes: **${profile.members.length ? profile.members.join(", ") : "General Adult"}**.

How can I help you adjust your daily routines, protect vulnerable family members, or build low-cost clean room hacks today?`
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const samplePrompts = [
    `How do I protect my infant during ${city.name}'s peak smog?`,
    "What is the best 30-minute window to ventilate my apartment?",
    "Can you give me a DIY air filter guide under ₹2,500?",
    "What low-emission commute alternatives work best for high AQI days?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const rawQuery = textToSend || input;
    const cleanQuery = sanitizeInput(rawQuery);
    if (!cleanQuery || loading) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: cleanQuery
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await generateAirQualityAdvice({
        cityData: city,
        profile,
        prompt: cleanQuery,
        apiKey
      });

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        source: response.source
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "I encountered an error generating advice. Please check your connection or retry."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-lg backdrop-blur flex flex-col h-[600px]"
      role="region"
      aria-label="AeroAI Consultation Chat"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Bot className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              AeroAI Strategic Consultation
              <span className="text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700 px-2 py-0.5 rounded-full font-semibold">
                Context-Aware
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Synthesizing WHO standards, thermal inversion physics & your household profile
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([
              {
                id: Date.now().toString(),
                sender: "ai",
                text: `Session refreshed for ${city.name}. What air quality challenge can I resolve for you?`
              }
            ]);
          }}
          className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700/50 transition-all text-xs flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="Reset conversation"
          aria-label="Reset conversation"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Suggested Quick Prompts */}
      <div 
        className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none shrink-0"
        role="group"
        aria-label="Suggested quick questions"
      >
        <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0 font-medium mr-1">
          <Lightbulb className="w-3 h-3 text-amber-400" aria-hidden="true" /> Prompts:
        </span>
        {samplePrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="text-[11px] bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-blue-500/60 px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0 focus:outline-none focus:ring-1 focus:ring-blue-400"
            aria-label={`Ask: ${p}`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div 
        className="flex-1 overflow-y-auto space-y-3.5 pr-2"
        role="log"
        aria-live="polite"
        aria-label="Chat messages history"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-blue-300"
              }`}
              aria-hidden="true"
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`rounded-2xl px-4 py-3 text-xs leading-relaxed max-w-[85%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-tr-none font-medium"
                  : "bg-slate-900/90 text-slate-200 border border-slate-700/70 rounded-tl-none whitespace-pre-line"
              }`}
            >
              {msg.text}
              {msg.source && (
                <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Engine: {msg.source === "gemini" ? "Google Gemini 1.5 Flash Cloud" : "AeroAI Inversion Expert (Local)"}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic py-2" role="status">
            <Sparkles className="w-4 h-4 text-blue-400 animate-spin" aria-hidden="true" />
            <span>AeroAI is analyzing local dispersion patterns and generating your plan...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="pt-3 border-t border-slate-700/60 mt-2 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
          role="search"
        >
          <label htmlFor="ai-chat-input" className="sr-only">
            Ask AeroAI a question
          </label>
          <input
            id="ai-chat-input"
            type="text"
            placeholder={`Ask AeroAI about low-emission routines or smog hacks in ${city.name}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            maxLength={1000}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Send query to AeroAI"
          >
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Consult</span>
          </button>
        </form>
      </div>
    </div>
  );
}
