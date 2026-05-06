"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const transition = {
  duration: 0.55,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
