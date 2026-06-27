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
  status: "live" | "soon";
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
    location: "Hoboken, NJ",
    active: true,
    bullets: [
      "Working under Prof. Hao Wang on the NDIF research project — empirical analysis of large-scale LLM model traces.",
      "Collecting, organizing, and analyzing trace data to extract meaningful performance metrics.",
      "Preparing research documentation and evaluations to support the NDIF framework.",
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
    title: "CI Pipeline Optimizer",
    description: "Analyzes GitHub Actions pipelines to surface slow jobs, flaky tests, and parallelization wins. Supports live GitHub API data and generates ASCII Gantt timelines with critical-path analysis.",
    bullets: [
      "Topological sort + dynamic programming to compute critical path across job dependency graphs.",
      "Flakiness score: 1 − |failure_rate − 0.5| × 2 — detects erratic pass/fail patterns accurately.",
      "GitHub API integration (stdlib urllib, no extra deps) — fetch live run history without local files.",
      "ASCII Gantt timeline and caching/sharding recommendations; 42 tests, all passing.",
    ],
    tags: ["Python", "FastAPI", "GitHub Actions", "CI/CD", "Graph Algorithms"],
    github: "https://github.com/srini1998/ci-pipeline-optimizer",
    demo: "https://ci-pipeline-optimizer.onrender.com/sample",
    status: "live",
  },
  {
    title: "LLM Code Review Assistant",
    description: "AI-powered PR reviewer that integrates as a GitHub Actions step. Posts structured review comments to pull requests with severity scoring, category tagging, and a quality gate that blocks merges on critical issues.",
    bullets: [
      "Claude claude-sonnet-4-6 reviews git diffs for bugs, security vulnerabilities, and code smells.",
      "GitHub Actions workflow posts/updates a single bot comment per PR — no duplicate spam.",
      "Quality gate: fails CI if critical issues > 0; warns if high-severity count exceeds threshold.",
      "Outputs terminal, markdown, and JSON formats with --fail-on severity flag for pipeline integration.",
    ],
    tags: ["Claude API", "Python", "FastAPI", "GitHub Actions", "LLM"],
    github: "https://github.com/srini1998/llm-code-review-assistant",
    demo: "https://llm-code-review.onrender.com/sample",
    status: "live",
  },
  {
    title: "Redis Rate Limiter",
    description: "Production-grade distributed rate limiter with four algorithms implemented as atomic Lua scripts in Redis — eliminating race conditions under concurrent load.",
    bullets: [
      "Four algorithms: Token Bucket, Fixed Window, Leaky Bucket, and Sliding Window (ZSET-based).",
      "All operations are single Lua scripts executed atomically — no TOCTOU race conditions.",
      "Sliding window uses microsecond-precision UIDs as ZADD members to avoid timestamp collisions.",
      "22 tests covering allow/deny/retry-after/reset across all four algorithms with fakeredis.",
    ],
    tags: ["Redis", "Lua", "Python", "FastAPI", "Distributed Systems"],
    github: "https://github.com/srini1998/redis-rate-limiter",
    demo: "https://redis-rate-limiter.onrender.com/check_sample",
    status: "live",
  },
  {
    title: "Distributed API Gateway",
    description: "Weighted round-robin load balancer with circuit breaker, rate limiting, and live HTTP proxying. Routes requests to real backends with automatic failure isolation and recovery.",
    bullets: [
      "Circuit breaker: CLOSED → OPEN → HALF_OPEN with configurable failure threshold and recovery probe.",
      "Weighted round-robin with per-backend health tracking and latency recording.",
      "Live HTTP proxy to real backends via httpx with hop-by-hop header stripping.",
      "30 tests including async proxy tests using httpx.MockTransport for transport-level injection.",
    ],
    tags: ["Python", "FastAPI", "httpx", "Circuit Breaker", "Load Balancing"],
    github: "https://github.com/srini1998/api-gateway",
    demo: "https://api-gateway-demo.onrender.com/simulate",
    status: "live",
  },
  {
    title: "RAG Q&A Pipeline",
    description: "Full retrieval-augmented generation system with dual embedding backends — dense sentence-transformer vectors for production and TF-IDF sparse vectors as a zero-dependency fallback.",
    bullets: [
      "Dense retrieval via sentence-transformers all-MiniLM-L6-v2 (384-dim, normalized dot-product cosine).",
      "TF-IDF fallback activates automatically when sentence-transformers is not installed.",
      "Chunk-level retrieval with source attribution; answer generation via Claude API.",
      "18 tests passing across both embedding backends with no PyTorch required in CI.",
    ],
    tags: ["Python", "FastAPI", "RAG", "Claude API", "Sentence Transformers", "TF-IDF"],
    github: "https://github.com/srini1998/rag-pipeline",
    status: "live",
  },
  {
    title: "Music Recommender Engine",
    description: "Collaborative filtering recommendation engine using matrix factorization (SVD) over implicit user-item interaction matrices, with cosine similarity for item-based fallback.",
    bullets: [
      "SVD-based latent factor model with configurable rank for user/item embeddings.",
      "Cosine similarity item-based fallback for cold-start scenarios without user history.",
      "REST API with /recommend, /similar, and /stats endpoints; 13 tests all passing.",
    ],
    tags: ["Python", "FastAPI", "NumPy", "SVD", "Collaborative Filtering"],
    github: "https://github.com/srini1998/music-recommender-engine",
    status: "live",
  },
  {
    title: "OLAP Analytics Dashboard",
    description: "Streaming event pipeline with real-time window function analytics. Ingests time-series events and computes rolling aggregations, percentiles, and group-by metrics on a sliding time window.",
    bullets: [
      "In-memory sliding window engine with configurable window sizes and step intervals.",
      "Supports COUNT, SUM, AVG, MIN, MAX, and P95/P99 percentile aggregations per window.",
      "REST API for event ingestion and live metric queries; 14 tests passing.",
    ],
    tags: ["Python", "FastAPI", "Streaming", "OLAP", "Window Functions"],
    github: "https://github.com/srini1998/olap-analytics-dashboard",
    status: "live",
  },
  {
    title: "LLM Inference Trace Analyzer",
    description: "Bottleneck detection tool for NDIF LLM inference traces. Parses raw trace logs, identifies latency hotspots by layer and operation type, and generates structured performance reports.",
    bullets: [
      "Parses NDIF trace format to extract per-layer timing, memory, and throughput metrics.",
      "Identifies top-k slowest operations and flags anomalous latency spikes across trace runs.",
      "Built for Stevens Institute NDIF research project under Prof. Hao Wang; 12 tests passing.",
    ],
    tags: ["Python", "FastAPI", "LLM", "Performance Analysis", "Research"],
    github: "https://github.com/srini1998/llm-trace-analyzer",
    status: "live",
  },
  {
    title: "Crisis Information Graph",
    description: "NLP pipeline to classify crisis tweets and extract structured entities for emergency response visualization.",
    bullets: [
      "Classified crisis-related tweets from the MDM dataset using CNN, BERT, and traditional ML baselines.",
      "Performed Named Entity Recognition (NER) to extract locations, people, and organizations.",
      "Benchmarked BERT against CNN and TF-IDF classifiers across accuracy, F1, and inference speed.",
      "Built a Flask web app to visualize extracted entity graphs for real-time emergency response use.",
    ],
    tags: ["BERT", "CNN", "NLP", "NER", "Python", "Flask"],
    status: "live",
  },
  {
    title: "Securing Image Classifiers from Adversarial Attacks",
    description: "Adversarial robustness study on ResNet-18 trained on CIFAR-100, with a full adversarial training defense pipeline.",
    bullets: [
      "Studied PGD (Projected Gradient Descent) adversarial attacks on a ResNet-18 / CIFAR-100 baseline.",
      "Implemented adversarial training loop using PyTorch and Torchattacks library.",
      "Measured accuracy degradation under attack vs. defended model across multiple epsilon budgets.",
      "Achieved measurable defense improvement without significant clean-accuracy regression.",
    ],
    tags: ["PyTorch", "ResNet-18", "CIFAR-100", "Adversarial ML", "Torchattacks"],
    status: "live",
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
    status: "live",
  },
];

export const roadmapProjects: Project[] = [
  {
    title: "Real-Time Crisis Intelligence Agent",
    description:
      "Extends the Crisis Information Graph into a live RAG pipeline — ingests streaming social data, retrieves context, and generates structured situation reports via Claude.",
    tags: ["RAG", "Claude", "Vector DB", "Streaming", "NLP"],
    status: "soon",
  },
  {
    title: "Cloud-Native MLOps Pipeline",
    description:
      "An end-to-end automated deployment system on AWS. Features automated model retraining triggered by S3 data uploads, CI/CD testing via GitHub Actions, and production-grade deployment to SageMaker.",
    tags: ["AWS", "SageMaker", "GitHub Actions", "CI/CD", "MLOps", "S3"],
    status: "soon",
  },
  {
    title: "Distributed RL Traffic Optimizer (New York Edition)",
    description:
      "A multi-agent reinforcement learning system designed to optimize traffic signal timings in a simulated urban grid. Built using Ray RLLib and OpenAI Gym to reduce congestion and carbon emissions in high-density areas.",
    tags: ["Ray RLLib", "OpenAI Gym", "Reinforcement Learning", "Python", "Simulation"],
    status: "soon",
  },
  {
    title: "Hybrid Financial Analyst",
    description:
      "Combines LSTM time-series forecasting with an LLM reasoning layer to analyze market signals and generate human-readable investment insights.",
    tags: ["LSTM", "LLM", "PyTorch", "Finance", "Claude"],
    status: "soon",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "AI / ML Frameworks",
    items: ["PyTorch", "TensorFlow", "BERT", "Hugging Face", "LangGraph", "scikit-learn", "Reinforcement Learning"],
  },
  {
    category: "Backend & Tools",
    items: ["Java EE", "PostgreSQL", "Git", "AWS", "CI/CD", "Postman", "JIRA", "Selenium", "BDD-Cucumber"],
  },
  {
    category: "Concepts",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "RAG",
      "LLM Evaluation",
      "OLAP / Query Optimization",
      "Agile / SDLC",
    ],
  },
];

export const contact = {
  email: "sriniusvenigalla@gmail.com",
  linkedin: "https://linkedin.com/in/srinivas-venigalla-skywalker",
  github: "https://github.com/KrishSrini",
  location: "Jersey City, NJ",
};
