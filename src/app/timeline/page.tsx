import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Timeline | Surviving Traditions",
  description: "답사, 학회, 연구 전체 일정",
};

const events = [
  { date: "2025", title: "KCI 등재 논문 3편 발표", desc: "제주 사회적기업, 관계적 가치, 디지털 사회혁신 (우수논문상)", done: true },
  { date: "2026.01", title: "한문위 국제협업지원 선정", desc: "\"감각의 고고학: 생존전통\" — 1,000만원", done: true },
  { date: "2026.02", title: "ISTR 2026 포스터 발표 수락", desc: "Surviving Traditions: An Archaeology of the Senses", done: true },
  { date: "2026.03.09", title: "NRF 박사과정 연구장려금 지원", desc: "\"경험의 멸종과 생존 전통\" — 심사 진행 중", done: true },
  { date: "2026.03.15", title: "생존전통 첫 모임 (OT)", desc: "혜화 / 최샘이, 박용화, 조계영. 확장론 vs 축소론 vs 비교론 토론", done: true },
  { date: "2026.03.31-04.02", title: "제주 답사", desc: "영등송별제(4/1) 참관 / 칠머리당 사라봉 / 해녀문화 현장 조사", done: true },
  { date: "2026.04.08-09", title: "survivingtraditions.com 개설", desc: "플랫폼 설계 + 개발 + 도메인 연결 + 배포", done: true },
  { date: "2026 상반기", title: "오키나와 답사", desc: "쿠미오도리 현장 조사, 류큐대학 자료 확인", done: false },
  { date: "2026 상반기", title: "대만 답사", desc: "부눈 부족 레저 농장 현장 조사, 인터뷰", done: false },
  { date: "2026.07.14-17", title: "ISTR 리스본 컨퍼런스", desc: "포스터 발표 — Iscte, Instituto Universitário de Lisboa", done: false },
  { date: "2026 하반기", title: "비교 분석 완성", desc: "3개 지역 케이스 비교 + 경험의 멸종 이론화", done: false },
];

export default function TimelinePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Timeline
            </h1>
            <p className="text-earth font-light mb-12">
              답사 / 학회 / 연구 전체 일정
            </p>
          </FadeIn>

          <div className="relative pl-7">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-accent/30" />
            {events.map((e, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="relative mb-8 pb-2">
                  <div
                    className={`absolute -left-[22px] top-2 w-[9px] h-[9px] rounded-full ${
                      e.done ? "bg-accent" : "border-2 border-accent bg-cream"
                    }`}
                  />
                  <p className="text-xs text-sage font-medium mb-1">
                    {e.date}
                    {e.done && (
                      <span className="ml-2 text-accent/60">완료</span>
                    )}
                  </p>
                  <h3 className="text-sm text-deep font-medium mb-1">
                    {e.title}
                  </h3>
                  <p className="text-sm text-text/60 font-light">{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
