"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "TechDojo Limited",
    period: "2026 – Present",
    type: "job",
    desc: "Working on enterprise AI agent integrations and real-time backend latency optimizations.",
  },
  {
    role: "Full-Stack Software Architect",
    company: "Independent Contracting / Freelance",
    period: "2024 – Present",
    type: "job",
    desc: "Designing IoT telemetry hubs, transaction ledger services, and high-performance Web3 solutions.",
  },
  {
    role: "Ecosystem Integrations & APIs",
    company: "AI & Web Developer",
    period: "2023 – Present",
    type: "job",
    desc: "Building autonomous workflows, LLM routing solutions, and embedding-based search tools.",
  },
  {
    role: "B.Sc. in Computer Science & Engineering",
    company: "United International University",
    period: "2022 – 2026",
    type: "edu",
    desc: "Core coursework: Distributed Systems, Database Systems, Software Engineering, and Computer Networks.",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          Journey & Background
        </h3>
        <p className="text-xs text-zinc-400 mt-1 font-sans">
          A brief roadmap of my professional milestones and academic credentials.
        </p>
      </div>

      <div className="relative border-l border-zinc-800 ml-3 pl-6 flex flex-col gap-8">
        {EXPERIENCES.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
              {item.type === "job" ? (
                <Briefcase className="w-3.5 h-3.5" />
              ) : (
                <GraduationCap className="w-3.5 h-3.5" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-heading font-extrabold tracking-wider text-accent uppercase">
                {item.period}
              </span>
              <h4 className="text-sm font-heading font-bold text-white group-hover:text-accent-warm transition-colors duration-200">
                {item.role}
              </h4>
              <span className="text-xs text-zinc-400 font-medium">
                {item.company}
              </span>
              <p className="text-xs text-zinc-500 font-sans mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
