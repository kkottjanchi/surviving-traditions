import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Research | Surviving Traditions",
  description: "핵심 연구 질문과 이론 프레임 — 경험의 멸종, 감각 전승, 자생과 제도화",
};

const theories = [
  {
    author: "Elinor Ostrom",
    work: "Governing the Commons (1990)",
    point: "공유재를 자치적으로 관리하는 공동체는 국가·시장 없이도 자생 규칙을 만든다",
    connection: "남사당 공동체 = Ostrom 공유재 자치 원리의 문화적 사례",
  },
  {
    author: "Anna Tsing",
    work: "The Mushroom at the End of the World (2015)",
    point: "단일 사례(마쓰타케 버섯)로 전 지구적 자본주의·생태·공동체 이론 전체를 이론화",
    connection: "단일 사례의 무한한 이론적 확장 가능성 — 방법론적 선례",
  },
  {
    author: "Marcel Mauss & Karl Polanyi",
    work: "The Gift (1925) / The Great Transformation (1944)",
    point: "호혜·재분배 = 시장 이전의 내재된 경제 (두레·계의 이론적 기반)",
    connection: "전통예술 공동체의 호혜경제 직관을 학술 언어로 정당화",
  },
  {
    author: "Laurajane Smith",
    work: "Uses of Heritage (2006)",
    point: "Authorized Heritage Discourse(AHD) — 국가·전문가 담론이 무형문화유산을 박제한다",
    connection: "제도 역설: 보호하려다 공동체 자생력을 지운 메커니즘",
  },
  {
    author: "Helena Norberg-Hodge",
    work: "Ancient Futures (1991)",
    point: "라다크가 근대화 이후 '행복'이라는 단어를 다시 꺼냄 = 있던 것이 사라졌다는 신호",
    connection: "연구 전체의 윤리적 긴박성 — '왜 지금 이 연구가 필요한가'",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Research
            </h1>
            <p className="text-earth font-light mb-12">
              핵심 질문 + 이론 프레임
            </p>
          </FadeIn>

          {/* 핵심 가설 */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-12">
              <h2 className="text-earth font-medium mb-4">핵심 가설</h2>
              <blockquote className="text-[1.05rem] leading-relaxed text-text/90 border-l-3 border-accent pl-5">
                &ldquo;제도(법·협약)는 문화를 보호하려 했지만, 동시에 공동체가
                스스로 살아남던 방식을 지워버렸을 수 있다.&rdquo;
              </blockquote>
              <div className="mt-6 space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">외부 변수</span> —
                  식민화, 근대화, 정책, 유네스코 무형문화유산 보호 협약(2003),
                  국가무형유산법
                </p>
                <p>
                  <span className="text-earth font-medium">내부 변수</span> —
                  개인이 시대 변화에 즉각 적응하지 못하는 특성 (예술인 개개인의
                  삶)
                </p>
                <p>
                  <span className="text-earth font-medium">연구 질문</span> —
                  제도 이전/이후 공동체는 어떻게 생존하려 했나? 제도가 우리에게
                  잊게 만든 것은 무엇인가?
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 경험의 멸종 */}
          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-xl text-deep mb-4">
                Experience Extinction
              </h2>
              <p className="text-sm text-earth mb-4">경험의 멸종</p>
              <p className="text-[0.95rem] leading-relaxed font-light text-text/85">
                제도가 들어오면서 공동체가 축적해온 몸의 감각·상호부조
                규칙·위험 대응 습관이 지워지는 현상. Christine Rosen(2008)의
                개념을 문화유산 맥락으로 확장한다. 디지털 환경에서의 경험 소실이
                아니라, 제도화 과정에서의 체화된 지식(embodied knowledge)의
                소실에 주목한다.
              </p>
            </div>
          </FadeIn>

          {/* 비교 구조 */}
          <FadeIn delay={0.3}>
            <h2 className="font-serif text-xl text-deep mb-6">비교 구조</h2>
            <div className="grid grid-cols-1 gap-4 mb-12">
              <Link
                href="/cases/jeju"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  1차 심층 사례
                </p>
                <h3 className="text-deep font-medium">
                  제주 — 칠머리당 영등굿 + 해녀 문화
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  UNESCO 2009/2016 등재. 정착형 생존. 섬이라는 지형이 원형을
                  보존. 제도화 전/후 비교.
                </p>
              </Link>
              <Link
                href="/cases/okinawa"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  비교 사례
                </p>
                <h3 className="text-deep font-medium">
                  오키나와 — 쿠미오도리 (궁중 음악극)
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  UNESCO 2010 등재. 류큐 왕국에서 일본 제국으로 강제 편입.
                  궁중/엘리트 전승 방식.
                </p>
              </Link>
              <Link
                href="/cases/taiwan"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  비교 사례 — UNESCO 밖
                </p>
                <h3 className="text-deep font-medium">
                  대만 — 부눈족 의례의 재의례화
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  UNESCO 미가입. 식민화·강제이주 속에서 의례를 관광/공연으로
                  재구성하며 생존. 우리만의 기여.
                </p>
              </Link>
            </div>
          </FadeIn>

          {/* 이론적 앵커 */}
          <FadeIn delay={0.4}>
            <h2 className="font-serif text-xl text-deep mb-6">
              Theoretical Anchors
            </h2>
            <p className="text-sm text-earth font-light mb-8">이론적 앵커</p>
            <div className="space-y-4">
              {theories.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8"
                >
                  <h3 className="text-deep font-medium text-sm">
                    {t.author}
                  </h3>
                  <p className="text-xs text-earth/60 font-serif italic mb-3">
                    {t.work}
                  </p>
                  <p className="text-sm text-text/70 font-light mb-2">
                    {t.point}
                  </p>
                  <p className="text-xs text-sage font-light">
                    &rarr; {t.connection}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
