import { legacyProjects } from "@/lib/data";

export function LegacyProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-50">Projects</h2>
        <p className="mt-2 text-gray-500">Completed academic and research work</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {legacyProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-violet-800"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="font-semibold text-gray-100">{project.title}</h3>
              <span className="ml-3 shrink-0 rounded-full bg-emerald-900/50 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Completed
              </span>
            </div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-800 px-2.5 py-1 font-mono text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-violet-400 hover:underline"
              >
                GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
