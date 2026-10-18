"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { legacyProjects, experiences, skills, contact } from "@/lib/data";
import { projectJapanese, slugify } from "@/lib/project-language";
import { usePortfolio } from "./PortfolioLanguage";
const chapters = [
  ["cover", "Cover", "表紙"],
  ["contents", "Contents", "目次"],
  ["about", "About", "自己紹介"],
  ["work", "Work", "制作"],
  ["process", "Process", "工程"],
  ["words", "Words", "考察"],
  ["contact", "Contact", "連絡"],
];
const labels: Record<string, string> = {
  Signalworks: "Signalworks",
  "Real-Time Crisis Intelligence Agent": "Fieldbrief",
  "Multi-Agent Code Generation System": "Pair Bench",
  "MLOps Pipeline": "Current",
  "LLM Evaluation Harness": "Answer Key",
  "Ad-Hoc OLAP Query Engine": "Crosscut",
};
const folders = [
  "Signalworks",
  "Real-Time Crisis Intelligence Agent",
  "Multi-Agent Code Generation System",
  "MLOps Pipeline",
  "LLM Evaluation Harness",
  "Ad-Hoc OLAP Query Engine",
];
export function FolderPortfolio() {
  const { ja, dark, t, toggleLanguage, toggleTheme } = usePortfolio(),
    [active, setActive] = useState(0),
    [filter, setFilter] = useState("all");
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!root.current) return;
    const elements = chapters
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            const n = chapters.findIndex(([id]) => id === e.target.id);
            if (n >= 0) setActive(n);
          }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".cover-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        clearProps: "all",
      });
      gsap.from(".cover-folders .file-folder", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        delay: 0.3,
        clearProps: "all",
      });
    }, root);
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement)?.tagName,
        )
      )
        return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const n = Math.max(
          0,
          Math.min(6, active + (e.key === "ArrowRight" ? 1 : -1)),
        );
        document.getElementById(chapters[n][0])?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        });
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [active]);
  const filtered = legacyProjects.filter(
    (p) =>
      filter === "all" ||
      (filter === "live"
        ? !!p.demo
        : filter === "research"
          ? p.status === "archive"
          : !p.demo && p.status !== "archive"),
  );
  function meta(n: number) {
    return (
      <div className="sheet-meta">
        <span>2026 / ENGINEERING</span>
        <span>AI · DATA · SYSTEMS</span>
        <span>{ja ? chapters[n][2] : chapters[n][1]}</span>
        <span>0{n + 1} / 07</span>
      </div>
    );
  }
  return (
    <div ref={root} className="folio">
      <a href="#work" className="skip-link">
        {t("Skip to projects", "制作へスキップ")}
      </a>
      <header className="masthead">
        <a href="#cover" className="masthead-word">
          SV / PORTFOLIO<span>®</span>
        </a>
        <div>
          <span>
            {t(
              "Build carefully. Show the evidence.",
              "丁寧に作り、根拠を示す。",
            )}
          </span>
          <button onClick={toggleLanguage}>{ja ? "English" : "日本語"}</button>
          <button
            onClick={toggleTheme}
            aria-label={t("Toggle color theme", "テーマを切り替える")}
          >
            {dark ? t("Light", "ライト") : t("Dark", "ダーク")}
          </button>
        </div>
      </header>
      <nav
        className="chapter-nav"
        aria-label={t("Portfolio chapters", "ポートフォリオの章")}
      >
        <span className="page-counter">
          0{active + 1}
          <small>/07</small>
        </span>
        {chapters.map(([id, en, jp], i) => (
          <a
            key={id}
            href={"#" + id}
            aria-current={active === i ? "page" : undefined}
          >
            {ja ? jp : en}
          </a>
        ))}
      </nav>
      <main className="folio-pages">
        <section id="cover" className="folio-sheet cover-sheet">
          <div className="cover-green">{meta(0)}</div>
          <div className="cover-body">
            <div className="blueprint" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <p className="outline-title cover-reveal">PORTFOLIO</p>
            <div className="cover-intro">
              <div className="cover-reveal">
                <p className="folio-eyebrow">KRISHNA SAI SRINIVAS VENIGALLA</p>
                <h1>
                  {t("Engineering", "根拠のある")}
                  <br />
                  <span>{t("with receipts.", "エンジニアリング。")}</span>
                </h1>
              </div>
              <div className="cover-copy cover-reveal">
                <span className="name-pill">
                  Srinivas Venigalla <span>↘</span>
                </span>
                <p className="specialties">AI / ML · BACKEND · RELIABILITY</p>
                <p>
                  {t(
                    "I build systems you can try, inspect and question. Four years in backend engineering. Research in LLM traces. Now, small useful tools with real inputs and measurable limits.",
                    "試せて、調べられて、問い直せるシステムを作ります。バックエンド開発4年と LLM トレース研究を経て、実際の入力と測定可能な限界を持つツールを制作しています。",
                  )}
                </p>
                <a href="#work">
                  {t("Open the project cabinet", "制作の引き出しを開く")} ↗
                </a>
              </div>
            </div>
          </div>
          <div className="cover-folders">
            {folders.map((title, i) => {
              const p = legacyProjects.find((p) => p.title === title)!;
              return (
                <Link
                  href={"/projects/" + slugify(title)}
                  className={"file-folder folder-" + i}
                  key={title}
                >
                  <span className="folder-tab">
                    0{i + 1} / {t("OPEN FILE", "開く")} ↗
                  </span>
                  <h2>{labels[title]}</h2>
                  <p>{p.tags.slice(0, 2).join(" · ")}</p>
                  <span className="folder-corner">0{i + 1}</span>
                </Link>
              );
            })}
          </div>
        </section>
        <section id="contents" className="folio-sheet contents-sheet">
          {meta(1)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">CONTENTS</h2>
              <span>{t("(Open a folder.)", "（フォルダを開く。）")}</span>
            </div>
            <p className="section-deck">
              {t(
                "A few ways into the work. Start with a live tool, or follow the evidence behind it.",
                "制作への入り口。動くツールから始めても、その裏側の根拠から読んでも。",
              )}
            </p>
            <div className="contents-grid">
              {chapters.slice(2).map(([id, en, jp], i) => (
                <a
                  href={"#" + id}
                  className={"contents-folder contents-" + i}
                  key={id}
                >
                  <span>CHAPTER 0{i + 3}</span>
                  <h3>{ja ? jp : en}</h3>
                  <p>
                    {t(
                      [
                        "The person behind the systems.",
                        "Useful tools. Honest experiments.",
                        "How a project earns a release.",
                        "What the experiments changed.",
                        "Start a conversation.",
                      ][i],
                      [
                        "システムを作る人。",
                        "役立つツールと、正直な実験。",
                        "リリースまでの検証。",
                        "実験から学んだこと。",
                        "話を始める。",
                      ][i],
                    )}
                  </p>
                  <span>{t("OPEN CHAPTER", "章を開く")} ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="folio-sheet">
          {meta(2)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">ABOUT</h2>
              <span>{t("(A little context.)", "（少し自己紹介。）")}</span>
            </div>
            <div className="about-grid">
              <div>
                <p className="folio-eyebrow">JERSEY CITY, NJ / ENGINEERING</p>
                <h3>
                  {t("Srinivas", "スリニヴァス")}
                  <br />
                  {t("Venigalla.", "ヴェニガラ。")}
                </h3>
                <p>
                  {t(
                    "My work sits between models and the systems people depend on. I care about the parts that are easy to miss: a retry that counts twice, a confident answer without support, an alert that disappears with its data.",
                    "モデルと、人が頼るシステムの間を作っています。再試行の二重計上、根拠のない自信に満ちた回答、データと一緒に消える警報。見落とされやすい部分に関心があります。",
                  )}
                </p>
                <div className="education-note">
                  <span>MS / COMPUTER SCIENCE</span>
                  <strong>Stevens Institute of Technology</strong>
                  <p>2024–2026 · Hoboken, NJ</p>
                </div>
              </div>
              <div className="experience-list">
                {experiences.map((e, i) => (
                  <article key={e.company}>
                    <span>{e.period}</span>
                    <h4>{e.company}</h4>
                    <p>
                      {ja
                        ? [
                            "研究助手 · LLM トレースの収集、性能分析、研究文書。",
                            "ソフトウェアエンジニアリング · Java/Python バックエンドと UI/API テスト。",
                            "インターン · 学生向けキャリア推薦チャットボット。",
                          ][i]
                        : e.role}
                    </p>
                    <p className="experience-detail">
                      {ja
                        ? [
                            "Prof. Hao Wang のもと NDIF 研究に参加。",
                            "教育・小売の顧客向けに、Agile チームで開発。",
                            "関心に基づく進路探しを支援。",
                          ][i]
                        : e.bullets[0]}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <div className="skill-lines">
              {skills.map((group, i) => (
                <div key={group.category}>
                  <h4>
                    {ja
                      ? ["AI / 機械学習", "言語", "基盤・バックエンド", "概念"][
                          i
                        ]
                      : group.category}
                  </h4>
                  <p>{group.items.join(" / ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="folio-sheet work-sheet">
          {meta(3)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">WORK</h2>
              <span>
                {t("(Open. Try. Inspect.)", "（開く。試す。調べる。）")}
              </span>
            </div>
            <div className="work-intro">
              <p className="section-deck">
                {t(
                  "Newest builds first. Live products up front; source, tests and limitations a click away.",
                  "新しい制作から順に。動くプロダクトを手前に、ソース・検証・限界はその先に。",
                )}
              </p>
              <div
                className="work-filters"
                role="group"
                aria-label={t("Filter projects", "制作を絞り込む")}
              >
                {[
                  ["all", "All", "すべて"],
                  ["live", "Demos", "デモ"],
                  ["systems", "Systems", "システム"],
                  ["research", "Research", "研究"],
                ].map(([id, en, jp]) => (
                  <button
                    key={id}
                    aria-pressed={filter === id}
                    onClick={() => setFilter(id)}
                  >
                    {ja ? jp : en}
                  </button>
                ))}
              </div>
            </div>
            <div className="project-grid">
              {filtered.map((p) => {
                const i = legacyProjects.indexOf(p);
                return (
                  <article
                    className={"project-file project-file-" + (i % 6)}
                    key={p.title}
                  >
                    <div className="project-topline">
                      <span>FILE {String(i + 1).padStart(2, "0")}</span>
                      <span>
                        {p.status === "archive"
                          ? t("RESEARCH ARCHIVE", "研究アーカイブ")
                          : p.demo
                            ? t("DEMO AVAILABLE", "デモあり")
                            : t("RUN LOCALLY", "ローカル実行")}
                      </span>
                    </div>
                    <Link
                      href={"/projects/" + slugify(p.title)}
                      className="project-title"
                    >
                      <h3>{labels[p.title] ?? p.title}</h3>
                      <span>↗</span>
                    </Link>
                    {labels[p.title] && (
                      <p className="source-title">{p.title}</p>
                    )}
                    <p className="project-description">
                      {ja
                        ? (projectJapanese[p.title] ?? p.description)
                        : p.description}
                    </p>
                    <div className="project-tags">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer">
                          {t("Open demo", "デモを開く")} ↗
                        </a>
                      )}
                      <Link href={"/projects/" + slugify(p.title)}>
                        {t("Case study", "制作記録")} ↗
                      </Link>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      )}
                    </div>
                    {p.access && <p className="access-note">{p.access}</p>}
                  </article>
                );
              })}
            </div>
            <p className="catalog-note">
              {filtered.length} / {legacyProjects.length}{" "}
              {t(
                "projects shown. Demos may have device or account requirements; the case study explains each one.",
                "件を表示。デモに必要な端末・アカウントは各制作記録に明記しています。",
              )}
            </p>
          </div>
        </section>
        <section id="process" className="folio-sheet process-sheet">
          {meta(4)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">PROCESS</h2>
              <span>
                {t("(Make it earn your trust.)", "（信頼を、測る。）")}
              </span>
            </div>
            <p className="section-deck">
              {t(
                "A useful demo shows what happens when assumptions fail, too.",
                "役立つデモは、前提が崩れたときの挙動も示します。",
              )}
            </p>
            <div className="process-list">
              {[
                [
                  "Start with a failure.",
                  "失敗から始める。",
                  "Name a concrete job and something that can go wrong: a missing metric, repeated event, unsupported answer.",
                  "具体的な仕事と失敗を決める。欠けたメトリクス、再送イベント、根拠のない回答。",
                ],
                [
                  "Build the smallest honest tool.",
                  "正直な最小ツールを作る。",
                  "Use real public data or labeled fixtures. Keep the useful output in front and technical traces to the side.",
                  "実際の公開データか明示したフィクスチャを使う。役立つ結果を前に、技術的な記録は脇に。",
                ],
                [
                  "Measure independently.",
                  "独立した方法で測る。",
                  "Human references, a second query engine, an offline checker, a controlled workload. Include negative cases.",
                  "人間の参照回答、別のクエリエンジン、独立チェッカー、制御した負荷。失敗する例も含める。",
                ],
                [
                  "Publish the boundary.",
                  "できる範囲を示す。",
                  "Show the result, source and exact limits. A failed hypothesis can be a stronger artifact than an impressive screenshot.",
                  "結果・ソース・限界を示す。仮説の失敗は、見栄えの良い画面より強い根拠になることも。",
                ],
              ].map(([en, jp, desc, jdesc], i) => (
                <article key={en}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{ja ? jp : en}</h3>
                    <p>{ja ? jdesc : desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="words" className="folio-sheet words-sheet">
          {meta(5)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">WORDS</h2>
              <span>{t("(Notes from the work.)", "（制作からの学び。）")}</span>
            </div>
            <p className="section-deck">
              {t(
                "Three things the experiments made harder to assume.",
                "実験で、簡単には言えなくなったこと。",
              )}
            </p>
            <div className="notes-grid">
              {[
                [
                  "Multi-Agent Code Generation System",
                  "More roles did not mean better code.",
                  "役割を増やしても、コードは良くならなかった。",
                  "On the recorded 164-task run, the team solved 54.9% against the single coder’s 65.2%, using more model calls. Measuring changed the story.",
                  "記録済み164問では、チーム54.9%、単独65.2%。呼び出しが増えても成績は低下。測定で見方が変わりました。",
                ],
                [
                  "LLM Evaluation Harness",
                  "The judge needed an answer key.",
                  "採点する AI にも、正解が必要だった。",
                  "The passage-only judge had κ≈0.04 against reference correctness. Supplying references raised agreement. Fluent approval was not a release gate.",
                  "本文だけの採点 AI の κ は約0.04。参照回答を与えると一致率が向上。流暢な承認は判定基準ではありません。",
                ],
                [
                  "Signalworks",
                  "Unknown is a useful result.",
                  "「不明」は役立つ結果。",
                  "A metric named seconds does not prove its values are seconds. Some checks need a controlled witness; guessing would hide the problem.",
                  "名前が seconds でも、値が秒とは限りません。制御した測定が必要なときに推測すると、問題を隠してしまいます。",
                ],
              ].map(([title, en, jp, desc, jdesc], i) => (
                <article key={title}>
                  <span>NOTE / 0{i + 1}</span>
                  <h3>{ja ? jp : en}</h3>
                  <p>{ja ? jdesc : desc}</p>
                  <Link href={"/projects/" + slugify(title)}>
                    {t("Read the evidence", "根拠を読む")} ↗
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="folio-sheet contact-sheet">
          {meta(6)}
          <div className="sheet-content">
            <div className="chapter-title">
              <h2 className="outline-title">CONTACT</h2>
              <span>{t("(Your next chapter?)", "（次の章へ。）")}</span>
            </div>
            <h3>
              {t("Let’s build something", "一緒に、")}
              <br />
              <span>{t("worth depending on.", "頼れるものを。")}</span>
            </h3>
            <p>
              {t(
                "Interested in AI/ML, backend and developer-tool engineering. If the work is relevant to your team, I’d like to talk through the choices, tradeoffs and failures behind it.",
                "AI・機械学習、バックエンド、開発者向けツールの仕事に関心があります。制作がチームに合いそうなら、選択・妥協・失敗の背景までお話ししたいです。",
              )}
            </p>
            <div className="contact-links">
              <a href={"mailto:" + contact.email}>
                {t("Email me", "メールする")} ↗
              </a>
              <a href={contact.linkedin}>LinkedIn ↗</a>
              <a href={contact.github}>GitHub ↗</a>
            </div>
            <div className="contact-foot">
              <span>JERSEY CITY, NJ</span>
              <span>
                {t(
                  "Built with evidence. Always a work in progress.",
                  "根拠を持って作る。いつも改善の途中。",
                )}
              </span>
            </div>
          </div>
        </section>
      </main>
      <div className="folio-end">
        <a href="/THIRD_PARTY_NOTICES.txt">
          SV / 2026 · {t("Licenses", "ライセンス")}
        </a>
        <div>
          <button
            disabled={active === 0}
            onClick={() =>
              document.getElementById(chapters[active - 1][0])?.scrollIntoView()
            }
          >
            {t("Previous", "前へ")} ←
          </button>
          <span>0{active + 1} / 07</span>
          <button
            disabled={active === 6}
            onClick={() =>
              document.getElementById(chapters[active + 1][0])?.scrollIntoView()
            }
          >
            {t("Next", "次へ")} →
          </button>
        </div>
        <a href="#cover">{t("Back to cover", "表紙へ")} ↑</a>
      </div>
    </div>
  );
}
