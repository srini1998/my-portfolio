"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";
import { FireParticles } from "@/components/FireParticles";

// Fixed, site-wide "live wallpaper" — rising fire embers plus a slow-drifting
// dot grid with mouse parallax. Visible through dark sections; opaque light
// sections paint over it as normal.
export function ParallaxGrid() {
  const [isTouch, setIsTouch] = useState(false);
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 45, damping: 18 });
  const ys = useSpring(y, { stiffness: 45, damping: 18 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const onMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 34);
      y.set((e.clientY / window.innerHeight - 0.5) * 34);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <FireParticles />

      <motion.div
        className={`absolute inset-[-4%] ${reduced ? "" : "animate-drift"}`}
        style={{
          x: isTouch ? 0 : xs,
          y: isTouch ? 0 : ys,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          willChange: "transform",
        }}
      />
    </div>
  );
}
