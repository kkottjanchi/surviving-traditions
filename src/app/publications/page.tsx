"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function PublicationsPage() {
  const t = useT();

  const publications = [
    {
      type: "Conference",
      year: "2026",
      title: "Surviving Traditions: An Archaeology of the Senses",
      subtitle: "Embodied Memory Transmission in Ryukyu, Taiwan Indigenous Communities, and Jeju",
      authors: "SEMI CHOI, Minjeong Oh, Munyeong Choi",
      venue: "ISTR 2026 15th International Conference, Lisbon, Portugal (July 14-17)",
      track: "Emerging Areas of Research and Practice in Nonprofit and Third Sector",
      format: "Poster Presentation",
      status: "Accepted",
    },
  ];

  const relatedPapers = [
    {
      year: "2025",
      title: t({
        ko: "제주사회적기업에 내재된 사회적기업가정신에 대한 고찰",
        en: "A Study on Social Entrepreneurship Embedded in Jeju Social Enterprises",
        ja: "済州社会的企業に内在する社会的企業家精神に関する考察",
        zh: "探討濟州社會企業內在的社會企業精神",
      }),
      authors: "최문영·최샘이·오민정",
      journal: "경상논총 43(3), 83-108",
      index: t({ ko: "KCI 등재", en: "KCI Indexed", ja: "KCI収録", zh: "KCI收錄" }),
    },
    {
      year: "2025",
      title: t({
        ko: "제주도 사회적기업의 관계적 가치 실천에 관한 사례연구",
        en: "A Case Study on the Practice of Relational Values in Jeju Social Enterprises",
        ja: "済州島社会的企業の関係的価値実践に関する事例研究",
        zh: "濟州島社會企業關係性價值實踐之個案研究",
      }),
      authors: "최샘이·최문영·오민정",
      journal: "경상논총",
      index: t({ ko: "KCI 등재", en: "KCI Indexed", ja: "KCI収録", zh: "KCI收錄" }),
    },
    {
      year: "2025",
      title: t({
        ko: "디지털 사회혁신을 통한 포용적 관광 전략",
        en: "Inclusive Tourism Strategy through Digital Social Innovation",
        ja: "デジタル社会革新を通じた包摂的観光戦略",
        zh: "透過數位社會創新的包容性觀光策略",
      }),
      authors: "최샘이·최문영·오민정",
      journal: "한국디지털정책학회지",
      index: t({ ko: "KCI 등재 · 우수논문상", en: "KCI Indexed · Excellence Award", ja: "KCI収録・優秀論文賞", zh: "KCI收錄・優秀論文獎" }),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Publications
            </h1>
            <p className="text-earth font-light mb-12">
              {t({ ko: "학술 발표 및 논문", en: "Papers & Presentations", ja: "発表論文・資料", zh: "發表論文與資料" })}
            </p>
          </FadeIn>

          {/* ISTR */}
          <FadeIn delay={0.1}>
            <h2 className="text-sm text-sage uppercase tracking-widest mb-6">
              Conference Presentations
            </h2>
          </FadeIn>
          {publications.map((p, i) => (
            <FadeIn key={i} delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 bg-sage/20 rounded-full text-sage">
                    {p.type}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-warm rounded-full text-earth">
                    {p.status}
                  </span>
                  <span className="text-xs text-text/40">{p.year}</span>
                </div>
                <h3 className="font-serif text-lg text-deep mb-1">
                  {p.title}
                </h3>
                <p className="font-serif italic text-earth/70 text-sm mb-4">
                  {p.subtitle}
                </p>
                <div className="space-y-1 text-sm text-text/60 font-light">
                  <p>
                    <span className="text-earth/80">Authors:</span>{" "}
                    {p.authors}
                  </p>
                  <p>
                    <span className="text-earth/80">Venue:</span> {p.venue}
                  </p>
                  <p>
                    <span className="text-earth/80">Track:</span> {p.track}
                  </p>
                  <p>
                    <span className="text-earth/80">Format:</span> {p.format}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* 관련 논문 */}
          <FadeIn delay={0.2}>
            <h2 className="text-sm text-sage uppercase tracking-widest mb-6">
              Related Publications
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {relatedPapers.map((p, i) => (
              <FadeIn key={i} delay={0.25 + i * 0.05}>
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-text/40">{p.year}</span>
                    <span className="text-xs px-2 py-0.5 bg-warm rounded-full text-earth">
                      {p.index}
                    </span>
                  </div>
                  <h3 className="text-sm text-deep font-medium mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-text/50 font-light">
                    {p.authors}
                  </p>
                  <p className="text-xs text-earth/60 font-light mt-1">
                    {p.journal}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
