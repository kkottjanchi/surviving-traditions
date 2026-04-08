"use client";

import { useLang, type Locale } from "@/lib/i18n";

const langs: { code: Locale; label: string }[] = [
  { code: "ko", label: "한" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日" },
  { code: "zh", label: "中" },
];

export default function LangSwitch() {
  const { locale, setLocale } = useLang();

  return (
    <div className="flex gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
            locale === l.code
              ? "bg-earth text-white"
              : "text-earth/60 hover:text-earth hover:bg-warm"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
