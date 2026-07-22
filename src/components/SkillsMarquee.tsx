"use client";

import { motion } from "framer-motion";

const SKILLS_ROW_1 = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "AI Agents",
  "MongoDB",
  "TailwindCSS",
  "Express",
  "REST APIs",
  "Framer Motion",
  "WebSockets",
  "C++",
];

const SKILLS_ROW_2 = [
  "Agentic Workflows",
  "LLM Routing",
  "Vector Embeddings",
  "RAG Systems",
  "Vercel AI SDK",
  "Google Gemini API",
  "Firebase",
  "Docker",
  "GSAP",
  "Three.js",
  "LangChain",
  "GraphQL",
];

// Duplicate 4x to ensure zero blank gap on any screen size
const ROW_1_ITEMS = [...SKILLS_ROW_1, ...SKILLS_ROW_1, ...SKILLS_ROW_1, ...SKILLS_ROW_1];
const ROW_2_ITEMS = [...SKILLS_ROW_2, ...SKILLS_ROW_2, ...SKILLS_ROW_2, ...SKILLS_ROW_2];

export default function SkillsMarquee() {
  return (
    <section className="relative py-14 bg-[#0a0a0a] border-y border-zinc-900/60 overflow-hidden select-none group">
      {/* Top & Bottom Orange Accent Glow Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent pointer-events-none" />

      {/* Ambient Orange Radial Center Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-orange-950/5 to-transparent opacity-80 pointer-events-none" />

      {/* Continuous Orange Light Sweep Beam */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-xl pointer-events-none"
      />

      {/* Header Title */}
      <div className="text-center mb-8 px-4 relative z-10">
        <h3 className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-zinc-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          <span>TECHNOLOGIES & FRAMEWORKS I BUILD WITH</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        </h3>
      </div>

      {/* Gradient Mask for smooth fade-in / fade-out at edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 sm:w-40 md:w-64 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 sm:w-40 md:w-64 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />

      <div className="flex flex-col gap-6 relative z-10">
        {/* Row 1: Leftward Infinite Seamless Loop */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex gap-4 items-center whitespace-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {ROW_1_ITEMS.map((skill, idx) => (
              <span
                key={idx}
                className="text-sm md:text-base font-heading font-semibold text-zinc-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-400 hover:to-orange-500 transition-all duration-300 px-6 cursor-default hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(245,158,11,0.5)]"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Infinite Seamless Loop */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex gap-4 items-center whitespace-nowrap min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {ROW_2_ITEMS.map((skill, idx) => (
              <span
                key={idx}
                className="text-sm md:text-base font-heading font-medium text-zinc-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 transition-all duration-300 px-6 cursor-default hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(249,115,22,0.5)]"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
