import { skills } from "@/lib/data";
import { ScrambleText } from "@/components/ScrambleText";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <h2
        className="sector-line mb-8 text-2xl font-bold uppercase tracking-wider text-white md:mb-10 md:text-3xl"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        <ScrambleText text="Technical Stack" />
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded border border-asphalt-600 bg-asphalt-800 p-5 md:p-6"
          >
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-racing">
              {group.category}
            </h3>

            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  data-cursor="expand"
                  className="
                    flex cursor-default items-center justify-center rounded
                    border border-silver-300/40 bg-carbon-800
                    px-3 py-3 text-center
                    font-mono text-xs font-medium text-silver-100
                    transition-all duration-300
                    hover:border-racing hover:bg-racing/[0.06]
                    hover:shadow-[0_0_12px_rgba(225,6,0,0.35)]
                    hover:text-white
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
