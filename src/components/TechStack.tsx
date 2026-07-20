"use client";

import { motion } from "framer-motion";

const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    title: "Front-End",
    skills: ["React", "Next.js", "TailwindCSS", "GSAP", "Framer Motion"],
  },
  {
    title: "Back-End & APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases & Services",
    skills: ["MongoDB", "Firebase", "WebGL", "Three.js"],
  },
  {
    title: "Ecosystem Scope",
    skills: [
      "System Design",
      "AI Agents",
      "Agentic Workflows",
      "IoT Telemetry",
      "API Latency Optimization",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          Core Tech Stack
        </h3>
        <p className="text-xs text-zinc-400 mt-1 font-sans">
          Curated set of tools and architectures I use to design high-performance systems.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {SKILLS_CATEGORIES.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h4 className="text-xs font-heading font-semibold text-zinc-500 uppercase tracking-wider">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs font-sans bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:border-accent hover:text-accent-warm transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
