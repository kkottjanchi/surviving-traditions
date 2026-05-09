"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function TaiwanPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Taiwan
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              {t({
                ko: "대만 — 재의례화의 실험",
                en: "Taiwan — Experiments in Re-ritualization",
                ja: "台湾 — 再儀礼化の実験",
                zh: "台灣——再儀式化的實驗",
              })}
            </h1>
            <p className="font-serif italic text-earth mb-8">
              台灣 · Bunun Ritual · From Ritual to Theatre
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  {t({
                    ko: "UNESCO 미가입",
                    en: "Outside UNESCO",
                    ja: "UNESCO未加盟",
                    zh: "非UNESCO成員",
                  })}
                </span>
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  {t({
                    ko: "답사 예정",
                    en: "Field Visit Planned",
                    ja: "現地調査予定",
                    zh: "田野調查預定",
                  })}
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  {t({
                    ko: "대만은 유엔/UNESCO 회원국이 아니다. 따라서 UNESCO 무형문화유산 협약의 당사국이 될 수 없고, 공식 등재가 불가능하다. 이것은 이 프로젝트의 핵심적 차별점이다 —",
                    en: "Taiwan is not a member of the UN/UNESCO. It cannot become a party to the UNESCO Convention on Intangible Cultural Heritage, and official inscription is impossible. This is a core distinction of this project —",
                    ja: "台湾は国連/UNESCOの加盟国ではない。したがってUNESCO無形文化遺産条約の締約国になることができず、公式登録は不可能だ。これがこのプロジェクトの核心的な差別点だ —",
                    zh: "台灣並非聯合國/UNESCO成員。因此無法成為UNESCO非物質文化遺產公約的締約方，亦無法進行正式列名。這正是本計畫的核心差異所在——",
                  })}{" "}
                  <strong className="font-medium">
                    {t({
                      ko: "UNESCO가 못 담는 사례를 우리가 담는다.",
                      en: "We document what UNESCO cannot.",
                      ja: "UNESCOが担えない事例を私たちが担う。",
                      zh: "我們記錄UNESCO無法涵蓋的案例。",
                    })}
                  </strong>
                </p>
                <p>
                  {t({
                    ko: "부눈족(Bunun)은 대만 16개 공식 원주민 부족 중 하나이다. 일본 식민 통치(1895-1945) 하에서 이동성 친족 공동체(sidohk)가 고정된 부락으로 재편되었고, 의례는 친족 중심에서 부락 공동 행사로 변환되었다.",
                    en: "The Bunun are one of Taiwan's 16 officially recognized indigenous peoples. Under Japanese colonial rule (1895–1945), mobile kinship communities (sidohk) were reorganized into fixed settlements, and rituals shifted from kin-centered to village-wide communal events.",
                    ja: "ブヌン族（Bunun）は台湾の16公式先住民族の一つだ。日本植民地統治（1895-1945）下で、移動性の親族共同体（sidohk）が固定した部落に再編され、儀礼は親族中心から部落共同行事へと変換された。",
                    zh: "布農族（Bunun）是台灣16個官方認定原住民族之一。在日本殖民統治（1895-1945）期間，移動性的親族社群（sidohk）被重組為固定部落，儀式也從以親族為中心轉變為部落共同活動。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "타이퉁의 부눈 부족 레저 농장에서는 의례가 관광 공연으로 재구성되었지만, 단순한 상품화가 아닌 '재의례화(re-ritualization)'를 통해 새로운 아우라를 생성한다. Walter Benjamin의 아우라 상실 개념이 여기서 뒤집힌다.",
                    en: "At a Bunun tribal leisure farm in Taitung, rituals have been restructured as tourist performances — yet through re-ritualization rather than mere commodification, they generate a new aura. Walter Benjamin's concept of the loss of aura is inverted here.",
                    ja: "台東のブヌン部族レジャー農場では、儀礼が観光公演として再構成されたが、単なる商品化ではなく「再儀礼化（re-ritualization）」を通じて新しいアウラを生成する。ヴァルター・ベンヤミンのアウラ喪失概念がここで逆転する。",
                    zh: "在台東的布農部落休閒農場，儀式被重構為觀光表演——但這並非單純的商品化，而是透過「再儀式化（re-ritualization）」生成了新的靈光。班雅明的靈光消逝概念在此被倒轉。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "역사적 맥락",
                  en: "Historical Context",
                  ja: "歴史的背景",
                  zh: "歷史背景",
                })}
              </h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">1895-1945</span>{" "}
                  —{" "}
                  {t({
                    ko: "일본 식민 통치. 고지대 부눈족 거주지 재편, 조(기장) 중심 생계가 쌀 재배로 전환",
                    en: "Japanese colonial rule. Bunun highland settlements reorganized; millet-based livelihoods converted to rice cultivation.",
                    ja: "日本植民地統治。高地ブヌン族居住地の再編、粟（キビ）中心の生計が米作りに転換。",
                    zh: "日本殖民統治。布農族高地聚落重組，以粟（小米）為主的生計轉為種植水稻。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">1984</span> —{" "}
                  {t({
                    ko: "대만 원주민 권리 촉진 협회 설립, 문화 부흥 시작",
                    en: "Taiwan Indigenous Rights Promotion Association established; cultural revival begins.",
                    ja: "台湾先住民権利促進協会設立、文化復興が始まる。",
                    zh: "台灣原住民族權利促進會成立，文化復興運動展開。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">1994</span> —{" "}
                  {t({
                    ko: "'원주민' 법적 공식 인정",
                    en: 'Legal recognition of "indigenous peoples" formally established.',
                    ja: "「先住民」の法的公式認定。",
                    zh: "「原住民」獲得正式法律認定。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">
                    {t({ ko: "현재", en: "Present", ja: "現在", zh: "現在" })}
                  </span>{" "}
                  —{" "}
                  {t({
                    ko: "16개 공식 부족, 자체 무형문화재 체계 운영 (600개 이상 지정)",
                    en: "16 officially recognized peoples; Taiwan operates its own intangible cultural heritage system (600+ designations).",
                    ja: "16の公式部族、独自の無形文化財体系を運営（600件以上指定）。",
                    zh: "16個官方認定部族，自行運營無形文化資產體系（逾600項指定）。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "참고 논문",
                  en: "Reference Paper",
                  ja: "参考論文",
                  zh: "參考論文",
                })}
              </h2>
              <div className="text-sm text-text/70 font-light space-y-2">
                <p className="font-medium text-text/90">
                  Wang Ting-Wei. "From Ritual to Theatre: Cultural
                  Translation and Re-ritualization of Bunun Rituals."
                </p>
                <p>
                  {t({
                    ko: "타이퉁 부눈 부족 레저 농장의 의례 공연을 중심으로, 문화 관광과 연극적 맥락에서 부눈족 의례의 문화적 번역 전략을 분석한다.",
                    en: "Analyzes cultural translation strategies of Bunun rituals in the context of cultural tourism and theatrical performance, focusing on a Bunun tribal leisure farm in Taitung.",
                    ja: "台東のブヌン部族レジャー農場での儀礼公演を中心に、文化観光と演劇的文脈におけるブヌン族儀礼の文化的翻訳戦略を分析する。",
                    zh: "以台東布農部落休閒農場的儀式演出為中心，分析文化觀光與劇場脈絡下布農族儀式的文化翻譯策略。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "열린 질문",
                  en: "Open Questions",
                  ja: "開かれた問い",
                  zh: "開放性問題",
                })}
              </h2>
              <ul className="space-y-3 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "'재의례화'는 상품화의 다른 이름인가, 진정한 생존 전략인가?",
                    en: "Is 're-ritualization' another name for commodification, or a genuine survival strategy?",
                    ja: "「再儀礼化」は商品化の別名か、真の生存戦略か？",
                    zh: "「再儀式化」是商品化的另一種名稱，還是真正的生存策略？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "UNESCO 등재가 불가능한 상황에서 대만 원주민 문화의 국제적 가시성은 어떻게 확보되는가?",
                    en: "How can the international visibility of Taiwan's indigenous cultures be secured when UNESCO inscription is not an option?",
                    ja: "UNESCO登録が不可能な状況で、台湾先住民文化の国際的可視性はどのように確保されるか？",
                    zh: "在UNESCO列名不可能的情況下，台灣原住民文化的國際能見度如何得到保障？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "범원주민주의(pan-indigenism)는 개별 부족의 고유성을 보호하는가, 침식하는가?",
                    en: "Does pan-indigenism protect or erode the distinctiveness of individual peoples?",
                    ja: "汎先住民主義（pan-indigenism）は個別部族の固有性を保護するか、侵食するか？",
                    zh: "泛原住民主義（pan-indigenism）是保護還是侵蝕各部族的獨特性？",
                  })}
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-8">
            <Link
              href="/cases"
              className="text-sm text-earth border-b border-dotted border-earth/40 hover:border-earth transition-colors"
            >
              {t({
                ko: "← 전체 사례 보기",
                en: "← All Cases",
                ja: "← すべての事例",
                zh: "← 所有案例",
              })}
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
