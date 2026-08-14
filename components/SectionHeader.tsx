import { ScrambleText } from "@/components/ScrambleText";

interface SectionHeaderProps {
  index: number;
  title: string;
  subtitle?: string;
  invert?: boolean;
}

export function SectionHeader({ index, title, subtitle, invert = false }: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      <h2
        className={`sector-line font-display text-2xl font-bold tracking-tight md:text-3xl ${
          invert ? "text-carbon-900" : "text-white"
        }`}
      >
        <span
          className={`mr-1 font-mono text-base font-semibold md:text-lg ${
            invert ? "text-racing-dark" : "text-racing"
          }`}
          aria-hidden
        >
          {String(index).padStart(2, "0")}_/
        </span>
        <ScrambleText text={title} />
      </h2>
      {subtitle && (
        <p
          className={`mt-2 font-mono text-xs uppercase tracking-widest ${
            invert ? "text-carbon-900/60" : "text-silver-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
