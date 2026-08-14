"use client";

import { useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

interface MarqueeProps {
  items: string[];
  className?: string;
  tone?: "dark" | "light";
}

export function Marquee({ items, className, tone = "dark" }: MarqueeProps) {
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  const textTone = tone === "light" ? "text-carbon-900/70" : "text-silver-400";
  const dotTone = tone === "light" ? "text-racing-dark" : "text-racing";

  if (reduced) {
    return (
      <div
        className={`overflow-hidden whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] ${textTone} ${className ?? ""}`}
      >
        {items.join("   ·   ")}
      </div>
    );
  }

  return (
    <div className={`group overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((rep) => (
          <span
            key={rep}
            aria-hidden={rep === 1}
            className={`flex shrink-0 items-center font-mono text-xs font-medium uppercase tracking-[0.3em] ${textTone}`}
          >
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                {item}
                <span className={`mx-8 ${dotTone}`}>●</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
