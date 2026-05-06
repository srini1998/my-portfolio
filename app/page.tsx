import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { LegacyProjects } from "@/components/LegacyProjects";
import { Roadmap } from "@/components/Roadmap";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Experience />
        <LegacyProjects />
        <Roadmap />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
