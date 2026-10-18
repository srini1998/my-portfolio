"use client";
import Link from "next/link";
import { useState } from "react";
import { contact, experiences } from "@/lib/data";
import { rankedProjects, presentation } from "@/lib/project-presentation";
import { slugify } from "@/lib/project-language";
import { TechnicalArt } from "./TechnicalArt";
export function FolderPortfolio() {
  const [filter, setFilter] = useState("All");
  const projects = rankedProjects.filter(
    (p) =>
      filter === "All" ||
      (filter === "Live demos" ? !!p.demo : p.status === "archive"),
  );
  return (
    <div className="portfolio">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top">
          SV<span> / ENGINEER</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Let’s talk ↗</a>
        </nav>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="hero-label">
            <span>AI · BACKEND · DATA SYSTEMS</span>
            <span>JERSEY CITY, NJ</span>
          </div>
          <h1>
            <span>SRINIVAS</span>
            <span>VENIGALLA</span>
          </h1>
          <div className="device">
            <div className="device-top">
              <span>HELLO, WORLD.</span>
              <span>01 / SV</span>
            </div>
            <div className="device-intro">
              Software engineer.
              <br />
              Curious about what’s next.
            </div>
            <TechnicalArt kind="model" />
            <div className="device-notices">
              <a href="#work">
                <span className="notice-icon">{"{ }"}</span>
                <span>
                  Systems that do real work<small>EXPLORE THE PROJECTS ↗</small>
                </span>
              </a>
              <a href="#about">
                <span className="notice-icon">↗</span>
                <span>
                  From backend to machine learning
                  <small>MEET THE ENGINEER</small>
                </span>
              </a>
            </div>
            <a className="unfold" href="#work">
              Scroll to explore ↓
            </a>
          </div>
          <div className="hero-bottom">
            <p>
              I build tools that make complicated
              <br />
              systems easier to use and trust.
            </p>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Built to do
                <br />
                something useful.
              </h2>
            </div>
            <div className="work-controls">
              <p>
                Ordered by engineering scope and difficulty.
                <br />
                Integrated systems first; research archives last.
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
            </div>
          </div>
          <div className="project-list">
            {projects.map((p) => {
              const v = presentation(p.title),
                rank = rankedProjects.indexOf(p) + 1;
              return (
                <article
                  className={"project " + (rank > 9 ? "project-compact" : "")}
                  key={p.title}
                >
                  <Link
                    href={"/projects/" + slugify(p.title)}
                    className="project-art"
                    aria-label={"Explore " + v.name}
                  >
                    <TechnicalArt kind={v.visual} />
                    <span className="art-caption">
                      {v.category}
                      <span>↗</span>
                    </span>
                  </Link>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>
                        {String(rank).padStart(2, "0")} / {v.category}
                      </span>
                      <span>
                        {p.status === "archive"
                          ? "Research archive"
                          : p.demo
                            ? "Interactive demo"
                            : "Source project"}
                      </span>
                    </div>
                    <Link href={"/projects/" + slugify(p.title)}>
                      <h3>{v.name}</h3>
                    </Link>
                    <p>{v.summary}</p>
                    <div className="project-tags">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer">
                          Try the project ↗
                        </a>
                      )}
                      <Link href={"/projects/" + slugify(p.title)}>
                        Read the case ↗
                      </Link>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer">
                          Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="about-section" id="about">
          <p className="eyebrow">02 / ABOUT</p>
          <div className="about-grid">
            <h2>
              A builder.
              <br />A problem solver.
              <br />
              Always learning.
            </h2>
            <div>
              <p className="about-intro">
                I’m Srinivas, a software engineer working across backend
                systems, AI and data. I spent four years at Accenture and
                studied computer science at Stevens Institute of Technology.
              </p>
              <p>
                My interests go beyond code: sports, anime, travel, movies and
                gaming. I like projects where that curiosity turns into
                something people can actually use.
              </p>
              <div className="experience-list">
                {experiences.map((e) => (
                  <div key={e.company}>
                    <span>{e.period}</span>
                    <h3>{e.role}</h3>
                    <p>{e.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <p className="eyebrow">03 / CONTACT</p>
          <h2>
            Let’s build
            <br />
            what’s next.
          </h2>
          <a className="email-link" href={"mailto:" + contact.email}>
            Send me an email ↗
          </a>
          <div className="contact-links">
            <a href={contact.github}>GitHub ↗</a>
            <a href={contact.linkedin}>LinkedIn ↗</a>
            <span>{contact.location}</span>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>SRINIVAS VENIGALLA / 2026</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
