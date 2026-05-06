export function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="mb-10 text-3xl font-bold text-gray-50">About</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <h3 className="text-lg font-semibold text-gray-100">
              Stevens Institute of Technology
            </h3>
          </div>
          <p className="mb-1 font-mono text-sm text-violet-400">
            MS Computer Science · Graduated Jan 2026
          </p>
          <p className="mb-1 text-sm text-gray-500">Sep 2024 – Jan 2026 · Hoboken, NJ</p>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Advanced coursework in Artificial Intelligence, Machine Learning, Deep Learning,
            and Database Systems. Contributing to the NDIF research framework under Prof. Hao Wang,
            focusing on empirical analysis of large-scale LLM traces. Bridging theory with
            scalable engineering across model robustness, NLP pipelines, and database systems.
          </p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <h3 className="text-lg font-semibold text-gray-100">Gitam University</h3>
          </div>
          <p className="mb-1 font-mono text-sm text-violet-400">
            B.Tech Computer Science
          </p>
          <p className="mb-1 text-sm text-gray-500">Jun 2016 – Jun 2020 · Visakhapatnam, India</p>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Strong foundation in data structures, OOP, and database systems. Final-year project:
            music recommendation using RNNs on the KKBOX dataset. Secured 2nd place in a
            24-hour state-level coding challenge. IEEE Student Branch member and Code Hackathon
            problem designer.
          </p>
        </div>
      </div>
    </section>
  );
}
