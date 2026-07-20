"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

// Wasiur Rahman Sakib's actual daily tech stack (analyzed from project repositories)
const DAILY_SKILLS = [
  "TypeScript", "JavaScript", "React", "Next.js", "TailwindCSS", 
  "Node.js", "Express", "Python", "REST APIs", "Git", "Vercel"
];

// Wasiur's comfortable frameworks, databases, and architectural tools
const COMFORTABLE_SKILLS = [
  "C++", "MongoDB", "Mongoose", "Firebase", "Framer Motion", "GSAP", 
  "Three.js", "Spline 3D", "FastAPI", "WebSockets (Socket.io)", 
  "NextAuth", "JWT Auth", "Zod", "Zustand", "Docker", "Linux"
];

// Wasiur's AI integrations, ML SDKs, data engines & specialized web tools
const OTHER_SKILLS = [
  "Vercel AI SDK", "Google Gemini API", "OpenAI API", "Groq AI", "Agentic Workflows", 
  "LLM Routing", "Vector Embeddings & RAG", "Prompt Engineering", "LangChain", 
  "AI Agents", "ZegoCloud WebRTC", "Leaflet Maps", "Puppeteer", "Playwright", 
  "Web Scraping", "Tremor Analytics", "Recharts", "TipTap Editor", "Nodemailer", 
  "node-cron", "PostCSS", "Vite", "Rollup", "Jest", "Helmet & Rate Limiting", "PWA"
];

export default function SkillsExpertise() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-lg">
        <span className="self-start text-[10px] font-heading font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">
          Skills & Expertise
        </span>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Technologies and tools I use daily, along with specialized AI integrations and architectural frameworks.
        </p>
      </div>

      {/* Main Categories */}
      <div className="flex flex-col gap-8">
        {/* Category 1: Use daily */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-heading font-extrabold text-zinc-500 uppercase tracking-widest">
            Use daily
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {DAILY_SKILLS.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 text-xs font-heading font-bold text-zinc-300 bg-zinc-950 border border-zinc-900 hover:border-accent/40 rounded-full transition-all duration-300 cursor-default hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Comfortable with */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-heading font-extrabold text-zinc-500 uppercase tracking-widest">
            Comfortable with
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {COMFORTABLE_SKILLS.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 text-xs font-heading font-bold text-zinc-400 bg-zinc-950/60 border border-zinc-900 hover:border-accent/30 rounded-full transition-all duration-300 cursor-default hover:text-zinc-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Everything else (AI SDKs & Specialized Tech) */}
        <div className="flex flex-col gap-3 border-t border-zinc-950 pt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left cursor-pointer group"
          >
            <h4 className="text-xs font-heading font-extrabold text-zinc-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-zinc-400 transition-colors">
              <span>Everything else (AI & Tools)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-zinc-900 text-zinc-500 font-mono">
                {OTHER_SKILLS.length}
              </span>
            </h4>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-accent" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" />
            )}
          </button>

          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {OTHER_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="px-3.5 py-1.5 text-[11px] font-sans font-medium text-zinc-400 bg-zinc-950/40 border border-zinc-900/80 hover:border-accent/30 rounded-full transition-all duration-300 hover:text-accent"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
