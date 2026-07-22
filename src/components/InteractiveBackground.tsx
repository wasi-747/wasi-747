"use client";

import { useEffect, useRef } from "react";

// 3D Icosahedron / Geometric Polyhedron Vertices & Edges Generator
const PHI = (1 + Math.sqrt(5)) / 2; // Golden Ratio

const BASE_VERTICES: [number, number, number][] = [
  [-1, PHI, 0],
  [1, PHI, 0],
  [-1, -PHI, 0],
  [1, -PHI, 0],
  [0, -1, PHI],
  [0, 1, PHI],
  [0, -1, -PHI],
  [0, 1, -PHI],
  [PHI, 0, -1],
  [PHI, 0, 1],
  [-PHI, 0, -1],
  [-PHI, 0, 1],
];

// Edges connecting vertices
const EDGES: [number, number][] = [];
const distanceThreshold = 2.05;

for (let i = 0; i < BASE_VERTICES.length; i++) {
  for (let j = i + 1; j < BASE_VERTICES.length; j++) {
    const dx = BASE_VERTICES[i][0] - BASE_VERTICES[j][0];
    const dy = BASE_VERTICES[i][1] - BASE_VERTICES[j][1];
    const dz = BASE_VERTICES[i][2] - BASE_VERTICES[j][2];
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist < distanceThreshold) {
      EDGES.push([i, j]);
    }
  }
}

// 3D Dodecahedron Vertices & Edges
const DODECA_VERTICES: [number, number, number][] = [
  [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
  [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
  [0, 1 / PHI, PHI], [0, 1 / PHI, -PHI], [0, -1 / PHI, PHI], [0, -1 / PHI, -PHI],
  [1 / PHI, PHI, 0], [1 / PHI, -PHI, 0], [-1 / PHI, PHI, 0], [-1 / PHI, -PHI, 0],
  [PHI, 0, 1 / PHI], [PHI, 0, -1 / PHI], [-PHI, 0, 1 / PHI], [-PHI, 0, -1 / PHI]
];

const DODECA_EDGES: [number, number][] = [];
const dodecaDistThreshold = 2.05 / PHI;

for (let i = 0; i < DODECA_VERTICES.length; i++) {
  for (let j = i + 1; j < DODECA_VERTICES.length; j++) {
    const dx = DODECA_VERTICES[i][0] - DODECA_VERTICES[j][0];
    const dy = DODECA_VERTICES[i][1] - DODECA_VERTICES[j][1];
    const dz = DODECA_VERTICES[i][2] - DODECA_VERTICES[j][2];
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist < dodecaDistThreshold + 0.1) {
      DODECA_EDGES.push([i, j]);
    }
  }
}

interface ShapeInstance {
  type: "icosa" | "dodeca";
  posXRatio: number;
  posYRatio: number;
  scaleSize: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  floatPhase: number;
  floatAmplitude: number;
  floatSpeed: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth || window.innerWidth);
    let height = (canvas.height = container.clientHeight || window.innerHeight + 250);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth || window.innerWidth;
      height = canvas.height = container.clientHeight || window.innerHeight + 250;
    };

    window.addEventListener("resize", handleResize);

    // Track scroll position for Hero-bound 3D Perspective Zoom Out & Fade
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Floating 3D shapes positioned strictly in the Hero viewport
    const shapes: ShapeInstance[] = [
      // 1. Large Top-Right 3D Wireframe Polyhedron
      {
        type: "dodeca",
        posXRatio: 0.88,
        posYRatio: 0.20,
        scaleSize: Math.min(width, height) * 0.24,
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.1,
        rotSpeedX: 0.0006,
        rotSpeedY: 0.0009,
        rotSpeedZ: 0.0004,
        floatPhase: 0,
        floatAmplitude: 16,
        floatSpeed: 0.0008,
      },
      // 2. Medium Top-Left 3D Wireframe Polyhedron
      {
        type: "icosa",
        posXRatio: 0.15,
        posYRatio: 0.10,
        scaleSize: Math.min(width, height) * 0.14,
        rotX: 0.8,
        rotY: 0.3,
        rotZ: 0.4,
        rotSpeedX: -0.0007,
        rotSpeedY: 0.0008,
        rotSpeedZ: -0.0005,
        floatPhase: 2.5,
        floatAmplitude: 12,
        floatSpeed: 0.001,
      },
      // 3. Bottom-Center 3D Wireframe Polyhedron (Positioned so lower half extends directly under Technologies & Frameworks marquee)
      {
        type: "icosa",
        posXRatio: 0.58,
        posYRatio: 0.82,
        scaleSize: Math.min(width, height) * 0.22, // Larger size to extend down into marquee block
        rotX: 0.4,
        rotY: 0.9,
        rotZ: 0.2,
        rotSpeedX: 0.0008,
        rotSpeedY: -0.0006,
        rotSpeedZ: 0.0007,
        floatPhase: 4.2,
        floatAmplitude: 14,
        floatSpeed: 0.0009,
      },
    ];

    let time = 0;

    // Main 3D Scroll Zoom & Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Extended scroll distance threshold (850px) for ultra-gradual, smooth zoom out
      const maxScrollDist = Math.max(850, window.innerHeight * 0.95);
      const rawScrollProgress = Math.min(scrollY / maxScrollDist, 1);
      
      // Gentle easing curve for smooth motion
      const scrollProgress = Math.pow(rawScrollProgress, 1.2);
      
      // Slow, gradual scale shrink
      const zoomFactor = 1 - scrollProgress * 0.55;
      
      // Soft opacity fade that stays bright throughout the Hero and only fades as you reach the bottom
      const alphaFactor = Math.max(0, 1 - Math.pow(rawScrollProgress, 1.8) * 1.05);

      if (alphaFactor > 0.01) {
        shapes.forEach((shape) => {
          // Update 3D rotation angles
          shape.rotX += shape.rotSpeedX;
          shape.rotY += shape.rotSpeedY;
          shape.rotZ += shape.rotSpeedZ;

          // Calculate smooth floating offset
          const floatY = Math.sin(time * shape.floatSpeed + shape.floatPhase) * shape.floatAmplitude;

          const centerX = width * shape.posXRatio;
          const centerY = height * shape.posYRatio + floatY;

          const verts = shape.type === "icosa" ? BASE_VERTICES : DODECA_VERTICES;
          const edges = shape.type === "icosa" ? EDGES : DODECA_EDGES;

          // 3D Matrix Transformations
          const projectedVerts: { x: number; y: number }[] = [];

          const cosX = Math.cos(shape.rotX), sinX = Math.sin(shape.rotX);
          const cosY = Math.cos(shape.rotY), sinY = Math.sin(shape.rotY);
          const cosZ = Math.cos(shape.rotZ), sinZ = Math.sin(shape.rotZ);

          for (let i = 0; i < verts.length; i++) {
            const [vx, vy, vz] = verts[i];

            // Rotate around X
            const y1 = vy * cosX - vz * sinX;
            const z1 = vy * sinX + vz * cosX;

            // Rotate around Y
            const x2 = vx * cosY + z1 * sinY;
            const z2 = -vx * sinY + z1 * cosY;

            // Rotate around Z
            const x3 = x2 * cosZ - y1 * sinZ;
            const y3 = x2 * sinZ + y1 * cosZ;

            // Slow, gradual 3D Perspective Z-Depth Push
            const fov = 600;
            const perspectiveZ = z2 * 40 + scrollProgress * 550;
            const scale = fov / (fov + perspectiveZ);
            const currentShapeSize = shape.scaleSize * zoomFactor;

            const px = centerX + x3 * currentShapeSize * scale * 0.5;
            const py = centerY + y3 * currentShapeSize * scale * 0.5;

            projectedVerts.push({ x: px, y: py });
          }

          // Draw 3D Wireframe Edges with gradual opacity & line scaling
          edges.forEach(([i, j]) => {
            const p1 = projectedVerts[i];
            const p2 = projectedVerts[j];

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * alphaFactor})`;
            ctx.lineWidth = Math.max(0.6, 1.0 * zoomFactor);
            ctx.stroke();
          });
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-x-0 top-0 h-[calc(100%+250px)] pointer-events-none z-0 select-none">
      {/* 3D Wireframe Floating Polyhedra Canvas extending 250px below Hero into Technologies & Frameworks marquee */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100" />
    </div>
  );
}
