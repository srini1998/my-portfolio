import { contact } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6">
      {/* Carbon grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <p className="relative mb-4 font-mono text-xs uppercase tracking-[0.2em] text-silver-200">
        MS Computer Science · Stevens Institute of Technology
      </p>

      {/* Responsive name — scales from 2.5rem on phones to 4.5rem on desktop */}
      <h1
        className="relative mb-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Krishna Sai Srinivas
        <br />
        <span className="text-racing">Venigalla</span>
      </h1>

      <p className="relative mb-3 font-mono text-xs uppercase tracking-widest text-silver-100 sm:text-sm">
        AI / ML Engineer &nbsp;·&nbsp; LLM Researcher &nbsp;·&nbsp; Backend Specialist
      </p>
      <p className="relative mb-10 max-w-xl text-sm leading-relaxed text-silver-200">
        4 years building production systems at Accenture · Currently researching
        large-scale LLM traces at Stevens
      </p>

      {/* CTA buttons — full-width on mobile, auto on sm+ */}
      <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          href="#skills"
          className="rounded border border-racing bg-racing px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-racing-dark"
        >
          View Record
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-asphalt-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-silver-100 transition-colors hover:border-racing hover:text-racing"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded border border-asphalt-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-silver-100 transition-colors hover:border-racing hover:text-racing"
        >
          Contact
        </a>
      </div>

      {/* Dashboard stat strip — stays 3 cols but pads tighter on mobile */}
      <div className="relative mt-14 w-full border-t border-asphalt-600 pt-8 sm:mt-16 sm:pt-10">
        <div className="grid grid-cols-3 divide-x divide-asphalt-600">
          {[
            { value: "4 YRS",    label: "Industry Experience" },
            { value: "STEVENS",  label: "MS Computer Science"  },
            { value: "JAN 2026", label: "Graduated"            },
          ].map(({ value, label }) => (
            <div key={label} className="px-3 text-center sm:px-8">
              <p
                className="text-xl font-bold uppercase text-racing sm:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-silver-200 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
