import type { Metadata } from "next";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MotionProvider } from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Krishna Sai Srinivas Venigalla — AI/ML Engineer",
  description:
    "Portfolio of Krishna Sai Srinivas Venigalla — MS CS Stevens Institute of Technology, AI/ML engineer, LLM researcher, and 4-year Accenture backend engineer.",
  openGraph: {
    title: "Krishna Sai Srinivas Venigalla",
    description: "AI/ML Engineer | MS CS @ Stevens | LLM Researcher",
    url: "https://krishna.dev",
    siteName: "Krishna Venigalla Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Cursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
