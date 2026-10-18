"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
const Ctx = createContext({
  ja: false,
  dark: false,
  t: (en: string, _jp: string) => en,
  toggleLanguage: () => {},
  toggleTheme: () => {},
});
export function PortfolioLanguage({ children }: { children: ReactNode }) {
  const [ja, setJa] = useState(false),
    [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      setJa(localStorage.getItem("folio-language") === "ja");
      setDark(localStorage.getItem("folio-theme") === "dark");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = ja ? "ja" : "en";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("folio-language", ja ? "ja" : "en");
      localStorage.setItem("folio-theme", dark ? "dark" : "light");
    } catch {}
  }, [ja, dark]);
  return (
    <Ctx.Provider
      value={{
        ja,
        dark,
        t: (en, jp) => (ja ? jp : en),
        toggleLanguage: () => setJa((j) => !j),
        toggleTheme: () => setDark((d) => !d),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
export const usePortfolio = () => useContext(Ctx);
