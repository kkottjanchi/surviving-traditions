"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function TimelinePage() {
  const t = useT();

  const events = [
    {
      date: "2025",
      title: t({ ko: "KCI 등재 논문 3편 발표", en: "3 KCI-indexed papers published", ja: "KCI収録論文3本発表", zh: "發表3篇KCI收錄論文" }),
      desc: t({ ko: "제주 사회적기업, 관계적 가치, 디지털 사회혁신 (우수논문상)", en: "Jeju social enterprises, relational values, digital social innovation (Excellence Award)", ja: "済州社会的企業、関係的価値、デジタル社会革新（優秀論文賞）", zh: "濟州社會企業、關係性價值、數位社會創新（優秀論文獎）" }),
      done: true,
    },
    {
      date: "2026.01",
      title: t({ ko: "한문위 국제협업지원 선정", en: "Selected for KCCF International Collaboration Grant", ja: "韓文委国際協業支援に採択", zh: "獲選韓文委國際協作支援" }),
      desc: t({ ko: "\"감각의 고고학: 생존전통\" — 1,000만원", en: "\"Archaeology of the Senses: Surviving Traditions\" — KRW 10,000,000", ja: "「感覚の考古学：生存する伝統」— 1,000万ウォン", zh: "「感官考古學：生存傳統」— 1,000萬韓元" }),
      done: true,
    },
    {
      date: "2026.02",
      title: t({ ko: "ISTR 2026 포스터 발표 수락", en: "ISTR 2026 Poster Presentation Accepted", ja: "ISTR 2026ポスター発表採択", zh: "ISTR 2026海報發表獲接受" }),
      desc: "Surviving Traditions: An Archaeology of the Senses",
      done: true,
    },
    {
      date: "2026.03.09",
      title: t({ ko: "NRF 박사과정 연구장려금 지원", en: "NRF PhD Research Grant Application", ja: "NRF博士課程研究奨励金申請", zh: "申請NRF博士課程研究獎勵金" }),
      desc: t({ ko: "\"경험의 멸종과 생존 전통\" — 심사 진행 중", en: "\"Extinction of Experience and Surviving Traditions\" — under review", ja: "「経験の絶滅と生存伝統」— 審査進行中", zh: "「經驗的滅絕與生存傳統」— 審查中" }),
      done: true,
    },
    {
      date: "2026.03.15",
      title: t({ ko: "생존전통 첫 모임 (OT)", en: "Surviving Traditions First Meeting (Orientation)", ja: "生存する伝統第1回ミーティング（OT）", zh: "生存傳統第一次聚會（說明會）" }),
      desc: t({ ko: "혜화 / 최샘이, 박용화, 조계영. 확장론 vs 축소론 vs 비교론 토론", en: "Hyehwa / SEMI CHOI, Yonghwa Park, Gyeyoung Jo. Expansion vs. Reduction vs. Comparative theory debate", ja: "恵化 / SEMI CHOI、Yonghwa Park、Gyeyoung Jo。拡張論 vs 縮小論 vs 比較論討論", zh: "惠化 / SEMI CHOI、Yonghwa Park、Gyeyoung Jo。擴張論 vs 縮小論 vs 比較論討論" }),
      done: true,
    },
    {
      date: "2026.03.31-04.02",
      title: t({ ko: "제주 답사", en: "Jeju Field Research", ja: "済州現地調査", zh: "濟州田野調查" }),
      desc: t({ ko: "영등송별제(4/1) 참관 / 칠머리당 사라봉 / 해녀문화 현장 조사", en: "Yeongdeunggut farewell rite (4/1) / Chilmeridang Sarabong / Haenyeo culture fieldwork", ja: "ヨンドゥングッ送別祭（4/1）参観 / チルモリダン サラボン / 海女文化現地調査", zh: "靈登送別祭（4/1）參觀 / 七頭堂沙羅峰 / 海女文化現場調查" }),
      done: true,
    },
    {
      date: "2026.04.08-09",
      title: t({ ko: "survivingtraditions.com 개설", en: "survivingtraditions.com launched", ja: "survivingtraditions.com 開設", zh: "survivingtraditions.com 開站" }),
      desc: t({ ko: "플랫폼 설계 + 개발 + 도메인 연결 + 배포", en: "Platform design + development + domain connection + deployment", ja: "プラットフォーム設計 + 開発 + ドメイン接続 + デプロイ", zh: "平台設計 + 開發 + 網域連結 + 部署" }),
      done: true,
    },
    {
      date: t({ ko: "2026 상반기", en: "H1 2026", ja: "2026年上半期", zh: "2026年上半年" }),
      title: t({ ko: "오키나와 답사", en: "Okinawa Field Research", ja: "沖縄現地調査", zh: "沖繩田野調查" }),
      desc: t({ ko: "쿠미오도리 현장 조사, 류큐대학 자료 확인", en: "Kumiodori fieldwork, Ryukyu University archive review", ja: "組踊現地調査、琉球大学資料確認", zh: "組踊現場調查、確認琉球大學資料" }),
      done: false,
    },
    {
      date: t({ ko: "2026 상반기", en: "H1 2026", ja: "2026年上半期", zh: "2026年上半年" }),
      title: t({ ko: "대만 답사", en: "Taiwan Field Research", ja: "台湾現地調査", zh: "台灣田野調查" }),
      desc: t({ ko: "부눈 부족 레저 농장 현장 조사, 인터뷰", en: "Bunun tribal leisure farm fieldwork and interviews", ja: "ブヌン族レジャーファーム現地調査、インタビュー", zh: "布農族休閒農場現場調查、訪談" }),
      done: false,
    },
    {
      date: "2026.07.14-17",
      title: t({ ko: "ISTR 리스본 컨퍼런스", en: "ISTR Lisbon Conference", ja: "ISTRリスボン会議", zh: "ISTR里斯本會議" }),
      desc: t({ ko: "포스터 발표 — Iscte, Instituto Universitário de Lisboa", en: "Poster Presentation — Iscte, Instituto Universitário de Lisboa", ja: "ポスター発表 — Iscte, Instituto Universitário de Lisboa", zh: "海報發表 — Iscte, Instituto Universitário de Lisboa" }),
      done: false,
    },
    {
      date: t({ ko: "2026 하반기", en: "H2 2026", ja: "2026年下半期", zh: "2026年下半年" }),
      title: t({ ko: "비교 분석 완성", en: "Comparative Analysis Complete", ja: "比較分析完成", zh: "完成比較分析" }),
      desc: t({ ko: "3개 지역 케이스 비교 + 경험의 멸종 이론화", en: "3-region case comparison + theorizing extinction of experience", ja: "3地域ケース比較 + 経験の絶滅の理論化", zh: "3個地區案例比較 + 「經驗滅絕」理論化" }),
      done: false,
    },
  ];

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
              {t({ ko: "답사 / 학회 / 연구 전체 일정", en: "Fieldwork / Conference / Research Schedule", ja: "調査 / 学会 / 研究全日程", zh: "田野調查 / 學術會議 / 研究全程" })}
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
                      <span className="ml-2 text-accent/60">
                        {t({ ko: "완료", en: "Completed", ja: "完了", zh: "已完成" })}
                      </span>
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
