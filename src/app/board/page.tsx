import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Board | Surviving Traditions",
  description: "멤버별 글쓰기 공간 — 각자의 시각으로 쓰고, 함께 읽습니다",
};

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Board
            </h1>
            <p className="text-earth font-light mb-8">
              각자의 시각으로 쓰고, 함께 읽습니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 text-center">
              <p className="text-4xl mb-4 text-earth/30">&#9998;</p>
              <h2 className="text-earth font-medium mb-3">
                글쓰기 기능 준비 중
              </h2>
              <p className="text-sm text-text/60 font-light leading-relaxed max-w-md mx-auto">
                멤버 로그인(Magic Link) 후 자신의 관점으로 글을 쓸 수 있습니다.
                현장 기록, 분석, 질문, 토론 — 형식에 제한 없이 자유롭게.
              </p>
              <p className="text-xs text-text/30 mt-6">
                Supabase Auth + Tiptap Editor 연동 후 활성화 예정
              </p>
            </div>
          </FadeIn>

          {/* 미리보기 — 첫 모임 토론 */}
          <FadeIn delay={0.2}>
            <h2 className="text-sm text-sage uppercase tracking-widest mt-16 mb-6">
              Preview — 3/15 첫 모임 토론에서
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">최샘이 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  생존 방식은 왜 다른가 — 유랑과 정착의 비교
                </h3>
                <p className="text-sm text-text/60 font-light">
                  남사당은 전국을 돌아다녔고, 여섯 가지만 남았다. 영등굿은 섬
                  안에서 공동체가 온전히 품었다. 같은 전통인데 생존 환경이
                  완전히 달랐고, 그래서 비교군으로 의미가 있다...
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">박용화 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  형태라도 남아야 한다 — 저변 확대의 의미
                </h3>
                <p className="text-sm text-text/60 font-light">
                  풍물 교육 15년. 대회에 풍물단이 안 나와. 상모 돌려서 전체 판
                  가는 건 이제 없어지고 있다. 갓 만드는 사람이 한 명 남았나?
                  없어...
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">조계영 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  비주류를 제거해야 정체성이 생긴다
                </h3>
                <p className="text-sm text-text/60 font-light">
                  남사당이 여섯 가지로 지정된 순간 비주류가 제거됐고, 오히려
                  정체성이 강화됐다. 제주도는 그럴 필요가 없었다 — 섬이니까...
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
