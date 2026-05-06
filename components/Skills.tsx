import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2
        className="sector-line mb-10 text-3xl font-bold uppercase tracking-wider text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Technical Stack
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded border border-asphalt-600 bg-asphalt-800 p-6"
          >
            {/* Category label — Racing Red accent */}
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-racing">
              {group.category}
            </h3>

            {/* Tag grid — auto-fill so tags stretch to fill the row */}
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className="
                    flex cursor-default items-center justify-center rounded
                    border border-silver-300/40 bg-carbon-800
                    px-3 py-2 text-center
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
