"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function PerspectivesPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Perspectives
            </h1>
            <p className="text-earth font-light mb-8">
              {t({ ko: "같은 현상을 다른 눈으로 봅니다.", en: "The same phenomenon, through different eyes.", ja: "同じ現象を異なる目で見ます。", zh: "以不同的眼光看待同一現象。" })}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 text-center">
              <p className="text-4xl mb-4 text-earth/30">👁</p>
              <h2 className="text-earth font-medium mb-3">
                {t({ ko: "Perspectives 준비 중", en: "Coming soon", ja: "準備中", zh: "準備中" })}
              </h2>
              <p className="text-sm text-text/60 font-light leading-relaxed max-w-md mx-auto">
                {t({
                  ko: "같은 현장, 같은 전통을 두고 멤버들이 각자의 전문성과 관점으로 글을 씁니다. 풍물 교육자의 눈, 연출가의 눈, 연구자의 눈 — 시각이 다르면 보이는 것도 다릅니다.",
                  en: "Members write about the same fieldwork and traditions from their own expertise and perspective. The eye of a Pungmul educator, a director, a researcher — different perspectives reveal different things.",
                  ja: "同じ現場、同じ伝統について、メンバーがそれぞれの専門性と観点から文章を書きます。プンムル教育者の目、演出家の目、研究者の目 — 視点が違えば見えるものも違います。",
                  zh: "成員們就同一現場、同一傳統，各以自身的專業與視角書寫。農樂教育者的眼光、導演的眼光、研究者的眼光——視角不同，所見自然不同。",
                })}
              </p>
              <p className="text-xs text-text/30 mt-6">
                {t({
                  ko: "멤버 글쓰기 기능 활성화 후 오픈 예정",
                  en: "To be opened after member writing feature is activated",
                  ja: "メンバー執筆機能有効化後にオープン予定",
                  zh: "會員書寫功能啟用後開放",
                })}
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
