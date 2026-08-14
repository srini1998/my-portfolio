"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

interface RevealTextProps {
  text: string;
  className?: string;
  startIndex?: number;
  stagger?: number;
}

const wordVariants = {
  hidden: { y: "115%" },
  visible: { y: "0%" },
};

// Masks each word behind an overflow-hidden strip and slides it up into
// place, staggered — re-triggers every time it scrolls into view.
export function RevealText({ text, className, startIndex = 0, stagger = 0.06 }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap ${className ?? ""}`}
      style={{ columnGap: "0.28em" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordVariants}
            transition={{ duration: 0.7, delay: (startIndex + i) * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
