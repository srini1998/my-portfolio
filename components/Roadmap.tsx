import { roadmapProjects } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealTile } from "@/components/RevealTile";

export function Roadmap() {
  return (
    <section className="section-light relative flex min-h-full flex-col justify-center py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <SectionHeader
          index={3}
          title="Next: AI Research Agenda"
          subtitle="LLM evaluation · Multi-agent systems · MLOps"
          invert
        />

        <div className="grid grid-cols-1 gap-6">
          {roadmapProjects.map((project) => (
            <RevealTile key={project.title}>
              <div className="relative flex flex-col gap-6 rounded-3xl border border-racing-dark/15 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-racing-dark/50 hover:shadow-glow-dark md:p-10 lg:flex-row lg:items-start">
                <div className="lg:w-1/3 lg:shrink-0">
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-carbon-900/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-carbon-900/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-carbon-900/40" />
                    Upcoming
                  </span>
                  <h3 className="font-display text-2xl font-bold text-carbon-900 md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="mb-5 text-sm leading-relaxed text-carbon-900/80 md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-carbon-900/10 bg-white px-3 py-2 font-mono text-xs text-carbon-900/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealTile>
          ))}
        </div>
      </div>
    </section>
  );
}
