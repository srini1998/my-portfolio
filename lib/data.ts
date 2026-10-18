export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  active?: boolean;
};

export type Project = {
  title: string;
  description: string;
  bullets?: string[];
  tags: string[];
  github?: string;
  demo?: string;
  status: "live" | "local" | "archive" | "soon";
  access?: string;
  problem?: string;
  example?: string;
  verification?: string;
  limitations?: string;
  dataSource?: string;
  comingSoonLabel?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const experiences: Experience[] = [
  {
    role: "Research Assistant",
    company: "Stevens Institute of Technology",
    period: "May 2025 – Aug 2025",
    location: "Hoboken, NJ, USA",
    active: false,
    bullets: [
      "Worked under Prof. Hao Wang on the NDIF research project — empirical analysis of large-scale LLM model traces.",
      "Collected, organized, and analyzed trace data to extract meaningful performance metrics.",
      "Prepared research documentation and evaluations to support the NDIF framework.",
    ],
  },
  {
    role: "Software Engineering Analyst",
    company: "Accenture Pvt. Ltd.",
    period: "Aug 2020 – Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Led backend engineering for clients in education and retail, delivering scalable solutions under strict deadlines.",
      "Designed and deployed robust backend systems using Java EE and Python, improving reliability and scalability.",
      "Built automated UI/API test suites with Selenium and BDD-Cucumber, significantly reducing manual QA effort.",
      "Built data-driven features that enhanced user experience and operational efficiency.",
      "Collaborated in Agile teams on backend systems and automated testing frameworks.",
    ],
  },
  {
    role: "Intern",
    company: "Inspire Infosol Pvt. Ltd.",
    period: "May 2019 – Jun 2019",
    location: "Hyderabad, India",
    bullets: [
      "Designed and developed a career recommendation chatbot to assist students in identifying interest-aligned career paths.",
    ],
  },
];

export const legacyProjects: Project[] = [
  {
    title: "Breakroom · Supabase reliability suite",
    description:
      "Six separate practical applications: tenant permissions, retry-safe rentals, owned-data cleanup, reviewed CSV imports, crafting races and Realtime transport checks. Each explains the real-world job and separates saved evidence from fresh experiments.",
    bullets: [
      "Actual local Supabase Auth, PostgREST, Postgres, Storage and Realtime; no custom model training.",
      "Public USGS, Citi Bike, GitHub, UCI retail and Minetest recipe facts with explicit simulation limits.",
      "42 regression checks plus six desktop/mobile workflows; Policy Passport compares declared permissions against actual ordinary-session RLS behavior.",
    ],
    tags: [
      "Supabase",
      "TypeScript",
      "React",
      "Postgres",
      "Realtime",
      "Local Ollama",
    ],
    github: "https://github.com/srini1998/breakroom-workbench",
    demo: "https://breakroom-dusky.vercel.app",
    status: "live",
    access:
      "Public reviewed source snapshot · recorded-evidence site · fresh backend experiments run locally",
    problem:
      "A feature can work in a happy path while permission changes, retries, concurrent writes or delayed jobs break important guarantees.",
    example:
      "A rental checkout arrives twice: the saved receipt must reduce available stock once. A policy candidate must not let one team read another team’s records.",
    verification:
      "Public-source GitHub CI42/42 pass with0 skips on disposable Supabase; actual API/Storage/concurrency checks and six desktop/mobile browser flows. The small real-data Realtime model run passed; an earlier full live workload was inconclusive due coordinator delay.",
    limitations:
      "Fresh experiments require the local worker and real services. The public static profile is recorded evidence. The public page explores the saved source dataset; it does not execute new database experiments.",
    dataSource:
      "Attributed public snapshots plus clearly labeled fictional teams/accounts/player balances.",
  },
  {
    title: "LLM Evaluation Harness",
    description:
      "A regression gate for LLM features: paired, item-level comparison with bootstrap confidence intervals on a balanced SQuAD v2 sample (half the questions unanswerable), plus a calibrated local LLM judge.",
    bullets: [
      "Caught a plausible prompt 'simplification' that dropped the abstention rule: F1 −0.33 (95% CI −0.42 to −0.25), abstention −0.61.",
      "Calibrated the judge against human answers: passage-only 3B judge κ = 0.04 (approves 95% of wrong answers); reference-guided κ = 0.72.",
      "CI re-scores committed runs deterministically, so the gate needs no model or API key.",
    ],
    tags: [
      "LLM evaluation",
      "LLM-as-judge",
      "Bootstrap CI",
      "FastAPI",
      "Ollama",
      "GitHub Actions",
    ],
    github: "https://github.com/srini1998/llm-eval-harness",
    status: "local",
    access: "Public source · local Ollama qwen2.5:3b, no paid API",
    problem:
      "Prompt or model changes can quietly degrade grounded answers, and an LLM judge that 'looks fine' may be grading at chance.",
    example:
      "A teammate removes 'reply unanswerable if the passage doesn't say' to shorten the prompt; answers to unanswerable questions become confident fabrications and the gate fails the change.",
    dataSource:
      "150-item seeded, checksum-pinned subset of the SQuAD v2.0 dev set (CC BY-SA 4.0); local qwen2.5:3b as system and judge.",
    verification:
      "Recorded runs and gate report in the repo; 6 unit/API tests; eval-gate workflow asserts the baseline passes against itself and the known regression fails.",
    limitations:
      "150 items and one 3B model; the judge and system share a model; lexical support is a proxy for groundedness.",
  },
  {
    title: "Multi-Agent Code Generation System",
    description:
      "Planner → Coder → Reviewer roles with a local model, measured against single-shot generation and execution-feedback revisions on HumanEval. Agents see only the prompt and its docstring examples; hidden tests are used only by an independent checker in an isolated container.",
    bullets: [
      "All 164 HumanEval tasks, regraded in an isolated container: single coder 65.2%, execution feedback 64.6%, planner/coder/reviewer 54.9%.",
      "The multi-role loop was measurably worse (−10.4 pts, 95% CI −18.3 to −2.4) at 6.6× the model calls: it fixed 14 tasks and broke 31.",
      "Review hardened the sandbox from a host profile to an offline, read-only, unprivileged container.",
    ],
    tags: [
      "Multi-agent",
      "Code generation",
      "HumanEval",
      "Sandboxing",
      "Ollama",
      "Python",
    ],
    github: "https://github.com/srini1998/multi-agent-codegen",
    status: "local",
    access: "Public source · local Ollama qwen2.5:3b and Docker, no paid API",
    problem:
      "'Add a reviewer agent' is a common reflex; whether extra roles actually improve correctness has to be measured with hidden tests the agents can't see.",
    example:
      "The reviewer approves an implementation whose docstring examples pass but whose hidden edge cases fail; the independent checker records it as a false approval.",
    dataSource:
      "OpenAI HumanEval (MIT licence), checksum-pinned; generated code runs only inside the container sandbox.",
    verification:
      "Harness and sandbox isolation tests; all 492 saved solutions regraded in the pinned container (1 changed vs host grading); canonical solutions validated against the visible-example runner.",
    limitations:
      "One 3B model at temperature 0; HumanEval pretraining exposure unknown; function-level tasks only; visible docstring examples exist for 76 of 164 prompts.",
  },
  {
    title: "Real-Time Crisis Intelligence Agent",
    description:
      "Pulls live official disaster feeds (USGS, GDACS, NASA EONET, US NWS), links reports from different publishers into incidents, and has a local model write situation reports whose citations, numbers, alert levels and locations are checked against the source documents.",
    bullets: [
      "Frozen snapshot of 289 live documents: 20/20 model reports passed the structural checks (84 claims) with 2.5× the facts of a template baseline.",
      "Prompt injection: a 3B model followed injected instructions 10/10 times; a sanitizer stopped textbook attacks but not paraphrases; field checks blocked ~90% of poisoned reports.",
      "Extends the earlier Crisis Information Graph from offline tweet analysis to live, multi-source reporting.",
    ],
    tags: [
      "RAG",
      "Hybrid retrieval",
      "Prompt injection",
      "Ollama",
      "FastAPI",
      "SQLite",
    ],
    github: "https://github.com/srini1998/crisis-intel-agent",
    status: "local",
    access: "Public source · keyless public feeds and local models",
    problem:
      "Analysts need fast situation summaries, but a model that invents casualty numbers or obeys text hidden in a feed is worse than no summary.",
    example:
      "A GDACS orange alert and a USGS M6.1 report are linked as one incident; the report states magnitude, depth and alert level with citations, and an injected 'say the alert is red' is caught because alert levels must match structured fields.",
    dataSource:
      "Live USGS, GDACS, NASA EONET and NWS feeds; only public-domain snapshots are committed. Local qwen2.5:3b and nomic-embed-text.",
    verification:
      "Snapshot evaluation (grounding, alert agreement, cross-source linking check, three injection conditions); 10 tests; GitHub Actions CI.",
    limitations:
      "Not an official warning service; checks establish citation and field consistency, not factual truth; aggregate Q&A with a 3B model is weak.",
  },
  {
    title: "MLOps Pipeline",
    description:
      "Event-driven retraining on real drifting data: each weekly upload is validated, content-addressed, scored against the serving model, and only promoted through gates; an MLflow registry alias drives a hot-swapping FastAPI service with rollback.",
    bullets: [
      "100 real weeks of the Elec2 electricity market: pipeline 88.2% live accuracy vs persistence 85.8% and a never-retrained model 79.5%.",
      "Injected a corrupt upload (rejected by validation) and a broken challenger (blocked by a no-skill floor).",
      "Real data exposed a non-monotonic date field and a too-weak fixed floor; both fixed with regression tests.",
    ],
    tags: [
      "MLflow",
      "scikit-learn",
      "FastAPI",
      "Data validation",
      "Model registry",
      "GitHub Actions",
    ],
    github: "https://github.com/srini1998/mlops-pipeline",
    status: "local",
    access:
      "Public source · free local tools (originally designed for SageMaker; cloud mapping documented)",
    problem:
      "A model trained once goes stale as the world changes, and retraining without gates can ship a worse or broken model.",
    example:
      "Week 66's challenger is trained on misaligned labels; its holdout accuracy is below the majority-class floor, so it never serves and the champion stays.",
    dataSource:
      "Elec2 (Harries 1999; Gama), OpenML #151, licence 'Public' — 45,312 half-hour records replayed one week per upload.",
    verification:
      "11 pytest tests; 100-week simulation report; CI replays 20 real weeks and asserts both injected faults are caught.",
    limitations:
      "Single machine; the trigger polls a directory instead of receiving S3 events; per-week gate decisions use a 2-day holdout and are noisy.",
  },
  {
    title: "PocketOps",
    description:
      "Review and approve a bounded laptop task from a phone: inspect files, check syntax, run existing Node tests or review the supported pricing repair. A hosted browser sandbox is separate from real laptop execution.",
    bullets: [
      "Actual local Node runner with pairing authentication and workspace/path boundaries.",
      "Approvals bind the exact action and reviewed test-file hashes, expire, and reject changed files.",
      "Real failing tests, reviewed repair and passing tests verified; desktop/mobile browser demonstration checked.",
    ],
    tags: ["Node.js", "Local task runner", "Exact approvals", "Phone UI"],
    github: "https://github.com/srini1998/pocketops",
    demo: "https://pocketops.sriniusvenigalla.chatgpt.site",
    status: "local",
    access:
      "Public source · owner-private Sites preview · local runner for real workspace actions",
    problem:
      "Remote task buttons should not execute an unseen or changed action on a laptop.",
    example:
      "Review the exact pricing diff, approve it, and rerun the existing tests. Editing a test after review invalidates execution.",
    verification:
      "Real runner integration checks and browser sandbox/mobile approval flow pass. Actual source restored into GitHub from the Site.",
    limitations:
      "Trusted workspace only; local HTTP is not encrypted and Node tests have OS permissions. No internet relay or general coding agent.",
    dataSource:
      "Included authored pricing fixture or your explicitly selected trusted workspace.",
  },
  {
    title: "Neon Expedition",
    description:
      "Play a small dungeon, train three tabular Q-learning navigation policies in a browser worker, and compare greedy rollouts with the shortest valid route.",
    bullets: [
      "Three authored maps, key possession in the state, four movement actions and explicit rewards.",
      "Actual worker training; 30/30 same-map evaluation wins for all nine trained map/profile combinations in the test run.",
      "Atomic policy import validation rejects invalid counters, histories, parameters and agent identities.",
    ],
    tags: ["Reinforcement learning", "Q learning", "Three.js", "Web Workers"],
    github: "https://github.com/srini1998/neon-expedition",
    demo: "https://neon-expedition.sriniusvenigalla.chatgpt.site",
    status: "local",
    access: "Public source · owner-private Sites arena · on-device Q-learning",
    problem:
      "Show what a learning agent actually learns, rather than animating a scripted route and calling it AI.",
    example:
      "Start with empty Q tables, train on one mission, disable exploration, and compare path length with an independent breadth-first route.",
    verification:
      "Actual learning, collision, import rejection and restoration checks pass; browser worker training and 390px mobile flow pass.",
    limitations:
      "Repeated same-map/same-start evaluation. No unseen-map or general intelligence claim. Laptop graphics performance varies.",
    dataSource:
      "Three original authored maps and seeded local episodes; no external training dataset.",
  },
  {
    title: "Ad-Hoc OLAP Query Engine",
    description:
      "Evaluates Multi-Feature and Extended Multi-Feature (Phi operator) queries over PostgreSQL without using GROUP BY: it streams the table through a server-side cursor into an in-memory mf-structure, one scan per dependency level, and can emit a standalone Python program for any query.",
    bullets: [
      "Recursive-descent predicate parser with SQL three-valued logic; nothing is passed to eval, and generated programs embed literals only as string constants.",
      "Shifted equality keys (e.g. 1.month = month - 1) become hash indexes; dependency levels between grouping variables are planned automatically.",
      "8/8 queries agree across interpreter, generated program and hand-written SQL at 10k and 200k rows; 300 random queries match a naive reference.",
    ],
    tags: ["PostgreSQL", "Python", "OLAP", "Query engines", "Code generation"],
    github: "https://github.com/srini1998/adhoc-olap-engine",
    status: "local",
    access:
      "Public source · verified on local PostgreSQL 14 and PostgreSQL 17 in CI",
    problem:
      "Comparing several differently filtered aggregates per group (NY vs NJ vs CT averages per customer, last month vs next month) needs nested SQL joins; the Phi operator states it directly.",
    example:
      "Per product and month, count sales whose quantity lies between the previous and the following month's averages: three grouping variables, two scans, verified against an equivalent SQL query.",
    dataSource:
      "Deterministic synthetic sales table in the classic coursework schema (seeded generator), not real sales data.",
    verification:
      "17 pytest tests incl. a 300-query differential test vs a naive reference and a negative control; olap verify compares interpreter, generated program and hand-written SQL (8/8 at 10k and 200k rows); GitHub Actions CI with a Postgres service.",
    limitations:
      "Single table, count/sum/avg/min/max; the mf-structure must fit in memory. PostgreSQL's own SQL is 10–100× faster on simple queries; the gap closes on correlated sub-query shapes.",
  },
  {
    title: "LLM Code Review Assistant",
    description:
      "A local-model diff review tool with structured suggestions and explicit failure reporting. Provider errors never turn into canned findings; human review remains necessary.",
    bullets: [
      "Free profile calls local Ollama; explicit fixture mode is reserved for adapter tests.",
      "GitHub Actions workflow posts/updates a single structured comment per PR — no duplicate spam.",
      "Quality gate fails CI on critical issues; configurable --fail-on severity flag for pipeline integration.",
      "JSON, markdown and terminal outputs identify fixture versus local-model mode. The reviewed suite has 16 passing checks.",
    ],
    tags: ["Claude API", "LLM", "Python", "GitHub Actions", "FastAPI"],
    github: "https://github.com/srini1998/llm-code-review-assistant",
    status: "local",
  },
  {
    title: "CI Pipeline Optimizer",
    description:
      "Analyzes GitHub Actions pipelines to surface slow jobs, flaky tests, and parallelization wins. Fetches live run data directly from the GitHub API and generates ASCII Gantt timelines.",
    bullets: [
      "Dependency-chain timing from observed job averages; invalid cycles and unknown dependencies fail explicitly.",
      "Mixed-outcome heuristic highlights candidates for investigation; it does not establish nondeterministic test flakiness.",
      "GitHub API integration (stdlib urllib, zero extra deps) — works without local JSON files.",
      "ASCII timelines and caching/sharding suggestions; 43 passing checks include invalid dependency graphs.",
    ],
    tags: ["Python", "FastAPI", "GitHub Actions", "CI/CD", "Graph Algorithms"],
    github: "https://github.com/srini1998/ci-pipeline-optimizer",
    status: "local",
  },
  {
    title: "Distributed API Gateway",
    description:
      "Weighted round-robin load balancer with circuit breaker, rate limiting, and live HTTP proxying. Handles backend failures automatically via CLOSED → OPEN → HALF_OPEN recovery.",
    bullets: [
      "Circuit breaker with configurable failure threshold and recovery probe interval.",
      "Live HTTP proxy to real backends via httpx with hop-by-hop header stripping.",
      "30 tests including async proxy tests using httpx.MockTransport for network-level injection.",
    ],
    tags: ["Python", "FastAPI", "httpx", "Circuit Breaker", "Load Balancing"],
    github: "https://github.com/srini1998/api-gateway",
    status: "local",
  },
  {
    title: "Redis Rate Limiter",
    description:
      "Redis-backed limiter with four Lua-script algorithms, bounded inputs and distinct sliding-window receipts for requests sharing a timestamp.",
    bullets: [
      "Token Bucket, Fixed Window, Leaky Bucket, and Sliding Window (ZSET-based) algorithms.",
      "Lua scripts update each algorithm atomically; UUID receipts avoid collisions when timestamps match.",
      "25 passing checks use fakeredis/Lua, including same-clock request accounting. Real Redis deployment verification remains separate.",
    ],
    tags: ["Redis", "Lua", "Python", "FastAPI", "Distributed Systems"],
    github: "https://github.com/srini1998/redis-rate-limiter",
    status: "local",
  },
  {
    title: "RAG Q&A Pipeline",
    description:
      "Retrieve source excerpts with TF-IDF by default, or explicitly use local Ollama generation. Chunk validation rejects non-progressing windows and provider failures do not become canned answers.",
    bullets: [
      "Dense retrieval via all-MiniLM-L6-v2 (384-dim); normalized dot-product = cosine similarity.",
      "Auto-detects sentence-transformers availability; graceful TF-IDF fallback keeps CI green without PyTorch.",
      "Source attribution and optional local generation. 24 passing checks; lexical overlap is labeled as a heuristic, not factuality proof.",
    ],
    tags: ["RAG", "Claude API", "Sentence Transformers", "Python", "FastAPI"],
    github: "https://github.com/srini1998/rag-pipeline",
    status: "local",
  },
  {
    title: "Music Recommender Engine",
    description:
      "Rating prediction using biased matrix factorization trained by stochastic gradient descent, plus content similarity. New-user catalog ordering is explicitly labeled as a fallback.",
    bullets: [
      "SGD learns user/item factors and biases from declared ratings; this implementation does not use SVD decomposition.",
      "Cosine similarity item-based fallback activates automatically for new users with no history.",
      "REST API with /recommend, /similar, and /stats endpoints; 13 tests passing.",
    ],
    tags: ["Python", "NumPy", "SVD", "Collaborative Filtering", "FastAPI"],
    github: "https://github.com/srini1998/music-recommender-engine",
    status: "local",
  },
  {
    title: "Real-Time OLAP Dashboard",
    description:
      "SQLite sales analytics with grouped queries and running totals. Parameter-bound filters, immutable event receipts and atomic batches protect the supported import/query workflow.",
    bullets: [
      "SQLite star schema and SQL window functions; PostgreSQL is a future adapter, not a verified deployed backend.",
      "Supported revenue, order, distinct-user and average-value queries with declared dimensions and time windows.",
      "16 passing checks include query injection rejection and complete rollback of a conflicting batch.",
    ],
    tags: ["Python", "FastAPI", "Streaming", "OLAP", "Window Functions"],
    github: "https://github.com/srini1998/olap-analytics-dashboard",
    status: "local",
  },
  {
    title: "Crisis Information Graph",
    github: "https://github.com/srini1998/CrisisInfo",
    description:
      "NLP pipeline to classify crisis tweets and extract structured entities for emergency response visualization.",
    bullets: [
      "Classified crisis-related tweets from the MDM dataset using CNN, BERT, and traditional ML baselines.",
      "Performed Named Entity Recognition (NER) to extract locations, people, and organizations.",
      "Benchmarked BERT against CNN and TF-IDF classifiers across accuracy, F1, and inference speed.",
      "Built a Flask web app to visualize extracted entity graphs for real-time emergency response use.",
    ],
    tags: ["BERT", "CNN", "NLP", "NER", "Python", "Flask"],
    status: "local",
  },
  {
    title: "Securing Image Classifiers from Adversarial Attacks",
    github: "https://github.com/srini1998/AdversarialTraining",
    description:
      "Adversarial robustness study on ResNet-18 trained on CIFAR-100, with a full adversarial training defense pipeline.",
    bullets: [
      "Studied PGD (Projected Gradient Descent) adversarial attacks on a ResNet-18 / CIFAR-100 baseline.",
      "Implemented adversarial training loop using PyTorch and Torchattacks library.",
      "Measured accuracy degradation under attack vs. defended model across multiple epsilon budgets.",
      "Historical research work; reproduced training/evaluation evidence is not yet attached to this portfolio review.",
    ],
    tags: [
      "PyTorch",
      "ResNet-18",
      "CIFAR-100",
      "Adversarial ML",
      "Torchattacks",
    ],
    status: "local",
  },
];

export const roadmapProjects: Project[] = [];

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    items: [
      "Claude API",
      "LLM Evaluation",
      "RAG",
      "Sentence Transformers",
      "PyTorch",
      "BERT",
      "Hugging Face",
      "LangGraph",
      "scikit-learn",
      "SVD / Collaborative Filtering",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Infrastructure & Backend",
    items: [
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
      "AWS",
      "CI/CD",
      "Java EE",
    ],
  },
  {
    category: "Concepts",
    items: [
      "LLM Inference Optimization",
      "Distributed Systems",
      "Rate Limiting",
      "Circuit Breaker",
      "NLP",
      "Computer Vision",
      "OLAP",
    ],
  },
];

export const contact = {
  email: "sriniusvenigalla@gmail.com",
  linkedin: "https://linkedin.com/in/srinivas-venigalla-skywalker",
  github: "https://github.com/srini1998",
  location: "Jersey City, NJ, USA",
};

const reviewNotes: Record<string, Partial<Project>> = {
  "Distributed API Gateway": {
    problem:
      "A failing backend should stop normal traffic while a single recovery probe checks its health.",
    example:
      "Trip the circuit, allow one half-open request, and reject a second until completion. /api must not match /apiary.",
    dataSource: "Authored requests and injected local transport failures.",
    verification:
      "32 passing checks, including asynchronous proxy errors, one outstanding recovery probe and route boundaries.",
    limitations:
      "In-process state. MockTransport checks are not a production load or multi-process benchmark.",
  },
  "CI Pipeline Optimizer": {
    problem:
      "Explain CI duration with dependencies and observed timings; do not equate mixed outcomes with proven flakiness.",
    example:
      "Compare supported test/build chains. Reject cycles and missing dependencies explicitly.",
    dataSource:
      "Authored workflow/run-history fixtures; optional read-only GitHub ingestion.",
    verification:
      "43 passing checks include invalid graphs and GitHub response adapters.",
    limitations:
      "Average-duration critical path and mixed-outcome heuristic; no guaranteed savings or proof of nondeterministic failures.",
  },
  "LLM Code Review Assistant": {
    problem:
      "A provider outage must not produce a convincing canned review unrelated to submitted code.",
    example:
      "Submit a bounded diff to local Ollama. Invalid/unavailable responses fail explicitly. Critical findings prevent approval.",
    dataSource:
      "Operator diffs; explicitly labeled fixed fixtures for adapter tests.",
    verification:
      "16 passing checks include provider error without fixture substitution and approval gating. No independent model-quality benchmark.",
    limitations:
      "Human review required. Scores are not correctness probabilities. No hosted API billing in this profile.",
  },
  "Redis Rate Limiter": {
    problem:
      "Requests can share a timestamp; timestamp-only sorted-set members can undercount traffic.",
    example:
      "Twelve same-clock requests against capacity three must allow exactly three, with distinct UUID receipts.",
    dataSource: "Authored identifiers and controlled clocks.",
    verification:
      "25 passing fakeredis/Lua checks including same-clock accounting and invalid token requests.",
    limitations:
      "Actual Redis deployment and multi-node/network-failure checks remain separate. Lua atomicity is not a universal safety guarantee.",
  },
  "RAG Q&A Pipeline": {
    problem:
      "Keep source excerpts distinct from generated prose; invalid chunk settings must not hang ingestion.",
    example:
      "Retrieve cited excerpts, or explicitly select local generation. Provider failure returns an error, not a canned answer.",
    dataSource: "Operator documents and authored corpus; no model training.",
    verification:
      "24 passing checks cover retrieval, invalid windows, actual source excerpts and local-provider errors.",
    limitations:
      "Lexical overlap is a heuristic, not factuality proof. Dense embeddings and local-model answer quality require separate evaluation.",
  },
  "Music Recommender Engine": {
    problem:
      "Tell users when a recommendation has preference evidence versus catalog ordering.",
    example:
      "Fit finite 1–5 ratings with SGD, exclude heard tracks, and label the new-user fallback.",
    dataSource: "Authored catalog and ratings, not real listening history.",
    verification:
      "14 passing model/similarity checks; no held-out ranking or user study claimed.",
    limitations:
      "Biased matrix factorization with SGD, not SVD decomposition. Catalog order is not measured popularity.",
  },
  "Real-Time OLAP Dashboard": {
    problem:
      "Repeated events must not rewrite past sales; conflicting batches must not partially commit.",
    example:
      "Retry a receipt without double counting. Reject a conflicting ID and roll back all new rows; bind query filter values.",
    dataSource:
      "Authored commerce events in SQLite, not a live PostgreSQL feed.",
    verification:
      "16 passing checks include SQL injection rejection, immutable receipts, batch rollback and running totals.",
    limitations:
      "Supported grouped/windowed SQLite queries. Prior percentile/sliding-window/PostgreSQL claims did not match the code and were removed.",
  },
  "Crisis Information Graph": {
    problem:
      "Extract crisis-text categories/entities with explicit model and dataset limits.",
    example:
      "Inspect the historical classification/entity pipeline source archive.",
    dataSource:
      "Historical research repository; dataset licensing and reproducible evaluation still need review.",
    verification:
      "Source located. Training, inference and historical scores have not been reproduced in this review.",
    limitations:
      "Research archive, not a live emergency-response system or newly verified accuracy result.",
  },
  "Securing Image Classifiers from Adversarial Attacks": {
    problem:
      "Clean accuracy alone does not show behavior under a declared perturbation.",
    example:
      "Compare baseline/defense over the same epsilon budget, split and weights.",
    dataSource:
      "Historical CIFAR-100 research repository; source and weights require fresh verification.",
    verification: "Source located; fresh attack/training evaluation pending.",
    limitations:
      "Research archive. Removed unsupported defense-improvement claim until reproducible evidence exists.",
  },
};
for (const project of legacyProjects) {
  Object.assign(project, reviewNotes[project.title] || {});
  if (
    [
      "Crisis Information Graph",
      "Securing Image Classifiers from Adversarial Attacks",
    ].includes(project.title)
  )
    project.status = "archive";
}

// Phase 2: live end-user websites, distinct from the underlying local experiment backends.
const phaseTwo: Record<string, Partial<Project>> = {
  "Real-Time Crisis Intelligence Agent": {
    tags: ["TypeScript", "React", "MapLibre", "Official feeds", "Python"],
    demo: "https://fieldbrief-xi.vercel.app",
    status: "live",
    access:
      "Live official feeds \u00b7 immediate source summaries \u00b7 no model download",
    description:
      "Search recent hazard reports for a destination and read the agency sources in one place.",
    problem:
      "A traveler may need to check earthquakes, fires and weather across several official sites. A fluent summary should not hide where the information came from.",
    example:
      "Search for a place such as California. Select a report, read the published alert level and copy a brief with its source links. An empty search explicitly does not mean the destination is safe.",
    dataSource:
      "Direct USGS, GDACS, NASA EONET and NWS feeds, each with its own date range. The current public brief uses structured fields and a deterministic template, not a generative model. The Python agent and historical model experiments remain in the source.",
    verification:
      "Actual browser retrieval showed 60 visible reports; destination search, no-match behavior, source summary, English-only and mobile checks passed. Six citation/number checks include a counterexample proving those checks do not establish semantic truth.",
    limitations:
      "Not an official warning or destination safety service. Agency coverage and feeds can be incomplete or unavailable. Grouping is heuristic; source summaries are not custom-trained AI.",
  },
  "Multi-Agent Code Generation System": {
    tags: ["Python", "HumanEval", "Pyodide", "Docker", "TypeScript"],
    demo: "https://pairbench.vercel.app",
    status: "live",
    access:
      "Instant recorded AI drafts \u00b7 real browser Python checks \u00b7 optional cloud generation not connected",
    description:
      "Compare actual single-coder and team-generated Python solutions against the same real tests.",
    problem:
      "Adding more AI roles can make a coding assistant slower and less accurate. An impressive conversation is weaker evidence than code that passes the same independent checks.",
    example:
      "Choose a HumanEval exercise, load a real saved coder or team draft, edit it and run the Python tests. Deliberately break the function to see the checks fail. Nothing executes just because a model proposed it.",
    dataSource:
      "164 MIT HumanEval tasks and actual frozen Qwen 2.5 3B drafts. Recorded single/team outputs load immediately. Fresh generation has a separate quota-limited free-cloud adapter, disabled until a provider account is connected; no key or billing is configured.",
    verification:
      "Original offline 164-task regrade: single coder 107/164, feedback 106/164, team 90/164, with unequal call budgets disclosed. The current site passed actual Pyodide positive/negative tests, draft loading, edit invalidation and mobile checks. Hosted checks are distinct from the hardened local Docker harness.",
    limitations:
      "The drafts are recorded, not new generations. Public tests are inspectable and do not prove production correctness. Browser Python is not a hardened malicious-code sandbox. A team used more model calls, so the saved comparison is not an equal-budget experiment.",
  },
  "MLOps Pipeline": {
    tags: [
      "TypeScript",
      "Logistic regression",
      "MLflow",
      "Python",
      "Chronological evaluation",
    ],
    demo: "https://current-ml.vercel.app",
    status: "live",
    access:
      "Actual football model training \u00b7 validation and later test \u00b7 original electricity lab available",
    description:
      "Train models on earlier football seasons and decide which one earns the next release.",
    problem:
      "More training data does not automatically justify replacing a model. Release decisions need a held-out comparison, an explicit threshold and a way back.",
    example:
      "Train a challenger on three Premier League seasons and compare it with a model trained on one. The default gate rejects a tiny probability improvement. An exploratory zero-margin setting lets you activate it, reveal a later match result and roll back.",
    dataSource:
      "1,520 CC0 OpenFootball Premier League matches, 2021/22\u20132024/25. Four logistic-regression weights use pre-match Elo and last-five-match form. Actual fitting happens in the browser; no LLM is needed. The original Elec2 browser lab remains at /electricity and Python/MLflow experiments remain in the source.",
    verification:
      "380 vs 1,140 training matches; 188 later validation and 192 subsequent test matches. Future-label independence, same-date feature isolation, overlap rejection and strict-gate checks pass. Later-test accuracy is 60.94% vs 63.54%; this is an exploratory historical result. Actual browser train/reject/activate/rollback flows pass.",
    limitations:
      "Historical replay, not live predictions or betting advice. The small model omits lineups, injuries and odds; probabilities are not calibrated. Default Brier improvement 0.00014 is below the required 0.005, so it correctly stays unreleased. Repeated exploration is not a locked benchmark.",
  },
  "LLM Evaluation Harness": {
    tags: [
      "TypeScript",
      "SQuAD v2",
      "Reference metrics",
      "Python",
      "Prompt evaluation",
    ],
    demo: "https://answerkey-lab.vercel.app",
    status: "live",
    access:
      "Immediate travel reading challenge \u00b7 recorded answers re-scored \u00b7 optional cloud generation not connected",
    description:
      "Check whether an assistant answers from a passage or guesses when the answer is missing.",
    problem:
      "A travel or support assistant can sound helpful while inventing a missing detail. A prompt change should be checked against reference answers, including questions that should receive no answer.",
    example:
      "Read a passage about a place, enter an answer or NO_ANSWER, and check the human reference. Then replay two real AI prompt variants on the same questions and inspect where they disagree.",
    dataSource:
      "33 travel/place questions from the existing SQuAD v2 sample: 15 answerable and 18 unanswerable. All 150 original questions remain available. CC BY-SA 4.0 attribution is retained. Recorded Qwen answers are distinct from optional new cloud runs; no model weights are downloaded.",
    verification:
      "All 300 saved answers reproduce backend exact match, token F1 and abstention values exactly. Eight original metric/gate checks pass. Actual browser quiz positive/negative, edit invalidation, paired replay, cohort invalidation and mobile checks pass. The recorded full-150 comparison fell from 0.715 to 0.380 F1.",
    limitations:
      "Historical reading passages are not current travel advice. Token overlap is not general truth verification. Tiny fixed cohorts are exploratory. Replaying saved outputs does not evaluate an edited prompt; a new cloud run requires a free provider connection and sends task text to that provider.",
  },
  "Ad-Hoc OLAP Query Engine": {
    tags: [
      "TypeScript",
      "DuckDB-WASM",
      "Postgres",
      "Python",
      "Phi-style queries",
    ],
    demo: "https://crosscut-data.vercel.app",
    status: "live",
    access:
      "Real football stats \u00b7 instant bounded queries \u00b7 independent DuckDB SQL check",
    description:
      "Compare teams\u2019 goals and points at home and away, then independently check the numbers.",
    problem:
      "A plausible-looking table can be wrong because its grouping, filters or counts are wrong. Users need clear units and an independent calculation to check the result.",
    example:
      "Ask for average points by team with a home/away split, review the query, then run the equivalent DuckDB SQL. Export the actual results as CSV. Count appearances across all teams and see why that is twice the match count.",
    dataSource:
      "1,520 CC0 OpenFootball matches normalized into 3,040 team appearances. The bounded Phi-style engine keeps all/home/away accumulators. Short requests use a clearly labeled rule-based translator, not AI. The original CC0 penguin explorer remains at /penguins.",
    verification:
      "Direct source totals for all 20 teams, home/away sums, counts, query validation and injection rejection pass. Two actual browser DuckDB checks agree for team and season queries. Independent checking caught an Arrow HUGEINT transport mismatch; explicit DOUBLE aggregate output fixed that numeric boundary.",
    limitations:
      "Supports the listed dimensions, measures and aggregates; it is not a full MF/EMF language or arbitrary SQL interface. Match results do not include player stats, injuries or live odds. The independent SQL check downloads a database runtime, not AI weights.",
  },
};
for (const p of legacyProjects) Object.assign(p, phaseTwo[p.title] || {});
legacyProjects.unshift({
  title: "Signalworks",
  description:
    "Inspect real Steam gaming counts and catch missing metric fields before a release breaks a dashboard.",
  tags: ["Grafana", "Prometheus", "TypeScript", "Steam API"],
  github: "https://github.com/srini1998/signalworks",
  demo: "https://signalworks-check.vercel.app",
  status: "live",
  access:
    "Real Steam snapshot and refresh \u00b7 local text checks \u00b7 six-module observability lab stays local",
  problem:
    "A chart can stop showing a game because a release removed its app ID label, even while players are still online. Basic metric structure needs to be checked separately from service health.",
  example:
    "Refresh player counts for Counter-Strike 2, Dota 2 and Apex Legends. Check the expected game/appid fields, then load the deliberate broken-label example and see the checker reject it. Paste service metrics or try the retained PromLabs example.",
  dataSource:
    "Actual public Valve Steam player counts from a fixed three-game allowlist, with recorded and refreshed timestamps and a five-minute cache. Offline players are excluded. Text parsing/checks are deterministic. Optional free-cloud prose is disabled until an account is connected. The local Grafana/Prometheus/Loki/Alloy lab uses controlled faults.",
  verification:
    "12 parser/contract checks plus game schema/broken-label/API validation/cache fixtures pass. Actual browser Steam refresh through the real API handler, both metric examples, invalidation and mobile checks pass. Local lab evidence remains separate: 16 tests and 4/4 restart recovery; agent and baseline cohorts differ.",
  limitations:
    "Player counts do not establish game/server health. Text alone does not establish ingestion, alert timing, delivery or units. Upstream failures are visible and are not replaced with zero. This site does not modify a customer Grafana instance. Cloud explanations are unverified and require a free provider connection.",
});
const newestOrder = [
  "Signalworks",
  "Real-Time Crisis Intelligence Agent",
  "Multi-Agent Code Generation System",
  "MLOps Pipeline",
  "LLM Evaluation Harness",
  "Ad-Hoc OLAP Query Engine",
  "Breakroom · Supabase reliability suite",
  "PocketOps",
  "Neon Expedition",
];
legacyProjects.sort((a, b) => {
  const x = newestOrder.indexOf(a.title),
    y = newestOrder.indexOf(b.title);
  return (x < 0 ? 999 : x) - (y < 0 ? 999 : y);
});

for (const p of legacyProjects) {
  if (p.title === "Neon Expedition") {
    p.demo = "https://neon-expedition-lab.vercel.app";
    p.status = "live";
    p.access =
      "Public demo and source · actual browser Q-learning · same-map evaluation only";
  }
  if (p.title === "PocketOps") {
    p.demo = "https://pocketops-lab.vercel.app";
    p.status = "live";
    p.access =
      "Public browser sandbox and source · local runner required for real workspace actions";
  }
}
