import type { Metadata } from "next";
import "./globals.css";
import { PortfolioLanguage } from "@/components/PortfolioLanguage";
export const metadata: Metadata = {
  title: "Srinivas Venigalla — AI & Systems Engineering",
  description:
    "Useful tools, honest experiments. Try browser AI, data and reliability projects, then inspect the source, verification and limits.",
  openGraph: {
    title: "Srinivas Venigalla — Engineering with receipts",
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
