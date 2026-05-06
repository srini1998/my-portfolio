import { roadmapProjects } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";
import { ScrambleText } from "@/components/ScrambleText";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-20">
      <div className="mb-8 md:mb-10">
        <h2
          className="sector-line text-2xl font-bold uppercase tracking-wider text-white md:text-3xl"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <ScrambleText text="2026 Roadmap" />
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-silver-200">
          Agentic AI projects in active development
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {roadmapProjects.map((project) => (
          <TiltCard
            key={project.title}
            className="relative flex h-full flex-col rounded border border-racing/20 bg-carbon-800 p-5 transition-colors hover:border-racing/50 md:p-6"
          >
            <h3
              className="mb-2 text-base font-bold uppercase tracking-wide text-white md:text-lg"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-silver-100">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-asphalt-600 bg-asphalt-800 px-3 py-2 font-mono text-xs text-silver-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
