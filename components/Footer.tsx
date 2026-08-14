import { contact } from "@/lib/data";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#about" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: `mailto:${contact.email}` },
      { label: "LinkedIn ↗", href: contact.linkedin },
      { label: "GitHub ↗", href: contact.github ?? "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-asphalt-600 bg-carbon-950 py-14 md:py-20">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-silver-400">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-display text-sm font-medium text-silver-100 transition-colors hover:text-racing"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-2">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-silver-400">Currently</p>
            <p className="font-display text-sm font-medium text-silver-100">Open to Work</p>
            <p className="mt-2.5 font-display text-sm font-medium text-silver-100">{contact.location}</p>
            <p className="mt-2.5 font-display text-sm font-medium text-silver-100">MS CS · Stevens Institute of Technology</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-asphalt-700 pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-silver-400">
            © {new Date().getFullYear()} Krishna Sai Srinivas Venigalla · Built with Next.js + Tailwind
          </p>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-widest text-silver-400 transition-colors hover:text-racing"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
