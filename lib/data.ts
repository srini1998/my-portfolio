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
    description:
      "Classified crisis-related tweets and extracted entities (locations, people, organizations) from the MDM dataset. Compared CNN, BERT, and traditional ML for classification and NER, then built a web app to visualize extracted data for emergency response scenarios.",
    tags: ["BERT", "CNN", "NLP", "NER", "Python", "Flask"],
    status: "live",
  },
  {
    title: "Ad-Hoc OLAP Query Engine",
    description:
      "Custom query processing engine supporting Multi-Feature (MF) and Extended Multi-Feature (EMF) queries over PostgreSQL. Generates standalone Python programs from extended relational algebra inputs, dynamically building an in-memory mf-structure to compute aggregates without relying on built-in DBMS aggregation.",
    tags: ["PostgreSQL", "Python", "OLAP", "Query Optimization", "DBMS"],
    status: "live",
  },
];

export const roadmapProjects: Project[] = [
  {
    title: "Auto-Apply Job Agent",
    description:
      "An autonomous agent that reads job postings, tailors applications, and submits them — powered by LangGraph orchestration and Claude for reasoning and generation.",
    tags: ["LangGraph", "Claude", "Python", "Agents", "NLP"],
    status: "soon",
    comingSoonLabel: "Q3 2025",
  },
  {
    title: "Real-Time Crisis Intelligence Agent",
    description:
      "Extends the Crisis Information Graph into a live RAG pipeline — ingests streaming social data, retrieves context, and generates structured situation reports via Claude.",
    tags: ["RAG", "Claude", "Vector DB", "Streaming", "NLP"],
    status: "soon",
    comingSoonLabel: "Q3 2025",
  },
  {
    title: "Hybrid Financial Analyst",
    description:
      "Combines LSTM time-series forecasting with an LLM reasoning layer to analyze market signals and generate human-readable investment insights.",
    tags: ["LSTM", "LLM", "PyTorch", "Finance", "Claude"],
    status: "soon",
    comingSoonLabel: "Q4 2025",
  },
  {
    title: "AR Gaming Dungeon Master",
    description:
      "An augmented-reality D&D Dungeon Master using A-Frame for the AR layer and Claude for dynamic narrative generation and NPC dialogue.",
    tags: ["A-Frame", "Claude", "AR", "WebXR", "JavaScript"],
    status: "soon",
    comingSoonLabel: "Q1 2026",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "AI / ML Frameworks",
    items: ["PyTorch", "TensorFlow", "BERT", "Hugging Face", "LangGraph", "scikit-learn"],
  },
  {
    category: "Backend & Tools",
    items: ["Java EE", "PostgreSQL", "Git", "Postman", "JIRA", "Selenium", "BDD-Cucumber"],
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
