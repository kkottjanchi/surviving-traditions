import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import UnescoDive from "@/components/UnescoDive";
import Link from "next/link";

export const metadata = {
  title: "Okinawa — 오키나와 쿠미오도리 | Surviving Traditions",
  description: "류큐 왕국에서 일본 제국으로 — 편입된 전통, 정체성의 도구가 된 예술",
};

export default function OkinawaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Okinawa, Japan
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              오키나와 — 편입된 전통
            </h1>
            <p className="font-serif italic text-earth mb-8">
              琉球 Ryukyu · Kumiodori
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-warm rounded-full text-earth">
                  UNESCO ICH 2010
                </span>
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  답사 예정
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  류큐 왕국(1429-1879)은 독립된 해양 왕국이었다. 1879년 일본에
                  강제 병합된 이후, 류큐의 궁중 예술인 쿠미오도리는 왕국의
                  외교 도구에서 민족 정체성의 상징으로 변환되었다.
                </p>
                <p>
                  본토와의 관계 속에서 전통이 어떻게 정체성의 도구가 되었는가.
                  근대화의 압력 속에서 궁중 전승이라는 엘리트적 방식이 오히려
                  생존에 유리했는지, 불리했는지를 묻는다.
                </p>
                <p>
                  제주와의 핵심 차이: 제주는 공동체 전체가 의례를 품었지만,
                  오키나와는 궁중이라는 특정 계층이 전승을 담당했다. 생존의
                  주체가 다르면 생존의 방식도 달라진다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">역사적 맥락</h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">1429-1879</span> —
                  류큐 왕국 독립 시기. 쿠미오도리는 중국 사신 접대용 궁중 무용극
                </p>
                <p>
                  <span className="text-earth font-medium">1879</span> — 일본
                  제국에 강제 병합 (류큐 처분). 왕국 해체
                </p>
                <p>
                  <span className="text-earth font-medium">2010</span> — UNESCO
                  무형문화유산 대표목록 등재
                </p>
              </div>
            </div>
          </FadeIn>

          {/* UNESCO Dive 시각화 */}
          <FadeIn delay={0.3}>
            <div className="mb-8">
              <UnescoDive
                elementId="00405"
                title="Kumiodori, traditional Okinawan musical theatre (2010)"
                url="https://ich.unesco.org/en/RL/kumiodori-traditional-okinawan-musical-theatre-00405"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
              <h2 className="text-earth font-medium mb-4">열린 질문</h2>
              <ul className="space-y-3 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  궁중 전승이라는 엘리트적 방식이 근대화 속 생존에 유리했는가,
                  불리했는가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  류큐 정체성과 일본 국민 정체성 사이에서 쿠미오도리는 어떤
                  위치를 점하는가?
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  미야코지마 판투(가면신 방문) 등 오키나와의 다른 전통과
                  쿠미오도리의 전승 방식 차이는?
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
