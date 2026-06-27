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
    title: "LLM Code Review Assistant",
    description: "AI PR reviewer powered by Claude that integrates as a GitHub Actions step. Catches bugs, security flaws, and code smells in AI-generated diffs — directly addressing the code validation bottleneck.",
    bullets: [
      "Claude Sonnet analyzes git diffs for bugs, security vulnerabilities, and code smells with severity scoring.",
      "GitHub Actions workflow posts/updates a single structured comment per PR — no duplicate spam.",
      "Quality gate fails CI on critical issues; configurable --fail-on severity flag for pipeline integration.",
      "JSON, markdown, and terminal output formats; 14 tests all passing.",
    ],
    tags: ["Claude API", "LLM", "Python", "GitHub Actions", "FastAPI"],
    github: "https://github.com/srini1998/llm-code-review-assistant",
    demo: "https://llm-code-review.onrender.com/sample",
    status: "live",
  },
  {
    title: "LLM Inference Trace Analyzer",
    description: "Latency bottleneck detector for LLM inference traces from the NDIF framework. Surfaces per-layer timing anomalies, memory hotspots, and throughput regressions across model runs.",
    bullets: [
      "Parses NDIF trace format to extract per-layer timing, memory, and throughput metrics.",
      "Top-k slowest operation ranking with anomalous spike detection across multi-run trace sets.",
      "Built during Stevens Institute research under Prof. Hao Wang; 12 tests passing.",
    ],
    tags: ["Python", "LLM Inference", "Performance Analysis", "FastAPI", "Research"],
    github: "https://github.com/srini1998/llm-trace-analyzer",
    status: "live",
  },
  {
    title: "RAG Q&A Pipeline",
    description: "Production retrieval-augmented generation system with dual embedding backends — dense sentence-transformer vectors for semantic search and TF-IDF as a zero-dependency CI fallback.",
    bullets: [
      "Dense retrieval via all-MiniLM-L6-v2 (384-dim); normalized dot-product = cosine similarity.",
      "Auto-detects sentence-transformers availability; graceful TF-IDF fallback keeps CI green without PyTorch.",
      "Chunk-level source attribution and answer generation via Claude API; 18 tests passing.",
    ],
    tags: ["RAG", "Claude API", "Sentence Transformers", "Python", "FastAPI"],
    github: "https://github.com/srini1998/rag-pipeline",
    status: "live",
  },
  {
    title: "Music Recommender Engine",
    description: "Collaborative filtering recommender using matrix factorization (SVD) over implicit user-item interaction matrices, with cosine similarity fallback for cold-start scenarios.",
    bullets: [
      "SVD latent factor model with configurable rank; learns user and item embeddings jointly.",
      "Cosine similarity item-based fallback activates automatically for new users with no history.",
      "REST API with /recommend, /similar, and /stats endpoints; 13 tests passing.",
    ],
    tags: ["Python", "NumPy", "SVD", "Collaborative Filtering", "FastAPI"],
    github: "https://github.com/srini1998/music-recommender-engine",
    status: "live",
  },
  {
    title: "CI Pipeline Optimizer",
    description: "Analyzes GitHub Actions pipelines to surface slow jobs, flaky tests, and parallelization wins. Fetches live run data directly from the GitHub API and generates ASCII Gantt timelines.",
    bullets: [
      "Topological sort + dynamic programming to compute true critical path across job dependency graphs.",
      "Flakiness score: 1 − |failure_rate − 0.5| × 2 — identifies jobs with unpredictable pass/fail patterns.",
      "GitHub API integration (stdlib urllib, zero extra deps) — works without local JSON files.",
      "ASCII Gantt timeline, caching/sharding recommendations; 42 tests all passing.",
    ],
    tags: ["Python", "FastAPI", "GitHub Actions", "CI/CD", "Graph Algorithms"],
    github: "https://github.com/srini1998/ci-pipeline-optimizer",
    demo: "https://ci-pipeline-optimizer.onrender.com/sample",
    status: "live",
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
    demo: "https://api-gateway-demo.onrender.com/simulate",
    status: "live",
  },
  {
    title: "Redis Rate Limiter",
    description: "Production-grade distributed rate limiter with four algorithms as atomic Lua scripts — eliminating TOCTOU race conditions entirely.",
    bullets: [
      "Token Bucket, Fixed Window, Leaky Bucket, and Sliding Window (ZSET-based) algorithms.",
      "All ops are single atomic Lua scripts; sliding window uses µs-precision UIDs to avoid collisions.",
      "22 tests covering allow/deny/retry-after/reset across all algorithms with fakeredis.",
    ],
    tags: ["Redis", "Lua", "Python", "FastAPI", "Distributed Systems"],
    github: "https://github.com/srini1998/redis-rate-limiter",
    demo: "https://redis-rate-limiter.onrender.com/check_sample",
    status: "live",
  },
  {
    title: "Real-Time OLAP Dashboard",
    description: "Streaming event pipeline with sliding window analytics. Ingests time-series events and computes rolling P95/P99 percentiles, group-by aggregations, and multi-window metrics in real time.",
    bullets: [
      "In-memory sliding window engine with configurable size and step intervals.",
      "COUNT, SUM, AVG, MIN, MAX, P95/P99 percentile aggregations per window.",
      "REST API for event ingestion and live metric queries; 14 tests passing.",
    ],
    tags: ["Python", "FastAPI", "Streaming", "OLAP", "Window Functions"],
    github: "https://github.com/srini1998/olap-analytics-dashboard",
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
    items: ["Python", "Java", "SQL", "JavaScript", "TypeScript"],
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
  location: "Jersey City, NJ",
};
