import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // Preferences come from external browser storage after SSR hydration. Guard writes until
  // initialization completes so Strict Mode's effect replay cannot erase saved preferences.
  {
    files: ["components/PortfolioLanguage.tsx"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
]);
