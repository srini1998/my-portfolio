import { experiences, type Experience as ExperienceType } from "@/lib/data";

function TimelineItem({ exp }: { exp: ExperienceType }) {
  return (
    <div className="relative pl-8">
      <span
        className={`absolute left-0 top-2 h-3 w-3 rounded-full border-2 ${
          exp.active
            ? "border-racing bg-racing shadow-[0_0_10px_2px_rgba(230,0,0,0.5)]"
            : "border-asphalt-500 bg-asphalt-800"
        }`}
      />
      <span className="absolute left-[5px] top-4 h-full w-px bg-asphalt-600" />

      <div className="mb-8 rounded border border-asphalt-600 bg-asphalt-800 p-6 transition-colors hover:border-asphalt-500">
        <div className="mb-1">
          <h3 className="font-semibold text-white">{exp.role}</h3>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-racing">{exp.company}</p>
        <p className="mb-4 mt-0.5 font-mono text-xs text-silver-200">
          {exp.period} · {exp.location}
        </p>
        <ul className="space-y-2">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-silver-100">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-racing" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2
        className="sector-line mb-10 text-3xl font-bold uppercase tracking-wider text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Experience
      </h2>
      <div>
        {experiences.map((exp) => (
          <TimelineItem key={`${exp.company}-${exp.period}`} exp={exp} />
        ))}
      </div>
    </section>
  );
}
