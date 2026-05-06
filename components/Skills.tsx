import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="mb-10 text-3xl font-bold text-gray-50">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-gray-800 bg-gray-900 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-violet-600 hover:text-violet-300"
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
