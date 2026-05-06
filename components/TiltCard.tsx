"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 280,
    damping: 28,
  });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    // Outer div is the grid item; perspective applied here so 3-D context
    // doesn't bleed across sibling cards.
    <div style={{ perspective: "900px" }}>
      <motion.div
        ref={ref}
        data-cursor="expand"
        onMouseMove={onMouseMove}
        onMouseLeave={reset}
        style={
          reduced
            ? {}
            : { rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }
        }
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
