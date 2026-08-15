import { SectionHeader } from "@/components/SectionHeader";
import { RevealTile } from "@/components/RevealTile";
import { FireParticles } from "@/components/FireParticles";

export function About() {
  return (
    <section className="section-light relative flex min-h-full flex-col justify-center overflow-hidden py-16 md:py-24">
      <FireParticles tone="dark" />
      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <SectionHeader index={5} title="Education" invert />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <RevealTile>
            <div className="rounded-3xl border border-carbon-900/10 bg-white/70 p-5 transition-colors hover:border-racing-dark/40 hover:shadow-glow-dark-sm md:p-6">
              <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-carbon-900">Stevens Institute of Technology</h3>
                <span className="font-mono text-xs text-carbon-900/60">2024 – 2026</span>
              </div>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-racing-dark">
                MS Computer Science
              </p>
              <p className="mb-1 font-mono text-xs text-carbon-900/60">Hoboken, NJ, USA</p>
              <p className="mt-4 text-sm leading-relaxed text-carbon-900/80">
                Advanced coursework in Artificial Intelligence, Machine Learning, Deep Learning,
                and Database Systems. Contributing to the NDIF research framework under Prof. Hao Wang,
                focusing on empirical analysis of large-scale LLM traces. Bridging theory with
                scalable engineering across model robustness, NLP pipelines, and database systems.
              </p>
            </div>
          </RevealTile>
          <RevealTile>
            <div className="rounded-3xl border border-carbon-900/10 bg-white/70 p-5 transition-colors hover:border-racing-dark/40 hover:shadow-glow-dark-sm md:p-6">
              <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-carbon-900">Gitam University</h3>
                <span className="font-mono text-xs text-carbon-900/60">2016 – 2020</span>
              </div>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-racing-dark">
                B.Tech Computer Science
              </p>
              <p className="mb-1 font-mono text-xs text-carbon-900/60">Visakhapatnam, India</p>
              <p className="mt-4 text-sm leading-relaxed text-carbon-900/80">
                Strong foundation in data structures, OOP, and database systems. Final-year project:
                music recommendation using RNNs on the KKBOX dataset. Secured 2nd place in a
                24-hour state-level coding challenge. IEEE Student Branch member and Code Hackathon
                problem designer.
              </p>
            </div>
          </RevealTile>
        </div>
      </div>
    </section>
  );
}
