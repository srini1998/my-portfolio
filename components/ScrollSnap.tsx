"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMotionToggle } from "@/components/MotionProvider";

interface Slide {
  id: string;
  content: React.ReactNode;
}

interface ScrollSnapProps {
  sections: Slide[];
}

const TRANSITION_S = 0.75;
const WHEEL_COOLDOWN_MS = 900;
const WHEEL_THRESHOLD = 12;
const SWIPE_THRESHOLD = 60;
const EDGE_SLACK = 2;

// Full-page scroll-snap: each section is exactly one screen (below the fixed
// Nav bar), wheel/touch/keyboard input is hijacked and animates the whole
// stack to the next/prev section boundary — but a section taller than the
// viewport scrolls internally first, and only snaps once you hit its
// top/bottom edge. Desktop-only; mobile and reduced-motion get plain
// normal-flow scrolling.
export function ScrollSnap({ sections }: ScrollSnapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [slideHeight, setSlideHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const isAnimatingRef = useRef(false);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReduced = useReducedMotion();
  const { enabled } = useMotionToggle();
  const reduced = prefersReduced || !enabled;
  const active = isDesktop && !reduced;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      const h = header ? header.offsetHeight : 0;
      setNavHeight(h);
      setSlideHeight(window.innerHeight - h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      if (clamped === activeIndex || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setActiveIndex(clamped);
      history.replaceState(null, "", `#${sections[clamped].id}`);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
        const el = sectionRefs.current[clamped];
        if (el) el.scrollTop = 0;
      }, TRANSITION_S * 1000);
    },
    [activeIndex, sections]
  );

  useEffect(() => {
    if (!active) return;

    const atInternalBottom = (el: HTMLDivElement) =>
      el.scrollTop + el.clientHeight >= el.scrollHeight - EDGE_SLACK;
    const atInternalTop = (el: HTMLDivElement) => el.scrollTop <= EDGE_SLACK;
    const canScrollInternally = (el: HTMLDivElement | null) =>
      !!el && el.scrollHeight > el.clientHeight + EDGE_SLACK;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (isAnimatingRef.current || now - lastWheelTime.current < WHEEL_COOLDOWN_MS) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      const currentEl = sectionRefs.current[activeIndex];
      const internal = canScrollInternally(currentEl);

      if (e.deltaY > 0) {
        if (internal && currentEl && !atInternalBottom(currentEl)) return;
        e.preventDefault();
        lastWheelTime.current = now;
        goTo(activeIndex + 1);
      } else {
        if (internal && currentEl && !atInternalTop(currentEl)) return;
        e.preventDefault();
        lastWheelTime.current = now;
        goTo(activeIndex - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (isAnimatingRef.current) return;
      if (!["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(e.key)) return;

      const currentEl = sectionRefs.current[activeIndex];
      const internal = canScrollInternally(currentEl);
      const down = e.key === "ArrowDown" || e.key === "PageDown";

      if (down) {
        if (internal && currentEl && !atInternalBottom(currentEl)) return;
        e.preventDefault();
        goTo(activeIndex + 1);
      } else {
        if (internal && currentEl && !atInternalTop(currentEl)) return;
        e.preventDefault();
        goTo(activeIndex - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null || isAnimatingRef.current) return;
      const deltaY = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;

      const currentEl = sectionRefs.current[activeIndex];
      const internal = canScrollInternally(currentEl);

      if (deltaY > 0) {
        if (internal && currentEl && !atInternalBottom(currentEl)) return;
        touchStartY.current = null;
        goTo(activeIndex + 1);
      } else {
        if (internal && currentEl && !atInternalTop(currentEl)) return;
        touchStartY.current = null;
        goTo(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [active, activeIndex, goTo]);

  // Internal #hash links (nav, footer, "see the work", etc.) need to drive
  // goTo() directly — a native anchor jump can't move a transform-based,
  // fixed-position slide stack.
  useEffect(() => {
    if (!active) return;
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href) return;
      const id = href.slice(1);
      const idx = id === "" ? 0 : sections.findIndex((s) => s.id === id);
      if (idx === -1) return;
      e.preventDefault();
      goTo(idx);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [active, sections, goTo]);

  if (!active) {
    return (
      <>
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            {s.content}
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      className="fixed left-0 right-0 z-10 overflow-hidden"
      style={{ top: navHeight, bottom: 0 }}
    >
      <motion.div
        animate={{ y: -(activeIndex * slideHeight) }}
        transition={{ duration: TRANSITION_S, ease: [0.65, 0, 0.35, 1] }}
      >
        {sections.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="w-full overflow-y-auto"
            style={{ height: slideHeight }}
          >
            {s.content}
          </div>
        ))}
      </motion.div>

      <div className="fixed right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.id}`}
            className={`h-2 w-2 rounded-full border transition-all duration-300 ${
              i === activeIndex
                ? "scale-125 border-white bg-white"
                : "border-white/40 bg-transparent hover:border-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
