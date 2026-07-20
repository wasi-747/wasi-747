"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // Ashley Preloader Steps: "qualities" -> "reveal" -> "exit"
  const [step, setStep] = useState<"qualities" | "reveal" | "exit">("qualities");

  useEffect(() => {
    // 1. Qualities text for 1.6s
    const t1 = setTimeout(() => {
      setStep("reveal");
    }, 1600);

    // 2. Name reveal animation holds until 3.4s
    const t2 = setTimeout(() => {
      setStep("exit");
    }, 3400);

    // 3. Complete and unmount after exit fade
    const t3 = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step !== "exit" && (
        <motion.div
          key="ashley-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden select-none font-heading"
        >
          {/* Main Animation Stage */}
          <div className="relative flex flex-col items-center justify-center min-h-[220px] w-full px-6">
            
            {/* Step 1: Staggered Qualities (Productive, Creative, Curious) */}
            <AnimatePresence mode="wait">
              {step === "qualities" && (
                <motion.div
                  key="qualities-group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  {/* Line 1: Productive */}
                  <motion.p
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl sm:text-4xl font-light tracking-widest text-zinc-300 uppercase"
                  >
                    Productive
                  </motion.p>

                  {/* Line 2: Creative (Bold Orange) */}
                  <motion.p
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient-orange uppercase py-1"
                  >
                    Creative
                  </motion.p>

                  {/* Line 3: Curious */}
                  <motion.p
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-2xl sm:text-4xl font-light tracking-widest text-zinc-300 uppercase"
                  >
                    Curious
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Ashley Box Reveal Animation for Name */}
            {step === "reveal" && (
              <motion.div
                key="name-reveal-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center py-2 px-4"
              >
                <div className="relative inline-block overflow-hidden py-1 px-3">
                  {/* The Orange Reveal Block Wipe */}
                  <motion.div
                    initial={{ left: 0, width: "0%" }}
                    animate={{
                      width: ["0%", "100%", "100%", "0%"],
                      left: ["0%", "0%", "auto", "auto"],
                      right: ["auto", "auto", 0, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.77, 0, 0.175, 1],
                      times: [0, 0.45, 0.55, 1],
                    }}
                    className="absolute inset-y-0 bg-gradient-to-r from-accent to-accent-warm z-20 rounded-sm"
                  />

                  {/* Revealed Name Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{ duration: 1.2, times: [0, 0.45, 0.5, 1] }}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                      I AM WASI
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
                      Wasiur Rahman Sakib
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
