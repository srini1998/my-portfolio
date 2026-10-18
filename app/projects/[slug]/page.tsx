import { notFound } from "next/navigation";
import { legacyProjects, roadmapProjects } from "@/lib/data";
import { slugify } from "@/lib/project-language";
import { ProjectCase } from "@/components/ProjectCase";
const all = [...legacyProjects, ...roadmapProjects];
export function generateStaticParams() {
  return all.map((p) => ({ slug: slugify(p.title) }));
}
export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const p = all.find((p) => slugify(p.title) === params.slug);
  if (!p) notFound();
  return <ProjectCase project={p} />;
}
