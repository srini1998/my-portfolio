# Srinivas Venigalla — Software engineering portfolio

[Open the portfolio](https://my-portfolio-three-omega-46.vercel.app)

An English-only, black-and-white portfolio inspired by Foldfolio: a persistent phone frame with scroll-driven opening, content and closing, oversized type, original technical artwork and actual working-product screenshots. Home, Work, Folders, About and Contact live in a floating device dock. Five featured projects lead with their description before the screenshot; thirteen more appear as interactive glass folders immediately below them on the same page. Older /archive links redirect to /#folders. All eighteen projects are ordered by implemented engineering scope and difficulty, with source links and case pages explaining the problem, an example, the data, the checks and the limitations.

## Try the projects

| Project | Main experience |
|---|---|
| [Breakroom](https://breakroom-dusky.vercel.app) | Six Supabase use cases with searchable real source examples and separately recorded database evidence |
| [Signalworks](https://signalworks-check.vercel.app) | Actual Steam player counts, metric checks and a deliberately broken-label scenario |
| [Pair Bench](https://pairbench.vercel.app) | Recorded single/team AI drafts and real browser Python tests |
| [Current](https://current-ml.vercel.app) | Train on real soccer seasons; compare, activate and roll back a small model |
| [Fieldbrief](https://fieldbrief-xi.vercel.app) | Destination search across official hazard reports and immediate source briefs |
| [Crosscut](https://crosscut-data.vercel.app) | Soccer statistics with home/away splits and independent DuckDB SQL checks |
| [PocketOps](https://pocketops-lab.vercel.app) | Find a checkout bug, approve the exact repair and rerun its tests |
| [Answer Key](https://answerkey-lab.vercel.app) | Travel reading questions and reproducible scoring of actual saved AI answers |
| [Neon Expedition](https://neon-expedition-lab.vercel.app) | Train small game agents in the browser and evaluate their learned routes |

No main task asks visitors to download AI weights. Current and Neon actually train small models in the browser. Recorded AI outputs, deterministic operations and optional cloud generation are labeled separately. Free cloud adapters are disabled until a quota-limited provider account is explicitly connected. No paid API, key, billing setup or paid fallback is configured.

## Run locally

Node20.9 or newer (tested on Node26).

```sh
npm ci
npm run dev
npm run type-check
npm run lint
npm run build
npm run start
```

Next16 / React19, native CSS with existing Tailwind tooling, self-hosted Geist fonts, SVG artwork and local lazy-loaded interface captures. Local screenshots use no image-processing service. Production uses Next's supported Webpack build. No paid template assets.

## Verification

The complete phone flow is checked in actual Chrome at1440px,390px and320px: persistent framed scrolling, a single-intro opening/closing/reversing reveal, dock/deep links, five description-first features, thirteen inline interactive folders, keyboard/Escape, filters, form validation, reduced-motion and no-JavaScript fallback. All18case routes preserve data, checks and limitations. Browser test from the parent My-Projects workspace: `node delivery/check-phone-fold.mjs` (Playwright runtime in the existing sibling supa1 workspace).

The misleading appearance/finish controls, placeholder introduction, overlapping status text and redundant sections were removed. The dock now reserves its own space. Additional workflow audit: `node delivery/check-portfolio-integration.mjs` from the parent workspace.

The contact form opens a draft in your email app; the website stores or sends nothing. Optional cloud AI remains disabled and deferred. Linked products retain their independent workflow checks. Historical research archives remain clearly labeled.

[Third-party component attribution](THIRD_PARTY_NOTICES.md): supplied Glassmorphism Folder Cards by Kedhareswer Naidu, MIT. No paid assets or additional dependency were introduced.

[Current interface and execution boundaries](docs/current-interface.md). Earlier phase2 documentation records the prior interface and historical experiments, not the current presentation.
