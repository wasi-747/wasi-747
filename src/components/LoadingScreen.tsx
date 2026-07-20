"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // Ashley Preloader Steps: "qualities" -> "reveal" -> "finished"
  const [step, setStep] = useState<"qualities" | "reveal" | "finished">("qualities");

  useEffect(() => {
    // 1. Side-by-side qualities text for 1.6s
    const timer1 = setTimeout(() => {
      setStep("reveal");
    }, 1600);

    // 2. Logo Reveal ("WASI.") holds until 3.0s, then starts exit fade
    const timer2 = setTimeout(() => {
      setStep("finished");
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {step !== "finished" && (
        <motion.div
          key="ashley-preloader-backdrop"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={onComplete}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden select-none font-heading"
        >
          {/* Main Stage */}
          <div className="relative flex flex-col items-center justify-center min-h-[220px] w-full px-6">
            
            {/* Step 1: Side-by-side Qualities */}
            {step === "qualities" && (
              <motion.div
                key="qualities-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-center px-4"
              >
                <span className="text-xl sm:text-3xl md:text-4xl font-light tracking-widest text-zinc-300 uppercase">
                  Scalable
                </span>
                <span className="text-accent text-xl sm:text-3xl font-bold">·</span>
                <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-orange uppercase py-1">
                  Intelligent
                </span>
                <span className="text-accent text-xl sm:text-3xl font-bold">·</span>
                <span className="text-xl sm:text-3xl md:text-4xl font-light tracking-widest text-zinc-300 uppercase">
                  Resilient
                </span>
              </motion.div>
            )}

            {/* Step 2: Ashley Orange Block Reveal for WASI. Logo Only */}
            {step === "reveal" && (
              <motion.div
                key="logo-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center text-center py-2 px-4"
              >
                <div className="relative inline-block overflow-hidden py-3 px-8">
                  {/* Hardware-Accelerated Orange Block Sweep */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "0%", "0%", "101%"] }}
                    transition={{
                      duration: 1.3,
                      ease: [0.77, 0, 0.175, 1],
                      times: [0, 0.45, 0.55, 1],
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-accent via-accent-warm to-accent z-20 rounded-sm"
                  />

                  {/* Revealed WASI. Logo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{ duration: 1.3, times: [0, 0.45, 0.5, 1] }}
                    className="flex items-center justify-center relative z-10"
                  >
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white uppercase select-none font-heading">
                      WASI<span className="text-accent">.</span>
                    </h1>
                  </motion.div>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
