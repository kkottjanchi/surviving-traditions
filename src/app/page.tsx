import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const locations = [
  { name: "Jeju", sub: "제주", href: "/cases/jeju" },
  { name: "Okinawa", sub: "沖縄", href: "/cases/okinawa" },
  { name: "Taiwan", sub: "台灣", href: "/cases/taiwan" },
  { name: "Lisbon", sub: "ISTR 2026", href: "/timeline" },
];

const cases = [
  {
    tag: "Jeju, Korea",
    title: "제주 영등굿과 해녀 문화",
    sub: "Chilmeori-dang Yeongdeung-gut",
    body: "섬이라는 지형이 원형을 보존했다. 해녀의 삶과 영등굿은 분리되지 않는 하나의 생활이었다. 바다에서 일어나는 일이었으니까.",
    keywords: ["UNESCO ICH", "지형적 보존", "생활양식", "4.3"],
    href: "/cases/jeju",
  },
  {
    tag: "Okinawa, Japan",
    title: "오키나와 — 편입된 전통",
    sub: "琉球 Ryukyu",
    body: "류큐 왕국에서 일본 제국으로의 강제 편입. 본토와의 관계 속에서 전통이 어떻게 정체성의 도구가 되었는가.",
    keywords: ["강제 편입", "정체성", "근대화"],
    href: "/cases/okinawa",
  },
  {
    tag: "Taiwan",
    title: "대만 — 재의례화의 실험",
    sub: "台灣 Bunun",
    body: "UNESCO에 등재되지 않은 사례. 부눈족 의례가 관광과 정책 속에서 어떻게 재의례화를 통해 생존하는가.",
    keywords: ["부눈족", "재의례화", "UNESCO 밖"],
    href: "/cases/taiwan",
  },
];

const team = [
  { initial: "S", name: "최샘이", role: "기획 / 연구" },
  { initial: "Y", name: "박용화", role: "전통예술 / 풍물" },
  { initial: "K", name: "조계영", role: "공연 기술 / 연출" },
  { initial: "W", name: "정윤희", role: "연구" },
  { initial: "M", name: "김민솔", role: "베리어프리 / 장애학" },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 bg-gradient-to-b from-cream to-warm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-[20%] w-[30vw] h-[30vw] rounded-full bg-sage/8 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <FadeIn>
            <h1 className="font-serif text-[clamp(2.2rem,6vw,4rem)] font-normal text-deep tracking-tight leading-tight mb-2">
              Surviving Traditions
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[clamp(1.4rem,3.5vw,2rem)] font-light text-earth mb-8">
              생존전통
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-text/70 font-light leading-relaxed max-w-md mx-auto mb-10">
              전통은 어떻게 살아남는가.
              <br />
              제주, 오키나와, 대만 — 세 개의 섬, 세 가지 생존 방식.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-6 justify-center flex-wrap">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <div className="w-3 h-3 rounded-full border-2 border-earth bg-transparent group-hover:bg-accent transition-colors" />
                  <span className="text-sm text-earth">{loc.name}</span>
                  <span className="text-xs text-text/40">{loc.sub}</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About 미리보기 */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] text-deep mb-1">
            About
          </h2>
          <p className="text-sm text-earth font-light mb-10">
            이 프로젝트에 대하여
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn>
            <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-earth font-medium mb-3">왜 &lsquo;생존&rsquo;인가</h3>
              <p className="text-[0.95rem] leading-relaxed font-light">
                전통은 박제된 유산이 아니라 살아남기 위해 변화하고, 때로는
                좁아지고, 때로는 확장하며 버텨온 것입니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-earth font-medium mb-3">왜 &lsquo;섬&rsquo;인가</h3>
              <p className="text-[0.95rem] leading-relaxed font-light">
                제주, 오키나와, 대만. 본토와 분리된 지형이 만들어낸 독자적 전통
                보존 환경. 각기 다른 압력 속에서 각기 다른 방식으로 살아남았습니다.
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link
            href="/about"
            className="text-sm text-earth border-b border-dotted border-earth/40 hover:border-earth transition-colors"
          >
            더 읽기 &rarr;
          </Link>
        </FadeIn>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] text-deep mb-1">
            Case Studies
          </h2>
          <p className="text-sm text-earth font-light mb-10">사례 연구</p>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5">
          {cases.map((c, i) => (
            <FadeIn key={c.tag} delay={i * 0.1}>
              <Link href={c.href} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="px-7 pt-6 pb-4 border-b border-earth/6">
                    <p className="text-xs uppercase tracking-widest text-sage mb-1">
                      {c.tag}
                    </p>
                    <h3 className="text-lg text-deep font-medium">{c.title}</h3>
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

      {/* Team 미리보기 */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] text-deep mb-1">
            Team
          </h2>
          <p className="text-sm text-earth font-light mb-10">
            각자의 시각, 각자의 생존을 봅니다.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.05}>
              <div className="bg-white rounded-2xl py-7 px-4 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-warm mx-auto mb-3 flex items-center justify-center text-xl text-earth">
                  {m.initial}
                </div>
                <p className="text-sm font-medium text-deep">{m.name}</p>
                <p className="text-xs text-earth/70 font-light mt-1">
                  {m.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3} className="mt-8 text-center">
          <Link
            href="/team"
            className="text-sm text-earth border-b border-dotted border-earth/40 hover:border-earth transition-colors"
          >
            전체 팀 보기 &rarr;
          </Link>
        </FadeIn>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] text-deep mb-4">
            Join Us
          </h2>
          <p className="text-base text-text/70 font-light leading-relaxed max-w-md mx-auto mb-8">
            당신의 지역에도 살아남은 전통이 있나요?
            <br />
            연구자, 예술인, 기록자 누구나 동참할 수 있습니다.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-earth text-white rounded-full text-sm hover:bg-accent transition-colors"
          >
            참여 신청
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
