"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { contact } from "@/lib/data";
import { TechnicalArt } from "./TechnicalArt";

const destinations = ["Home", "Work", "Folders", "About", "Contact"];

export function FoldPhoneHero({
  children,
  initiallyOpen = false,
  closeAtEnd = false,
}: {
  children: ReactNode;
  initiallyOpen?: boolean;
  closeAtEnd?: boolean;
}) {
  const section = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initiallyOpen ? "Work" : "Home");

  useEffect(() => {
    const root = section.current,
      page = content.current;
    if (!root || !page) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const screen = root.querySelector<HTMLElement>(".phone-display")!;
    const cover = root.querySelector<HTMLElement>(".fold-cover")!;
    let frame = 0,
      focusFrame = 0,
      opening = 0,
      closing = 0,
      travel = 0,
      viewport = 0;
    const draw = () => {
      frame = 0;
      const y = Math.max(0, -root.getBoundingClientRect().top);
      const start = opening ? Math.min(1, y / opening) : 1;
      const end = closing
        ? Math.min(1, Math.max(0, (y - opening - travel) / closing))
        : 0;
      const progress = start * (1 - end);
      // Scroll offsets round to pixels; snap the physical hinge at its endpoints.
      const amount = progress < 0.001 ? 0 : progress > 0.999 ? 1 : progress;
      const eased = amount * amount * (3 - 2 * amount);
      const closedWidth = Math.min(
        innerWidth * 0.84,
        viewport * 0.84 * 0.72,
        600,
      );
      const openWidth = Math.min(root.clientWidth * 0.9, 1240);
      const panel = closedWidth + (openWidth / 2 - closedWidth) * eased;
      root.style.setProperty("--panel-width", `${panel}px`);
      root.style.setProperty("--fold-angle", `${180 * (1 - eased)}deg`);
      root.style.setProperty(
        "--phone-shift",
        `${-panel * 0.5 * (1 - eased)}px`,
      );
      root.style.setProperty("--reveal-left", `${50 * (1 - eased)}%`);
      root.style.setProperty("--name-opacity", `${1 - Math.min(1, eased * 3)}`);
      root.style.setProperty(
        "--content-scroll",
        `${-Math.min(travel, Math.max(0, y - opening))}px`,
      );
      const open = amount >= 0.999;
      root.dataset.fold = open ? "open" : amount === 0 ? "closed" : "opening";
      root.dataset.ending = String(end > 0);
      screen.inert = !open;
      cover.inert = amount > 0.45;
      const ids = ["home", "work", "folders", "about", "contact"];
      const current = ids
        .filter((id) => {
          const target = page.querySelector<HTMLElement>(`#${id}`);
          return (
            target &&
            target.offsetTop <= Math.max(0, y - opening) + viewport * 0.35
          );
        })
        .at(-1);
      if (end > 0) setActive("Contact");
      else if (current) setActive(current[0].toUpperCase() + current.slice(1));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const measure = () => {
      root.dataset.ready = "true";
      viewport = root.querySelector<HTMLElement>(".fold-stage")!.clientHeight;
      opening = initiallyOpen || reduced.matches ? 0 : viewport * 0.95;
      closing = closeAtEnd && !reduced.matches ? viewport * 0.8 : 0;
      root.style.setProperty(
        "--open-width",
        `${Math.min(root.clientWidth * 0.9, 1240)}px`,
      );
      const available =
        root.querySelector<HTMLElement>(".phone-viewport")!.clientHeight;
      root.style.setProperty("--screen-height", `${available}px`);
      travel = Math.max(0, page.scrollHeight - available);
      root.style.setProperty(
        "height",
        `${viewport + opening + travel + closing}px`,
      );
      root.dataset.opening = String(opening);
      draw();
    };
    const navigate = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (
        !link ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const id =
        link.hash.slice(1) === "archive" ? "folders" : link.hash.slice(1);
      const target =
        id === "top" || id === "fold-open"
          ? null
          : page.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
      if (!target && !["top", "fold-open"].includes(id)) return;
      event.preventDefault();
      const top = root.getBoundingClientRect().top + scrollY;
      const offset =
        id === "top" ? 0 : opening + Math.min(travel, target?.offsetTop ?? 0);
      history.replaceState(
        null,
        "",
        id === "top" ? location.pathname : `#${id}`,
      );
      window.scrollTo({
        top: top + offset,
        behavior: reduced.matches ? "instant" : "smooth",
      });
    };
    const revealFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!screen.contains(target) || target.closest(".phone-dock")) return;
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(() => {
        const box = screen.getBoundingClientRect(),
          item = target.getBoundingClientRect();
        const delta =
          item.top < box.top + 55
            ? item.top - box.top - 60
            : item.bottom > box.bottom - 80
              ? item.bottom - box.bottom + 85
              : 0;
        if (delta) window.scrollBy({ top: delta, behavior: "instant" });
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(page);
    root.addEventListener("click", navigate);
    root.addEventListener("focusin", revealFocus);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    reduced.addEventListener("change", measure);
    // Anchors also need translation when reached through history or same-page links.
    const alignHash = () => {
      const hash =
        location.hash === "#archive" ? "folders" : location.hash.slice(1);
      if (hash === "top") {
        window.scrollTo({ top: root.offsetTop, behavior: "instant" });
        return;
      }
      const target =
        hash && page.querySelector<HTMLElement>(`#${CSS.escape(hash)}`);
      if (target)
        window.scrollTo({
          top: root.offsetTop + opening + Math.min(travel, target.offsetTop),
          behavior: "instant",
        });
    };
    alignHash();
    window.addEventListener("hashchange", alignHash);
    return () => {
      window.removeEventListener("hashchange", alignHash);
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(focusFrame);
      root.removeEventListener("click", navigate);
      root.removeEventListener("focusin", revealFocus);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", measure);
    };
  }, [initiallyOpen, closeAtEnd]);

  return (
    <div className="portfolio" id="top" ref={section}>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <header className="frame-header">
        <Link className="wordmark" href={initiallyOpen ? "/" : "#top"}>
          SV<span> / ENGINEER</span>
        </Link>
      </header>
      <div className="fold-stage">
        <div className="fold-name" aria-hidden="true">
          <span>SRINIVAS</span>
          <span>VENIGALLA</span>
        </div>
        <div className="fold-perspective">
          <div className="fold-phone">
            <div className="phone-display">
              <div className="phone-viewport">
                <main className="screen-content" ref={content}>
                  {children}
                </main>
              </div>
              <nav className="phone-dock" aria-label="Portfolio navigation">
                {destinations.map((name) => {
                  const id = name.toLowerCase();
                  const href = initiallyOpen ? `/#${id}` : `#${id}`;
                  return (
                    <Link
                      key={name}
                      href={href}
                      aria-current={active === name ? "location" : undefined}
                    >
                      {name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="fold-visuals">
              <div className="fold-flap">
                <div className="fold-cover">
                  <div className="cover-home">
                    <div className="device-top">
                      <span>HELLO, WORLD.</span>
                      <span>01 / SV</span>
                    </div>
                    <div className="device-intro">
                      Software engineer.
                      <br />
                      Curious about what’s next.
                    </div>
                    <TechnicalArt kind="model" />
                    <div className="device-notices">
                      <a href="#work">
                        <b>{"{ }"}</b>
                        <span>
                          Systems that do real work
                          <small>EXPLORE THE PROJECTS ↗</small>
                        </span>
                      </a>
                      <a href="#about">
                        <b>↗</b>
                        <span>
                          From backend to machine learning
                          <small>MEET THE ENGINEER</small>
                        </span>
                      </a>
                    </div>
                    <a className="unfold" href="#fold-open">
                      Scroll to unfold ↓
                    </a>
                  </div>
                  <div className="cover-call">
                    <p className="eyebrow">LET’S BUILD SOMETHING</p>
                    <h2>
                      Srinivas
                      <br />
                      Venigalla.
                    </h2>
                    <p>Have a project in mind?</p>
                    <div className="call-art">
                      <TechnicalArt kind="code" />
                    </div>
                    <a className="call-action" href={`mailto:${contact.email}`}>
                      <span>↗</span>Let’s talk software
                    </a>
                    <small>{contact.email}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
