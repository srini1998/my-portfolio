"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

const WARM_COLORS = ["#ffffff", "#f5f5f5", "#eeeeee", "#ffffff", "#fafafa"];
const DARK_COLORS = ["#141414", "#1e1e1e", "#2b2b2b", "#0d0d0d", "#3a3a3a"];

interface Ember {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  color: string;
}

function makeEmbers(count: number, colors: string[]): Ember[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 5,
    drift: (Math.random() - 0.5) * 90,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

interface FireParticlesProps {
  tone?: "warm" | "dark";
}

// Rising ember particles with a soft base glow — a "popping fire sparkles"
// wallpaper effect. Embers spawn client-side only (random per-particle
// values would mismatch SSR) and respect the Motion toggle. "dark" tone
// drops the warm color/glow blooms (which only read well on a dark
// backdrop) for plain dark sparks suited to light sections.
export function FireParticles({ tone = "warm" }: FireParticlesProps) {
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    if (reduced) return;
    setEmbers(makeEmbers(90, tone === "dark" ? DARK_COLORS : WARM_COLORS));
  }, [reduced, tone]);

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {tone === "warm" && (
        <>
          <div className="animate-ember-glow absolute -bottom-1/4 left-1/2 h-[55vh] w-[70vw] max-w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[130px]" />
          <div className="animate-ember-glow absolute -bottom-1/3 left-[20%] h-[40vh] w-[45vw] max-w-[600px] rounded-full bg-white/[0.04] blur-[110px]" style={{ animationDelay: "1.5s" }} />
          <div className="animate-ember-glow absolute -bottom-1/3 right-[15%] h-[40vh] w-[45vw] max-w-[600px] rounded-full bg-white/[0.035] blur-[110px]" style={{ animationDelay: "3s" }} />
        </>
      )}

      {embers.map((ember, i) => (
        <span
          key={i}
          className="animate-ember absolute bottom-0 rounded-full"
          style={{
            left: `${ember.left}%`,
            width: ember.size,
            height: ember.size,
            backgroundColor: ember.color,
            boxShadow:
              tone === "dark"
                ? `0 0 ${ember.size}px rgba(0,0,0,0.3)`
                : `0 0 ${ember.size * 3}px ${ember.color}`,
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
            ["--drift" as string]: `${ember.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
