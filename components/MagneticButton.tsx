"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

interface MagneticButtonProps extends HTMLMotionProps<"a"> {
  strength?: number;
}

// Pulls itself toward the cursor within a small radius — the hover-reactive
// "magnetic" interaction pattern, layered on top of the existing custom cursor.
export function MagneticButton({ className, children, strength = 22, ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 12, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 300, damping: 12, mass: 0.25 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      data-cursor="expand"
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={reduced ? undefined : { x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
