"use client";

import { useState } from "react";

export interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  invert?: boolean;
}

export function Accordion({ items, invert = false }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y border-y ${invert ? "divide-carbon-900/10 border-carbon-900/10" : "divide-asphalt-600 border-asphalt-600"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              data-cursor="expand"
              className={`group -mx-5 flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 ${
                invert ? "hover:bg-carbon-900/[0.04]" : "hover:bg-asphalt-800/30"
              }`}
            >
              <span className={`font-display text-base font-medium sm:text-lg ${invert ? "text-carbon-900" : "text-white"}`}>
                {item.q}
              </span>
              <span
                className={`shrink-0 font-mono text-xl transition-transform duration-300 group-hover:scale-125 ${
                  invert ? "text-racing-dark" : "text-racing"
                }`}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className={`max-w-2xl text-sm leading-relaxed ${invert ? "text-carbon-900/70" : "text-silver-200"}`}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
