import { contact } from "@/lib/data";
import { CountUp } from "@/components/CountUp";
import { ScrambleText } from "@/components/ScrambleText";
import { RevealText } from "@/components/RevealText";
import { Marquee } from "@/components/Marquee";
import { GlitchColumn } from "@/components/GlitchColumn";
import { AccentMark } from "@/components/AccentMark";
import { MagneticButton } from "@/components/MagneticButton";

const tickerItems = [
  "AI / ML ENGINEER",
  "LLM RESEARCHER",
  "BACKEND SPECIALIST",
  "OPEN TO WORK",
];

export function Hero() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 z-0" />
      <div className="hud-scanlines pointer-events-none absolute inset-0 z-0 opacity-60" />

      <AccentMark className="pointer-events-none absolute right-8 top-8 z-0 h-8 w-8 text-racing/50 sm:right-12 sm:top-10" />
      <AccentMark className="pointer-events-none absolute bottom-10 left-6 z-0 h-6 w-6 text-silver-500/30 sm:left-10" />

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left — the big asymmetric headline column */}
          <div className="lg:col-span-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-racing">
              [&nbsp;<span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-racing" />
                </span>
                open_to_work
              </span>&nbsp;]
            </p>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-silver-300">
              MS Computer Science · Stevens Institute of Technology
            </p>

            <h1 className="mb-6 text-[clamp(3rem,8vw,6.75rem)] font-bold leading-[0.96] tracking-tight text-white font-display">
              <RevealText text="Krishna Sai" startIndex={0} />
              <br />
              <RevealText text="Srinivas" startIndex={2} />{" "}
              <RevealText text="Venigalla." startIndex={3} className="text-racing" />
            </h1>

            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-silver-100 sm:text-sm">
              AI / ML Engineer &nbsp;·&nbsp; LLM Researcher &nbsp;·&nbsp; Backend Specialist
            </p>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-silver-200">
              4 years building production systems at Accenture · Currently researching
              large-scale LLM traces at Stevens
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <MagneticButton
                href="#skills"
                className="rounded-full bg-white px-7 py-3 text-center font-semibold text-carbon-900 shadow-glow-sm transition-transform hover:scale-[1.03]"
              >
                View Record
              </MagneticButton>
              <MagneticButton
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-asphalt-500 px-7 py-3 text-center font-semibold text-silver-100 transition-colors hover:border-racing hover:text-racing"
              >
                LinkedIn
              </MagneticButton>
              <MagneticButton
                href={`mailto:${contact.email}`}
                className="rounded-full border border-asphalt-500 px-7 py-3 text-center font-semibold text-silver-100 transition-colors hover:border-racing hover:text-racing"
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          {/* Right — decorative glitch/cipher panel + stacked stats, matches
              the reference's off-canvas noise-texture side column */}
          <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-between">
            <GlitchColumn lines={12} lineLength={5} className="text-right" />

            <div className="mt-10 flex flex-col items-end gap-6 border-t border-asphalt-600 pt-6 text-right">
              <div>
                <p className="font-display text-2xl font-bold text-racing">
                  <CountUp value={4} suffix=" yrs" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">
                  Industry Experience
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-racing">
                  <ScrambleText text="Stevens" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">
                  MS Computer Science
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-racing">
                  <ScrambleText text="Open to Work" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">
                  Status
                </p>
              </div>
            </div>
          </div>

          {/* Mobile-only compact stat row */}
          <div className="grid grid-cols-3 divide-x divide-asphalt-600 border-t border-asphalt-600 pt-6 lg:hidden">
            <div className="px-2 text-center">
              <p className="font-display text-xl font-bold text-racing">
                <CountUp value={4} suffix=" yrs" />
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">Experience</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-display text-xl font-bold text-racing">Stevens</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">MS CS</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-display text-xl font-bold text-racing">Open to Work</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-300">Status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed ticker */}
      <div className="relative w-full border-y border-asphalt-600 bg-carbon-800/60 py-3">
        <Marquee items={tickerItems} />
      </div>
    </div>
  );
}
