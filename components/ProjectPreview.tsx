import Image from "next/image";
import { slugify } from "@/lib/project-language";
import { presentation } from "@/lib/project-presentation";
import { TechnicalArt } from "./TechnicalArt";
const previews = new Set([
  "breakroom-supabase-reliability-suite",
  "signalworks",
  "multi-agent-code-generation-system",
  "mlops-pipeline",
  "real-time-crisis-intelligence-agent",
  "ad-hoc-olap-query-engine",
  "pocketops",
  "llm-evaluation-harness",
  "neon-expedition",
  "distributed-api-gateway",
  "real-time-olap-dashboard",
  "redis-rate-limiter",
  "rag-q-a-pipeline",
  "ci-pipeline-optimizer",
  "llm-code-review-assistant",
  "music-recommender-engine",
  "crisis-information-graph",
  "securing-image-classifiers-from-adversarial-attacks",
]);
export function ProjectPreview({ title }: { title: string }) {
  const slug = slugify(title),
    v = presentation(title);
  return previews.has(slug) ? (
    <div className="product-preview">
      <Image
        src={"/previews/" + slug + ".png"}
        width={1200}
        height={800}
        unoptimized
        alt={v.name + " — actual project interface"}
        sizes="(max-width:800px) 90vw, 45vw"
      />
      <span>ACTUAL PRODUCT VIEW / {v.name}</span>
    </div>
  ) : (
    <TechnicalArt kind={v.visual} />
  );
}
