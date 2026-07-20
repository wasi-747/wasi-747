"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

interface Project {
  name: string;
  category: string;
  date: string;
  desc: string;
  liveUrl: string;
  thumbnail: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: "NeuroLink",
    category: "AI & Wellness",
    date: "2026",
    desc: "AI-powered wellness platform. Uses a FastAPI backend with semantic similarity matching, DFS graph learning paths, and LLM-assisted journaling.",
    liveUrl: "https://neuro-link-rouge.vercel.app/",
    thumbnail: "/projects/neurolink.jpg",
    tags: ["FastAPI", "Python", "React", "MongoDB", "AI"],
  },
  {
    name: "TechDojo AI Bot",
    category: "Full-Stack AI",
    date: "2026",
    desc: "Conversational e-commerce assistant with product recommendation, intent detection, and conversational checkout on MERN stack.",
    liveUrl: "https://techdojo-ai-bot.vercel.app/",
    thumbnail: "/projects/techdojo.jpg",
    tags: ["React", "Node.js", "MongoDB", "LLM Routing"],
  },
  {
    name: "trustfund-core",
    category: "Fintech",
    date: "2025",
    desc: "Fintech platform featuring trust-based peer lending, transaction ledgers, role-based access, and complete system audit trails.",
    liveUrl: "https://trustfund-core.vercel.app/",
    thumbnail: "/projects/trustfund.jpg",
    tags: ["React", "Express", "Node.js", "MongoDB"],
  },
  {
    name: "Sol Mintx",
    category: "Web3 & DeFi",
    date: "2025",
    desc: "Solana token minting interface featuring wallet adapter integration, SPL token creation pipelines, and live feedback confirmation.",
    liveUrl: "https://sol-mintx.vercel.app/",
    thumbnail: "/projects/solmintx.jpg",
    tags: ["Next.js", "Solana", "Web3", "TypeScript"],
  },
  {
    name: "RideShare",
    category: "Transit Web App",
    date: "2025",
    desc: "Carpooling platform with real-time GPS tracking over WebSockets, ride matching, and serverless-safe connection pooling.",
    liveUrl: "https://ride-share-silk-eight.vercel.app/",
    thumbnail: "/projects/rideshare.jpg",
    tags: ["Next.js", "MongoDB", "WebSockets", "GPS Tracking"],
  },
  {
    name: "LifeOS Household",
    category: "IoT Telemetry",
    date: "2026",
    desc: "Real-time household telemetry platform. Python background daemon reports CPU, RAM, and active window analytics to a live dashboard.",
    liveUrl: "https://life-os-household.vercel.app/",
    thumbnail: "/projects/lifeos.jpg",
    tags: ["Node.js", "Express", "MongoDB", "Python", "IoT"],
  },
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <TiltCard className="project-card group relative rounded-3xl overflow-hidden glass-panel flex flex-col h-full hover:border-transparent transition-all duration-500 shadow-xl">
            {/* Inner Content Wrapper (blurs and fades out on card hover) */}
            <div className="w-full h-full flex flex-col transition-all duration-500 group-hover:blur-[5px] group-hover:opacity-25">
              {/* Thumbnail Image Container */}
              <div className="relative w-full h-[200px] overflow-hidden bg-zinc-950">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                
                {/* Category Tag (Top Right) */}
                <span className="absolute top-4 right-4 bg-zinc-950/80 border border-zinc-800 text-[10px] text-accent font-heading font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-accent transition-colors duration-200">
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-heading font-semibold text-zinc-500 mt-1">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono bg-zinc-950 text-zinc-500 px-2 py-0.5 rounded border border-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Live Link Button Overlay (Appears in center) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto z-20">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-accent to-accent-warm hover:from-accent-warm hover:to-accent text-zinc-950 font-heading font-extrabold text-xs tracking-widest uppercase px-6 py-4 rounded-full shadow-2xl shadow-orange-950/40 transform scale-90 group-hover:scale-100 transition-all duration-500 cursor-pointer pointer-events-auto"
              >
                <span>VISIT LIVE SITE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
