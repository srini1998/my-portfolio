/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation prevents stale cached case content on browser Back. */
import type { Project } from "@/lib/data";
import { presentation, rankedProjects } from "@/lib/project-presentation";
import { FoldPhoneHero } from "./FoldPhoneHero";
import { ProjectPreview } from "./ProjectPreview";
export function ProjectCase({ project: p }: { project: Project }) {
  const v = presentation(p.title);
  return (
    <FoldPhoneHero initiallyOpen>
      <div className="case-page" id="work">
        <header className="site-header">
          <a className="wordmark" href="/">
            SV<span> / ENGINEER</span>
          </a>
          <a href="/#folders">More project folders ↗</a>
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
            <ProjectPreview title={p.title} />
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
          <a href="/#work">← Back to projects</a>
          <span>SV / 2026</span>
        </footer>
      </div>
    </FoldPhoneHero>
  );
}
