import { Marquee } from "@/components/Marquee";
import { FireParticles } from "@/components/FireParticles";

const institutions = [
  "STEVENS INSTITUTE OF TECHNOLOGY",
  "ACCENTURE",
  "GITAM UNIVERSITY",
  "NDIF RESEARCH",
];

export function Partners() {
  return (
    <section className="section-light relative overflow-hidden border-y border-carbon-900/10 py-10 md:py-14">
      <FireParticles tone="dark" />
      <p className="relative mx-auto mb-6 max-w-[1800px] px-5 font-mono text-xs uppercase tracking-widest text-carbon-900/50 sm:px-8 lg:px-16">
        Institutions & companies I&apos;ve worked with
      </p>
      <Marquee items={institutions} tone="light" />
    </section>
  );
}
