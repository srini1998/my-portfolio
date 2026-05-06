import { roadmapProjects } from "@/lib/data";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-50">2026 Roadmap</h2>
        <p className="mt-2 text-gray-500">
          Agentic AI projects in active development
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {roadmapProjects.map((project) => (
          <div
            key={project.title}
            className="relative flex flex-col rounded-xl border border-violet-900/40 bg-violet-950/20 p-6 transition-colors hover:border-violet-700/60"
          >
            {/* Coming soon badge */}
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-amber-900/40 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
                Coming Soon · {project.comingSoonLabel}
              </span>
            </div>
            <h3 className="mb-2 font-semibold text-gray-100">{project.title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-violet-900/30 px-2.5 py-1 font-mono text-xs text-violet-300"
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
