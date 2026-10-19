"use client";
import { useEffect, useRef, useState } from "react";
import { rankedProjects, presentation } from "@/lib/project-presentation";
import { slugify } from "@/lib/project-language";
import GlassFolder from "./ui/glass-folder-cards";

export function ProjectFolders() {
  const [filter, setFilter] = useState("All");
  const grid = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(240);
  useEffect(() => {
    const el = grid.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const item = el.firstElementChild;
      if (item) setWidth(Math.min(360, item.getBoundingClientRect().width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const projects = rankedProjects
    .slice(5)
    .filter(
      (p) =>
        filter === "All" ||
        (filter === "Live demos" ? !!p.demo : p.status === "archive"),
    );
  return (
    <section className="project-archive" id="folders">
      <p className="eyebrow">06—18 / THE REST OF THE COLLECTION</p>
      <h2>More projects.</h2>
      <p className="archive-deck">
        More systems to explore. Open a folder for the case study, a working
        demo when available, and the code behind it.
      </p>
      <p className="archive-help">
        Hover to lean. Click or press Enter to open. Escape to close.
      </p>
      <div className="filters" aria-label="Filter projects">
        {["All", "Live demos", "Research"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="folder-count" role="status">
        {projects.length} project{projects.length === 1 ? "" : "s"}
      </p>
      <div className="folder-grid" ref={grid}>
        {projects.map((p) => {
          const v = presentation(p.title),
            slug = slugify(p.title),
            rank = rankedProjects.indexOf(p) + 1;
          const image =
            rank <= 9 ? `/previews/${slug}.png` : "/folder-circuit.svg";
          return (
            <article className="project-folder" key={p.title}>
              <GlassFolder
                label={v.name}
                meta={v.summary}
                art="none"
                image={image}
                action="none"
                appear={false}
                width={width}
                files={[
                  {
                    name: "Case study",
                    meta:
                      p.status === "archive"
                        ? "Research archive"
                        : "Problem · data · checks",
                    href: `/projects/${slug}`,
                    image,
                  },
                  ...(p.demo
                    ? [
                        {
                          name: "Live demo",
                          meta: "Open the working project",
                          href: p.demo,
                          image,
                        },
                      ]
                    : []),
                  ...(p.github
                    ? [
                        {
                          name: "Source code",
                          meta: "Repository and setup",
                          href: p.github,
                        },
                      ]
                    : []),
                ]}
              />
              <div className="folder-caption">
                <span>
                  {String(rank).padStart(2, "0")} / {v.category}
                </span>
                <a href={`/projects/${slug}`}>Read the case ↗</a>
              </div>
            </article>
          );
        })}
      </div>
      <a className="archive-back" href="#work">
        ← Back to the five featured projects
      </a>
    </section>
  );
}
