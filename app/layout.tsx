import type { Metadata } from "next";
import "./globals.css";
import { PortfolioLanguage } from "@/components/PortfolioLanguage";
export const metadata: Metadata = {
  title: "Srinivas Venigalla — AI & Systems Engineering",
  description:
    "Software engineer building useful tools with AI, backend systems and data. Explore working demos, source code and engineering case studies.",
  openGraph: {
    title: "Srinivas Venigalla — Software Engineer",
    description: "AI / ML · Backend · Reliability",
    url: "https://my-portfolio-three-omega-46.vercel.app",
    siteName: "Srinivas Venigalla Portfolio",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PortfolioLanguage>{children}</PortfolioLanguage>
      </body>
    </html>
  );
}
