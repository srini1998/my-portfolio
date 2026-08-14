"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

const variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

// A crisper pop-in for tiles on light/white sections — no blur, a slight
// overshoot on the ease, distinct from the moody dark-section reveal.
// Re-triggers every time the tile scrolls back into view.
export function RevealTile({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;

  if (reduced) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={variants}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.div>
  );
}
