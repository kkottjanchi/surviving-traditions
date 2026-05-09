"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function ResearchPage() {
  const t = useT();

  const theories = [
    {
      author: "Helena Norberg-Hodge",
      work: "Ancient Futures: Learning from Ladakh (1991)",
      point: t({
        ko: "전통은 과거가 아니라, 우리가 잃어버린 미래의 가능성이다. 라다크가 가지고 있던 공동체, 자급, 지속가능성은 '아직 오지 않은 미래'였다.",
        en: "Tradition is not the past — it is the possibility of a future we have lost. What Ladakh possessed — community, self-sufficiency, sustainability — was 'a future yet to come.'",
        ja: "伝統は過去ではなく、私たちが失った未来の可能性だ。ラダックが持っていたコミュニティ、自給、持続可能性は「まだ来ていない未来」だった。",
        zh: "傳統不是過去，而是我們失去的未來的可能性。拉達克所擁有的共同體、自給、永續性，是「尚未到來的未來」。",
      }),
      connection: t({
        ko: "전통예술은 오래된 미래다 — 이 프로젝트의 출발점",
        en: "Traditional arts are an ancient future — the starting point of this project",
        ja: "伝統芸術は古い未来だ——このプロジェクトの出発点",
        zh: "傳統藝術是古老的未來——本計畫的出發點",
      }),
    },
    {
      author: "Christine Rosen",
      work: "The Extinction of Experience (2008)",
      point: t({
        ko: "직접 경험이 사라지면 존재 방식 자체를 잃는다. 몸으로 받고, 감각으로 느끼고, 타인과 부딪히는 것이 인간으로 존재하는 방식이다.",
        en: "When direct experience disappears, we lose the very way of being. Receiving with the body, feeling with the senses, and colliding with others — this is the way of being human.",
        ja: "直接経験が消えると、存在の方法そのものを失う。身体で受け取り、感覚で感じ、他者とぶつかること——それが人間として存在する方法だ。",
        zh: "當直接體驗消失，我們失去的是存在方式本身。用身體接受、用感覺感受、與他人碰撞——這是作為人類存在的方式。",
      }),
      connection: t({
        ko: "전통예술의 소멸 = 박제. 살아있는 것에서 보존해야 할 것으로 바뀌는 과정",
        en: "Extinction of traditional arts = taxidermy. The process of changing from something living to something to be preserved.",
        ja: "伝統芸術の消滅＝剥製。生きているものから保存すべきものへと変わる過程。",
        zh: "傳統藝術的消滅＝標本化。從活著的事物轉變為需要被保存的過程。",
      }),
    },
    {
      author: "Laurajane Smith",
      work: "Uses of Heritage (2006)",
      point: t({
        ko: "Authorized Heritage Discourse(AHD) — 국가·전문가 담론이 무형문화유산을 박제한다",
        en: "Authorized Heritage Discourse (AHD) — state and expert discourses taxidermify intangible cultural heritage.",
        ja: "Authorized Heritage Discourse（AHD）——国家・専門家の言説が無形文化遺産を剥製にする。",
        zh: "Authorized Heritage Discourse（AHD）——國家與專家論述將非物質文化遺產標本化。",
      }),
      connection: t({
        ko: "제도 역설: 보호하려다 공동체 자생력을 지운 메커니즘",
        en: "The institutional paradox: the mechanism by which protection erases community self-sufficiency.",
        ja: "制度の逆説：保護しようとしてコミュニティの自生力を消したメカニズム。",
        zh: "制度悖論：試圖保護卻抹去社群自生力的機制。",
      }),
    },
    {
      author: "UNESCO",
      work: "Convention for the Safeguarding of the Intangible Cultural Heritage (2003)",
      point: t({
        ko: "무형문화유산 보호 협약 — 'heritage'가 아닌 'living heritage'로의 전환. 그러나 등재 과정 자체가 전통을 고정시키는 역설.",
        en: "Convention for the Safeguarding of Intangible Cultural Heritage — a shift from 'heritage' to 'living heritage.' Yet the inscription process itself paradoxically fixes tradition.",
        ja: "無形文化遺産保護条約——「遺産」から「生きた遺産」への転換。しかし登録プロセス自体が伝統を固定する逆説。",
        zh: "非物質文化遺產保護公約——從「遺產」到「活態遺產」的轉換。然而登錄過程本身卻產生固定傳統的悖論。",
      }),
      connection: t({
        ko: "영등굿(2009), 해녀(2016), 쿠미오도리(2010) 등재 — 등재 전후 비교의 기준점",
        en: "Yeongdeunggut (2009), Haenyeo (2016), Kumiodori (2010) inscriptions — baseline for before/after comparison.",
        ja: "ヨンドゥングッ（2009年）、海女（2016年）、组踊（2010年）登録——登録前後比較の基準点。",
        zh: "靈登祭（2009）、海女（2016）、組踊（2010）登錄——登錄前後比較的基準點。",
      }),
    },
    {
      author: "Victor Turner",
      work: "The Ritual Process: Structure and Anti-Structure (1969)",
      point: t({
        ko: "의례는 공동체를 일상에서 분리시켜 다시 결합하는 과정이다. 리미널리티(liminal)의 경험이 공동체를 유지한다.",
        en: "Ritual is the process of separating the community from everyday life and re-joining them. The experience of liminality maintains the community.",
        ja: "儀礼は共同体を日常から切り離し、再び結合させるプロセスだ。リミナリティ（liminality）の経験がコミュニティを維持する。",
        zh: "儀式是將社群從日常中分離、再重新結合的過程。邊限性（liminality）的體驗維繫著社群。",
      }),
      connection: t({
        ko: "영등굿·부눈족 의례가 공동체를 '되살리는' 메커니즘 분석의 틀",
        en: "Framework for analyzing the mechanism by which Yeongdeunggut and Bunun rituals 'revive' communities.",
        ja: "ヨンドゥングッ・ブヌン族の儀礼がコミュニティを「蘇らせる」メカニズム分析の枠組み。",
        zh: "分析靈登祭・布農族儀式「復活」社群機制的框架。",
      }),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Research
            </h1>
            <p className="text-earth font-light mb-12">
              {t({
                ko: "핵심 질문 + 이론 프레임",
                en: "Core Questions + Theoretical Framework",
                ja: "核心問い＋理論フレーム",
                zh: "核心問題＋理論框架",
              })}
            </p>
          </FadeIn>

          {/* 핵심 가설 */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-12">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "핵심 가설",
                  en: "Core Hypothesis",
                  ja: "核心仮説",
                  zh: "核心假說",
                })}
              </h2>
              <blockquote className="text-[1.05rem] leading-relaxed text-text/90 border-l-3 border-accent pl-5">
                {t({
                  ko: "“제도(법·협약)는 문화를 보호하려 했지만, 동시에 공동체가 스스로 살아남던 방식을 지워버렸을 수 있다.”",
                  en: "“Institutions (laws and conventions) sought to protect culture — but may simultaneously have erased the modes through which communities once survived on their own.”",
                  ja: "「制度（法や条約）は文化を保護しようとしたが、同時にコミュニティが自力で生き残ってきた方法を消し去ってしまったかもしれない。」",
                  zh: "「制度（法律與協約）試圖保護文化，但同時可能抹去了社群自行生存的方式。」",
                })}
              </blockquote>
              <div className="mt-6 space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">
                    {t({
                      ko: "외부 변수",
                      en: "External Variables",
                      ja: "外部変数",
                      zh: "外部變數",
                    })}
                  </span>{" "}
                  —{" "}
                  {t({
                    ko: "식민화, 근대화, 정책, 유네스코 무형문화유산 보호 협약(2003), 국가무형유산법",
                    en: "Colonization, modernization, policy, UNESCO Convention for the Safeguarding of Intangible Cultural Heritage (2003), National Intangible Heritage Act",
                    ja: "植民地化、近代化、政策、ユネスコ無形文化遺産保護条約（2003年）、国家無形遺産法",
                    zh: "殖民化、現代化、政策、聯合國教科文組織非物質文化遺產保護公約（2003年）、國家無形遺產法",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">
                    {t({
                      ko: "내부 변수",
                      en: "Internal Variables",
                      ja: "内部変数",
                      zh: "內部變數",
                    })}
                  </span>{" "}
                  —{" "}
                  {t({
                    ko: "개인이 시대 변화에 즉각 적응하지 못하는 특성 (예술인 개개인의 삶)",
                    en: "The tendency of individuals not to adapt immediately to changes of the era (the lives of individual artists)",
                    ja: "個人が時代の変化に即座に適応できない特性（芸術家個人の生活）",
                    zh: "個人無法即時適應時代變化的特性（藝術家個人的生活）",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">
                    {t({
                      ko: "연구 질문",
                      en: "Research Question",
                      ja: "研究問い",
                      zh: "研究問題",
                    })}
                  </span>{" "}
                  —{" "}
                  {t({
                    ko: "제도 이전/이후 공동체는 어떻게 생존하려 했나? 제도가 우리에게 잊게 만든 것은 무엇인가?",
                    en: "How did communities try to survive before and after institutionalization? What has the institution made us forget?",
                    ja: "制度の前後、コミュニティはどのように生存しようとしたか？制度が私たちに忘れさせたものは何か？",
                    zh: "制度前後，社群如何嘗試生存？制度讓我們忘記了什麼？",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 경험의 멸종 */}
          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-xl text-deep mb-4">
                Extinction of Experience
              </h2>
              <p className="text-sm text-earth mb-4">
                {t({
                  ko: "경험의 멸종",
                  en: "Extinction of Experience",
                  ja: "経験の絶滅",
                  zh: "經驗的滅絕",
                })}
              </p>
              <p className="text-[0.95rem] leading-relaxed font-light text-text/85">
                {t({
                  ko: "제도가 들어오면서 공동체가 축적해온 몸의 감각·상호부조 규칙·위험 대응 습관이 지워지는 현상. 직접 경험이 사라지면, 단순히 불편함을 잃는 게 아니라 존재 방식 자체를 잃는다. 전통예술의 소멸은 과거가 사라지는 게 아니라, 우리 모두가 소멸할 방식의 예고편이다.",
                  en: "The phenomenon in which the bodily senses, mutual-aid rules, and risk-management habits accumulated by communities are erased as institutions arrive. When direct experience disappears, it is not merely inconvenience that is lost — the very mode of being is lost. The extinction of traditional arts is not the disappearance of the past; it is a preview of how we all will perish.",
                  ja: "制度が入ることで、コミュニティが積み上げてきた身体の感覚・相互扶助のルール・危機対応の習慣が消される現象。直接経験が消えると、単に不便さを失うのではなく、存在の方法そのものを失う。伝統芸術の消滅は、過去が消えることではなく、私たち全員が消滅する方式の予告編だ。",
                  zh: "隨著制度進入，社群積累的身體感覺、互助規則、危機應對習慣被抹去的現象。當直接體驗消失，失去的不僅是不便，而是存在方式本身。傳統藝術的消滅不是過去的消失，而是我們所有人消滅方式的預告。",
                })}
              </p>
            </div>
          </FadeIn>

          {/* 감각의 고고학 */}
          <FadeIn delay={0.25}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-12">
              <h2 className="font-serif text-xl text-deep mb-4">
                {t({
                  ko: "감각의 고고학",
                  en: "Archaeology of the Senses",
                  ja: "感覚の考古学",
                  zh: "感官考古學",
                })}
              </h2>
              <p className="text-sm text-earth mb-4">
                {t({
                  ko: "Archaeology of the Senses — 방법론",
                  en: "Archaeology of the Senses — Methodology",
                  ja: "Archaeology of the Senses — 方法論",
                  zh: "Archaeology of the Senses — 方法論",
                })}
              </p>
              <div className="space-y-3 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  {t({
                    ko: "소멸의 불안 속에서 DNA에 새겨진 감각을 되찾는 기억의 발굴. 전통예술의 지층에는 원류의 정체성만이 아니라, 시대마다 겪은 비극과 저항, 적응과 변형이 층층이 쌓여 있다.",
                    en: "An excavation of memory that recovers the senses written into our DNA amid the anxiety of extinction. In the strata of traditional arts lie not only the identity of the source, but layer upon layer of tragedy and resistance, adaptation and transformation experienced across each era.",
                    ja: "消滅の不安の中で、DNAに刻まれた感覚を取り戻す記憶の発掘。伝統芸術の地層には、原流のアイデンティティだけでなく、時代ごとに経験した悲劇と抵抗、適応と変容が層を重ねて積み重なっている。",
                    zh: "在消滅的不安中，找回刻印於DNA的感覺的記憶發掘。傳統藝術的地層中，不只有源頭的認同，還層層堆疊著每個時代所經歷的悲劇與抵抗、適應與變形。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "고고학자는 유물을 꺼내서 박물관에 넣는다. 하지만 우리는 그 지층 속으로 들어가려 한다. 감각으로. 몸으로. 질문으로.",
                    en: "An archaeologist removes artifacts and places them in a museum. But we seek to enter into those strata. With senses. With bodies. With questions.",
                    ja: "考古学者は遺物を取り出して博物館に入れる。しかし私たちはその地層の中へ入ろうとする。感覚で。身体で。問いで。",
                    zh: "考古學家取出文物放入博物館。但我們試圖進入那些地層。用感覺。用身體。用問題。",
                  })}
                </p>
                <p className="text-sm text-text/60">
                  {t({
                    ko: "직접 만남, 실연 참여, 역사적 맥락 분석, 관광화/보존의 이중성 포착, 소수 언어(류큐어·제주어) 기록.",
                    en: "Direct encounters, participation in live performances, historical context analysis, capturing the duality of touristification and preservation, documentation of minority languages (Ryukyuan, Jeju dialect).",
                    ja: "直接の出会い、実演参加、歴史的背景分析、観光化/保存の二重性の把握、少数言語（琉球語・済州語）の記録。",
                    zh: "直接相遇、參與實演、歷史背景分析、捕捉觀光化/保存的雙重性、少數語言（琉球語・濟州語）記錄。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 비교 구조 */}
          <FadeIn delay={0.3}>
            <h2 className="font-serif text-xl text-deep mb-6">
              {t({
                ko: "비교 구조",
                en: "Comparative Structure",
                ja: "比較構造",
                zh: "比較結構",
              })}
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-12">
              <Link
                href="/cases/jeju"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  {t({
                    ko: "1차 심층 사례",
                    en: "Primary In-depth Case",
                    ja: "第1次深層事例",
                    zh: "主要深度案例",
                  })}
                </p>
                <h3 className="text-deep font-medium">
                  {t({
                    ko: "제주 — 칠머리당 영등굿 + 해녀 문화",
                    en: "Jeju — Chilmeori-dang Yeongdeunggut + Haenyeo Culture",
                    ja: "済州 — チルメオリダン・ヨンドゥングッ＋海女文化",
                    zh: "濟州——七梅里堂靈登祭＋海女文化",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  {t({
                    ko: "UNESCO 2009/2016 등재. 정착형 생존. 섬이라는 지형이 원형을 보존. 제도화 전/후 비교.",
                    en: "UNESCO 2009/2016. Sedentary survival. Island geography preserved the original form. Comparison before/after institutionalization.",
                    ja: "UNESCO2009/2016年登録。定着型生存。島という地形が原形を保存。制度化前後の比較。",
                    zh: "UNESCO 2009/2016年登錄。定居型生存。島嶼地形保存原始形態。制度化前後比較。",
                  })}
                </p>
              </Link>
              <Link
                href="/cases/okinawa"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  {t({
                    ko: "비교 사례",
                    en: "Comparative Case",
                    ja: "比較事例",
                    zh: "比較案例",
                  })}
                </p>
                <h3 className="text-deep font-medium">
                  {t({
                    ko: "오키나와 — 쿠미오도리 (궁중 음악극)",
                    en: "Okinawa — Kumiodori (Royal Court Music Drama)",
                    ja: "沖縄 — 组踊（クミオドリ）（宮廷音楽劇）",
                    zh: "沖繩——組踊（宮廷音樂劇）",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  {t({
                    ko: "UNESCO 2010 등재. 류큐 왕국에서 일본 제국으로 강제 편입. 궁중/엘리트 전승 방식.",
                    en: "UNESCO 2010. Forced incorporation from the Ryukyu Kingdom into Imperial Japan. Elite/royal court transmission method.",
                    ja: "UNESCO2010年。琉球王国から大日本帝国への強制編入。宮廷/エリートの伝承方式。",
                    zh: "UNESCO 2010年。從琉球王國強制併入日本帝國。宮廷/精英傳承方式。",
                  })}
                </p>
              </Link>
              <Link
                href="/cases/taiwan"
                className="block bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs text-sage uppercase tracking-widest mb-1">
                  {t({
                    ko: "비교 사례 — UNESCO 밖",
                    en: "Comparative Case — Outside UNESCO",
                    ja: "比較事例 — UNESCO外",
                    zh: "比較案例——UNESCO之外",
                  })}
                </p>
                <h3 className="text-deep font-medium">
                  {t({
                    ko: "대만 — 부눈족 의례의 재의례화",
                    en: "Taiwan — Re-ritualization of Bunun Ceremonies",
                    ja: "台湾 — ブヌン族の儀礼の再儀礼化",
                    zh: "台灣——布農族儀式的再儀式化",
                  })}
                </h3>
                <p className="text-sm text-text/60 font-light mt-2">
                  {t({
                    ko: "UNESCO 미가입. 식민화·강제이주 속에서 의례를 관광/공연으로 재구성하며 생존. 우리만의 기여.",
                    en: "Not a UNESCO member. Reconstructing rituals as tourism and performance amid colonization and forced relocation. Our unique contribution.",
                    ja: "UNESCO未加盟。植民地化・強制移住の中で儀礼を観光/公演として再構成しながら生存。私たちだけの貢献。",
                    zh: "非UNESCO成員。在殖民化、強制遷移中將儀式重構為觀光/演出而生存。我們獨有的貢獻。",
                  })}
                </p>
              </Link>
            </div>
          </FadeIn>

          {/* 이론적 앵커 */}
          <FadeIn delay={0.4}>
            <h2 className="font-serif text-xl text-deep mb-6">
              Theoretical Anchors
            </h2>
            <p className="text-sm text-earth font-light mb-8">
              {t({
                ko: "이론적 앵커",
                en: "이론적 앵커",
                ja: "理論的アンカー",
                zh: "理論錨點",
              })}
            </p>
            <div className="space-y-4">
              {theories.map((theory, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8"
                >
                  <h3 className="text-deep font-medium text-sm">
                    {theory.author}
                  </h3>
                  <p className="text-xs text-earth/60 font-serif italic mb-3">
                    {theory.work}
                  </p>
                  <p className="text-sm text-text/70 font-light mb-2">
                    {theory.point}
                  </p>
                  <p className="text-xs text-sage font-light">
                    → {theory.connection}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
