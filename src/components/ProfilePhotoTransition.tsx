"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause auto-rotation on hover

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div 
      className="relative flex items-center justify-center w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-r from-accent/20 via-amber-500/15 to-accent-warm/20 blur-3xl -z-10 animate-pulse" />

      {/* Watery circular orange border lines */}
      <div className="absolute inset-8 rounded-full border border-accent/70 bg-transparent animate-watery-blob-1 z-10 pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-accent-warm/40 bg-transparent animate-watery-blob-2 z-10 pointer-events-none" />

      {/* Rotating Outer Dashed Frame */}
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

      {/* Circular Profile Photo Frame with Buttery Smooth Crossfade & Orange Lens Flash */}
      <div className="absolute inset-8 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 z-20 flex items-center justify-center shadow-2xl">
        <div className="relative w-full h-full bg-zinc-950">
          {/* Subtle Orange Light Leak Flash on Photo Swap */}
          <motion.div
            key={`flare-${currentIndex}`}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute inset-0 z-20 pointer-events-none rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/35 via-orange-600/15 to-transparent mix-blend-screen"
          />

          {PHOTOS.map((photo, i) => {
            const isActive = i === currentIndex;
            return (
              <motion.div
                key={photo.src}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.05,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.4, 0.0, 0.2, 1], // Buttery smooth ease-in-out curve
                }}
                style={{
                  zIndex: isActive ? 10 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={photo.src}
                  alt="Wasiur Rahman Sakib"
                  fill
                  priority={i === 0}
                  style={{ objectPosition: photo.position }}
                  className="object-cover"
                  sizes="(max-w-768px) 300px, 400px"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows (visible on hover) */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-30 pointer-events-none"
      >
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 text-white flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-accent hover:border-accent hover:text-zinc-950 transition-colors duration-300 shadow-lg shadow-orange-950/30"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 text-white flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-accent hover:border-accent hover:text-zinc-950 transition-colors duration-300 shadow-lg shadow-orange-950/30"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Progress Dots */}
      <div className="absolute -bottom-6 flex gap-1.5 justify-center z-30">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-accent w-4 shadow-[0_0_8px_rgba(249,115,22,0.6)]" : "bg-zinc-700 hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
