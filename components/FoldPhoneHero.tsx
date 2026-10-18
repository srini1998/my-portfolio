"use client";

import { useEffect, useRef } from "react";
import { TechnicalArt } from "./TechnicalArt";

/** A two-sided cover rotates around the centre hinge; scroll is never intercepted. */
export function FoldPhoneHero() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const draw = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const distance = element.offsetHeight - window.innerHeight;
      const progress = preference.matches
        ? 1
        : Math.min(1, Math.max(0, -bounds.top / Math.max(1, distance)));
      // Complete the physical fold before releasing the sticky stage.
      const fold = Math.min(1, progress / 0.82);
      const eased = fold * fold * (3 - 2 * fold);
      const height = Math.min(window.innerHeight * 0.76, 740);
      const closedWidth = Math.min(window.innerWidth * 0.84, height * 0.66, 480);
      const openWidth = Math.min(element.clientWidth * 0.45, 600);
      const panelWidth = closedWidth + (openWidth - closedWidth) * eased;
      element.style.setProperty("--panel-width", `${panelWidth}px`);
      element.style.setProperty("--closed-corner", `${42 * (1 - eased)}px`);
      element.style.setProperty("--closed-edge", `${8 * (1 - eased)}px`);
      element.style.setProperty("--fold-angle", `${180 * (1 - eased)}deg`);
      element.style.setProperty("--phone-shift", `${-panelWidth * 0.5 * (1 - eased)}px`);
      element.style.setProperty("--name-opacity", `${1 - Math.min(1, fold * 2)}`);
      element.style.setProperty("--name-shift", `${eased * 140}px`);
      element.style.setProperty("--hinge-opacity", `${Math.sin(eased * Math.PI) * 0.28}`);
      element.style.setProperty("--hint-opacity", `${1 - Math.min(1, fold * 5)}`);
      // The reverse side must not receive keyboard focus while folded shut.
      const inside = element.querySelector<HTMLElement>(".fold-inside");
      if (inside) inside.inert = fold < 0.65;
      const cover = element.querySelector<HTMLElement>(".fold-cover");
      if (cover) cover.inert = fold > 0.45;
      element.dataset.fold = fold >= 1 ? "open" : fold === 0 ? "closed" : "opening";
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section className="fold-hero" id="top" ref={section} aria-label="Introduction">
      <div className="fold-stage">
        <div className="hero-label">
          <span>AI · BACKEND · DATA SYSTEMS</span>
          <span>JERSEY CITY, NJ</span>
        </div>
        <h1 className="fold-name"><span>SRINIVAS</span><span>VENIGALLA</span></h1>
        <div className="fold-perspective">
          <div className="fold-phone">
            <div className="fold-right" aria-hidden="true">
              <div className="fold-status"><span>SV / SYSTEMS</span><span>CONNECTED ◉</span></div>
              <TechnicalArt kind="model" />
              <div className="fold-art-caption">A little curiosity.<br />A lot of connections.</div>
            </div>
            <div className="fold-flap">
              <div className="fold-inside">
                <span className="fold-status">SOFTWARE ENGINEER / JERSEY CITY</span>
                <div className="fold-bio">
                  <p className="eyebrow">HELLO, WORLD.</p>
                  <h2>Curious mind.<br />Useful software.</h2>
                  <p>I’m Srinivas. I build tools that make complicated systems easier to use and trust.</p>
                  <div className="fold-actions"><a href="#work">See the work ↗</a><a href="#about">Meet me ↗</a></div>
                </div>
                <span className="fold-footer">BACKEND · AI · DATA</span>
              </div>
              <div className="fold-cover">
                <div className="device-top"><span>HELLO, WORLD.</span><span>01 / SV</span></div>
                <div className="device-intro">Software engineer.<br />Curious about what’s next.</div>
                <TechnicalArt kind="model" />
                <div className="device-notices">
                  <a href="#work"><span className="notice-icon">{"{ }"}</span><span>Systems that do real work<small>EXPLORE THE PROJECTS ↗</small></span></a>
                  <a href="#about"><span className="notice-icon">↗</span><span>From backend to machine learning<small>MEET THE ENGINEER</small></span></a>
                </div>
                <a className="unfold" href="#fold-open">Scroll to unfold ↓</a>
              </div>
            </div>
          </div>
        </div>
        <p className="fold-scroll-hint" aria-hidden="true">SCROLL TO OPEN <span>↓</span></p>
      </div>
      <span id="fold-open" className="fold-open-anchor" aria-hidden="true" />
    </section>
  );
}
