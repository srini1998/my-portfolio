import { legacyProjects } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealText } from "@/components/RevealText";

export function LegacyProjects() {
  return (
    <section className="relative flex min-h-full flex-col justify-center py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <SectionHeader
          index={2}
          title="AI, ML & Systems Projects"
          subtitle="Production AI systems · Infrastructure · Research"
        />

        <div className="border-b border-t border-asphalt-600">
          {legacyProjects.map((project, i) => (
            <div
              key={project.title}
              className="group -mx-5 grid grid-cols-1 gap-4 border-t border-asphalt-600 px-5 py-8 transition-colors duration-300 first:border-t-0 hover:bg-asphalt-800/30 sm:-mx-8 sm:grid-cols-12 sm:gap-6 sm:px-8 md:py-10 lg:-mx-16 lg:px-16"
            >
              <div className="sm:col-span-3">
                <span className="font-mono text-4xl font-bold text-asphalt-500 transition-colors duration-300 group-hover:text-white md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 flex flex-wrap gap-4 sm:flex-col sm:gap-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-racing hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-emerald-400 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    <RevealText text={project.title} />
                  </h3>
                  <span className="shrink-0 rounded-full border border-emerald-700/50 bg-emerald-900/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    ● Shipped
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-silver-100 md:text-base">{project.description}</p>

                {project.bullets && project.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm leading-relaxed text-silver-200">
                        <span className="mt-[9px] h-px w-5 shrink-0 bg-racing" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-asphalt-500 bg-carbon-800 px-3 py-1.5 font-mono text-[11px] text-silver-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
