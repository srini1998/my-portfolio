# Srinivas Venigalla — Software engineering portfolio

[Open the portfolio](https://my-portfolio-three-omega-46.vercel.app)

An English-only, black-and-white portfolio inspired by Foldfolio: a scroll-controlled folding phone, oversized type, original technical artwork and actual working-product screenshots. Work, About and Contact. Eighteen projects are ordered by implemented engineering scope and difficulty, with source links and case pages explaining the problem, an example, the data, the checks and the limitations.

## Try the projects

| Project | Main experience |
|---|---|
| [Breakroom](https://breakroom-dusky.vercel.app) | Six Supabase use cases with searchable real source examples and separately recorded database evidence |
| [Signalworks](https://signalworks-check.vercel.app) | Actual Steam player counts, metric checks and a deliberately broken-label scenario |
| [Pair Bench](https://pairbench.vercel.app) | Recorded single/team AI drafts and real browser Python tests |
| [Current](https://current-ml.vercel.app) | Train on real football seasons; compare, activate and roll back a small model |
| [Fieldbrief](https://fieldbrief-xi.vercel.app) | Destination search across official hazard reports and immediate source briefs |
| [Crosscut](https://crosscut-data.vercel.app) | Football statistics with home/away splits and independent DuckDB SQL checks |
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

The folding hero is checked at1440px,390px and320px for opening, closing, working links, fitting text and no overflow, plus reduced-motion and JavaScript-disabled navigation. Production browser checks cover all18case routes,9loaded preview images, filtering, complexity ordering, desktop/390px, English-only and zero page errors. Linked products have separate actual end-to-end checks for their calculations, learning, replay, approvals, queries and live data requests. Historical research archives are labeled explicitly; tests do not establish unrestricted production readiness.

[Current interface and execution boundaries](docs/current-interface.md). Earlier phase2 documentation records the prior interface and historical experiments, not the current presentation.
