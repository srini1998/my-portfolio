import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, type AccordionItem } from "@/components/Accordion";

const faqs: AccordionItem[] = [
  {
    q: "What kind of roles are you looking for?",
    a: "Open to work — full-time AI/ML engineering, LLM research, or backend systems roles.",
  },
  {
    q: "Are you open to relocation?",
    a: "Yes — based in Jersey City, NJ and open to relocating for the right role.",
  },
  {
    q: "Do you have industry experience, or just research?",
    a: "Both. 4 years as a Software Engineering Analyst at Accenture before starting my MS, plus NDIF research at Stevens under Prof. Hao Wang.",
  },
  {
    q: "What's your tech stack?",
    a: "Python and Java day-to-day, FastAPI / PostgreSQL / Redis for backend systems, and PyTorch / Hugging Face / Claude API for ML and LLM work.",
  },
  {
    q: "Can I see your code?",
    a: "Every project on this site links to a public GitHub repo, and most have a live demo you can try directly.",
  },
  {
    q: "How do I get in touch?",
    a: "Email or LinkedIn — both are linked below and respond fastest.",
  },
];

export function FAQ() {
  return (
    <section className="relative flex min-h-full flex-col justify-center py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-16">
        <SectionHeader index={6} title="FAQs" />
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
