export function About() {
  return (
    <section id="about" className="py-20">
      <h2
        className="sector-line mb-10 text-3xl font-bold uppercase tracking-wider text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Education
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded border border-asphalt-600 bg-asphalt-800 p-6 transition-colors hover:border-racing/50">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-semibold text-white">Stevens Institute of Technology</h3>
            <span className="font-mono text-xs text-silver-200">2024 – 2026</span>
          </div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-racing">
            MS Computer Science · Graduated Jan 2026
          </p>
          <p className="mb-1 font-mono text-xs text-silver-200">Hoboken, NJ</p>
          <p className="mt-4 text-sm leading-relaxed text-silver-100">
            Advanced coursework in Artificial Intelligence, Machine Learning, Deep Learning,
            and Database Systems. Contributing to the NDIF research framework under Prof. Hao Wang,
            focusing on empirical analysis of large-scale LLM traces. Bridging theory with
            scalable engineering across model robustness, NLP pipelines, and database systems.
          </p>
        </div>
        <div className="rounded border border-asphalt-600 bg-asphalt-800 p-6 transition-colors hover:border-racing/50">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-semibold text-white">Gitam University</h3>
            <span className="font-mono text-xs text-silver-200">2016 – 2020</span>
          </div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-racing">
            B.Tech Computer Science
          </p>
          <p className="mb-1 font-mono text-xs text-silver-200">Visakhapatnam, India</p>
          <p className="mt-4 text-sm leading-relaxed text-silver-100">
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
