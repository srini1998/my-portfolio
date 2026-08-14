import { experiences, type Experience as ExperienceType } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

function TimelineItem({ exp, index }: { exp: ExperienceType; index: number }) {
  return (
    <div className="group -mx-5 grid grid-cols-1 gap-3 border-t border-asphalt-600 px-5 py-8 transition-colors duration-300 hover:bg-asphalt-800/30 sm:-mx-8 sm:grid-cols-12 sm:gap-6 sm:px-8 md:py-10 lg:-mx-16 lg:px-16">
      <div className="sm:col-span-3">
        <span className="font-mono text-5xl font-bold text-asphalt-500 transition-colors duration-300 group-hover:text-white md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-silver-300">
          {exp.period}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-silver-400">
          {exp.location}
        </p>
        {exp.active && (
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-racing/50 bg-racing/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-racing">
            <span className="h-1.5 w-1.5 rounded-full bg-racing" />
            Current
          </span>
        )}
      </div>

      <div className="sm:col-span-9">
        <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{exp.role}</h3>
        <p className="mt-1 font-mono text-sm uppercase tracking-widest text-racing">{exp.company}</p>
        <ul className="mt-5 space-y-3">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-silver-100 md:text-base">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-racing" />
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
    <section className="relative flex min-h-full flex-col justify-center py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <SectionHeader index={4} title="Experience" />
        <div className="border-b border-asphalt-600">
          {experiences.map((exp, i) => (
            <TimelineItem key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
