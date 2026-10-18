import Link from "next/link";
import type { Project } from "@/lib/data";
import { presentation, rankedProjects } from "@/lib/project-presentation";
import { TechnicalArt } from "./TechnicalArt";
export function ProjectCase({ project: p }: { project: Project }) {
  const v = presentation(p.title);
  return (
    <main className="case-page">
      <header className="site-header">
        <Link className="wordmark" href="/">
          SV<span> / ENGINEER</span>
        </Link>
        <Link href="/#work">All projects ↗</Link>
      </header>
      <section className="case-hero">
        <div>
          <p className="eyebrow">
            {String(rankedProjects.indexOf(p) + 1).padStart(2, "0")} /{" "}
            {v.category}
          </p>
          <h1>{v.name}</h1>
          <p className="case-deck">{v.summary}</p>
          <div className="project-links">
            {p.demo && (
              <a className="case-primary" href={p.demo}>
                Try the project ↗
              </a>
            )}
            {p.github && <a href={p.github}>View source ↗</a>}
          </div>
        </div>
        <div className="case-art">
          <TechnicalArt kind={v.visual} />
        </div>
      </section>
      <p className="access-note">
        {p.access ??
          "Source project. See the repository for setup instructions."}
      </p>
      <div className="case-sections">
        {[
          ["What it helps with", p.problem],
          ["Try this example", p.example],
          ["Data and model", p.dataSource],
          ["How I checked it", p.verification],
          ["Current limitations", p.limitations],
        ].map(([label, value]) => (
          <section key={label}>
            <h2>{label}</h2>
            <p>
              {value ?? "See the linked source for implementation details."}
            </p>
          </section>
        ))}
      </div>
      <section className="case-components">
        <h2>Built with</h2>
        <div className="project-tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <Link href="/#work">← Back to projects</Link>
        <span>SV / 2026</span>
      </footer>
    </main>
  );
}
