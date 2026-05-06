import { contact } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-asphalt-600 bg-carbon-900/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-mono text-xs font-medium tracking-widest text-silver-300 uppercase">
          VENIGALLA<span className="text-racing ml-1">.</span>DEV
        </span>
        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-silver-400">
          {[
            { label: "Skills",    href: "#skills"      },
            { label: "Projects",  href: "#projects"    },
            { label: "Roadmap",   href: "#roadmap"     },
            { label: "Experience",href: "#experience"  },
            { label: "Education", href: "#about"       },
            { label: "Contact",   href: "#contact"     },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="transition-colors hover:text-racing">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-racing px-3 py-1.5 text-racing transition-colors hover:bg-racing hover:text-white"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
