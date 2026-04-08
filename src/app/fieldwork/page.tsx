import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Fieldwork | Surviving Traditions",
  description: "현장 답사 기록 — 제주, 오키나와, 대만",
};

const fieldwork = [
  {
    region: "Jeju, Korea",
    title: "제주 답사",
    date: "2026.03.31 — 04.02",
    status: "완료",
    participants: "최샘이, 박용화, 조계영",
    highlights: [
      "4/1 오전 9시 — 영등송별제 참관 (칠머리당 사라봉)",
      "해녀박물관 방문 (공항에서 30분)",
      "현장 기록: 영상 14건, 사진 20장",
    ],
    notes: "상세 기록 및 미디어 자료는 멤버 로그인 후 열람 가능 (Supabase 연동 후 활성화 예정)",
  },
  {
    region: "Okinawa, Japan",
    title: "오키나와 답사",
    date: "2026 상반기 예정",
    status: "예정",
    participants: "TBD",
    highlights: [
      "쿠미오도리 공연 참관",
      "류큐대학 오키나와 관련 디지털 아카이브 자료 확인",
      "현지 연구자 인터뷰",
    ],
    notes: "사전 학습: 류큐 왕국 역사(1429-1879), 1879 일본 병합, 쿠미오도리 UNESCO 2010 등재 과정",
  },
  {
    region: "Taiwan",
    title: "대만 답사",
    date: "2026 상반기 예정",
    status: "예정",
    participants: "TBD",
    highlights: [
      "타이퉁 부눈 부족 레저 농장 방문",
      "부눈족 의례 공연 참관 및 인터뷰",
      "대만 무형문화재 체계 자료 수집",
    ],
    notes: "참고 논문: Wang Ting-Wei, \"From Ritual to Theatre\" (한/영 번역 확보)",
  },
];

export default function FieldworkPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Fieldwork
            </h1>
            <p className="text-earth font-light mb-4">현장 답사 기록</p>
            <p className="text-sm text-text/60 font-light mb-12 max-w-lg">
              답사 전 준비, 현장 기록, 답사 후 분석이 시간순으로 축적됩니다.
              멤버 로그인 후 상세 자료(사진, 영상, 인터뷰 메모)를 열람할 수
              있습니다.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {fieldwork.map((fw, i) => (
              <FadeIn key={fw.region} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-sage uppercase tracking-widest">
                      {fw.region}
                    </p>
                    <span
                      className={`text-[0.7rem] px-2 py-0.5 rounded-full ${
                        fw.status === "완료"
                          ? "bg-sage/20 text-sage"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {fw.status}
                    </span>
                  </div>
                  <h2 className="text-lg text-deep font-medium mb-1">
                    {fw.title}
                  </h2>
                  <p className="text-sm text-earth/60 mb-4">{fw.date}</p>
                  {fw.participants !== "TBD" && (
                    <p className="text-xs text-text/40 mb-4">
                      참여: {fw.participants}
                    </p>
                  )}
                  <ul className="space-y-2 mb-4">
                    {fw.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-text/70 font-light border-l-2 border-accent/30 pl-3"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-text/40 font-light">{fw.notes}</p>
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
