"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1200; // ms
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentProgress = Math.min(
        Math.floor((stepCount / steps) * 100),
        100
      );
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for exit animation
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0a0a0a] p-10 font-heading text-white"
        >
          {/* Top Logo / Label */}
          <div className="flex w-full justify-between text-xs tracking-widest text-zinc-500 uppercase">
            <span>WASIUR RAHMAN SAKIB</span>
            <span>PORTFOLIO v2.0</span>
          </div>

          {/* Center Main Text */}
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              SYSTEMS <span className="text-accent">&</span> ARCHITECTURES
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-md text-sm md:text-base tracking-wide text-zinc-400 font-sans"
            >
              High-performance backend ecosystems, real-time telemetry, and autonomous AI integrations.
            </motion.p>
          </div>

          {/* Bottom Counter */}
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between items-end text-xs tracking-wider text-zinc-400">
              <span className="animate-pulse">INITIALIZING DEV ENVIRONMENT</span>
              <span className="text-3xl font-bold font-heading text-accent">
                {progress}%
              </span>
            </div>
            <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-warm"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
