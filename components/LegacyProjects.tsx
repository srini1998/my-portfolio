import { legacyProjects } from "@/lib/data";

export function LegacyProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-10">
        <h2
          className="sector-line text-3xl font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Technical Deep-Dives
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-silver-200">
          Completed research &amp; engineering projects
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {legacyProjects.map((project) => (
          <div
            key={project.title}
            className="rounded border border-asphalt-600 bg-asphalt-800 p-6 transition-colors hover:border-racing/50"
          >
            {/* Header */}
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3
                  className="text-xl font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-silver-100">{project.description}</p>
              </div>
              <span className="shrink-0 rounded border border-emerald-700/50 bg-emerald-900/20 px-2.5 py-0.5 font-mono text-xs uppercase tracking-widest text-emerald-400">
                Completed
              </span>
            </div>

            {/* Bullet deep-dive */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="mb-5 space-y-2 border-t border-asphalt-600 pt-4">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-silver-100">
                    <span className="mt-[7px] h-px w-5 shrink-0 bg-racing" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-asphalt-500 bg-carbon-800 px-2.5 py-1 font-mono text-xs text-silver-100"
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
                className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-racing hover:underline"
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
