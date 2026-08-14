interface AccentMarkProps {
  className?: string;
}

// Floating reticle/corner-mark icon — the small target-style glyphs the
// reference site scatters at section corners as pure decoration.
export function AccentMark({ className }: AccentMarkProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 1.5v3.5M12 19v3.5M1.5 12h3.5M19 12h3.5" />
    </svg>
  );
}
