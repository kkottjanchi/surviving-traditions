"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function FieldworkPage() {
  const t = useT();

  const fieldwork = [
    {
      region: "Jeju, Korea",
      title: t({ ko: "제주 답사", en: "Jeju Field Research", ja: "済州現地調査", zh: "濟州田野調查" }),
      date: "2026.03.31 — 04.02",
      status: t({ ko: "완료", en: "Completed", ja: "完了", zh: "已完成" }),
      statusKey: "done",
      participants: "최샘이, 박용화, 조계영",
      highlights: [
        t({ ko: "4/1 오전 9시 — 영등송별제 참관 (칠머리당 사라봉)", en: "4/1 9AM — Yeongdeunggut farewell rite (Chilmeridang Sarabong)", ja: "4/1 午前9時 — ヨンドゥングッ送別祭参観（チルモリダン サラボン）", zh: "4/1 上午9時 — 靈登送別祭參觀（七頭堂沙羅峰）" }),
        t({ ko: "해녀박물관 방문 (공항에서 30분)", en: "Haenyeo Museum visit (30 min from airport)", ja: "海女博物館訪問（空港から30分）", zh: "海女博物館參觀（距機場30分鐘）" }),
        t({ ko: "현장 기록: 영상 14건, 사진 20장", en: "Field records: 14 videos, 20 photos", ja: "現地記録：映像14件、写真20枚", zh: "現場記錄：影片14件、照片20張" }),
      ],
      notes: t({ ko: "상세 기록 및 미디어 자료는 멤버 로그인 후 열람 가능 (Supabase 연동 후 활성화 예정)", en: "Detailed records and media available after member login (to be activated after Supabase integration)", ja: "詳細記録・メディア資料はメンバーログイン後に閲覧可能（Supabase連携後に有効化予定）", zh: "詳細記錄與媒體資料需會員登入後查看（Supabase整合後啟用）" }),
    },
    {
      region: "Okinawa, Japan",
      title: t({ ko: "오키나와 답사", en: "Okinawa Field Research", ja: "沖縄現地調査", zh: "沖繩田野調查" }),
      date: t({ ko: "2026 상반기 예정", en: "H1 2026 (Planned)", ja: "2026年上半期（予定）", zh: "2026年上半年（預定）" }),
      status: t({ ko: "예정", en: "Planned", ja: "予定", zh: "預定" }),
      statusKey: "planned",
      participants: "TBD",
      highlights: [
        t({ ko: "쿠미오도리 공연 참관", en: "Kumiodori performance observation", ja: "組踊公演参観", zh: "組踊公演參觀" }),
        t({ ko: "류큐대학 오키나와 관련 디지털 아카이브 자료 확인", en: "Review of Ryukyu University digital archive materials", ja: "琉球大学沖縄関連デジタルアーカイブ資料確認", zh: "確認琉球大學沖繩相關數位典藏資料" }),
        t({ ko: "현지 연구자 인터뷰", en: "Local researcher interviews", ja: "現地研究者インタビュー", zh: "當地研究者訪談" }),
      ],
      notes: t({ ko: "사전 학습: 류큐 왕국 역사(1429-1879), 1879 일본 병합, 쿠미오도리 UNESCO 2010 등재 과정", en: "Preparation: Ryukyu Kingdom history (1429–1879), 1879 Japanese annexation, Kumiodori UNESCO 2010 inscription process", ja: "事前学習：琉球王国の歴史（1429-1879）、1879年日本併合、組踊UNESCO2010登録過程", zh: "預習：琉球王國歷史（1429-1879）、1879年日本吞併、組踊UNESCO 2010登錄過程" }),
    },
    {
      region: "Taiwan",
      title: t({ ko: "대만 답사", en: "Taiwan Field Research", ja: "台湾現地調査", zh: "台灣田野調查" }),
      date: t({ ko: "2026 상반기 예정", en: "H1 2026 (Planned)", ja: "2026年上半期（予定）", zh: "2026年上半年（預定）" }),
      status: t({ ko: "예정", en: "Planned", ja: "予定", zh: "預定" }),
      statusKey: "planned",
      participants: "TBD",
      highlights: [
        t({ ko: "타이퉁 부눈 부족 레저 농장 방문", en: "Visit to Taitung Bunun tribal leisure farm", ja: "台東ブヌン族レジャーファーム訪問", zh: "訪問台東布農族休閒農場" }),
        t({ ko: "부눈족 의례 공연 참관 및 인터뷰", en: "Bunun ritual performance observation and interviews", ja: "ブヌン族儀礼公演参観とインタビュー", zh: "布農族儀式公演參觀與訪談" }),
        t({ ko: "대만 무형문화재 체계 자료 수집", en: "Collection of Taiwan intangible cultural heritage system materials", ja: "台湾無形文化財体系資料収集", zh: "蒐集台灣無形文化資產體系資料" }),
      ],
      notes: t({ ko: "참고 논문: Wang Ting-Wei, \"From Ritual to Theatre\" (한/영 번역 확보)", en: "Reference paper: Wang Ting-Wei, \"From Ritual to Theatre\" (Korean/English translations available)", ja: "参考論文：Wang Ting-Wei, \"From Ritual to Theatre\"（韓/英翻訳確保済み）", zh: "參考論文：Wang Ting-Wei, \"From Ritual to Theatre\"（已取得韓文/英文譯本）" }),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Fieldwork
            </h1>
            <p className="text-earth font-light mb-4">
              {t({ ko: "현장 답사 기록", en: "Field Research Records", ja: "現地調査記録", zh: "田野調查記錄" })}
            </p>
            <p className="text-sm text-text/60 font-light mb-12 max-w-lg">
              {t({
                ko: "답사 전 준비, 현장 기록, 답사 후 분석이 시간순으로 축적됩니다. 멤버 로그인 후 상세 자료(사진, 영상, 인터뷰 메모)를 열람할 수 있습니다.",
                en: "Pre-fieldwork preparation, on-site records, and post-fieldwork analysis accumulate chronologically. Detailed materials (photos, videos, interview notes) are available after member login.",
                ja: "調査前の準備、現地記録、調査後の分析が時系列で蓄積されます。メンバーログイン後に詳細資料（写真、映像、インタビューメモ）を閲覧できます。",
                zh: "田野調查前準備、現場記錄、調查後分析依時間順序累積。會員登入後可查看詳細資料（照片、影片、訪談記錄）。",
              })}
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
                        fw.statusKey === "done"
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
                      {t({ ko: "참여", en: "Participants", ja: "参加者", zh: "參與者" })}: {fw.participants}
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
