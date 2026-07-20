"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);

  useEffect(() => {
    // Check if pointer is fine (mouse, trackpad) rather than touch
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }

      if (!visible) {
        setVisible(true);
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      rx = lerp(rx, mx, 0.13);
      ry = lerp(ry, my, 0.13);

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }

      requestAnimationFrame(loop);
    };
    const animId = requestAnimationFrame(loop);

    // Use event delegation for hover states to track interactive element changes
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        "a, button, .tag, .service-card, .card, .accordion-trigger, [role='button'], .project-card, input, select, textarea"
      );
      setHovered(!!isInteractive);

      const isProject = target.closest(".project-card");
      setProjectHovered(!!isProject);
    };

    window.addEventListener("mouseover", onMouseOver);

    // Hide native cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `
      a, button, [role='button'], select, input, textarea, .project-card, .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
      document.body.style.cursor = "";
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-200 ${
          projectHovered
            ? "bg-[#ffb347] w-1 h-1"
            : hovered
            ? "bg-[#ff8c32] w-1 h-1"
            : "bg-[#ffb347]"
        }`}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,border-color,background-color] duration-300 ${
          projectHovered
            ? "w-16 h-16 border-[#ffb347] bg-[rgba(255,179,71,0.06)]"
            : hovered
            ? "w-14 h-14 border-[#ffb347] bg-transparent"
            : "w-9 h-9 border-[rgba(255,140,50,0.35)]"
        }`}
      >
        {projectHovered && (
          <span 
            className="text-[9px] font-heading font-extrabold tracking-widest text-[#ffb347]"
          >
            VIEW
          </span>
        )}
      </div>
    </>
  );
}
