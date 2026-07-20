"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// List of the exact 3 profile photos specified by the user
// 1. pic1.jpeg: Me holding phone
// 2. file_000000006fc061f9a91b49f39543e0fb(1)(1).png: Black & white photo
// 3. Snapchat-1004593569.jpg: Tilt grabbing a chair photo
const PHOTOS = [
  {
    src: "/my photos/pic1.jpeg",
    position: "center", // me holding phone
  },
  {
    src: "/my photos/file_000000006fc061f9a91b49f39543e0fb(1)(1).png",
    position: "center 22%", // black white pic
  },
  {
    src: "/my photos/Snapchat-1004593569.jpg",
    position: "center 12%", // tilt grabbing a chair pic
  },
];

export default function ProfilePhotoTransition() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause auto-rotation on hover

    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % PHOTOS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % PHOTOS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      },
    }),
  };

  return (
    <div 
      className="relative flex items-center justify-center w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-r from-accent/15 to-accent-warm/15 blur-3xl -z-10" />

      {/* Watery circular orange border lines (morphing liquid lines roaming in a circle) */}
      <div className="absolute inset-8 rounded-full border border-accent/70 bg-transparent animate-watery-blob-1 z-10 pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-accent-warm/40 bg-transparent animate-watery-blob-2 z-10 pointer-events-none" />

      {/* Rotating Outer Dashed Frame - Z-INDEX 10 */}
      <svg className="absolute inset-4 w-[90%] h-[90%] animate-[spin_30s_linear_infinite] z-10" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="url(#orangeGradient)"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c32" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
      </svg>

      {/* Circular Profile Photo Frame - Z-INDEX 20 (Images render inside this circle) */}
      <div className="absolute inset-8 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 z-20 flex items-center justify-center shadow-2xl">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={PHOTOS[index].src}
                alt="Wasiur Rahman Sakib"
                fill
                priority
                style={{ objectPosition: PHOTOS[index].position }}
                className="object-cover transform transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 300px, 400px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows (visible on hover) - Z-INDEX 30 */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-30 pointer-events-none"
      >
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 text-white flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-accent hover:border-accent hover:text-zinc-950 transition-colors duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 text-white flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-accent hover:border-accent hover:text-zinc-950 transition-colors duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Progress Dots - Z-INDEX 30 */}
      <div className="absolute -bottom-6 flex gap-1.5 justify-center z-30">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-accent w-4" : "bg-zinc-700 hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
