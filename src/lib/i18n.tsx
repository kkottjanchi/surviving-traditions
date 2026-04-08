"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Locale = "ko" | "en" | "ja" | "zh";

const LangContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: "ko",
  setLocale: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");
  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

type Messages = Partial<Record<Locale, string>>;

export function T({ k, fallback }: { k: Messages; fallback?: string }) {
  const { locale } = useLang();
  return <>{k[locale] || k.ko || fallback || ""}</>;
}

export function useT() {
  const { locale } = useLang();
  return useCallback(
    (messages: Messages) => messages[locale] || messages.ko || "",
    [locale]
  );
}
