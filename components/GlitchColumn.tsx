"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

const POOL = "01 ABCDEFGHIJKLMNOPQRSTUVWXYZ#@_-{}[]<>|:;.,/*&^%$";

function randomLine(len: number) {
  return Array.from({ length: len }, () => POOL[Math.floor(Math.random() * POOL.length)]).join("");
}

interface GlitchColumnProps {
  lines?: number;
  lineLength?: number;
  className?: string;
}

// Decorative cipher-text column — mirrors the scrambled vertical noise
// panels used as pure texture next to the reference site's hero headline.
export function GlitchColumn({ lines = 16, lineLength = 4, className }: GlitchColumnProps) {
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  // SSR-safe placeholder; real randomization only happens client-side post-mount.
  const [rows, setRows] = useState<string[]>(() => Array.from({ length: lines }, () => "·".repeat(lineLength)));

  useEffect(() => {
    setRows(Array.from({ length: lines }, () => randomLine(lineLength)));
  }, [lines, lineLength]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setRows((prev) => prev.map((row) => (Math.random() < 0.3 ? randomLine(lineLength) : row)));
    }, 180);
    return () => clearInterval(id);
  }, [reduced, lineLength]);

  return (
    <div
      aria-hidden
      className={`select-none whitespace-pre font-mono text-[10px] leading-[1.6] tracking-widest text-racing/40 ${className ?? ""}`}
    >
      {rows.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
}
