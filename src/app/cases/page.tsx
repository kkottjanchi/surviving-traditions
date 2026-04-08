import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | Surviving Traditions",
  description: "제주, 오키나와, 대만 — 세 개의 섬, 세 가지 생존 방식",
};

const cases = [
  {
    slug: "jeju",
    tag: "Jeju, Korea",
    title: "제주 영등굿과 해녀 문화",
    sub: "Chilmeori-dang Yeongdeung-gut",
    body: "섬이라는 지형이 원형을 보존했다. 해녀의 삶과 영등굿은 분리되지 않는 하나의 생활이었다. 바다에서 일어나는 일이었으니까. UNESCO 무형문화유산 2009/2016 등재.",
    keywords: ["UNESCO ICH 2009", "UNESCO ICH 2016", "정착형 생존", "의례", "해녀"],
    status: "현장 답사 완료 (2026.03.31-04.02)",
  },
  {
    slug: "okinawa",
    tag: "Okinawa, Japan",
    title: "오키나와 — 편입된 전통",
    sub: "琉球 Ryukyu · Kumiodori",
    body: "류큐 왕국에서 일본 제국으로의 강제 편입(1879). 쿠미오도리(궁중 음악극)는 왕국의 외교 도구에서 민족 정체성의 상징으로 변환되었다. 본토와의 관계 속에서 전통이 어떻게 정체성의 도구가 되었는가.",
    keywords: ["UNESCO ICH 2010", "강제 편입", "정체성", "궁중 전승"],
    status: "답사 예정",
  },
  {
    slug: "taiwan",
    tag: "Taiwan",
    title: "대만 — 재의례화의 실험",
    sub: "台灣 · Bunun Ritual",
    body: "UNESCO에 등재되지 않은 사례. 부눈족 의례가 식민화·강제이주·관광 정책 속에서 어떻게 '재의례화'를 통해 생존하는가. 문화적 번역과 원주민 주체성의 교차점.",
    keywords: ["UNESCO 밖", "부눈족", "재의례화", "원주민 주체성"],
    status: "답사 예정",
  },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Case Studies
            </h1>
            <p className="text-earth font-light mb-4">사례 연구</p>
            <p className="text-sm text-text/60 font-light mb-12 max-w-lg">
              세 개의 섬, 세 가지 생존 방식. 각 사례는 독립적이면서도
              &lsquo;제도와 자생력&rsquo;이라는 공통 질문으로 연결됩니다.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6">
            {cases.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.1}>
                <Link href={`/cases/${c.slug}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
                    <div className="px-7 pt-6 pb-4 border-b border-earth/6">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs uppercase tracking-widest text-sage">
                          {c.tag}
                        </p>
                        <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-warm text-earth/70">
                          {c.status}
                        </span>
                      </div>
                      <h2 className="text-lg text-deep font-medium">
                        {c.title}
                      </h2>
                      <p className="font-serif italic text-earth text-sm">
                        {c.sub}
                      </p>
                    </div>
                    <div className="px-7 py-4 text-[0.93rem] font-light leading-relaxed text-text/80">
                      {c.body}
                    </div>
                    <div className="px-7 pb-5 flex gap-2 flex-wrap">
                      {c.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs px-3 py-1 bg-warm rounded-full text-earth"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
