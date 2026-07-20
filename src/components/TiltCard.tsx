"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (for 3D tilt)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Max rotation angles (degrees)
    const maxRotateX = 10;
    const maxRotateY = 10;

    // Calculate rotation
    const rY = (mouseX / (width / 2)) * maxRotateY;
    const rX = -(mouseY / (height / 2)) * maxRotateX;

    setRotateX(rX);
    setRotateY(rY);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 30,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Children content rendered directly */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>

      {/* Animated Circling Orange Border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl z-20 overflow-visible">
        <motion.rect
          x="1"
          y="1"
          fill="none"
          stroke="#ff8c32"
          strokeWidth="1.5"
          rx="24"
          style={{
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
          }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
