import { contact } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm font-medium text-violet-400">
          krishna<span className="text-gray-500">.dev</span>
        </span>
        <ul className="flex items-center gap-6 text-sm text-gray-400">
          {["Experience", "Projects", "Roadmap", "Skills", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-violet-400"
                >
                  {item}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-violet-600 px-3 py-1.5 text-violet-400 transition-colors hover:bg-violet-600 hover:text-white"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
