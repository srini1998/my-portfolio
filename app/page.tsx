import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pitch } from "@/components/Pitch";
import { Skills } from "@/components/Skills";
import { LegacyProjects } from "@/components/LegacyProjects";
import { Roadmap } from "@/components/Roadmap";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParallaxGrid } from "@/components/ParallaxGrid";
import { ScrollSnap } from "@/components/ScrollSnap";

const sections = [
  { id: "hero", content: <Hero /> },
  { id: "pitch", content: <Pitch /> },
  { id: "skills", content: <Skills /> },
  { id: "projects", content: <LegacyProjects /> },
  { id: "roadmap", content: <Roadmap /> },
  { id: "experience", content: <Experience /> },
  { id: "about", content: <About /> },
  { id: "faqs", content: <FAQ /> },
  {
    id: "contact",
    content: (
      <div className="flex min-h-full flex-col justify-center">
        <Contact />
        <Partners />
        <Footer />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Fixed dot-matrix background — behind all content */}
      <ParallaxGrid />

      <Nav />

      {/* z-10 lifts page content above the fixed grid layer. On desktop this
          becomes a full-page scroll-snap sequence (see ScrollSnap); on
          mobile/reduced-motion it falls back to plain normal-flow scroll. */}
      <main className="relative z-10">
        <ScrollSnap sections={sections} />
      </main>
    </>
  );
}
