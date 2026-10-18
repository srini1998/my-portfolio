import type { Metadata } from "next";
import { ProjectArchive } from "@/components/ProjectArchive";
export const metadata: Metadata = {
  title: "Project folders — Srinivas Venigalla",
  description:
    "Thirteen more engineering projects: open the folders for case studies, demos and source code.",
};
export default function Archive() {
  return <ProjectArchive />;
}
