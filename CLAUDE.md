# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Template base:** Flexy-Dev portfolio template structure

## Dev Commands

```bash
npm run dev       # start local dev server (http://localhost:3000)
npm run build     # production build
npm run lint      # ESLint
npm run type-check # tsc --noEmit
```

## Architecture

This is a single-page personal portfolio for Krishna Sai Srinivas Venigalla. All sections live on one scrollable page (`app/page.tsx`), with each section as a standalone component under `components/`.

### Key sections (in order)
1. **Hero** — name, tagline, CTA links (resume, LinkedIn, GitHub)
2. **About** — Stevens MS CS (Jan 2026) + 4 years Accenture backend engineering
3. **Experience** — timeline: Accenture (Aug 2020–Jul 2024), Stevens RA (May–Aug 2025), Inspire Infosol internship
4. **Projects** — 4 cards: Job Agent, Crisis AI, Finance Analyst, AR Game
5. **Skills** — grouped by category (Languages, Frameworks, Tools, Concepts)
6. **Contact** — email + social links

### Data layer
All content (experience, projects, skills) is defined in `lib/data.ts` as typed constants — components are purely presentational and receive data as props. Never hardcode content inside components.

### Project cards schema
```ts
type Project = {
  title: string;
  description: string;
  tags: string[];       // tech stack badges
  github?: string;
  demo?: string;
  image?: string;
};
```

## Conventions

- Components use named exports, not default exports, except for Next.js pages/layouts.
- All colors and spacing go through Tailwind classes — no inline styles.
- Dark mode is supported via Tailwind's `dark:` variant; default theme is dark.
- Keep `lib/data.ts` as the single source of truth for resume content.
