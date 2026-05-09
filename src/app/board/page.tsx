"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function BoardPage() {
  const t = useT();

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
              {t({ ko: "각자의 시각으로 쓰고, 함께 읽습니다.", en: "Write from your own perspective, read together.", ja: "それぞれの視点で書き、ともに読みます。", zh: "各自視角書寫，共同閱讀。" })}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 text-center">
              <p className="text-4xl mb-4 text-earth/30">✎</p>
              <h2 className="text-earth font-medium mb-3">
                {t({ ko: "글쓰기 기능 준비 중", en: "Coming soon", ja: "準備中", zh: "準備中" })}
              </h2>
              <p className="text-sm text-text/60 font-light leading-relaxed max-w-md mx-auto">
                {t({
                  ko: "멤버 로그인(Magic Link) 후 자신의 관점으로 글을 쓸 수 있습니다. 현장 기록, 분석, 질문, 토론 — 형식에 제한 없이 자유롭게.",
                  en: "After member login (Magic Link), you can write from your own perspective. Field records, analysis, questions, discussions — freely, without format restrictions.",
                  ja: "メンバーログイン（Magic Link）後、自分の観点で文章を書くことができます。現地記録、分析、質問、討論 — 形式の制限なく自由に。",
                  zh: "會員登入（Magic Link）後可依自己的觀點書寫。現場記錄、分析、提問、討論——不限形式，自由表達。",
                })}
              </p>
              <p className="text-xs text-text/30 mt-6">
                {t({
                  ko: "Supabase Auth + Tiptap Editor 연동 후 활성화 예정",
                  en: "To be activated after Supabase Auth + Tiptap Editor integration",
                  ja: "Supabase Auth + Tiptap Editor連携後に有効化予定",
                  zh: "Supabase Auth + Tiptap Editor整合後啟用",
                })}
              </p>
            </div>
          </FadeIn>

          {/* 미리보기 — 첫 모임 토론 */}
          <FadeIn delay={0.2}>
            <h2 className="text-sm text-sage uppercase tracking-widest mt-16 mb-6">
              {t({ ko: "미리보기 — 3/15 첫 모임 토론에서", en: "Preview — From the 3/15 First Meeting Discussion", ja: "プレビュー — 3/15第1回ミーティングの討論より", zh: "預覽 — 3/15第一次聚會討論" })}
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">최샘이 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  {t({
                    ko: "생존 방식은 왜 다른가 — 유랑과 정착의 비교",
                    en: "Why do survival strategies differ — Comparing itinerant and settled traditions",
                    ja: "生存方式はなぜ異なるのか — 流浪と定住の比較",
                    zh: "為何生存方式不同——流浪與定居的比較",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "남사당은 전국을 돌아다녔고, 여섯 가지만 남았다. 영등굿은 섬 안에서 공동체가 온전히 품었다. 같은 전통인데 생존 환경이 완전히 달랐고, 그래서 비교군으로 의미가 있다...",
                    en: "Namsadang traveled the country and only six forms survived. Yeongdeunggut was wholly embraced by the community within the island. The same tradition, yet entirely different survival environments — which is exactly why they are meaningful as comparative cases...",
                    ja: "男寺堂は全国を渡り歩き、六つだけが残った。ヨンドゥングッは島の中でコミュニティが丸ごと抱えた。同じ伝統なのに生存環境がまったく異なり、だから比較群として意味がある...",
                    zh: "男寺黨走遍全國，只剩六種形式。靈登祭在島內被社群完整承載。同樣是傳統，生存環境卻截然不同，因此作為比較案例極具意義……",
                  })}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">박용화 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  {t({
                    ko: "형태라도 남아야 한다 — 저변 확대의 의미",
                    en: "The form must survive — The meaning of expanding the base",
                    ja: "形だけでも残らなければ — 裾野拡大の意味",
                    zh: "至少形式要留存——擴大根基的意義",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "풍물 교육 15년. 대회에 풍물단이 안 나와. 상모 돌려서 전체 판 가는 건 이제 없어지고 있다. 갓 만드는 사람이 한 명 남았나? 없어...",
                    en: "15 years of Pungmul education. Pungmul troupes no longer show up at competitions. The full performance with sangnmo spinning — it's disappearing. Is there even one person left who makes the gat? No more...",
                    ja: "プンムル教育15年。大会にプンムル団が出なくなった。サンモを回して全体の場を作るのはもう消えつつある。笠を作る人が一人残っているか？もういない...",
                    zh: "農樂教育15年。比賽裡農樂隊不出現了。轉動象帽完整演出整場的形式正在消失。還有一個會做笠帽的人嗎？沒有了……",
                  })}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                <p className="text-xs text-sage mb-2">조계영 · 2026.03.15</p>
                <h3 className="text-sm text-deep font-medium mb-2">
                  {t({
                    ko: "비주류를 제거해야 정체성이 생긴다",
                    en: "Identity emerges only when the marginal is removed",
                    ja: "傍流を除去してこそアイデンティティが生まれる",
                    zh: "去除非主流才能形成認同",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "남사당이 여섯 가지로 지정된 순간 비주류가 제거됐고, 오히려 정체성이 강화됐다. 제주도는 그럴 필요가 없었다 — 섬이니까...",
                    en: "The moment Namsadang was designated as six forms, the marginal was removed and identity was paradoxically strengthened. Jeju didn't need to do that — it's an island...",
                    ja: "男寺堂が六つに指定された瞬間に傍流が除去され、むしろアイデンティティが強化された。済州島はそうする必要がなかった — 島だから...",
                    zh: "男寺黨被指定為六種的那一刻，非主流被排除，認同感反而強化了。濟州島不需要這樣——因為它是個島……",
                  })}
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
