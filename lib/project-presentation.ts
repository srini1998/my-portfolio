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
      "Train on real soccer seasons. See whether a new model earns its place in the starting lineup.",
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
      "Compare soccer teams at home and away, then check every number with independent SQL.",
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
    summary:
      "Break a backend mid-run and watch the gateway reroute, retry and protect the rest.",
    visual: "signal",
    category: "Backend systems",
  },
  "Real-Time OLAP Dashboard": {
    name: "Sales Stream",
    summary:
      "Replay a real Formula 1 race and keep the timing answers right when events arrive twice or late.",
    visual: "data",
    category: "Data engineering",
  },
  "Redis Rate Limiter": {
    name: "Rate Limiter",
    summary:
      "Send one burst to six rate limiters and see who each lets through, even with skewed clocks.",
    visual: "signal",
    category: "Backend systems",
  },
  "RAG Q&A Pipeline": {
    name: "Document Q&A",
    summary:
      "Ask a question, read the retrieved passages and open the exact source behind each answer.",
    visual: "data",
    category: "Information retrieval",
  },
  "CI Pipeline Optimizer": {
    name: "CI Optimizer",
    summary:
      "Find the build jobs that really set a pipeline\u2019s length, then test caching and sharding.",
    visual: "code",
    category: "Developer tools",
  },
  "LLM Code Review Assistant": {
    name: "Code Review Assistant",
    summary:
      "Paste a diff and see findings marked beside the exact lines, with measured precision and recall.",
    visual: "code",
    category: "Developer tools",
  },
  "Music Recommender Engine": {
    name: "Music Recommender",
    summary:
      "Pick artists you like, then tune ten recommendations from familiar to adventurous.",
    visual: "model",
    category: "Recommendation systems",
  },
  "Crisis Information Graph": {
    name: "Crisis Information Graph",
    summary:
      "Explore hurricane impacts as a graph where every relation cites its source report.",
    visual: "globe",
    category: "Graph analytics",
  },
  "Securing Image Classifiers from Adversarial Attacks": {
    name: "Adversarial Vision",
    summary:
      "Attack two small image classifiers in your browser and see how little it takes to fool them.",
    visual: "model",
    category: "Adversarial ML",
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
