import { roadmapProjects } from "@/lib/data";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="mb-10">
        <h2
          className="sector-line text-3xl font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          2026 Roadmap
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-silver-200">
          Agentic AI projects in active development
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {roadmapProjects.map((project) => (
          <div
            key={project.title}
            className="relative flex flex-col rounded border border-racing/20 bg-carbon-800 p-6 transition-colors hover:border-racing/50"
          >
            <h3
              className="mb-2 text-lg font-bold uppercase tracking-wide text-white"
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
                  className="rounded border border-asphalt-600 bg-asphalt-800 px-2.5 py-1 font-mono text-xs text-silver-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
