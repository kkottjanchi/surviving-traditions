import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import UnescoDive from "@/components/UnescoDive";
import Link from "next/link";

export const metadata = {
  title: "Jeju — 제주 영등굿과 해녀 문화 | Surviving Traditions",
  description: "칠머리당 영등굿과 해녀 문화 — 정착형 생존, 섬이 보존한 원형",
};

export default function JejuPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Jeju, Korea
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              제주 영등굿과 해녀 문화
            </h1>
            <p className="font-serif italic text-earth mb-8">
              Chilmeori-dang Yeongdeung-gut &amp; Haenyeo Culture
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-warm rounded-full text-earth">
                  UNESCO ICH 2009
                </span>
                <span className="text-xs px-3 py-1 bg-warm rounded-full text-earth">
                  UNESCO ICH 2016
                </span>
                <span className="text-xs px-3 py-1 bg-sage/20 rounded-full text-sage">
                  현장 답사 완료
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  섬이라는 지형이 원형을 보존했다. 해녀의 삶과 영등굿은 분리되지
                  않는 하나의 생활이었다. 본토의 근현대사가 이곳의 문화에 직접
                  영향을 미치지 않았을 수도 있다 — 바다에서 일어나는 일이었으니까.
                </p>
                <p>
                  그러나 해녀가 줄어들면, 굿은 형식으로만 남는가? 별거 아닌
                  하루에 &lsquo;나 이곳 사람이구나&rsquo;를 느끼게 해주는 것 —
                  그것이 전통 앞에 &lsquo;예술&rsquo;이 붙는 이유일 수 있다.
                </p>
                <p>
                  칠머리당 영등굿은 2009년 유네스코 인류무형문화유산 대표목록에,
                  제주 해녀 문화는 2016년에 등재되었다. 두 요소는 같은 바다,
                  같은 공동체에서 나왔지만 서로 다른 시점에 제도화되었다.
                  이 시차가 만들어낸 변화를 추적한다.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 현장 기록 */}
          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                현장 답사 (2026.03.31 — 04.02)
              </h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">4/1 오전 9시</span>{" "}
                  — 영등송별제 참관 (칠머리당 사라봉)
                </p>
                <p>해녀박물관 방문</p>
                <p>현장 기록: 영상 14건, 사진 20장</p>
                <p className="text-xs text-text/40 mt-4">
                  상세 기록은 Fieldwork 페이지에서 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* UNESCO Dive 시각화 */}
          <FadeIn delay={0.3}>
            <div className="space-y-4 mb-8">
              <UnescoDive
                elementId="00187"
                title="Jeju Chilmeoridang Yeongdeunggut (2009)"
                url="https://ich.unesco.org/en/RL/jeju-chilmeoridang-yeongdeunggut-00187"
              />
              <UnescoDive
                elementId="01068"
                title="Culture of Jeju Haenyeo — Women Divers (2016)"
                url="https://ich.unesco.org/en/RL/culture-of-jeju-haenyeo-women-divers-01068"
              />
            </div>
          </FadeIn>

          {/* 연구 질문 */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
              <h2 className="text-earth font-medium mb-4">열린 질문</h2>
              <ul className="space-y-3 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  한국 근현대사가 제주 영등굿 문화에 직접 영향을 미치지
                  않았을 수 있다 — 바다에서 일어나는 일이었으니까. 이 가설은
                  유효한가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  해녀가 줄어드는 것과 영등굿의 형식화는 어떤 관계인가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  2009년 등재 이전과 이후, 공동체의 자생적 전승 방식에 어떤
                  변화가 있었나?
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-8">
            <Link
              href="/cases"
              className="text-sm text-earth border-b border-dotted border-earth/40 hover:border-earth transition-colors"
            >
              &larr; 전체 사례 보기
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
