"use client";
import type { ReactNode } from "react";
// Keep the existing layout boundary; the portfolio is English-only.
export function PortfolioLanguage({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
