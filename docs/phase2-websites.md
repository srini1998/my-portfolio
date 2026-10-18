# Product websites and portfolio — Phase 2

Each website puts the task and useful output first. Traces remain secondary. Public pages use free browser computation and explicit model downloads, not paid inference APIs. Existing local experiment backends remain available from source.

| Product | What a visitor does | Data and computation | Verification and limits |
|---|---|---|---|
| Fieldbrief | Inspect recent/active incidents and draft a short briefing | USGS, GDACS, NASA EONET, NWS feeds; Gemma3 1B on-device | Citation/numeric/alert checks, not semantic truth; not an official warning service |
| Pair Bench | Edit/generate a Python function and run exercise checks | MIT HumanEval164, Gemma planner/coder/reviewer, Pyodide314.0.7 worker | Actual good/bad function tests;15s execution deadline. Tests are inspectable, not secret; worker is not a hostile-code sandbox |
| Current | Train a challenger, review a gate, promote or roll back | Elec2/OpenML151,45312 historical rows; browser logistic regression | Chronological training/validation; future-label independence checked. Exploratory historical classification, not market forecasting |
| Answer Key | Compare two prompts using the same model/questions | SQuAD2 CC BY-SA4 sample; Gemma3 1B | Exact match/token F1/abstention vs human answers. Live2–10 item sample is not statistically powered; recorded150-item Qwen study is separate |
| Crosscut | Group measurements, ask for a query, download a summary | CC0 palmerpenguins344 observations; bounded TS Phi port + DuckDB-WASM1.32 | Two actual independent SQL comparisons passed; strict query schema; bounded subset of full Python MF/EMF |
| Signalworks | Paste metrics and check a declared contract | Public PromLabs demo telemetry or local pasted exposition; optional Gemma explanation | Parser/type/labels/exposed-series checks. Units, ingested cardinality and alert behavior require separate local experiments |
| Breakroom | Explore six practical Supabase workflows and saved results | Attributed public snapshots; actual local Supabase/worker behind recorded public projection | Fresh backend operations run locally. Public current-source snapshot excludes old history/private run archives |

## Components

New product sites: Vite8, React19, TypeScript7, Tailwind4 tooling, self-hosted Geist/Geist Mono/Noto Sans JP, GSAP entrance animation respecting reduced motion, Phosphor icons, and MIT ThreeUI Community components imported individually. Each has its own visual identity: CRT coding bench, electricity release desk, answer book, graph-paper comparison tool, and observability checker. The portfolio uses Next16.4.2/React19 and a new original seven-chapter folder interface inspired by the user-provided21st.dev reference. No paid template assets are used.

Browser AI: pretrained open-weight Gemma3 1B q4 via transformers.js4.3.1 in a Web Worker. No fine-tuning or custom foundation-model training was performed. The public model download is explicit (~860MB) and inference stays on the visitor's device. Actual WebGPU generation was verified for every new product action; WASM is a compatibility path, not a separately benchmarked quality claim. Model text can be wrong and never overrides the deterministic check.

Recorded local studies use Qwen2.5 3B/Ollama and separate pinned local services. Their numbers do not describe the new browser model. Current trains a small classifier and Neon trains tabular Q policies; these are distinct from the pretrained language model.

## Portfolio verification

Seven chapters;18 projects; newest-built ordering starts Signalworks,Fieldbrief,Pair Bench,Current,Answer Key,Crosscut,Breakroom,PocketOps,Neon. English default/Japanese toggle, light/dark, direct case links, filters, reduced motion and390px layout checked in Chrome. Technical case evidence remains in its original English with explicit notice when Japanese is selected. Research archives are labeled unreproduced. No invented testimonials or unmeasured hiring-readiness claims.

This is evidence for an engineering conversation, not proof of a hiring outcome or a promise that Supabase/Grafana will adopt these products. Be prepared to explain tradeoffs, reproduce a failure and modify the code yourself. One focused upstream contribution with a reproducible case study remains a useful next step.

## Framework maintenance

The portfolio’s previous Next14 line still had a critical runtime advisory after patching, so the app was migrated with the official async-request codemod and an intermediate Next15 build before Next16.4.2. Case-route params are asynchronous, lint uses the ESLint9 flat configuration, and saved preferences wait for hydration before storage writes. Framework build/types/lint and browser flows were rechecked. An advisory scan is not a full security audit.

## Check scope

The final production-dependency advisory scan reports0 vulnerabilities; the broader development-tool scan still reports9 (2moderate/7high) in the existing CSS/lint toolchain. No forced major dependency replacement was applied. This is not a clean-all-dependencies or full security-audit claim. The redesigned entrypoint is linted with zero warnings; unused legacy component sources are preserved but not represented as newly audited.

## Independent public-source CI

Breakroom reviewed source snapshot4fd371c passed42/42 checks with0skips in the full disposable-Supabase GitHub workflow: https://github.com/srini1998/breakroom-workbench/actions/runs/39102029017. Additional Auth/isolation/restart/erasure/import/Realtime workflow steps also completed. This differs from the local no-env export suite (41pass/1environment-gated skip). The original private history was preserved; no force-push occurred.

Public optional demos: https://pocketops-lab.vercel.app and https://neon-expedition-lab.vercel.app. The existing Sites audiences were preserved. PocketOps browser mode uses a deterministic registered task router, not a trained coding model; real workspace work requires its local runner. Neon performs real browser Q-learning with explicit same-map evaluation.

Production builds explicitly use Next’s supported Webpack mode. Turbopack succeeded on Vercel, but a later local compiler cache miss could not open its worker IPC port inside the agent’s restricted environment. The Webpack build preserves the patched framework and avoids that environment-specific compiler dependency.
