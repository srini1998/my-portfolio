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
  "title": "Breakroom · Supabase reliability suite",
  "description": "Six separate practical applications: tenant permissions, retry-safe rentals, owned-data cleanup, reviewed CSV imports, crafting races and Realtime transport checks. Each explains the real-world job and separates saved evidence from fresh experiments.",
  "bullets": [
    "Actual local Supabase Auth, PostgREST, Postgres, Storage and Realtime; no custom model training.",
    "Public USGS, Citi Bike, GitHub, UCI retail and Minetest recipe facts with explicit simulation limits.",
    "42 regression checks plus six desktop/mobile workflows; Policy Passport compares declared permissions against actual ordinary-session RLS behavior."
  ],
  "tags": [
    "Supabase",
    "TypeScript",
    "React",
    "Postgres",
    "Realtime",
    "Local Ollama"
  ],
  "github": "https://github.com/srini1998/breakroom",
  "demo": "https://breakroom-dusky.vercel.app",
  "status": "live",
  "access": "Public recorded-evidence site on Vercel · private source",
  "problem": "A feature can work in a happy path while permission changes, retries, concurrent writes or delayed jobs break important guarantees.",
  "example": "A rental checkout arrives twice: the saved receipt must reduce available stock once. A policy candidate must not let one team read another team’s records.",
  "verification": "42 passing tests; actual API/Storage/concurrency checks and six desktop/mobile browser flows. The small real-data Realtime model run passed; an earlier full live workload was inconclusive due coordinator delay.",
  "limitations": "Fresh experiments require the local worker and real services. The public static profile is recorded evidence. No production, compliance or hiring guarantee.",
  "dataSource": "Attributed public snapshots plus clearly labeled fictional teams/accounts/player balances."
},
  {
    title: "LLM Evaluation Harness",
    description: "A regression gate for LLM features: paired, item-level comparison with bootstrap confidence intervals on a balanced SQuAD v2 sample (half the questions unanswerable), plus a calibrated local LLM judge.",
    bullets: [
      "Caught a plausible prompt 'simplification' that dropped the abstention rule: F1 −0.33 (95% CI −0.42 to −0.25), abstention −0.61.",
      "Calibrated the judge against human answers: passage-only 3B judge κ = 0.04 (approves 95% of wrong answers); reference-guided κ = 0.72.",
      "CI re-scores committed runs deterministically, so the gate needs no model or API key.",
    ],
    tags: ["LLM evaluation", "LLM-as-judge", "Bootstrap CI", "FastAPI", "Ollama", "GitHub Actions"],
    github: "https://github.com/srini1998/llm-eval-harness",
    status: "local",
    access: "Public source · local Ollama qwen2.5:3b, no paid API",
    problem: "Prompt or model changes can quietly degrade grounded answers, and an LLM judge that 'looks fine' may be grading at chance.",
    example: "A teammate removes 'reply unanswerable if the passage doesn't say' to shorten the prompt; answers to unanswerable questions become confident fabrications and the gate fails the change.",
    dataSource: "150-item seeded, checksum-pinned subset of the SQuAD v2.0 dev set (CC BY-SA 4.0); local qwen2.5:3b as system and judge.",
    verification: "Recorded runs and gate report in the repo; 6 unit/API tests; eval-gate workflow asserts the baseline passes against itself and the known regression fails.",
    limitations: "150 items and one 3B model; the judge and system share a model; lexical support is a proxy for groundedness.",
  },
  {
    title: "Multi-Agent Code Generation System",
    description: "Planner → Coder → Reviewer roles with a local model, measured against single-shot generation and execution-feedback revisions on HumanEval. Agents see only the prompt and its docstring examples; hidden tests are used only by an independent checker in an isolated container.",
    bullets: [
      "All 164 HumanEval tasks, regraded in an isolated container: single coder 65.2%, execution feedback 64.6%, planner/coder/reviewer 54.9%.",
      "The multi-role loop was measurably worse (−10.4 pts, 95% CI −18.3 to −2.4) at 6.6× the model calls: it fixed 14 tasks and broke 31.",
      "Review hardened the sandbox from a host profile to an offline, read-only, unprivileged container.",
    ],
    tags: ["Multi-agent", "Code generation", "HumanEval", "Sandboxing", "Ollama", "Python"],
    github: "https://github.com/srini1998/multi-agent-codegen",
    status: "local",
    access: "Public source · local Ollama qwen2.5:3b and Docker, no paid API",
    problem: "'Add a reviewer agent' is a common reflex; whether extra roles actually improve correctness has to be measured with hidden tests the agents can't see.",
    example: "The reviewer approves an implementation whose docstring examples pass but whose hidden edge cases fail; the independent checker records it as a false approval.",
    dataSource: "OpenAI HumanEval (MIT licence), checksum-pinned; generated code runs only inside the container sandbox.",
    verification: "Harness and sandbox isolation tests; all 492 saved solutions regraded in the pinned container (1 changed vs host grading); canonical solutions validated against the visible-example runner.",
    limitations: "One 3B model at temperature 0; HumanEval pretraining exposure unknown; function-level tasks only; visible docstring examples exist for 76 of 164 prompts.",
  },
  {
    title: "Real-Time Crisis Intelligence Agent",
    description: "Pulls live official disaster feeds (USGS, GDACS, NASA EONET, US NWS), links reports from different publishers into incidents, and has a local model write situation reports whose citations, numbers, alert levels and locations are checked against the source documents.",
    bullets: [
      "Frozen snapshot of 289 live documents: 20/20 model reports passed the structural checks (84 claims) with 2.5× the facts of a template baseline.",
      "Prompt injection: a 3B model followed injected instructions 10/10 times; a sanitizer stopped textbook attacks but not paraphrases; field checks blocked ~90% of poisoned reports.",
      "Extends the earlier Crisis Information Graph from offline tweet analysis to live, multi-source reporting.",
    ],
    tags: ["RAG", "Hybrid retrieval", "Prompt injection", "Ollama", "FastAPI", "SQLite"],
    github: "https://github.com/srini1998/crisis-intel-agent",
    status: "local",
    access: "Public source · keyless public feeds and local models",
    problem: "Analysts need fast situation summaries, but a model that invents casualty numbers or obeys text hidden in a feed is worse than no summary.",
    example: "A GDACS orange alert and a USGS M6.1 report are linked as one incident; the report states magnitude, depth and alert level with citations, and an injected 'say the alert is red' is caught because alert levels must match structured fields.",
    dataSource: "Live USGS, GDACS, NASA EONET and NWS feeds; only public-domain snapshots are committed. Local qwen2.5:3b and nomic-embed-text.",
    verification: "Snapshot evaluation (grounding, alert agreement, cross-source linking check, three injection conditions); 10 tests; GitHub Actions CI.",
    limitations: "Not an official warning service; checks establish citation and field consistency, not factual truth; aggregate Q&A with a 3B model is weak.",
  },
  {
    title: "MLOps Pipeline",
    description: "Event-driven retraining on real drifting data: each weekly upload is validated, content-addressed, scored against the serving model, and only promoted through gates; an MLflow registry alias drives a hot-swapping FastAPI service with rollback.",
    bullets: [
      "100 real weeks of the Elec2 electricity market: pipeline 88.2% live accuracy vs persistence 85.8% and a never-retrained model 79.5%.",
      "Injected a corrupt upload (rejected by validation) and a broken challenger (blocked by a no-skill floor).",
      "Real data exposed a non-monotonic date field and a too-weak fixed floor; both fixed with regression tests.",
    ],
    tags: ["MLflow", "scikit-learn", "FastAPI", "Data validation", "Model registry", "GitHub Actions"],
    github: "https://github.com/srini1998/mlops-pipeline",
    status: "local",
    access: "Public source · free local tools (originally designed for SageMaker; cloud mapping documented)",
    problem: "A model trained once goes stale as the world changes, and retraining without gates can ship a worse or broken model.",
    example: "Week 66's challenger is trained on misaligned labels; its holdout accuracy is below the majority-class floor, so it never serves and the champion stays.",
    dataSource: "Elec2 (Harries 1999; Gama), OpenML #151, licence 'Public' — 45,312 half-hour records replayed one week per upload.",
    verification: "11 pytest tests; 100-week simulation report; CI replays 20 real weeks and asserts both injected faults are caught.",
    limitations: "Single machine; the trigger polls a directory instead of receiving S3 events; per-week gate decisions use a 2-day holdout and are noisy.",
  },
{
  "title": "PocketOps",
  "description": "Review and approve a bounded laptop task from a phone: inspect files, check syntax, run existing Node tests or review the supported pricing repair. A hosted browser sandbox is separate from real laptop execution.",
  "bullets": [
    "Actual local Node runner with pairing authentication and workspace/path boundaries.",
    "Approvals bind the exact action and reviewed test-file hashes, expire, and reject changed files.",
    "Real failing tests, reviewed repair and passing tests verified; desktop/mobile browser demonstration checked."
  ],
  "tags": [
    "Node.js",
    "Local task runner",
    "Exact approvals",
    "Phone UI"
  ],
  "github": "https://github.com/srini1998/pocketops",
  "demo": "https://pocketops.sriniusvenigalla.chatgpt.site",
  "status": "local",
  "access": "Owner-private hosted sandbox · private source",
  "problem": "Remote task buttons should not execute an unseen or changed action on a laptop.",
  "example": "Review the exact pricing diff, approve it, and rerun the existing tests. Editing a test after review invalidates execution.",
  "verification": "Real runner integration checks and browser sandbox/mobile approval flow pass. Actual source restored into GitHub from the Site.",
  "limitations": "Trusted workspace only; local HTTP is not encrypted and Node tests have OS permissions. No internet relay or general coding agent.",
  "dataSource": "Included authored pricing fixture or your explicitly selected trusted workspace."
},
{
  "title": "Neon Expedition",
  "description": "Play a small dungeon, train three tabular Q-learning navigation policies in a browser worker, and compare greedy rollouts with the shortest valid route.",
  "bullets": [
    "Three authored maps, key possession in the state, four movement actions and explicit rewards.",
    "Actual worker training; 30/30 same-map evaluation wins for all nine trained map/profile combinations in the test run.",
    "Atomic policy import validation rejects invalid counters, histories, parameters and agent identities."
  ],
  "tags": [
    "Reinforcement learning",
    "Q learning",
    "Three.js",
    "Web Workers"
  ],
  "github": "https://github.com/srini1998/neon-expedition",
  "demo": "https://neon-expedition.sriniusvenigalla.chatgpt.site",
  "status": "local",
  "access": "Owner-private hosted arena · private source",
  "problem": "Show what a learning agent actually learns, rather than animating a scripted route and calling it AI.",
  "example": "Start with empty Q tables, train on one mission, disable exploration, and compare path length with an independent breadth-first route.",
  "verification": "Actual learning, collision, import rejection and restoration checks pass; browser worker training and 390px mobile flow pass.",
  "limitations": "Repeated same-map/same-start evaluation. No unseen-map or general intelligence claim. Laptop graphics performance varies.",
  "dataSource": "Three original authored maps and seeded local episodes; no external training dataset."
},
  {
    title: "Ad-Hoc OLAP Query Engine",
    description: "Evaluates Multi-Feature and Extended Multi-Feature (Phi operator) queries over PostgreSQL without using GROUP BY: it streams the table through a server-side cursor into an in-memory mf-structure, one scan per dependency level, and can emit a standalone Python program for any query.",
    bullets: [
      "Recursive-descent predicate parser with SQL three-valued logic; nothing is passed to eval, and generated programs embed literals only as string constants.",
      "Shifted equality keys (e.g. 1.month = month - 1) become hash indexes; dependency levels between grouping variables are planned automatically.",
      "8/8 queries agree across interpreter, generated program and hand-written SQL at 10k and 200k rows; 300 random queries match a naive reference.",
    ],
    tags: ["PostgreSQL", "Python", "OLAP", "Query engines", "Code generation"],
    github: "https://github.com/srini1998/adhoc-olap-engine",
    status: "local",
    access: "Public source · verified on local PostgreSQL 14 and PostgreSQL 17 in CI",
    problem: "Comparing several differently filtered aggregates per group (NY vs NJ vs CT averages per customer, last month vs next month) needs nested SQL joins; the Phi operator states it directly.",
    example: "Per product and month, count sales whose quantity lies between the previous and the following month's averages: three grouping variables, two scans, verified against an equivalent SQL query.",
    dataSource: "Deterministic synthetic sales table in the classic coursework schema (seeded generator), not real sales data.",
    verification: "17 pytest tests incl. a 300-query differential test vs a naive reference and a negative control; olap verify compares interpreter, generated program and hand-written SQL (8/8 at 10k and 200k rows); GitHub Actions CI with a Postgres service.",
    limitations: "Single table, count/sum/avg/min/max; the mf-structure must fit in memory. PostgreSQL's own SQL is 10–100× faster on simple queries; the gap closes on correlated sub-query shapes.",
  },
  {
    title: "LLM Code Review Assistant",
    description: "A local-model diff review tool with structured suggestions and explicit failure reporting. Provider errors never turn into canned findings; human review remains necessary.",
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
    description: "Analyzes GitHub Actions pipelines to surface slow jobs, flaky tests, and parallelization wins. Fetches live run data directly from the GitHub API and generates ASCII Gantt timelines.",
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
    description: "Weighted round-robin load balancer with circuit breaker, rate limiting, and live HTTP proxying. Handles backend failures automatically via CLOSED → OPEN → HALF_OPEN recovery.",
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
    description: "Redis-backed limiter with four Lua-script algorithms, bounded inputs and distinct sliding-window receipts for requests sharing a timestamp.",
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
    description: "Retrieve source excerpts with TF-IDF by default, or explicitly use local Ollama generation. Chunk validation rejects non-progressing windows and provider failures do not become canned answers.",
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
    description: "Rating prediction using biased matrix factorization trained by stochastic gradient descent, plus content similarity. New-user catalog ordering is explicitly labeled as a fallback.",
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
    description: "SQLite sales analytics with grouped queries and running totals. Parameter-bound filters, immutable event receipts and atomic batches protect the supported import/query workflow.",
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
    description: "NLP pipeline to classify crisis tweets and extract structured entities for emergency response visualization.",
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
    description: "Adversarial robustness study on ResNet-18 trained on CIFAR-100, with a full adversarial training defense pipeline.",
    bullets: [
      "Studied PGD (Projected Gradient Descent) adversarial attacks on a ResNet-18 / CIFAR-100 baseline.",
      "Implemented adversarial training loop using PyTorch and Torchattacks library.",
      "Measured accuracy degradation under attack vs. defended model across multiple epsilon budgets.",
      "Historical research work; reproduced training/evaluation evidence is not yet attached to this portfolio review.",
    ],
    tags: ["PyTorch", "ResNet-18", "CIFAR-100", "Adversarial ML", "Torchattacks"],
    status: "local",
  }
];

export const roadmapProjects: Project[] = [];

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    items: ["Claude API", "LLM Evaluation", "RAG", "Sentence Transformers", "PyTorch", "BERT", "Hugging Face", "LangGraph", "scikit-learn", "SVD / Collaborative Filtering"],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Infrastructure & Backend",
    items: ["FastAPI", "Redis", "PostgreSQL", "GitHub Actions", "Docker", "AWS", "CI/CD", "Java EE"],
  },
  {
    category: "Concepts",
    items: ["LLM Inference Optimization", "Distributed Systems", "Rate Limiting", "Circuit Breaker", "NLP", "Computer Vision", "OLAP"],
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
    "problem": "A failing backend should stop normal traffic while a single recovery probe checks its health.",
    "example": "Trip the circuit, allow one half-open request, and reject a second until completion. /api must not match /apiary.",
    "dataSource": "Authored requests and injected local transport failures.",
    "verification": "32 passing checks, including asynchronous proxy errors, one outstanding recovery probe and route boundaries.",
    "limitations": "In-process state. MockTransport checks are not a production load or multi-process benchmark."
  },
  "CI Pipeline Optimizer": {
    "problem": "Explain CI duration with dependencies and observed timings; do not equate mixed outcomes with proven flakiness.",
    "example": "Compare supported test/build chains. Reject cycles and missing dependencies explicitly.",
    "dataSource": "Authored workflow/run-history fixtures; optional read-only GitHub ingestion.",
    "verification": "43 passing checks include invalid graphs and GitHub response adapters.",
    "limitations": "Average-duration critical path and mixed-outcome heuristic; no guaranteed savings or proof of nondeterministic failures."
  },
  "LLM Code Review Assistant": {
    "problem": "A provider outage must not produce a convincing canned review unrelated to submitted code.",
    "example": "Submit a bounded diff to local Ollama. Invalid/unavailable responses fail explicitly. Critical findings prevent approval.",
    "dataSource": "Operator diffs; explicitly labeled fixed fixtures for adapter tests.",
    "verification": "16 passing checks include provider error without fixture substitution and approval gating. No independent model-quality benchmark.",
    "limitations": "Human review required. Scores are not correctness probabilities. No hosted API billing in this profile."
  },
  "Redis Rate Limiter": {
    "problem": "Requests can share a timestamp; timestamp-only sorted-set members can undercount traffic.",
    "example": "Twelve same-clock requests against capacity three must allow exactly three, with distinct UUID receipts.",
    "dataSource": "Authored identifiers and controlled clocks.",
    "verification": "25 passing fakeredis/Lua checks including same-clock accounting and invalid token requests.",
    "limitations": "Actual Redis deployment and multi-node/network-failure checks remain separate. Lua atomicity is not a universal safety guarantee."
  },
  "RAG Q&A Pipeline": {
    "problem": "Keep source excerpts distinct from generated prose; invalid chunk settings must not hang ingestion.",
    "example": "Retrieve cited excerpts, or explicitly select local generation. Provider failure returns an error, not a canned answer.",
    "dataSource": "Operator documents and authored corpus; no model training.",
    "verification": "24 passing checks cover retrieval, invalid windows, actual source excerpts and local-provider errors.",
    "limitations": "Lexical overlap is a heuristic, not factuality proof. Dense embeddings and local-model answer quality require separate evaluation."
  },
  "Music Recommender Engine": {
    "problem": "Tell users when a recommendation has preference evidence versus catalog ordering.",
    "example": "Fit finite 1–5 ratings with SGD, exclude heard tracks, and label the new-user fallback.",
    "dataSource": "Authored catalog and ratings, not real listening history.",
    "verification": "14 passing model/similarity checks; no held-out ranking or user study claimed.",
    "limitations": "Biased matrix factorization with SGD, not SVD decomposition. Catalog order is not measured popularity."
  },
  "Real-Time OLAP Dashboard": {
    "problem": "Repeated events must not rewrite past sales; conflicting batches must not partially commit.",
    "example": "Retry a receipt without double counting. Reject a conflicting ID and roll back all new rows; bind query filter values.",
    "dataSource": "Authored commerce events in SQLite, not a live PostgreSQL feed.",
    "verification": "16 passing checks include SQL injection rejection, immutable receipts, batch rollback and running totals.",
    "limitations": "Supported grouped/windowed SQLite queries. Prior percentile/sliding-window/PostgreSQL claims did not match the code and were removed."
  },
  "Crisis Information Graph": {
    "problem": "Extract crisis-text categories/entities with explicit model and dataset limits.",
    "example": "Inspect the historical classification/entity pipeline source archive.",
    "dataSource": "Historical research repository; dataset licensing and reproducible evaluation still need review.",
    "verification": "Source located. Training, inference and historical scores have not been reproduced in this review.",
    "limitations": "Research archive, not a live emergency-response system or newly verified accuracy result."
  },
  "Securing Image Classifiers from Adversarial Attacks": {
    "problem": "Clean accuracy alone does not show behavior under a declared perturbation.",
    "example": "Compare baseline/defense over the same epsilon budget, split and weights.",
    "dataSource": "Historical CIFAR-100 research repository; source and weights require fresh verification.",
    "verification": "Source located; fresh attack/training evaluation pending.",
    "limitations": "Research archive. Removed unsupported defense-improvement claim until reproducible evidence exists."
  }
};
for (const project of legacyProjects) { Object.assign(project, reviewNotes[project.title] || {}); if (["Crisis Information Graph", "Securing Image Classifiers from Adversarial Attacks"].includes(project.title)) project.status="archive"; }
