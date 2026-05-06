"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380 });
  const sy = useSpring(y, { damping: 28, stiffness: 380 });

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!mounted || isTouch) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      setExpanded(!!(e.target as Element).closest('[data-cursor="expand"]'));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mounted, isTouch, x, y]);

  if (!mounted || isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[999] rounded-full border-2 border-racing"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
      }}
      animate={{
        width: expanded ? 44 : 22,
        height: expanded ? 44 : 22,
        backgroundColor: expanded ? "rgba(230,0,0,0.12)" : "transparent",
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  );
}
