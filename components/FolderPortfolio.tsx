import Link from "next/link";
import { contact, experiences } from "@/lib/data";
import { rankedProjects, presentation } from "@/lib/project-presentation";
import { slugify } from "@/lib/project-language";
import { ContactForm } from "./ContactForm";
import { FoldPhoneHero } from "./FoldPhoneHero";
import { TechnicalArt } from "./TechnicalArt";
import { ProjectPreview } from "./ProjectPreview";

export function FolderPortfolio() {
  return (
    <FoldPhoneHero closeAtEnd>
      <section className="screen-intro" id="home">
        <div className="intro-copy">
          <p className="eyebrow">SOFTWARE ENGINEER / JERSEY CITY, NJ</p>
          <div>
            <h1>
              Srinivas
              <br />
              Venigalla.
            </h1>
            <p>
              I build tools that make complicated systems easier to use and
              trust.
            </p>
            <div className="intro-links">
              <a href="#work">See the work ↗</a>
              <a href="#contact">Say hello</a>
            </div>
          </div>
        </div>
        <div className="intro-art" aria-hidden="true">
          <TechnicalArt kind="model" />
          <span>BACKEND · AI · DATA SYSTEMS</span>
        </div>
      </section>
      <section className="numbers-strip" aria-label="The collection in numbers">
        <p className="eyebrow">A FEW WAYS INTO THE WORK</p>
        <div>
          {[
            [String(rankedProjects.length), "PROJECTS IN THE COLLECTION"],
            [
              String(rankedProjects.filter((p) => p.demo).length).padStart(
                2,
                "0",
              ),
              "INTERACTIVE DEMOS",
            ],
            ["05", "FEATURED SYSTEMS"],
          ].map(([value, label]) => (
            <p key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </p>
          ))}
        </div>
      </section>
      <section className="selected-work" id="work">
        <div className="screen-section-heading">
          <h2>Selected work.</h2>
          <Link href="/archive">13 more projects ↗</Link>
        </div>
        <div className="featured-list">
          {rankedProjects.slice(0, 5).map((p, index) => {
            const v = presentation(p.title);
            return (
              <article className="featured-project" key={p.title}>
                <div className="featured-copy">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="eyebrow">{v.category}</p>
                    <Link href={`/projects/${slugify(p.title)}`}>
                      <h3>{v.name}</h3>
                    </Link>
                    <p>{v.summary}</p>
                    <div className="project-links">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer">
                          Try the project ↗
                        </a>
                      )}
                      <Link href={`/projects/${slugify(p.title)}`}>
                        Read the case ↗
                      </Link>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer">
                          Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/projects/${slugify(p.title)}`}
                  className="featured-image"
                  aria-label={`Explore ${v.name}`}
                >
                  <ProjectPreview title={p.title} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="archive-invitation">
        <p className="eyebrow">THERE’S MORE IN THE FOLDERS</p>
        <h2>
          Open a different
          <br />
          kind of problem.
        </h2>
        <p>
          Football statistics, game agents, developer tools and research.
          Thirteen more projects, each with its own story and source.
        </p>
        <Link href="/archive">Open the project folders ↗</Link>
      </section>
      <section className="screen-about" id="about">
        <p className="eyebrow">THE ENGINEER BEHIND THE SYSTEMS</p>
        <h2>
          A builder.
          <br />
          Always curious.
        </h2>
        <div className="about-columns">
          <p>
            I’m Srinivas, a software engineer working across backend systems, AI
            and data. I spent four years at Accenture and studied computer
            science at Stevens Institute of Technology.
          </p>
          <p>
            Outside code: sports, anime, travel, movies and gaming. You’ll find
            that curiosity in the football models, travel tools and game agents
            in this collection.
          </p>
        </div>
        <div className="capabilities">
          {[
            [
              "Backend systems",
              "APIs, databases and tools that handle failures and repeated requests.",
            ],
            [
              "Machine learning",
              "Small models trained on real data, with results you can check.",
            ],
            [
              "Data engineering",
              "From raw records to useful answers, with sources and independent checks.",
            ],
          ].map(([name, description], i) => (
            <div key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="experience-list">
          {experiences.map((e) => (
            <div key={e.company}>
              <span>{e.period}</span>
              <h3>{e.role}</h3>
              <p>{e.company}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="screen-contact" id="contact">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>
          Let’s build
          <br />
          what’s next.
        </h2>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          Send me an email ↗
        </a>
        <div className="contact-links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <span>{contact.location}</span>
        </div>
        <ContactForm />
        <footer>
          <span>SRINIVAS VENIGALLA / 2026</span>
          <a href="#top">Back to the start ↑</a>
        </footer>
      </section>
    </FoldPhoneHero>
  );
}
