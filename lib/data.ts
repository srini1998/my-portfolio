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
  },
  {
    title: "Ad-Hoc OLAP Query Engine",
    description: "Custom multi-pass query engine supporting MF/EMF queries over PostgreSQL, bypassing built-in aggregation entirely.",
    bullets: [
      "Designed a processing engine for Multi-Feature (MF) and Extended Multi-Feature (EMF) OLAP queries.",
      "Engine generates standalone Python programs from extended relational algebra, building in-memory mf-structures.",
      "Supported grouping variables, SUCH THAT predicate filtering, and complex HAVING conditions.",
      "Demonstrated live dynamic query modification with both interactive and file-based interfaces.",
    ],
    tags: ["PostgreSQL", "Python", "OLAP", "Query Optimization", "DBMS"],
    status: "local",
  },
];

export const roadmapProjects: Project[] = [
  {
    title: "LLM Evaluation Harness",
    description:
      "Automated evaluation framework for LLM outputs — measures faithfulness, relevance, and groundedness against ground-truth using LLM-as-judge. Integrates with CI/CD to catch model regressions on every commit.",
    tags: ["LLM Eval", "Claude", "Python", "FastAPI", "CI/CD"],
    status: "soon",
  },
  {
    title: "Cloud-Native MLOps Pipeline",
    description:
      "End-to-end automated ML deployment on AWS — model retraining triggered by S3 data uploads, evaluation gates in GitHub Actions, and production deployment to SageMaker with rollback support.",
    tags: ["AWS", "SageMaker", "GitHub Actions", "MLOps", "Python"],
    status: "soon",
  },
  {
    title: "Multi-Agent Code Generation System",
    description:
      "Agentic pipeline where a Planner LLM decomposes features into tasks, a Coder LLM implements them, and a Reviewer LLM validates output before merge — closing the AI code generation → validation loop.",
    tags: ["Claude", "LangGraph", "Multi-Agent", "Python", "GitHub Actions"],
    status: "soon",
  },
  {
    title: "Real-Time Crisis Intelligence Agent",
    description:
      "Extends the Crisis Information Graph into a live agentic RAG pipeline — ingests streaming social data, retrieves context from a vector store, and generates structured situation reports via Claude.",
    tags: ["RAG", "Claude", "Vector DB", "Streaming", "NLP"],
    status: "soon",
  },
];

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
  },
  "Ad-Hoc OLAP Query Engine": {
    "problem": "Explain grouped multi-feature queries with explicit contracts and reproducible inputs.",
    "example": "Compare grouped sums under separate predicates without arbitrary generated-code execution.",
    "dataSource": "Original source was not found in the initial inventory.",
    "verification": "A scoped replacement is pending; not marked shipped.",
    "limitations": "Planned rebuild; no verified existing query engine claimed."
  }
};
for (const project of legacyProjects) { Object.assign(project, reviewNotes[project.title] || {}); if (["Crisis Information Graph", "Securing Image Classifiers from Adversarial Attacks"].includes(project.title)) project.status="archive"; if(project.title==="Ad-Hoc OLAP Query Engine") project.status="soon"; }
