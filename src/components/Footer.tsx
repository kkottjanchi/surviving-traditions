"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-deep text-white/50 text-center py-16 px-6 mt-auto">
      <p className="font-serif text-xl text-white/70 mb-2">
        Surviving Traditions
      </p>
      <p className="text-sm mb-1">
        {t({
          ko: "감각의 고고학 : 생존 전통",
          en: "Archaeology of the Senses: Surviving Traditions",
          ja: "感覚の考古学：生存する伝統",
          zh: "感官考古學：生存傳統",
        })}
      </p>
      <p className="text-xs text-white/30 mb-6">
        Archaeology of Senses: Surviving Traditions
      </p>
      <nav className="flex flex-wrap justify-center gap-4 text-xs text-white/30 mb-8">
        <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
        <Link href="/research" className="hover:text-white/60 transition-colors">Research</Link>
        <Link href="/cases" className="hover:text-white/60 transition-colors">Cases</Link>
        <Link href="/fieldwork" className="hover:text-white/60 transition-colors">Fieldwork</Link>
        <Link href="/team" className="hover:text-white/60 transition-colors">Team</Link>
        <Link href="/publications" className="hover:text-white/60 transition-colors">Publications</Link>
        <Link href="/join" className="hover:text-white/60 transition-colors">Join</Link>
      </nav>
      <div className="text-xs text-white/25 space-y-1">
        <p>
          {t({
            ko: "2026 한국문화예술위원회 국제협력네트워크",
            en: "2026 Arts Council Korea International Cooperation Network",
            ja: "2026年 韓国文化芸術委員会 国際協力ネットワーク",
            zh: "2026年 韓國文化藝術委員會 國際合作網絡",
          })}
        </p>
        <p>Arts Council Korea International Cooperation Network</p>
      </div>
    </footer>
  );
}
