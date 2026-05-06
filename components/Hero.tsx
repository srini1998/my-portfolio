import { contact } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24 text-center">
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
      <h1
        className="relative mb-4 text-6xl font-bold uppercase tracking-tight text-white sm:text-7xl"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Krishna Sai Srinivas
        <br />
        <span className="text-racing">Venigalla</span>
      </h1>
      <p className="relative mb-3 font-mono text-sm uppercase tracking-widest text-silver-100">
        AI / ML Engineer &nbsp;·&nbsp; LLM Researcher &nbsp;·&nbsp; Backend Specialist
      </p>
      <p className="relative mb-10 max-w-xl text-sm leading-relaxed text-silver-200">
        4 years building production systems at Accenture · Currently researching
        large-scale LLM traces at Stevens
      </p>

      <div className="relative flex flex-wrap justify-center gap-4">
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

      {/* Dashboard stat strip */}
      <div className="relative mt-16 w-full border-t border-asphalt-600 pt-10">
        <div className="grid grid-cols-3 divide-x divide-asphalt-600">
          {[
            { value: "4 YRS",    label: "Industry Experience" },
            { value: "STEVENS",  label: "MS Computer Science"  },
            { value: "JAN 2026", label: "Graduated"  },
          ].map(({ value, label }) => (
            <div key={label} className="px-8 text-center">
              <p
                className="text-3xl font-bold uppercase text-racing"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-silver-200">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
