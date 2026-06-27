import { legacyProjects } from "@/lib/data";
import { ScrambleText } from "@/components/ScrambleText";

export function LegacyProjects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mb-8 md:mb-10">
        <h2
          className="sector-line text-2xl font-bold uppercase tracking-wider text-white md:text-3xl"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <ScrambleText text="AI, ML & Systems Projects" />
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-silver-200">
          Production AI systems · Infrastructure · Research
        </p>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        {legacyProjects.map((project) => (
          <div
            key={project.title}
            className="rounded border border-asphalt-600 bg-asphalt-800 p-5 transition-colors hover:border-racing/50 md:p-6"
          >
            {/* Header — stacks on mobile, side-by-side on sm+ */}
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <div className="flex-1">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-white md:text-xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-silver-100">{project.description}</p>
              </div>
              <span className="shrink-0 self-start rounded border border-emerald-700/50 bg-emerald-900/20 px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-emerald-400">
                Completed
              </span>
            </div>

            {/* Bullet deep-dive */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="mb-5 space-y-2.5 border-t border-asphalt-600 pt-4">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-silver-100">
                    <span className="mt-[9px] h-px w-5 shrink-0 bg-racing" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Tags — larger py for thumb tap */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-asphalt-500 bg-carbon-800 px-3 py-2 font-mono text-xs text-silver-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs uppercase tracking-widest text-racing hover:underline"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-400 hover:underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
