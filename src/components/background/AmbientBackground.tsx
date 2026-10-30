"use client";

import React, { useEffect, useRef } from "react";

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Warm cursor spotlight tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Floating Golden Dust / Nature Spores Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(28, Math.floor(window.innerWidth / 55));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1, // gently floating upward like golden dust motes
      opacity: Math.random() * 0.45 + 0.15,
      color: Math.random() > 0.4 ? "214, 183, 122" : "165, 165, 141", // Golden Sand or Muted Sage
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        p.opacity += Math.sin(Date.now() * 0.001 + i) * 0.004;
        const clampedOpacity = Math.max(0.08, Math.min(0.55, p.opacity));

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${clampedOpacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.4)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Midnight Navy Base */}
      <div className="absolute inset-0 bg-midnight" />

      {/* 2. Multi-tier Atmospheric Glows (Teal & Golden Sand) */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,74,73,0.35),transparent_70%)] blur-[140px]" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,183,122,0.1),transparent_70%)] blur-[130px]" />
      <div className="absolute -bottom-[15%] left-[25%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,74,73,0.25),transparent_70%)] blur-[150px]" />

      {/* 3. Warm Golden Cursor Spotlight (Desktop) */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,183,122,0.06),transparent_65%)] pointer-events-none transition-transform duration-75 ease-out will-change-transform"
      />

      {/* 4. Delicate Fog Movement Layer */}
      <div className="absolute inset-0 opacity-20 animate-fog-flow bg-[radial-gradient(ellipse_at_50%_50%,rgba(32,39,43,0.6),transparent_80%)]" />

      {/* 5. Canvas Floating Golden Motes */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* 6. Cinematic Film Grain Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-30 mix-blend-overlay" />
    </div>
  );
}
