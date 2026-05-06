import { contact } from "@/lib/data";

export function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center py-24 text-center">
      <p className="mb-4 font-mono text-sm text-violet-400">
        MS Computer Science · Stevens Institute of Technology
      </p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-50 sm:text-6xl">
        Krishna Sai Srinivas
        <br />
        <span className="text-violet-400">Venigalla</span>
      </h1>
      <p className="mb-3 max-w-2xl text-xl text-gray-400">
        AI/ML Engineer · LLM Researcher · Backend Specialist
      </p>
      <p className="mb-10 max-w-xl text-gray-500">
        4 years building production systems at Accenture · Currently researching
        large-scale LLM traces at Stevens
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#experience"
          className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700"
        >
          See My Work
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-violet-500 hover:text-violet-400"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-violet-500 hover:text-violet-400"
        >
          Email Me
        </a>
      </div>

      {/* Quick stats */}
      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-800 pt-12">
        {[
          { value: "4 yrs", label: "Industry Experience" },
          { value: "Stevens", label: "MS Computer Science" },
          { value: "Jan 2026", label: "Graduated" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-bold text-violet-400">{value}</p>
            <p className="mt-1 text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
