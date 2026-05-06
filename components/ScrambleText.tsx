"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—#@";

export function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(text);
      return;
    }

    let iter = 0;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iter) return ch;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
          .join("")
      );
      iter += 0.55;
      if (iter > text.length) {
        setDisplay(text);
        clearInterval(id);
      }
    }, 38);

    return () => clearInterval(id);
  }, [inView, reduced, text]);

  return <span ref={ref}>{display}</span>;
}
