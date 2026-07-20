"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl rounded-full glass-panel px-6 py-3 flex items-center justify-between"
    >
      {/* Brand Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="logo-designed"
      >
        <span className="logo-box-frame">
          <span className="logo-text-cursive">Wasi</span>
        </span>
      </div>

      {/* Nav Items */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-heading font-medium tracking-wider uppercase text-zinc-400">
        <button 
          onClick={() => handleScroll("about")} 
          className="hover:text-white transition-colors duration-200 cursor-pointer"
        >
          About
        </button>
        <button 
          onClick={() => handleScroll("skills")} 
          className="hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Skills
        </button>
        <button 
          onClick={() => handleScroll("experience")} 
          className="hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Experience
        </button>
        <button 
          onClick={() => handleScroll("projects")} 
          className="hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Projects
        </button>
        <button 
          onClick={() => handleScroll("contact")} 
          className="hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Contact
        </button>
      </nav>

      {/* Hire Me CTA */}
      <div>
        <button
          onClick={() => handleScroll("contact")}
          className="flex items-center gap-1 bg-gradient-to-r from-accent to-accent-warm hover:from-accent-warm hover:to-accent text-zinc-950 font-heading font-bold text-xs px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-orange-950/20 cursor-pointer"
        >
          <span>HIRE ME</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.header>
  );
}
