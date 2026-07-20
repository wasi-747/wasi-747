"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Cpu, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import TiltCard from "./TiltCard";

export default function AboutMeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Wasiur's Sunglasses Portrait Photo */}
      <div className="lg:col-span-5 relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
        <Image
          src="/my photos/armani_glasses_portrait.jpg"
          alt="Wasiur Rahman Sakib"
          fill
          priority
          className="object-cover object-center transform transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 450px"
        />
      </div>

      {/* Right Column: Bio & Cards */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="self-start text-[10px] font-heading font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">
            About Me
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight uppercase">
            Architecting Scalable Systems & <br />
            <span className="text-gradient-orange">Intelligent AI Solutions</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4 text-sm md:text-base text-zinc-400 font-sans leading-relaxed">
          <p>
            I'm a <strong className="text-zinc-200">Full-Stack Software Engineer & Architect</strong> with a focus on high-performance web systems, distributed backends, and AI agent workflows. Currently interning at <strong className="text-zinc-200">TechDojo Limited</strong>, I work on enterprise AI integrations and real-time backend latency optimizations.
          </p>
          <p>
            My engineering scope covers <strong className="text-zinc-200">TypeScript, Node.js, Python, C++, and Go</strong>. I specialize in designing microservices architectures, IoT telemetry ecosystems, database throughput tuning, and agentic LLM routing.
          </p>
          <p>
            As an independent contractor, I've engineered Web3 transaction ledger services, real-time IoT hubs, and full-stack web applications for clients globally.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {/* Card 1 */}
          <TiltCard className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:border-accent/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">TechDojo Intern</h4>
              <p className="text-[10px] text-zinc-500 font-sans mt-0.5 leading-snug">
                Software Engineer Intern · 2026 – Present
              </p>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:border-accent/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Software Architect</h4>
              <p className="text-[10px] text-zinc-500 font-sans mt-0.5 leading-snug">
                Independent Contracting · 2024 – Present
              </p>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard className="glass-panel p-5 rounded-2xl flex flex-col gap-3 hover:border-accent/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">B.Sc. CSE Student</h4>
              <p className="text-[10px] text-zinc-500 font-sans mt-0.5 leading-snug">
                United International University · 2022 – 2026
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Quote Line */}
        <div className="border-l-2 border-accent pl-4 mt-2">
          <p className="text-xs md:text-sm text-zinc-400 italic font-sans">
            "I build high-performance web architectures, IoT telemetry ecosystems, and intelligent AI-integrated applications."
          </p>
        </div>

        {/* Dropdown Accordion */}
        <div className="border border-zinc-900 rounded-xl overflow-hidden mt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-5 py-4 bg-zinc-950/40 hover:bg-zinc-950/80 transition-colors text-left text-xs font-heading font-bold uppercase tracking-wider text-zinc-400 hover:text-white cursor-pointer"
          >
            <span>Press & speaker bios</span>
            {isOpen ? <ChevronUp className="w-4 h-4 text-accent" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
          </button>
          
          {isOpen && (
            <div className="px-5 py-4 bg-zinc-950/20 border-t border-zinc-900 text-xs text-zinc-400 font-sans leading-relaxed flex flex-col gap-2">
              <p>
                Wasiur Rahman Sakib is a Full-Stack Software Engineer and Architect specializing in high-performance web systems, distributed databases, IoT telemetry architectures, and AI agent integrations.
              </p>
              <p>
                He currently pursues his B.Sc. in Computer Science & Engineering at United International University while contributing as a Software Engineer Intern at TechDojo Limited.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
