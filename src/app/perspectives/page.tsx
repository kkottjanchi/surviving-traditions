import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Perspectives | Surviving Traditions",
  description: "같은 현상에 대한 다른 시각의 글",
};

export default function PerspectivesPage() {
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
              같은 현상을 다른 눈으로 봅니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 text-center">
              <p className="text-4xl mb-4 text-earth/30">&#128065;</p>
              <h2 className="text-earth font-medium mb-3">
                Perspectives 준비 중
              </h2>
              <p className="text-sm text-text/60 font-light leading-relaxed max-w-md mx-auto">
                같은 현장, 같은 전통을 두고 멤버들이 각자의 전문성과
                관점으로 글을 씁니다. 풍물 교육자의 눈, 연출가의 눈, 연구자의 눈
                — 시각이 다르면 보이는 것도 다릅니다.
              </p>
              <p className="text-xs text-text/30 mt-6">
                멤버 글쓰기 기능 활성화 후 오픈 예정
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
