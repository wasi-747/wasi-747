"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import RotatingScrollBadge from "@/components/RotatingScrollBadge";
import ProfilePhotoTransition from "@/components/ProfilePhotoTransition";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsExpertise from "@/components/SkillsExpertise";
import Experience from "@/components/Experience";
import GithubContributions from "@/components/GithubContributions";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";
import { ArrowUpRight, Download } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a] text-zinc-100 selection:bg-accent selection:text-zinc-950">
          {/* Navigation */}
          <Navbar />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content (Glint & Ashley inspired) */}
              <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
                <div className="flex flex-col gap-2">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xs font-heading font-extrabold tracking-widest text-accent uppercase"
                  >
                    Full-Stack Engineer & Architect
                  </motion.span>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight leading-none text-white uppercase"
                  >
                    WASIUR RAHMAN <br />
                    <span className="text-gradient-orange">SAKIB</span>
                  </motion.h1>
                </div>

                {/* Glint-style text block with vertical line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex gap-6 border-l-2 border-accent pl-6"
                >
                  <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-lg">
                    I build high-performance web architectures, IoT telemetry ecosystems, and intelligent AI-integrated applications. Specializing in scalable web systems, AI agents (workflows, LLM routing), and database throughput optimizations.
                  </p>
                </motion.div>

                {/* Hero CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-wrap gap-4 mt-2"
                >
                  <a
                    href="/Wasiur_Rahman_Sakib_Resume_General.pdf"
                    download="Wasiur_Rahman_Sakib_Resume.pdf"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-accent to-accent-warm hover:from-accent-warm hover:to-accent text-zinc-950 font-heading font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-orange-950/20"
                  >
                    <span>DOWNLOAD RESUME</span>
                    <Download className="w-4 h-4" />
                  </a>
                  <a
                    href="#projects"
                    className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 hover:border-accent/40 text-white font-heading font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <span>PROJECTS</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  </a>
                </motion.div>
              </div>

              {/* Right Content (Noxfolio-inspired Profile Frame) */}
              <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <ProfilePhotoTransition />
                </motion.div>
              </div>
            </div>

            {/* Floating scroll indicator badge (Ashley inspired) */}
            <div className="absolute bottom-8 right-8 hidden md:block">
              <RotatingScrollBadge />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-[#0a0a0a]">
            <div className="w-full max-w-6xl mx-auto">
              <AboutMeSection />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-[#080808]">
            <div className="w-full max-w-6xl mx-auto">
              <SkillsExpertise />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-[#0a0a0a]">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <span className="self-start text-[10px] font-heading font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">
                  Timeline
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
                  Experience & Education
                </h2>
              </div>
              <div className="glass-panel p-8 rounded-3xl hover:border-accent/10 transition-all duration-500">
                <Experience />
              </div>
            </div>
          </section>

          {/* GitHub Contributions Section */}
          <section id="github" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-[#080808]">
            <div className="w-full max-w-6xl mx-auto">
              <GithubContributions />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-[#0a0a0a]">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-accent uppercase">
                  Proof of Work
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
                  PROJECTS
                </h2>
              </div>

              {/* Projects Grid */}
              <ProjectsGrid />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-950 bg-gradient-to-b from-[#0a0a0a] to-[#080808]">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-accent uppercase">
                  Briefing
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
                  START A PROJECT
                </h2>
              </div>

              {/* Contact Area */}
              <ContactSection />
            </div>
          </section>

          {/* Minimal Footer */}
          <footer className="border-t border-zinc-950 bg-black py-10 px-6 md:px-12 lg:px-24 text-center">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
              <div className="font-heading font-bold text-xs tracking-wider uppercase text-zinc-500">
                © {new Date().getFullYear()} WASIUR SAKIB. ALL RIGHTS RESERVED.
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
