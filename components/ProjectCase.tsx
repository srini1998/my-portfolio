"use client";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { projectJapanese } from "@/lib/project-language";
import { usePortfolio } from "./PortfolioLanguage";
export function ProjectCase({ project: p }: { project: Project }) {
  const { ja, dark, t, toggleLanguage, toggleTheme } = usePortfolio();
  return (
    <main className="case-page">
      <header>
        <Link href="/#work">← {t("All projects", "すべての制作")}</Link>
        <div>
          <button onClick={toggleLanguage}>{ja ? "English" : "日本語"}</button>
          <button onClick={toggleTheme}>
            {dark ? t("Light", "ライト") : t("Dark", "ダーク")}
          </button>
        </div>
      </header>
      <div className="case-intro">
        <p className="folio-eyebrow">
          {t("THE JOB / THE EVIDENCE / THE LIMITS", "用途・根拠・限界")}
        </p>
        <h1>{p.title}</h1>
        <p className="case-deck">
          {ja ? (projectJapanese[p.title] ?? p.description) : p.description}
        </p>
        <p className="access-note">
          {p.access ??
            t(
              "Source implementation; hosted execution is not asserted.",
              "ソースの実装。ホスト上の実行は主張しません。",
            )}
        </p>
        <div className="project-links">
          {p.demo && (
            <a href={p.demo} className="case-primary">
              {t("Open the product", "プロダクトを開く")} ↗
            </a>
          )}
          {p.github && <a href={p.github}>GitHub ↗</a>}
        </div>
      </div>
      {ja && (
        <p className="case-language-note">
          {t("", "技術的な根拠は、元の英語の記録をそのまま掲載しています。")}
        </p>
      )}
      <div className="case-sections">
        {[
          ["The problem", "課題", p.problem],
          ["A concrete example", "具体例", p.example],
          ["Data and model", "データとモデル", p.dataSource],
          ["What was actually verified", "実際に検証したこと", p.verification],
          ["Limitations", "限界", p.limitations],
        ].map(([en, jp, value]) => (
          <section key={en}>
            <h2>{ja ? jp : en}</h2>
            <p lang="en">
              {value ??
                t(
                  "Refer to the source; no additional behavior is claimed.",
                  "詳細はソースを参照してください。追加の動作は主張しません。",
                )}
            </p>
          </section>
        ))}
      </div>
      <section className="case-components">
        <h2>{t("Components used", "使用した技術")}</h2>
        <div className="project-tags">
          {p.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      <footer>
        <Link href="/#work">
          ← {t("Back to the cabinet", "引き出しに戻る")}
        </Link>
        <span>SV / 2026</span>
      </footer>
    </main>
  );
}
