import { RevealText } from "@/components/RevealText";

const facts = [
  { label: "Currently", value: "Completed Masters · Stevens" },
  { label: "Previously", value: "Software Engineer · Accenture" },
  { label: "Focus", value: "Agentic AI" },
];

export function Pitch() {
  return (
    <section className="section-light relative min-h-full overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <h2 className="max-w-3xl font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.02] tracking-tight text-carbon-900">
          <RevealText text="More than what's on paper." />
        </h2>

        <div className="relative mt-10 max-w-2xl rounded-3xl border-4 border-transparent bg-carbon-900 p-6 text-white sm:p-8 md:mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-racing/20 font-mono text-xs text-racing">✓</span>
            <span className="font-mono text-xs uppercase tracking-widest text-silver-300">what_drives_the_work</span>
          </div>
          <p className="text-lg leading-relaxed text-silver-100 sm:text-xl">
            Four years shipping production systems, now going deeper into how large
            language models actually work — from inference internals to evaluation
            harnesses. Systems that hold up under real load, not just demos_
          </p>

          <a
            href="#projects"
            data-cursor="expand"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-carbon-900 bg-white px-2 py-6 font-mono text-xs uppercase tracking-widest text-carbon-900 shadow-lg transition-colors hover:bg-carbon-900 hover:text-white sm:flex"
            style={{ writingMode: "vertical-rl" }}
          >
            See the Work
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-carbon-900/10 sm:grid-cols-3 md:mt-14">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-white/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-racing-dark">{fact.label}</p>
              <p className="mt-2 font-display text-lg font-semibold text-carbon-900">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
