"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
type PortfolioContext = {
  ja: boolean;
  dark: boolean;
  t: (en: string, jp: string) => string;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};
const Ctx = createContext<PortfolioContext>({
  ja: false,
  dark: false,
  t: (en) => en,
  toggleLanguage: () => {},
  toggleTheme: () => {},
});
export function PortfolioLanguage({ children }: { children: ReactNode }) {
  const [ja, setJa] = useState(false),
    [dark, setDark] = useState(false),
    [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      setJa(localStorage.getItem("folio-language") === "ja");
      setDark(localStorage.getItem("folio-theme") === "dark");
    } catch {}
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = ja ? "ja" : "en";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("folio-language", ja ? "ja" : "en");
      localStorage.setItem("folio-theme", dark ? "dark" : "light");
    } catch {}
  }, [ja, dark, hydrated]);
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
