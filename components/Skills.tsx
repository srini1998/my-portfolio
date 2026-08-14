import { skills } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealTile } from "@/components/RevealTile";

function slug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export function Skills() {
  return (
    <section className="section-light relative flex min-h-full flex-col justify-center py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader index={1} title="Technical Stack" invert />
          <span className="mb-8 font-mono text-xs uppercase tracking-widest text-carbon-900/50 md:mb-10">
            {skills.length} categories_
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {skills.map((group) => (
            <RevealTile key={group.category}>
              <div className="flex flex-col rounded-3xl border border-carbon-900/10 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-racing-dark/40 hover:shadow-glow-dark md:p-10">
                <h3 className="mb-6 font-mono text-2xl font-semibold lowercase tracking-tight text-racing-dark md:text-3xl">
                  {slug(group.category)}
                </h3>
                <div className="flex flex-1 flex-wrap content-start gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      data-cursor="expand"
                      className="
                        inline-flex cursor-default items-center rounded-full
                        border border-carbon-900/15 bg-white
                        px-4 py-2
                        font-mono text-xs font-medium text-carbon-900/80 md:text-sm
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:scale-110
                        hover:border-racing-dark hover:bg-racing-dark/[0.05]
                        hover:shadow-glow-dark-sm
                        hover:text-racing-dark
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealTile>
          ))}
        </div>
      </div>
    </section>
  );
}
