import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Taiwan — 대만 부눈족 의례 | Surviving Traditions",
  description: "부눈족 의례의 문화적 번역과 재의례화 — UNESCO 밖의 생존",
};

export default function TaiwanPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Taiwan
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              대만 — 재의례화의 실험
            </h1>
            <p className="font-serif italic text-earth mb-8">
              台灣 · Bunun Ritual · From Ritual to Theatre
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  UNESCO 미가입
                </span>
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  답사 예정
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  대만은 유엔/UNESCO 회원국이 아니다. 따라서 UNESCO 무형문화유산
                  협약의 당사국이 될 수 없고, 공식 등재가 불가능하다.
                  이것은 이 프로젝트의 핵심적 차별점이다 —{" "}
                  <strong className="font-medium">
                    UNESCO가 못 담는 사례를 우리가 담는다.
                  </strong>
                </p>
                <p>
                  부눈족(Bunun)은 대만 16개 공식 원주민 부족 중 하나이다.
                  일본 식민 통치(1895-1945) 하에서 이동성 친족 공동체(sidohk)가
                  고정된 부락으로 재편되었고, 의례는 친족 중심에서 부락
                  공동 행사로 변환되었다.
                </p>
                <p>
                  타이퉁의 부눈 부족 레저 농장에서는 의례가 관광 공연으로
                  재구성되었지만, 단순한 상품화가 아닌 &lsquo;재의례화
                  (re-ritualization)&rsquo;를 통해 새로운 아우라를 생성한다.
                  Walter Benjamin의 아우라 상실 개념이 여기서 뒤집힌다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">역사적 맥락</h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">
                    1895-1945
                  </span>{" "}
                  — 일본 식민 통치. 고지대 부눈족 거주지 재편, 조(기장) 중심
                  생계가 쌀 재배로 전환
                </p>
                <p>
                  <span className="text-earth font-medium">1984</span> — 대만
                  원주민 권리 촉진 협회 설립, 문화 부흥 시작
                </p>
                <p>
                  <span className="text-earth font-medium">1994</span> —
                  &ldquo;원주민&rdquo; 법적 공식 인정
                </p>
                <p>
                  <span className="text-earth font-medium">현재</span> — 16개
                  공식 부족, 자체 무형문화재 체계 운영 (600개 이상 지정)
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                참고 논문
              </h2>
              <div className="text-sm text-text/70 font-light space-y-2">
                <p className="font-medium text-text/90">
                  Wang Ting-Wei. &ldquo;From Ritual to Theatre: Cultural
                  Translation and Re-ritualization of Bunun Rituals.&rdquo;
                </p>
                <p>
                  타이퉁 부눈 부족 레저 농장의 의례 공연을 중심으로, 문화
                  관광과 연극적 맥락에서 부눈족 의례의 문화적 번역 전략을
                  분석한다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
              <h2 className="text-earth font-medium mb-4">열린 질문</h2>
              <ul className="space-y-3 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  &lsquo;재의례화&rsquo;는 상품화의 다른 이름인가, 진정한
                  생존 전략인가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  UNESCO 등재가 불가능한 상황에서 대만 원주민 문화의 국제적
                  가시성은 어떻게 확보되는가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  범원주민주의(pan-indigenism)는 개별 부족의 고유성을
                  보호하는가, 침식하는가?
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
