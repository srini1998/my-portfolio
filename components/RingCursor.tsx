"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 16; // matches the 32px ring in globals.css
const HOVER_SCALE = 1.18;
const PRESS_SCALE = 0.9;
const LABEL_GAP = 10;
// Fraction of the remaining distance covered per 60fps frame.
const EASE = 0.22;

const INTERACTIVE = "a, button, [role='button'], label, select, summary, [data-cursor]";
const TEXT_FIELD =
  "input:not([type='button'], [type='submit'], [type='checkbox'], [type='radio'], [type='range']), textarea, [contenteditable='true']";

/** Background luminance of the nearest painted ancestor, 0 (black) to 1 (white). */
function surfaceLuminance(el: Element | null): number {
  for (let node = el; node; node = node.parentElement) {
    const m = getComputedStyle(node).backgroundColor.match(/[\d.]+/g);
    if (!m) continue;
    const [r, g, b, a = "1"] = m;
    if (Number(a) < 0.5) continue; // mostly transparent, keep looking up
    return (0.2126 * Number(r) + 0.7152 * Number(g) + 0.0722 * Number(b)) / 255;
  }
  return 1; // nothing painted: the light page background
}

/**
 * Glass lens ring that trails the pointer. Elements opt into a label with
 * `data-cursor="View project"`; `data-cursor="expand"` only grows the ring.
 */
export function RingCursor() {
  const [enabled, setEnabled] = useState(false);
  // Last label stays rendered while the pill fades out.
  const [label, setLabel] = useState("");
  const [labelOn, setLabelOn] = useState(false);
  const lensRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const lens = lensRef.current;
    const ring = ringRef.current;
    const tag = labelRef.current;
    if (!lens || !ring || !tag) return;

    const root = document.documentElement;
    root.classList.add("ring-cursor");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const target = { x: 0, y: 0, s: 1 };
    const current = { x: 0, y: 0, s: 1 };
    let hovering = false;
    let pressed = false;
    let placed = false;
    let frame = 0;
    let last = 0;

    const setVisible = (on: boolean) => {
      root.toggleAttribute("data-cursor-visible", on);
    };

    const render = () => {
      const ringT = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${current.s})`;
      lens.style.transform = ringT;
      ring.style.transform = ringT;
      tag.style.transform = `translate3d(${current.x + RADIUS * current.s + LABEL_GAP}px, ${current.y}px, 0) translateY(-50%)`;
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 16.67, 4) : 1;
      last = now;
      const k = motion.matches ? 1 : 1 - Math.pow(1 - EASE, dt);
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      current.s += (target.s - current.s) * (motion.matches ? 1 : Math.min(k * 1.2, 1));
      render();
      const settled =
        Math.abs(target.x - current.x) < 0.1 &&
        Math.abs(target.y - current.y) < 0.1 &&
        Math.abs(target.s - current.s) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
      if (settled) last = 0;
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const updateScale = () => {
      target.s = (hovering ? HOVER_SCALE : 1) * (pressed ? PRESS_SCALE : 1);
      wake();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!placed) {
        // First sighting: appear under the pointer instead of flying in from 0,0.
        current.x = target.x;
        current.y = target.y;
        placed = true;
        render();
      }
      setVisible(true);
      wake();
    };

    const onOver = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      root.toggleAttribute("data-cursor-text", !!el?.closest(TEXT_FIELD));
      root.toggleAttribute("data-cursor-on-dark", surfaceLuminance(el) < 0.45);
      const hit = el?.closest(INTERACTIVE);
      hovering = !!hit;
      const text = hit?.getAttribute("data-cursor") ?? "";
      const on = text !== "" && text !== "expand";
      if (on) setLabel(text);
      setLabelOn(on);
      updateScale();
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pressed = true;
      updateScale();
    };
    const onUp = () => {
      pressed = false;
      updateScale();
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) setVisible(false);
    };
    const onBlur = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("blur", onBlur);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("ring-cursor");
      root.removeAttribute("data-cursor-visible");
      root.removeAttribute("data-cursor-text");
      root.removeAttribute("data-cursor-on-dark");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("blur", onBlur);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={lensRef} aria-hidden="true" className="ring-cursor-lens" />
      <div ref={ringRef} aria-hidden="true" className="ring-cursor-ring" />
      <div
        ref={labelRef}
        aria-hidden="true"
        className="ring-cursor-label"
        data-active={labelOn ? "" : undefined}
      >
        <span>{label}</span>
      </div>
    </>
  );
}
