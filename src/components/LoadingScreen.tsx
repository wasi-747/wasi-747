"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // Intro Phases: "qualities" -> "orange-block" -> "name-reveal" -> "finished"
  const [phase, setPhase] = useState<"qualities" | "orange-block" | "name-reveal" | "finished">("qualities");

  useEffect(() => {
    // Phase 1: Qualities ("Productive, Creative & Curious") for 1.8s
    const t1 = setTimeout(() => {
      setPhase("orange-block");
    }, 1800);

    // Phase 2: Orange Block Sweep for 1.2s
    const t2 = setTimeout(() => {
      setPhase("name-reveal");
    }, 3000);

    // Phase 3: Name Reveal ("I am Wasi / Wasiur Rahman Sakib") for 1.8s
    const t3 = setTimeout(() => {
      setPhase("finished");
      setTimeout(() => {
        onComplete();
      }, 700); // Allow exit slide transition to finish
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase !== "finished" && (
        <motion.div
          key="loading-container"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] font-heading text-white overflow-hidden select-none"
        >
          {/* Top & Bottom Header Labels */}
          <div className="absolute top-8 left-8 right-8 flex justify-between text-[11px] font-heading font-extrabold tracking-widest text-zinc-500 uppercase z-20">
            <span>PORTFOLIO INTRO</span>
            <span className="text-accent">WASIUR RAHMAN SAKIB</span>
          </div>

          {/* Phase 1: Specialties / Qualities */}
          {phase === "qualities" && (
            <motion.div
              key="qualities-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center text-center px-6 gap-4 z-20"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-xs font-heading font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full"
              >
                MINDSET & WORK ETHIC
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight uppercase leading-tight"
              >
                PRODUCTIVE <span className="text-accent">·</span> CREATIVE <span className="text-accent">·</span> CURIOUS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-xs sm:text-sm font-sans text-zinc-400 max-w-sm"
              >
                Engineered with precision, built for scale.
              </motion.p>
            </motion.div>
          )}

          {/* Phase 2: Full-screen Orange Block Wipe */}
          {phase === "orange-block" && (
            <motion.div
              key="orange-swipe"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-accent via-accent-warm to-accent z-30 flex items-center justify-center shadow-2xl"
            >
              <div className="text-zinc-950 font-extrabold text-2xl sm:text-4xl uppercase tracking-widest animate-pulse font-heading">
                WASI
              </div>
            </motion.div>
          )}

          {/* Phase 3: Name Reveal */}
          {phase === "name-reveal" && (
            <motion.div
              key="name-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center px-6 gap-3 z-20"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-xs font-heading font-extrabold tracking-widest text-zinc-400 uppercase"
              >
                FULL-STACK SOFTWARE ARCHITECT
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-heading text-white tracking-tight uppercase"
              >
                I AM <span className="text-gradient-orange">WASI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-sm font-heading font-bold text-accent tracking-widest uppercase mt-1"
              >
                WASIUR RAHMAN SAKIB
              </motion.p>
            </motion.div>
          )}

          {/* Bottom Footer Label */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[10px] font-mono text-zinc-600 uppercase z-20 select-none">
            <span>LOADING ASSETS</span>
            <span>2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
