export const projectJapanese: Record<string, string> = {
  Signalworks:
    "サービスが出すメトリクスを契約と照合し、欠けたラベルや変更された型を検出。警報・通知・ログ処理の完全な実験は、実際の観測基盤を使うローカル版で行います。",
  "Real-Time Crisis Intelligence Agent":
    "公的機関の災害情報を地図にまとめ、端末上の AI でブリーフィングを作成。出典・数値の照合を行いますが、事実性や安全性の完全な証明ではありません。",
  "Multi-Agent Code Generation System":
    "Python の課題を選び、単独または複数役割の AI に下書きを依頼し、ブラウザで実際のテストを実行。保存済み実験では、役割の多いチームの成績が低下しました。",
  "MLOps Pipeline":
    "過去の電力市場データでモデルを学習し、既存モデルと比較。測定された条件を満たす場合だけ昇格でき、直前のモデルへ戻せます。実際の取引予測ではありません。",
  "LLM Evaluation Harness":
    "同じ質問・同じモデルで二つのプロンプトを比較し、人間の参照回答で採点。回答できない問いで正しく棄権できるかも確認します。",
  "Ad-Hoc OLAP Query Engine":
    "ペンギンの実測データを集計し、TypeScript の Phi 型エンジンと DuckDB の独立した SQL 実行を照合。自然言語のクエリ案は実行前に検証します。",
  "Breakroom · Supabase reliability suite":
    "権限、再試行、削除、CSV 取込、競合、Realtime を試す六つの実用アプリ。実際のローカル Supabase を使い、公開ページは保存済みの根拠を示します。",
  PocketOps:
    "編集・テスト・実行を明示的な承認と結びつけるローカル開発ツール。変更されたファイルを承認済みの古い内容として実行しないよう確認します。",
  "Neon Expedition":
    "迷路を探索する学習エージェントを可視化。実際の Q 学習と同じマップ上の評価を行い、最短経路を比較基準にします。未知のマップへの一般化は主張しません。",
  "LLM Code Review Assistant":
    "差分をローカルモデルに送り、確認点を提案。モデルが利用できないときに、無関係な固定レビューで成功を装いません。人間のレビューが必要です。",
  "CI Pipeline Optimizer":
    "ジョブの依存関係と観測時間から CI の経路を説明。循環や不明な依存を拒否し、結果の混在をフレーキーなテストの証明とは扱いません。",
  "Distributed API Gateway":
    "不調なサービスへの通常リクエストを止め、一度に一つの復旧確認を許可するゲートウェイ。ルートの境界や非同期エラーを検証します。",
  "Redis Rate Limiter":
    "同時刻のリクエストでも個別の受領 ID で正しく数えるレート制限。制御した時計と fakeredis/Lua のテストで確認した範囲を明記します。",
  "RAG Q&A Pipeline":
    "文書の出典抜粋と生成文を区別して質問に答えるパイプライン。不正な分割設定を拒否し、ローカルモデルの障害をエラーとして返します。",
  "Music Recommender Engine":
    "有限の1〜5評価で SGD 行列分解を学習し、未聴取の曲を提案。新規利用者には根拠のない人気順ではなく、カタログ順の代替だと明示します。",
  "Real-Time OLAP Dashboard":
    "売上イベントの再送で二重集計しない分析基盤。矛盾した受領 ID を拒否し、バッチを原子的に戻します。実装は SQLite です。",
  "Crisis Information Graph":
    "災害ツイートの分類と固有表現抽出に関する過去の研究ソース。今回のレビューでは学習や歴史的な精度を再現していないため、研究アーカイブとして公開します。",
  "Securing Image Classifiers from Adversarial Attacks":
    "ResNet-18 / CIFAR-100 への攻撃と防御を扱う過去の研究。新しい訓練・攻撃評価の再現が完了するまで、改善率は主張しません。",
};
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
