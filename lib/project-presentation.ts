import { legacyProjects } from "./data";
export const presentations: Record<
  string,
  { name: string; summary: string; visual: string; category: string }
> = {
  "Breakroom · Supabase reliability suite": {
    name: "Breakroom",
    summary:
      "Catch permission leaks, duplicate actions and broken imports before your users do.",
    visual: "database",
    category: "Database systems",
  },
  Signalworks: {
    name: "Signalworks",
    summary:
      "Explore real gaming player counts and catch the missing fields that can break a dashboard.",
    visual: "signal",
    category: "Observability",
  },
  "Multi-Agent Code Generation System": {
    name: "Pair Bench",
    summary:
      "Does a team of AI coders write better Python? Run the tests and find out.",
    visual: "code",
    category: "AI evaluation",
  },
  "MLOps Pipeline": {
    name: "Current",
    summary:
      "Train on real football seasons. See whether a new model earns its place in the starting lineup.",
    visual: "model",
    category: "Machine learning",
  },
  "Real-Time Crisis Intelligence Agent": {
    name: "Fieldbrief",
    summary:
      "Check earthquakes, storms and fires near your next destination, with the official reports one click away.",
    visual: "globe",
    category: "Live data systems",
  },
  "Ad-Hoc OLAP Query Engine": {
    name: "Crosscut",
    summary:
      "Compare football teams at home and away, then check every number with independent SQL.",
    visual: "data",
    category: "Data engineering",
  },
  PocketOps: {
    name: "PocketOps",
    summary:
      "Review a proposed code repair, approve the exact changes, then run the tests.",
    visual: "code",
    category: "Developer tools",
  },
  "LLM Evaluation Harness": {
    name: "Answer Key",
    summary:
      "Find out whether a new AI prompt answers more questions correctly—or just sounds more confident.",
    visual: "model",
    category: "AI evaluation",
  },
  "Neon Expedition": {
    name: "Neon Expedition",
    summary:
      "Teach a game agent to escape a maze, then watch the route it learned.",
    visual: "game",
    category: "Reinforcement learning",
  },
  "Distributed API Gateway": {
    name: "API Gateway",
    summary: "Keep a failing service from taking every request down with it.",
    visual: "signal",
    category: "Backend systems",
  },
  "Real-Time OLAP Dashboard": {
    name: "Sales Stream",
    summary: "Count sales once, even when the same event arrives twice.",
    visual: "data",
    category: "Data engineering",
  },
  "Redis Rate Limiter": {
    name: "Rate Limiter",
    summary: "Give each request a fair turn when too many arrive at once.",
    visual: "signal",
    category: "Backend systems",
  },
  "RAG Q&A Pipeline": {
    name: "Document Q&A",
    summary:
      "Find the passages that answer a question, with sources you can inspect.",
    visual: "data",
    category: "Information retrieval",
  },
  "CI Pipeline Optimizer": {
    name: "CI Optimizer",
    summary:
      "See which build jobs make a release slow and what depends on them.",
    visual: "code",
    category: "Developer tools",
  },
  "LLM Code Review Assistant": {
    name: "Code Review Assistant",
    summary: "Get a first pass on a code change before a human reviews it.",
    visual: "code",
    category: "Developer tools",
  },
  "Music Recommender Engine": {
    name: "Music Recommender",
    summary: "Use song ratings to suggest tracks a listener has not tried yet.",
    visual: "model",
    category: "Recommendation systems",
  },
  "Crisis Information Graph": {
    name: "Crisis Information Graph",
    summary:
      "Research into sorting disaster posts and finding the people and places they mention.",
    visual: "globe",
    category: "Research archive",
  },
  "Securing Image Classifiers from Adversarial Attacks": {
    name: "Adversarial Vision",
    summary: "Research into how tiny image changes can fool a classifier.",
    visual: "model",
    category: "Research archive",
  },
};
const order = Object.keys(presentations);
export const rankedProjects = [...legacyProjects].sort(
  (a, b) => order.indexOf(a.title) - order.indexOf(b.title),
);
export const presentation = (title: string) =>
  presentations[title] ?? {
    name: title,
    summary: legacyProjects.find((p) => p.title === title)?.description ?? "",
    visual: "code",
    category: "Engineering",
  };
