"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function ParallaxGrid() {
  const [isTouch, setIsTouch] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 35, damping: 22 });
  const ys = useSpring(y, { stiffness: 35, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const onMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 18);
      y.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-[-4%] z-0"
      style={{
        x: isTouch ? 0 : xs,
        y: isTouch ? 0 : ys,
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        willChange: "transform",
      }}
    />
  );
}
