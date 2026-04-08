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
    author: "Helena Norberg-Hodge",
    work: "Ancient Futures: Learning from Ladakh (1991)",
    point: "전통은 과거가 아니라, 우리가 잃어버린 미래의 가능성이다. 라다크가 가지고 있던 공동체, 자급, 지속가능성은 '아직 오지 않은 미래'였다.",
    connection: "전통예술은 오래된 미래다 — 이 프로젝트의 출발점",
  },
  {
    author: "Christine Rosen",
    work: "The Extinction of Experience (2008)",
    point: "직접 경험이 사라지면 존재 방식 자체를 잃는다. 몸으로 받고, 감각으로 느끼고, 타인과 부딪히는 것이 인간으로 존재하는 방식이다.",
    connection: "전통예술의 소멸 = 박제. 살아있는 것에서 보존해야 할 것으로 바뀌는 과정",
  },
  {
    author: "Laurajane Smith",
    work: "Uses of Heritage (2006)",
    point: "Authorized Heritage Discourse(AHD) — 국가·전문가 담론이 무형문화유산을 박제한다",
    connection: "제도 역설: 보호하려다 공동체 자생력을 지운 메커니즘",
  },
  {
    author: "UNESCO",
    work: "Convention for the Safeguarding of the Intangible Cultural Heritage (2003)",
    point: "무형문화유산 보호 협약 — 'heritage'가 아닌 'living heritage'로의 전환. 그러나 등재 과정 자체가 전통을 고정시키는 역설.",
    connection: "영등굿(2009), 해녀(2016), 쿠미오도리(2010) 등재 — 등재 전후 비교의 기준점",
  },
  {
    author: "Victor Turner",
    work: "The Ritual Process: Structure and Anti-Structure (1969)",
    point: "의례는 공동체를 일상에서 분리시켜 다시 결합하는 과정이다. 리미널리티(liminal)의 경험이 공동체를 유지한다.",
    connection: "영등굿·부눈족 의례가 공동체를 '되살리는' 메커니즘 분석의 틀",
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
                Extinction of Experience
              </h2>
              <p className="text-sm text-earth mb-4">경험의 멸종</p>
              <p className="text-[0.95rem] leading-relaxed font-light text-text/85">
                제도가 들어오면서 공동체가 축적해온 몸의 감각·상호부조
                규칙·위험 대응 습관이 지워지는 현상. 직접 경험이 사라지면, 단순히 불편함을 잃는 게 아니라 존재 방식 자체를 잃는다. 전통예술의 소멸은 과거가 사라지는 게 아니라, 우리 모두가 소멸할 방식의 예고편이다.
              </p>
            </div>
          </FadeIn>

          {/* 감각의 고고학 */}
          <FadeIn delay={0.25}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-12">
              <h2 className="font-serif text-xl text-deep mb-4">
                감각의 고고학
              </h2>
              <p className="text-sm text-earth mb-4">Archaeology of the Senses — 방법론</p>
              <div className="space-y-3 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  소멸의 불안 속에서 DNA에 새겨진 감각을 되찾는 기억의 발굴. 전통예술의 지층에는 원류의 정체성만이 아니라, 시대마다 겪은 비극과 저항, 적응과 변형이 층층이 쌓여 있다.
                </p>
                <p>
                  고고학자는 유물을 꺼내서 박물관에 넣는다. 하지만 우리는 그 지층 속으로 들어가려 한다. 감각으로. 몸으로. 질문으로.
                </p>
                <p className="text-sm text-text/60">
                  직접 만남, 실연 참여, 역사적 맥락 분석, 관광화/보존의 이중성 포착, 소수 언어(류큐어·제주어) 기록.
                </p>
              </div>
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
