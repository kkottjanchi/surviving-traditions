"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { T, useT } from "@/lib/i18n";

const locations = [
  { name: "Jeju", sub: "제주", href: "/cases/jeju" },
  { name: "Okinawa", sub: "沖縄", href: "/cases/okinawa" },
  { name: "Taiwan", sub: "台灣", href: "/cases/taiwan" },
];

const cases = [
  {
    tag: "Jeju, Korea",
    title: {
      ko: "제주 영등굿과 해녀 문화",
      en: "Jeju Yeongdeunggut & Haenyeo Culture",
      ja: "済州ヨンドゥングッと海女文化",
      zh: "濟州靈登祭與海女文化",
    },
    sub: "Chilmeori-dang Yeongdeung-gut",
    body: {
      ko: "섬이라는 지형이 원형을 보존했다. 해녀의 삶과 영등굿은 분리되지 않는 하나의 생활이었다. 바다에서 일어나는 일이었으니까.",
      en: "Island geography preserved the original form. The lives of haenyeo and the Yeongdeunggut ritual were inseparable — because it happened at sea.",
      ja: "島という地形が原形を保存した。海女の暮らしとヨンドゥングッは分けられない一つの生活だった。海で起きることだったから。",
      zh: "島嶼地形保存了原始形態。海女的生活與靈登祭是不可分離的一體——因為那是發生在海上的事。",
    },
    keywords: ["UNESCO ICH", "정착형 생존", "의례", "해녀"],
    href: "/cases/jeju",
  },
  {
    tag: "Okinawa, Japan",
    title: {
      ko: "오키나와 — 편입된 전통",
      en: "Okinawa — Incorporated Traditions",
      ja: "沖縄 — 編入された伝統",
      zh: "沖繩 — 被編入的傳統",
    },
    sub: "琉球 Ryukyu",
    body: {
      ko: "류큐 왕국에서 일본 제국으로의 강제 편입. 본토와의 관계 속에서 전통이 어떻게 정체성의 도구가 되었는가.",
      en: "Forced incorporation from the Ryukyu Kingdom into Imperial Japan. How tradition became a tool of identity.",
      ja: "琉球王国から大日本帝国への強制編入。本土との関係の中で伝統がいかにアイデンティティの道具となったか。",
      zh: "從琉球王國被強制併入日本帝國。在與本土的關係中，傳統如何成為身份認同的工具。",
    },
    keywords: ["강제 편입", "정체성", "근대화"],
    href: "/cases/okinawa",
  },
  {
    tag: "Taiwan",
    title: {
      ko: "대만 — 재의례화의 실험",
      en: "Taiwan — Experiments in Re-ritualization",
      ja: "台湾 — 再儀礼化の実験",
      zh: "台灣 — 再儀式化的實驗",
    },
    sub: "台灣 Bunun",
    body: {
      ko: "UNESCO 미가입국. 부눈족 의례가 식민화·강제이주·관광 정책 속에서 '재의례화'를 통해 생존한다. UNESCO가 못 담는 사례를 우리가 담는다.",
      en: "Not a UNESCO member state. Bunun rituals survive through 're-ritualization' amid colonization, forced relocation, and tourism policies. We document what UNESCO cannot.",
      ja: "UNESCO非加盟国。ブヌン族の儀礼は植民地化・強制移住・観光政策の中で「再儀礼化」を通じて生き延びている。UNESCOが扱えない事例を我々が記録する。",
      zh: "非UNESCO會員國。布農族儀式在殖民化、強制遷移和觀光政策中，通過「再儀式化」而存續。我們記錄UNESCO無法涵蓋的案例。",
    },
    keywords: ["부눈족", "재의례화", "UNESCO 밖", "원주민 주체성"],
    href: "/cases/taiwan",
  },
];

export default function Home() {
  const t = useT();

  const team = [
    { initial: "S", name: "최샘이 SEMI CHOI", role: t({ ko: "기획 / 연구", en: "Director / Research", ja: "企画・研究", zh: "企劃 / 研究" }) },
    { initial: "Y", name: "박용화 Yonghwa Park", role: t({ ko: "전통예술 / 풍물", en: "Traditional Arts / Pungmul", ja: "伝統芸術・プンムル", zh: "傳統藝術 / 農樂" }) },
    { initial: "K", name: "조계영 Kyeyoung Jo", role: t({ ko: "배우", en: "Actor", ja: "俳優", zh: "演員" }) },
    { initial: "W", name: "정윤희 Yunhee Jeong", role: t({ ko: "사진 · 기록 · 비평", en: "Photography · Documentation · Criticism", ja: "写真・記録・批評", zh: "攝影・記錄・批評" }) },
    { initial: "M", name: "김민솔 Minsol Kim", role: t({ ko: "베리어프리 / 장애학", en: "Barrier-Free / Disability Studies", ja: "バリアフリー・障害学", zh: "無障礙 / 殘障研究" }) },
  ];

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
              <T
                k={{
                  ko: "생존전통",
                  en: "An Archaeology of the Senses",
                  ja: "生存する伝統",
                  zh: "存續的傳統",
                }}
              />
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-text/70 font-light leading-relaxed max-w-md mx-auto mb-10">
              <T
                k={{
                  ko: "전통은 어떻게 살아남는가.\n제도가 보호하려 했지만, 오히려 잃어버린 것들을 추적한다.",
                  en: "How do traditions survive?\nWe trace what was lost when institutions tried to protect them.",
                  ja: "伝統はどのように生き残るのか。\n制度が守ろうとして、かえって失われたものを追跡する。",
                  zh: "傳統如何存續？\n我們追蹤制度試圖保護時反而失去的東西。",
                }}
              />
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
            <T
              k={{
                ko: "이 프로젝트에 대하여",
                en: "About this project",
                ja: "このプロジェクトについて",
                zh: "關於本計畫",
              }}
            />
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn>
            <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-earth font-medium mb-3">
                <T
                  k={{
                    ko: "왜 '생존'인가",
                    en: "Why 'Surviving'",
                    ja: "なぜ「生存」なのか",
                    zh: "為何是「存續」",
                  }}
                />
              </h3>
              <p className="text-[0.95rem] leading-relaxed font-light">
                <T
                  k={{
                    ko: "전통은 박제된 유산이 아니라 살아남기 위해 변화하고, 때로는 좁아지고, 때로는 확장하며 버텨온 것입니다.",
                    en: "Traditions are not frozen heritage — they survive by transforming, sometimes narrowing, sometimes expanding.",
                    ja: "伝統は凍結された遺産ではなく、生き残るために変化し、時には狭まり、時には広がりながら耐えてきたものです。",
                    zh: "傳統不是凝固的遺產——它們透過變化而存續，時而收縮，時而擴張。",
                  }}
                />
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-earth font-medium mb-3">
                <T
                  k={{
                    ko: "경험의 멸종",
                    en: "Extinction of Experience",
                    ja: "経験の絶滅",
                    zh: "經驗的滅絕",
                  }}
                />
              </h3>
              <p className="text-[0.95rem] leading-relaxed font-light">
                <T
                  k={{
                    ko: "제도가 보존을 위해 들어왔지만, 오히려 살아있던 생존 방식 — 몸의 감각, 호혜, 세대 간 전수 — 을 잠식했을 수 있다. 이 역설을 추적합니다.",
                    en: "Institutions came to protect, but may have eroded living survival methods — bodily senses, reciprocity, intergenerational transmission. We trace this paradox.",
                    ja: "制度は保存のために導入されたが、むしろ生きていた生存方式——身体の感覚、互恵、世代間伝承——を侵食した可能性がある。この逆説を追跡する。",
                    zh: "制度為保存而來，卻可能侵蝕了活生生的生存方式——身體感覺、互惠、代際傳承。我們追蹤這個悖論。",
                  }}
                />
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link
            href="/about"
            className="text-sm text-earth border-b border-dotted border-earth/40 hover:border-earth transition-colors"
          >
            <T k={{ ko: "더 읽기 →", en: "Read more →", ja: "もっと読む →", zh: "閱讀更多 →" }} />
          </Link>
        </FadeIn>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] text-deep mb-1">
            Case Studies
          </h2>
          <p className="text-sm text-earth font-light mb-10">
            <T k={{ ko: "사례 연구", en: "Case Studies", ja: "事例研究", zh: "案例研究" }} />
          </p>
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
                    <h3 className="text-lg text-deep font-medium">
                      <T k={c.title} />
                    </h3>
                    <p className="font-serif italic text-earth text-sm">
                      {c.sub}
                    </p>
                  </div>
                  <div className="px-7 py-4 text-[0.93rem] font-light leading-relaxed text-text/80">
                    <T k={c.body} />
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
            <T
              k={{
                ko: "각자의 시각, 각자의 생존을 봅니다.",
                en: "Each with their own perspective, each witnessing survival.",
                ja: "それぞれの視点で、それぞれの生存を見つめる。",
                zh: "各自的視角，各自見證存續。",
              }}
            />
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
            <T k={{ ko: "전체 팀 보기 →", en: "View full team →", ja: "チーム全体を見る →", zh: "查看全部團隊 →" }} />
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
            <T
              k={{
                ko: "당신의 지역에도 살아남은 전통이 있나요?\n연구자, 예술인, 기록자 누구나 동참할 수 있습니다.",
                en: "Are there surviving traditions in your region?\nResearchers, artists, and documentarians are all welcome.",
                ja: "あなたの地域にも生き残った伝統がありますか？\n研究者、芸術家、記録者、誰でも参加できます。",
                zh: "您的地區也有存續的傳統嗎？\n研究者、藝術家、記錄者都歡迎加入。",
              }}
            />
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-earth text-white rounded-full text-sm hover:bg-accent transition-colors"
          >
            <T k={{ ko: "참여 신청", en: "Join", ja: "参加申請", zh: "申請參與" }} />
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
