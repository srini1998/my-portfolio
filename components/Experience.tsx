import { experiences, type Experience as ExperienceType } from "@/lib/data";

function TimelineItem({ exp }: { exp: ExperienceType }) {
  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          exp.active
            ? "border-violet-400 bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.5)]"
            : "border-gray-600 bg-gray-800"
        }`}
      />
      {/* Vertical line */}
      <span className="absolute left-[5px] top-4 h-full w-px bg-gray-800" />

      <div className="mb-10 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <h3 className="font-semibold text-gray-100">{exp.role}</h3>
          {exp.active && (
            <span className="rounded-full bg-violet-900/60 px-2.5 py-0.5 text-xs font-medium text-violet-300">
              Active
            </span>
          )}
        </div>
        <p className="mb-0.5 font-medium text-violet-400">{exp.company}</p>
        <p className="mb-4 font-mono text-xs text-gray-500">
          {exp.period} · {exp.location}
        </p>
        <ul className="space-y-1.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
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
      <h2 className="mb-10 text-3xl font-bold text-gray-50">Experience</h2>
      <div>
        {experiences.map((exp) => (
          <TimelineItem key={`${exp.company}-${exp.period}`} exp={exp} />
        ))}
      </div>
    </section>
  );
}
