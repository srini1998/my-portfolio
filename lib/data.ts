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

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string;
};

export const education: Education[] = [
  {
    degree: "MS in Computer Science",
    school: "Stevens Institute of Technology",
    period: "Sep 2024 – Jan 2026",
    location: "Hoboken, NJ, USA",
    details:
      "Coursework in AI, machine learning, deep learning, distributed systems and database systems.",
  },
  {
    degree: "BTech in Computer Science",
    school: "Gitam University",
    period: "Jun 2016 – Jun 2020",
    location: "Visakhapatnam, India",
    details:
      "Final-year project: a music recommendation system using RNNs on the KKBOX dataset.",
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
      "Direct USGS, GDACS, NASA EONET and NWS feeds, each with its own date range. The default brief uses structured fields and a deterministic template. An optional free Groq brief is built only from sanitized official feed text and is rejected unless its citations, numbers and alert level match the feed. The Python agent and historical model experiments remain in the source.",
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
      "Instant recorded AI drafts \u00b7 real browser Python checks \u00b7 optional free cloud draft that is run against the real tests",
    description:
      "Compare actual single-coder and team-generated Python solutions against the same real tests.",
    problem:
      "Adding more AI roles can make a coding assistant slower and less accurate. An impressive conversation is weaker evidence than code that passes the same independent checks.",
    example:
      "Choose a HumanEval exercise, load a real saved coder or team draft, edit it and run the Python tests. Deliberately break the function to see the checks fail. Nothing executes just because a model proposed it.",
    dataSource:
      '164 MIT HumanEval tasks and actual frozen Qwen 2.5 3B drafts. Recorded single/team outputs load immediately. The optional "fresh draft" button calls a free Groq model (openai/gpt-oss-20b) through a server function with per-visitor limits; its draft is then run automatically against the same real tests, so a draft counts only if it passes. The key stays on the server, and when the free quota is used up the site says so instead of paying.',
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
      "Actual soccer model training \u00b7 validation and later test \u00b7 original electricity lab available",
    description:
      "Train models on earlier soccer seasons and decide which one earns the next release.",
    problem:
      "More training data does not automatically justify replacing a model. Release decisions need a held-out comparison, an explicit threshold and a way back.",
    example:
      "Train a challenger on three Premier League seasons and compare it with a model trained on one. The default gate rejects a tiny probability improvement. An exploratory zero-margin setting lets you activate it, reveal a later match result and roll back.",
    dataSource:
      "1,520 CC0 OpenFootball Premier League matches, 2021/22\u20132024/25. Four logistic-regression weights use pre-match Elo and last-five-match form. Actual fitting happens in the browser; no LLM is needed. An optional release note from a free Groq model is checked in code: its verdict must match the gate and every number it quotes must be a measured value. The original Elec2 browser lab remains at /electricity and Python/MLflow experiments remain in the source.",
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
      "Immediate travel reading challenge \u00b7 recorded answers re-scored \u00b7 optional free cloud run graded by code",
    description:
      "Check whether an assistant answers from a passage or guesses when the answer is missing.",
    problem:
      "A travel or support assistant can sound helpful while inventing a missing detail. A prompt change should be checked against reference answers, including questions that should receive no answer.",
    example:
      "Read a passage about a place, enter an answer or NO_ANSWER, and check the human reference. Then replay two real AI prompt variants on the same questions and inspect where they disagree.",
    dataSource:
      "33 travel/place questions from the existing SQuAD v2 sample: 15 answerable and 18 unanswerable. All 150 original questions remain available. CC BY-SA 4.0 attribution is retained. Recorded Qwen answers are distinct from optional new cloud runs (a free Groq model, capped at 2 or 4 questions per run, graded by exact match/F1 and abstention against the human references); no model weights are downloaded.",
    verification:
      "All 300 saved answers reproduce backend exact match, token F1 and abstention values exactly. Eight original metric/gate checks pass. Actual browser quiz positive/negative, edit invalidation, paired replay, cohort invalidation and mobile checks pass. The recorded full-150 comparison fell from 0.715 to 0.380 F1.",
    limitations:
      "Historical reading passages are not current travel advice. Token overlap is not general truth verification. Tiny fixed cohorts are exploratory. Replaying saved outputs does not evaluate an edited prompt; a new cloud run sends the question text to Groq\u2019s free plan, and is limited by a shared free quota with no paid fallback.",
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
      "Real soccer stats \u00b7 instant bounded queries \u00b7 independent DuckDB SQL check",
    description:
      "Compare teams\u2019 goals and points at home and away, then independently check the numbers.",
    problem:
      "A plausible-looking table can be wrong because its grouping, filters or counts are wrong. Users need clear units and an independent calculation to check the result.",
    example:
      "Ask for average points by team with a home/away split, review the query, then run the equivalent DuckDB SQL. Export the actual results as CSV. Count appearances across all teams and see why that is twice the match count.",
    dataSource:
      "1,520 CC0 OpenFootball matches normalized into 3,040 team appearances. The bounded Phi-style engine keeps all/home/away accumulators. Short requests use a clearly labeled rule-based translator. An optional free Groq model can turn a plain-English question into DuckDB SQL; a guard allows only one read-only SELECT on the matches table, caps it at 200 rows and runs it in the browser. The original CC0 penguin explorer remains at /penguins.",
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
    "Actual public Valve Steam player counts from a fixed three-game allowlist, with recorded and refreshed timestamps and a five-minute cache. Offline players are excluded. Text parsing/checks are deterministic. An optional free-cloud summary (Groq, openai/gpt-oss-20b) is checked in code: every number must be a real sample value and every non-passing check must be named. The local Grafana/Prometheus/Loki/Alloy lab uses controlled faults.",
  verification:
    "12 parser/contract checks plus game schema/broken-label/API validation/cache fixtures pass. Actual browser Steam refresh through the real API handler, both metric examples, invalidation and mobile checks pass. Local lab evidence remains separate: 16 tests and 4/4 restart recovery; agent and baseline cohorts differ.",
  limitations:
    "Player counts do not establish game/server health. Text alone does not establish ingestion, alert timing, delivery or units. Upstream failures are visible and are not replaced with zero. This site does not modify a customer Grafana instance. The cloud summary is checked for number consistency, not for being a complete or correct diagnosis, and is limited by a shared free quota.",
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

// Phase 3: live product sites for projects 10-18. Each states what is measured, what is recorded and what is simulated.
const phaseThree: Record<string, Partial<Project>> = {
  "Distributed API Gateway": {
    tags: ["Python", "TypeScript", "Circuit Breaker", "Canary", "Vercel"],
    demo: "https://gateway-traffic-lab.vercel.app",
    status: "live",
    access:
      "Simulated traffic lab · TypeScript port checked against the Python reference · no real sockets",
    description:
      "Send traffic through a gateway, break a backend mid-run and watch weighted routing, retries and circuit breakers react.",
    bullets: [
      "Event-driven policy engine: weighted round-robin, sticky canary split, per-backend circuit breakers with one half-open probe, jittered retries and a retry budget.",
      "The browser runs a TypeScript port; golden traces exported from Python must match it exactly before every build ships.",
      "A cross-check button replays the visitor’s own run in a Python function and compares digests.",
    ],
    problem:
      "A failing backend should stop taking normal traffic while one probe checks whether it recovered, and retries should not turn one failure into a storm.",
    example:
      "Dispatch rush-hour traffic, kill backend B mid-run and watch its breaker trip and requests reroute. Let one noisy client get rate limited, then press the cross-check button and see the Python reference give an identical digest.",
    dataSource:
      "Authored traffic patterns and simulated backends on a virtual millisecond clock. No AI is used.",
    verification:
      "56 passing Python tests (32 original, 21 traffic lab, 3 verify endpoint) and 8/8 TypeScript parity cases that also run inside the build. On the public site, killing a backend tripped its breaker and the Python cross-check reported an identical run of 354 requests.",
    limitations:
      "Backends, latency and failures are simulated, so this is not a throughput or multi-node benchmark. Runs are capped at 2,000 requests. The original FastAPI proxy is unchanged and not hosted.",
  },
  "Real-Time OLAP Dashboard": {
    tags: ["Python", "SQLite", "sql.js", "OpenF1", "Streaming OLAP"],
    demo: "https://pitwall-replay.vercel.app",
    status: "live",
    access:
      "Real stored F1 race timing · SQL runs in your browser · replay, not live timing",
    description:
      "Replay a real Formula 1 race as a stream of events and watch timing, tyre and pit-stop answers stay correct when events arrive twice or late.",
    bullets: [
      "Event-time ingest into a SQLite star schema; exact replays are no-ops and a conflicting replay rolls back the batch.",
      "Timing tower, driver/team/compound/stint rollups and rolling pace windows, all evaluated as of the replay clock.",
      "The same SQL files run in Python and in the browser (SQLite WASM), with matching golden outputs.",
    ],
    problem:
      "A dashboard that counts events must give the same answer when the same event is delivered twice, or when events arrive out of order.",
    example:
      "Play the 2024 Italian Grand Prix, scrub back to lap 6, then inject duplicate and late deliveries and send a conflicting correction. The duplicate is absorbed, the conflict is rejected and the tower stays right.",
    dataSource:
      "Stored snapshot of OpenF1 timing for the 2024 Italian Grand Prix (20 drivers, 1,008 timed laps), licensed CC BY-NC-SA 4.0 for non-commercial use. The site never calls OpenF1 at runtime. The original synthetic sales pipeline is kept and labeled synthetic.",
    verification:
      "27 passing Python tests, including lap counts for all 20 drivers matching the official classification, and 5/5 browser SQL parity cases. At the flag, 4 rows differ from the official result (likely penalties, which lap timing does not contain; not independently verified).",
    limitations:
      "One stored race, not live timing. Positions come from lap-completion times and can differ by tenths from broadcast. Tyre trends are not fuel-corrected. The non-commercial data license would need revisiting if the portfolio were used commercially.",
  },
  "Redis Rate Limiter": {
    tags: ["Python", "TypeScript", "Redis", "Lua", "GCRA"],
    demo: "https://small-allowances.vercel.app",
    status: "live",
    access:
      "Synthetic traffic · six real algorithms run in your browser · Redis library GCRA tested with fakeredis",
    description:
      "Fire the same burst of requests at six rate-limiting algorithms and see who each one lets through, then spread the allowance across gateways with skewed clocks.",
    bullets: [
      "Fixed window, exact sliding log, sliding counter, token bucket, leaky queue and GCRA evaluate the same trace.",
      "Cluster experiment: 1–16 gateways, up to ±60 s clock offsets, three routing policies, local or shared state, per-client fairness.",
      "The Redis library gains an atomic GCRA that reads the store’s own clock inside the Lua script.",
    ],
    problem:
      "Different limiters disagree about the same burst, and a cluster of gateways with drifting clocks can admit more traffic than the allowance.",
    example:
      "Send a boundary burst: the fixed window admits 100 while the sliding log admits 50. Import a 500-request trace with skewed shared clocks, see 12 requests over-admitted, then switch to store time and match the reference.",
    dataSource:
      "Authored and visitor-imported synthetic request traces (up to 5,000 requests). No AI is used.",
    verification:
      "59 passing Python tests and 12 Node tests, including 9 Python golden traces that must match the TypeScript port before every build. Public Chrome checks at 1440, 390 and 320 passed with no page errors or overflow.",
    limitations:
      "Simulated and serialized: no real Redis server, network latency, replication or failover, and no throughput benchmark. Token bucket and GCRA allow bursts. Safari and Firefox were not tested.",
  },
  "RAG Q&A Pipeline": {
    tags: ["TypeScript", "BM25", "transformers.js", "Reranking", "Groq"],
    demo: "https://call-number-rag.vercel.app",
    status: "live",
    access:
      "Document reading room · optional in-browser embedding models (~23 MB each) · optional free cloud answer, checked",
    description:
      "Ask a question about a document, see the retrieved passages and open the exact source span behind each answer sentence, or get an honest refusal.",
    bullets: [
      "Hybrid retrieval: keyword search plus optional in-browser embeddings, with a cross-encoder reranker.",
      "Answer sentences link to exact source spans; questions the text cannot answer abstain.",
      "A 36-question authored set can be re-run in the browser, with held-out results reported separately.",
    ],
    problem:
      "A fluent answer from a document can sound right without showing where it came from.",
    example:
      "Ask who has the power to declare war in the included U.S. Constitution and open the cited span. Ask about the federal minimum wage and watch it abstain.",
    dataSource:
      "Public-domain texts (Constitution original text and first ten amendments) or text you paste or upload (400,000 characters max). Models run in your browser; the optional cloud answer uses a free Groq model.",
    verification:
      "On the 23 held-out questions: Recall@1 77.8% and Recall@5 88.9% (18 answerable), end-to-end extractive accuracy 60.9%, abstention accuracy 82.6%, and 100% of answered sentences pass the source-support check. 16 engine tests and 13 public Chrome checks passed.",
    limitations:
      "Small single-corpus benchmark written by the author. The faithfulness check shows an answer is supported by the cited text, not that it is correct. Cloud text is checked with quote/number/term heuristics, not semantic proof, and shares a free quota with other sites.",
  },
  "CI Pipeline Optimizer": {
    tags: ["TypeScript", "GitHub Actions", "Critical path", "YAML", "Python"],
    demo: "https://build-sheet-ci.vercel.app",
    status: "live",
    access:
      "Recorded public GitHub Actions runs · live public-repo fetch from your browser · savings are simulated",
    description:
      "Find which build jobs actually set a pipeline’s length, then compare caching and test sharding on the same timings.",
    bullets: [
      "Critical-path analysis over job dependencies from real recorded GitHub Actions timings.",
      "Simulation of caching and balanced test sharding, including repeated setup and per-shard overhead.",
      "Paste workflow YAML or a public repository; YAML is parsed, never run.",
    ],
    problem:
      "A slow CI run may be waiting on one dependency chain, so speeding up an unrelated job saves nothing.",
    example:
      "Open the recorded Express run and follow its test-to-coverage chain, or load the labeled synthetic fork/join study and compare four test shards plus caching against the same baseline.",
    dataSource:
      "Cached real run timings and workflow files for three public repositories (p-limit, click, express), pinned to run SHAs with original run links. An optional live fetch of a public repository uses the unauthenticated GitHub API from the browser (four calls, one fetch per 30 seconds). No AI is used.",
    verification:
      "43 original Python tests, 11 browser engine tests, and 8/8 public Chrome checks, including cycle rejection, invalid-repository rejection and a real live GitHub fetch.",
    limitations:
      "One run per sample, so no flakiness claims. Savings are simulations, not measured speedups. The critical path assumes unlimited runners; matrix jobs are collapsed and conditions or reusable-workflow internals are not executed. Jobs without timings use editable estimates.",
  },
  "LLM Code Review Assistant": {
    tags: ["TypeScript", "Static analysis", "Acorn AST", "Groq", "Python"],
    demo: "https://galley-proof.vercel.app",
    status: "live",
    access:
      "Paste a diff or a public PR · offline static passes · optional free cloud model pass, anchored to diff lines",
    description:
      "Paste a diff or a public pull request and get findings marked in the margin beside the exact added lines, from three kinds of reader.",
    bullets: [
      "Three passes: 23 pattern rules, a JavaScript syntax-tree pass, and an optional free Groq model pass.",
      "A model finding is discarded unless its line and quoted text are really on an added line.",
      "A seeded-bug benchmark reports precision and recall for each pass.",
    ],
    problem:
      "A review comment that points at the wrong line, or at code that is not in the change, wastes a reviewer’s time.",
    example:
      "Load the missing-await specimen and see the pattern, syntax-tree and model readers mark the same line. Review a real public pull request, or paste your own diff and review it with the model off.",
    dataSource:
      "Visitor diffs and public GitHub PRs (one unauthenticated browser call). The benchmark is 24 hand-written synthetic diffs with 25 planted bugs and 4 clean diffs.",
    verification:
      "On the 14 held-out benchmark diffs: pattern and syntax-tree passes 100% precision and 84.6% recall; the model alone 70.6% and 92.3%; all passes together 72.2% and 100%. 21 site tests and 16 original Python tests pass; 10/10 public Chrome checks passed.",
    limitations:
      "The benchmark rules and cases share one author, so treat the scores as an upper bound for real code. Pattern rules read one line at a time, the syntax-tree pass is JavaScript only, and the model sees only added lines and is checked for location, not correctness. Limits are per warm server instance and the Groq free quota is shared.",
  },
  "Music Recommender Engine": {
    tags: [
      "JavaScript",
      "ListenBrainz",
      "MusicBrainz",
      "Collaborative filtering",
      "MMR",
    ],
    demo: "https://side-b-recommender.vercel.app",
    status: "live",
    access:
      "Real one-day listening data (CC0) · recommendations computed in your browser · artist level, no playback",
    description:
      "Pick artists you like and get ten recommendations that you can tune between familiar and adventurous, each with a reason.",
    bullets: [
      "Hybrid score: co-listening graph plus MusicBrainz genre profiles, with a novelty discount and MMR diversity re-ranking.",
      "Every pick explains itself from real co-listener counts and shared genres.",
      "Offline recall@k, coverage and diversity were measured on 2,143 held-out listeners.",
    ],
    problem:
      "A recommender that only repeats the most popular music is accurate but boring, and one that chases novelty gets less right.",
    example:
      "Add Slowdive to a seed list, then slide diversity up: list diversity goes from 0.75 to 1.00 while the page shows the recall it costs.",
    dataSource:
      "One day of ListenBrainz listens (5.5M, CC0) with MusicBrainz artist data (CC0) and genre tags (CC BY-NC-SA 3.0, used non-commercially with attribution). User names are dropped and only per-artist aggregates ship. The original matrix-factorization v1 on a toy catalog is preserved and labeled as not what runs.",
    verification:
      "Recall@10 on held-out listeners: most-popular 0.056, genre-only 0.079, co-listening only 0.181, hybrid 0.185; adding diversity 0.3 gives 0.181 recall with higher diversity. 8 site tests pass, and the public Chrome flow at 1440 and 390 had no page errors.",
    limitations:
      "One day of self-selected, rock/indie-heavy listeners. Artist level only, with no audio. Offline metrics are precomputed on a grid, not a user study. The catalog is the 1,500 most-listened artists that have an MBID.",
  },
  "Crisis Information Graph": {
    tags: ["JavaScript", "Knowledge graph", "Louvain", "NOAA", "d3"],
    demo: "https://crisis-information-graph.vercel.app",
    status: "archive",
    access:
      "Rebuilt on public-domain NOAA records · queries and community detection run in your browser · original research kept separate",
    description:
      "Explore a knowledge graph of hurricane impacts where every relation cites the report sentence it came from.",
    bullets: [
      "1,051 NOAA reports, 1,829 entities and about 6.6k relations for Harvey, Irma and Maria, each with its rule, source sentence and event id.",
      "Impact queries, shortest cited path between entities, and live Louvain community detection.",
      "The original BERT/BiLSTM tweet research stays historical, with its inconsistent reported scores shown side by side.",
    ],
    problem:
      "Entities extracted from crisis text are only useful if you can trace each relation back to the evidence behind it.",
    example:
      "Query Irma, downed, power lines, Georgia and open the cited reports, trace a path from Maria to dams and levees, or run community detection and read a dispatch card for any entity.",
    dataSource:
      "NOAA NCEI Storm Events 2017 (details and fatalities), a public-domain U.S. Government work. The original CrisisMMD tweets cannot be republished, so this is a reproducible rebuild on different data, not the original dataset.",
    verification:
      "8 site tests pass (including every edge resolving to a real NOAA event). Louvain found 11 communities with modularity 0.473 in about 18 ms. A self-checked sample of 40 relations: 34 fully correct and 38 with the right affected asset (my own judgment, not independent annotation).",
    limitations:
      "Rule-based extraction with no coreference (“tree fell onto a car” is read as the car being downed). U.S. records only, with uneven narrative detail. The layout is precomputed and the whole-graph view is small on phones. The original research results were not re-run.",
  },
  "Securing Image Classifiers from Adversarial Attacks": {
    tags: ["TensorFlow.js", "PyTorch", "TRADES", "FGSM", "PGD"],
    demo: "https://adversarial-specimen-lab.vercel.app",
    status: "archive",
    access:
      "Real attacks run in your browser · small Quick, Draw! classifiers · original CIFAR-100 research labeled historical",
    description:
      "Attack two small drawing classifiers in your browser, a standard one and an adversarially trained one, and watch how much change it takes to fool each.",
    bullets: [
      "Real FGSM and 20-step PGD attacks with an epsilon slider, each model attacked on its own gradients, in TensorFlow.js.",
      "Recorded robustness curves over 10,000 held-out drawings plus a separate live 20-drawing test.",
      "The browser model matches PyTorch on logits and gradients (within stated tolerances).",
    ],
    problem:
      "Clean accuracy says nothing about behavior when an input is nudged slightly on purpose.",
    example:
      "Pick a butterfly drawing, set epsilon to 0.1 and run PGD: the standard model flips to frog, while the adversarially trained model usually keeps its answer.",
    dataSource:
      "Held-out drawings from Google Quick, Draw! (10 classes, CC BY 4.0) with models trained locally on CPU. The original CIFAR-100 ResNet-18 research is in the repository and is historical, not re-run here.",
    verification:
      "Clean accuracy 88.10% (standard) vs 77.94% (TRADES). PGD at eps 0.1: 20.1% vs 71.0%; at eps 0.2: 0.0% vs 43.7%. 3 Python and 12 site tests pass. The live 20-drawing test gave 1/20 vs 13/20.",
    limitations:
      "Small 28x28 sketch classifiers, not CIFAR. Only white-box L-infinity FGSM and single-start PGD (no AutoAttack), so the adversarially trained numbers may overstate robustness. The live test is only 20 drawings, and there is no robustness certificate.",
  },
};
for (const p of legacyProjects) Object.assign(p, phaseThree[p.title] || {});
