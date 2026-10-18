# Srinivas Venigalla — Engineering portfolio

[Open the portfolio](https://my-portfolio-three-omega-46.vercel.app)

A seven-chapter folder interface: Cover, Contents, About, Work, Process, Words and Contact. Eighteen projects, newest builds first, with direct product/source links and separate case studies that explain the job, data, verification and limits. English by default, Japanese toggle, light/dark themes, reduced-motion support and mobile layouts.

## Featured products

| Product | Try it | What it does |
|---|---|---|
| Signalworks | [Metric contract checker](https://signalworks-check.vercel.app) | Checks actual pasted metric output; full six-module Grafana/Prometheus/Alloy lab runs locally |
| Fieldbrief | [Live incident map](https://fieldbrief-xi.vercel.app) | Groups official public reports and drafts an optional on-device briefing; citation checks are not truth checks |
| Pair Bench | [Python workbench](https://pairbench.vercel.app) | Browser model drafts code; real Pyodide exercise checks provide independent feedback |
| Current | [Model release rehearsal](https://current-ml.vercel.app) | Trains a classifier on historical electricity data, gates promotion and supports rollback |
| Answer Key | [Prompt comparison](https://answerkey-lab.vercel.app) | Same model/questions, two prompts, human-reference F1 and abstention checks |
| Crosscut | [Data comparison](https://crosscut-data.vercel.app) | Bounded Phi-style grouped queries on public penguin measurements, checked independently with DuckDB-WASM |
| Breakroom | [Supabase workflows](https://breakroom-dusky.vercel.app) | Six practical applications with saved evidence; fresh backend experiments require local services |
| PocketOps | [Browser approval sandbox](https://pocketops-lab.vercel.app) | Review/approve a real sample repair; actual workspace operations use the local runner |
| Neon Expedition | [Learning arena](https://neon-expedition-lab.vercel.app) | Real tabular Q-learning in a browser worker, with explicit same-map evaluation |

The other systems and research archives are in the project cabinet. Source access and verified scope are stated individually. The portfolio itself makes no inference requests. Linked browser AI sites explicitly download pretrained Gemma3 1B weights; those results are separate from recorded local Qwen studies. No paid inference API is required.

## Run locally

Node20.9 or newer (tested locally on Node26).

```sh
npm ci
npm run dev
```

```sh
npm run type-check
npm run lint
npm run build
npm run start
```

Next16.4.2 / React19, native CSS with existing Tailwind tooling, self-hosted OFL fonts and GSAP entrance motion. The build uses Next’s supported Webpack mode so restricted local compiler IPC does not prevent production builds. The original folder-tab reference inspired the visual structure; the implementation is original. No paid template assets.

## Evidence and boundaries

Build/types and scoped entrypoint lint pass. Chrome checks cover all seven chapters,18 projects, ordering/filtering, language/theme reload persistence,390px layouts and nine featured direct case routes. The runtime advisory snapshot reports0 vulnerabilities; remaining development-tool advisories are documented. This is not a full security audit or proof of hiring readiness.

- [Components, evaluation and limits](docs/phase2-websites.md)
- [Runtime dependency advisory snapshot](docs/runtime-dependency-audit.json)
- [Browser verification](docs/browser-results.json)

Actual outputs, independent checks and negative results are more useful than unmeasured claims. Technical case evidence remains in its original English with a notice when the Japanese interface is selected. Existing user source/history and owner-private Sites previews were preserved. Soul Link was handled separately and is not modified by this work.
