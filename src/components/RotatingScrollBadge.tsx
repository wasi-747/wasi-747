"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function RotatingScrollBadge() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation: 0.3 degrees per pixel scrolled
      // (1200px scrolled = 360 degrees rotation)
      setRotation(window.scrollY * 0.3);
    };

    // Run once on mount to capture any initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScrollClick}
      className="relative flex items-center justify-center cursor-pointer group select-none"
    >
      {/* Circle Rotating Text - rotated via CSS transform style */}
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className="w-24 h-24 md:w-32 md:h-32 transition-transform duration-75 ease-out group-hover:scale-105"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="text-[10px] font-heading font-extrabold uppercase fill-zinc-500 tracking-[0.19em]">
            <textPath href="#textCircle" startOffset="0%">
              SCROLL DOWN · SCROLL DOWN · SCROLL DOWN · 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner Circle and Arrow */}
      <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300 shadow-md">
        <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-zinc-950 transition-colors duration-300" />
      </div>
    </div>
  );
}
