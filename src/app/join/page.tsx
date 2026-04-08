import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Join | Surviving Traditions",
  description: "생존전통 연구에 동참하세요 — 연구자, 예술인, 기록자 누구나",
};

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Join Us
            </h1>
            <p className="text-earth font-light mb-8">동참</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                당신의 지역에도 살아남은 전통이 있나요?
              </h2>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  Surviving Traditions는 열린 연구 플랫폼입니다. 제주, 오키나와,
                  대만에서 시작했지만 — 전통이 살아남는 방식은 전 세계 어디에나
                  있습니다.
                </p>
                <p>
                  연구자, 예술인, 기록자, 누구든 자신의 지역에서 목격한
                  &lsquo;생존&rsquo;의 사례를 가지고 합류할 수 있습니다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">참여 방법</h2>
              <div className="space-y-4 text-sm text-text/70 font-light">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p>
                    아래 연락처로 자신의 관심 분야와 제안할 사례를 알려주세요.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p>
                    프로젝트 팀과 논의 후, Magic Link(이메일 로그인)를 통해
                    멤버로 초대됩니다.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p>
                    자신의 페이지에서 현장 기록, 글, 미디어를 올리고 다른
                    멤버들과 교류합니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                이런 분을 찾습니다
              </h2>
              <ul className="space-y-2 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  자신의 지역에서 전통예술/의례/공동체의 생존 방식을 연구하거나
                  기록하는 분
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  무형문화유산 정책, 제도화의 역설에 관심 있는 연구자
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  현장에서 직접 전통을 전승하고 있는 예술인, 장인
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  비교 문화 연구, 감각 민족지학, 구술사 방법론에 관심 있는 분
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-deep rounded-2xl p-8 text-center">
              <h2 className="font-serif text-xl text-white/80 mb-4">
                Contact
              </h2>
              <p className="text-sm text-white/50 font-light mb-6">
                참여 문의 및 제안은 아래로 연락해주세요.
              </p>
              <a
                href="mailto:kccf.rpt@gmail.com"
                className="inline-block px-6 py-3 bg-earth text-white rounded-full text-sm hover:bg-accent transition-colors"
              >
                kccf.rpt@gmail.com
              </a>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
