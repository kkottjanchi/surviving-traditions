import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About | Surviving Traditions",
  description: "생존전통 프로젝트에 대하여 — 왜 이 연구를 하는가",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* 히어로 */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              About
            </h1>
            <p className="text-earth font-light mb-8">이 프로젝트에 대하여</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-lg text-earth font-medium mb-4">
                핵심 질문
              </h2>
              <blockquote className="text-[1.05rem] leading-relaxed text-text/90 border-l-3 border-accent pl-5 italic">
                전통예술 공동체는 제도 없이도 자생했다. 제도가 보존을 위해
                들어왔지만, 오히려 살아있던 생존 방식 — 몸의 감각, 호혜, 세대 간
                전수 — 을 잠식했을 수 있다.
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 text-[0.95rem] leading-relaxed font-light text-text/85">
              <p>
                <strong className="font-medium text-deep">
                  Surviving Traditions(생존전통)
                </strong>
                는 전통 공연예술이 어떻게 살아남았는가를 묻는 비교 연구
                프로젝트입니다. 2026년 한국문화예술위원회 국제협력네트워크 사업의
                지원을 받아 제주, 오키나와, 대만 세 지역의 전통을 비교합니다.
              </p>
              <p>
                우리는 &lsquo;보존&rsquo;이 아니라 &lsquo;생존&rsquo;에
                주목합니다. 전통은 박제된 유산이 아닙니다. 살아남기 위해
                변화하고, 때로는 좁아지고, 때로는 확장하며 버텨온 것입니다.
                그 버팀의 방식 자체가 연구의 대상입니다.
              </p>
              <p>
                이 연구는 2026년 7월 리스본 ISTR(International Society for
                Third-Sector Research) 컨퍼런스에서 포스터 발표될 예정이며,
                &lsquo;경험의 멸종(Experience Extinction)&rsquo; 개념을 통해
                제도화가 공동체에 미친 역설적 영향을 이론화합니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">3</p>
                <p className="text-sm text-text/60 font-light">
                  비교 지역 (제주·오키나와·대만)
                </p>
              </div>
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">7</p>
                <p className="text-sm text-text/60 font-light">
                  연구팀 + 공동 연구자
                </p>
              </div>
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">2026</p>
                <p className="text-sm text-text/60 font-light">
                  ISTR 리스본 발표
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 지원 기관 */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-xl text-deep mb-6">Supported by</h2>
            <div className="space-y-3 text-sm text-text/60 font-light">
              <p>2026 한국문화예술위원회 국제협력네트워크 (기획·네트워크, 단년)</p>
              <p>
                ISTR — International Society for Third-Sector Research
              </p>
              <p>성균관대학교 미래인문학소셜앙트레프래너십 융합전공</p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
