import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { LegacyProjects } from "@/components/LegacyProjects";
import { Roadmap } from "@/components/Roadmap";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ParallaxGrid } from "@/components/ParallaxGrid";

export default function Home() {
  return (
    <>
      {/* Fixed dot-matrix background — behind all content */}
      <ParallaxGrid />

      <Nav />

      {/* z-10 lifts page content above the fixed grid layer */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <AnimatedSection><Skills /></AnimatedSection>
        <AnimatedSection><LegacyProjects /></AnimatedSection>
        <AnimatedSection><Roadmap /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>
    </>
  );
}
