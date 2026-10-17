"use client";

import { createContext, useContext, useState, useEffect } from "react";

const defaultToggle = { enabled: true, toggle: () => {} };
const MotionToggleContext = createContext(defaultToggle);

// Combines the user's manual "Motion On/Off" toggle with their OS-level
// prefers-reduced-motion setting — either one asking for stillness wins.
// Falls back to "motion enabled" outside the provider rather than throwing,
// so a stray render pass never crashes the page over a decorative feature.
export function useMotionToggle() {
  return useContext(MotionToggleContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <MotionToggleContext.Provider value={{ enabled, toggle: () => setEnabled((v) => !v) }}>
      {children}
    </MotionToggleContext.Provider>
  );
}

// Match the server on first render, then apply the OS setting after hydration.
export function useClientReducedMotion(){const [reduced,setReduced]=useState(false);useEffect(()=>{const media=window.matchMedia("(prefers-reduced-motion: reduce)");setReduced(media.matches);const update=()=>setReduced(media.matches);media.addEventListener("change",update);return()=>media.removeEventListener("change",update);},[]);return reduced;}
