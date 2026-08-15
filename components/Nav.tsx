"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Marquee } from "@/components/Marquee";
import { useMotionToggle } from "@/components/MotionProvider";
import { MagneticButton } from "@/components/MagneticButton";

const statusItems = [
  "4+ YRS PRODUCTION ENGINEERING",
  "MS CS · STEVENS INSTITUTE OF TECHNOLOGY",
  "AI / ML · LLM RESEARCH · BACKEND SYSTEMS",
  "JERSEY CITY, NJ, USA",
];

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { enabled, toggle } = useMotionToggle();

  return (
    <header className="sticky top-0 z-50 border-b border-asphalt-600 bg-carbon-900/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-16">
        <span className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-silver-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-racing" />
          </span>
          VENIGALLA<span className="ml-1 text-racing">.</span>DEV
        </span>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <MagneticButton
            href="#contact"
            strength={8}
            className="hidden rounded-full border border-white bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-carbon-900 transition-colors hover:bg-silver-100 sm:inline-block"
          >
            Get in Touch
          </MagneticButton>

          <button
            type="button"
            onClick={toggle}
            data-cursor="expand"
            aria-pressed={enabled}
            className="hidden items-center gap-1.5 rounded-full border border-asphalt-500 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-silver-300 transition-colors hover:border-racing hover:text-racing sm:inline-flex"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "bg-racing" : "bg-asphalt-500"}`} />
            Motion {enabled ? "On" : "Off"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            data-cursor="expand"
            aria-expanded={open}
            className="font-mono text-xs uppercase tracking-widest text-silver-300 transition-colors hover:text-racing"
          >
            [&nbsp;{open ? "CLOSE" : "MENU"}&nbsp;]
          </button>
        </div>
      </nav>

      {/* Slim broadcast status ticker */}
      <div className="border-t border-asphalt-700 bg-carbon-950/80 py-1.5">
        <Marquee items={statusItems} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[85px] z-40 flex flex-col justify-between bg-carbon-950/98 px-5 py-10 backdrop-blur-xl sm:px-8 lg:px-16"
          >
            <ul className="flex flex-col gap-2">
              {links.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-asphalt-700 py-4 font-display text-4xl font-bold text-white transition-all duration-300 hover:translate-x-4 hover:border-racing/40 hover:text-racing sm:text-6xl"
                  >
                    <span className="font-mono text-sm text-racing transition-transform duration-300 group-hover:scale-125">
                      {String(i + 1).padStart(2, "0")}_/
                    </span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-asphalt-700 pt-6">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-silver-300 hover:text-racing"
              >
                LinkedIn ↗
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-silver-300 hover:text-racing"
              >
                GitHub ↗
              </a>
              <button
                type="button"
                onClick={toggle}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-silver-300 hover:text-racing"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "bg-racing" : "bg-asphalt-500"}`} />
                Motion {enabled ? "On" : "Off"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
