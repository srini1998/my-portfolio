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
  {
    title: "RL Racing Strategy Optimizer",
    description:
      "Reinforcement learning agent trained to optimize pit-stop timing, tyre strategy, and overtaking decisions across a simulated F1 race season.",
    tags: ["Reinforcement Learning", "PyTorch", "OpenAI Gym", "Python", "Simulation"],
    status: "soon",
  },
  {
    title: "AR Gaming Dungeon Master",
    description:
      "An augmented-reality D&D Dungeon Master using A-Frame for the AR layer and Claude for dynamic narrative generation and NPC dialogue.",
    tags: ["A-Frame", "Claude", "AR", "WebXR", "JavaScript"],
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
