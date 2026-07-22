"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Full-Stack Engineer & Architect",
  "AI Systems & Workflows Specialist",
  "IoT Telemetry Developer",
  "MERN & Python Solutions Architect",
];

export default function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-6 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-xs font-heading font-extrabold tracking-widest text-accent uppercase block"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
