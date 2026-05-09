"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function AboutPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* 히어로 */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              About
            </h1>
            <p className="text-earth font-light mb-8">
              {t({
                ko: "이 프로젝트에 대하여",
                en: "About This Project",
                ja: "このプロジェクトについて",
                zh: "關於本計畫",
              })}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-lg text-earth font-medium mb-4">
                {t({
                  ko: "핵심 질문",
                  en: "Core Question",
                  ja: "核心的な問い",
                  zh: "核心問題",
                })}
              </h2>
              <blockquote className="text-[1.05rem] leading-relaxed text-text/90 border-l-3 border-accent pl-5 italic">
                {t({
                  ko: "전통예술 공동체는 제도 없이도 자생했다. 제도가 보존을 위해 들어왔지만, 오히려 살아있던 생존 방식 — 몸의 감각, 호혜, 세대 간 전수 — 을 잠식했을 수 있다.",
                  en: "Traditional arts communities survived without institutions. Institutions entered in the name of preservation — but may have eroded the living modes of survival: bodily senses, mutual aid, intergenerational transmission.",
                  ja: "伝統芸術のコミュニティは制度なしでも自生していた。制度が保存のために入ってきたが、むしろ生きていた生存の方法——身体の感覚、相互扶助、世代間継承——を侵食してしまったかもしれない。",
                  zh: "傳統藝術社群在沒有制度的情況下自生自存。制度以保存之名介入，但可能反而侵蝕了原本活著的生存方式——身體的感覺、互助、世代間的傳承。",
                })}
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 text-[0.95rem] leading-relaxed font-light text-text/85">
              <p>
                <strong className="font-medium text-deep">
                  {t({
                    ko: "감각의 고고학 : 생존 전통",
                    en: "Archaeology of the Senses: Surviving Traditions",
                    ja: "感覚の考古学：生存する伝統",
                    zh: "感官考古學：生存傳統",
                  })}
                </strong>{" "}
                {t({
                  ko: "(Archaeology of Senses: Surviving Traditions)은 전통 공연예술이 어떻게 살아남았는가를 묻는 비교 연구 프로젝트입니다. 2026년 한국문화예술위원회 국제협력네트워크 사업의 지원을 받아 제주, 오키나와(류큐), 대만 세 지역의 전통을 비교합니다.",
                  en: "Archaeology of the Senses: Surviving Traditions is a comparative research project asking how traditional performing arts have survived. Supported by the 2026 Arts Council Korea International Cooperation Network, it compares traditions across three regions: Jeju, Okinawa (Ryukyu), and Taiwan.",
                  ja: "「感覚の考古学：生存する伝統」は、伝統的な舞台芸術がいかに生き残ってきたかを問う比較研究プロジェクトです。2026年韓国文化芸術委員会国際協力ネットワーク事業の支援を受け、済州、沖縄（琉球）、台湾の3地域の伝統を比較します。",
                  zh: "「感官考古學：生存傳統」是一個比較研究計畫，探問傳統表演藝術如何生存下來。獲得2026年韓國文化藝術委員會國際合作網絡事業支援，比較濟州、沖繩（琉球）、台灣三個地區的傳統。",
                })}
              </p>
              <p>
                <strong className="font-medium text-deep">4COP</strong>
                {t({
                  ko: "는 유랑의 감각을 연구하는 프로젝트 그룹입니다. 남사당놀이라는 유랑 예술을 출발점으로, 떠도는 것들의 생존 전략, 이동 속의 정체성, 정주하지 않는 예술의 미래를 탐구합니다. 유랑은 도망이 아니라 주체적 선택이었습니다. 불안한 세계에서 안전을 찾기 위해 움직인 것입니다.",
                  en: " is a project group that researches the senses of wandering. Starting from namsadang nori — a nomadic art form — we explore the survival strategies of wandering things, identity in motion, and the future of art that does not settle. Wandering was not escape; it was a proactive choice. Moving to find safety in an unstable world.",
                  ja: "は、流浪の感覚を研究するプロジェクトグループです。南寺堂遊び（ナムサダンノリ）という流浪芸術を出発点に、さまようものの生存戦略、移動の中のアイデンティティ、定住しない芸術の未来を探求します。流浪は逃亡ではなく、主体的な選択でした。不安定な世界で安全を求めて動いたのです。",
                  zh: "是研究流浪感覺的計畫團體。以男寺黨遊戲這種流浪藝術為出發點，探索流浪事物的生存策略、移動中的認同，以及不定居藝術的未來。流浪不是逃亡，而是主動的選擇——在不安定的世界中尋找安全而移動。",
                })}
              </p>
              <p>
                {t({
                  ko: "류큐는 450년 독립 왕국에서 일본 병합과 오키나와 전투를 거쳤고, 대만 원주민은 16개 부족이 평지에서 산으로 밀려났으며, 제주는 4·3 사건으로 육지로 흩어졌습니다. 이들의 전통예술은 쫓겨나면서도 살아남았습니다. 우리는 '감각의 고고학'이라는 질적 연구 방법으로 관광화와 보존 사이, 소멸과 변신 사이의 이중성을 발굴합니다.",
                  en: "Ryukyu survived a 450-year independent kingdom before annexation by Japan and the Battle of Okinawa. Taiwan's sixteen indigenous tribes were pushed from the plains into the mountains. Jeju was scattered to the mainland by the April 3rd Incident. Their traditional arts survived even while being driven out. We excavate this duality — between touristification and preservation, between extinction and transformation — through the qualitative method we call 'Archaeology of the Senses.'",
                  ja: "琉球は450年の独立王国の後、日本への併合と沖縄戦を経た。台湾の16の先住民族は平地から山へと追いやられた。済州は4・3事件によって本土へ散らばった。彼らの伝統芸術は、追われながらも生き残った。私たちは「感覚の考古学」という質的研究方法で、観光化と保存の間、消滅と変身の間の二重性を発掘します。",
                  zh: "琉球在450年獨立王國後，經歷了被日本併吞與沖繩戰役。台灣的16個原住民族從平地被趕到山上。濟州因四三事件而流散至本土。他們的傳統藝術在被驅逐的過程中仍然存活下來。我們用「感官考古學」這種質性研究方法，發掘觀光化與保存之間、消滅與變身之間的雙重性。",
                })}
              </p>
              <p>
                {t({
                  ko: "우리는 '보존'이 아니라 '생존'에 주목합니다. 전통은 박제된 유산이 아닙니다. 살아남기 위해 변화하고, 때로는 좁아지고, 때로는 확장하며 버텨온 것입니다. 그 버팀의 방식 자체가 연구의 대상입니다.",
                  en: "We focus not on 'preservation' but on 'survival.' Tradition is not a preserved heritage. It is something that changed to survive — sometimes narrowing, sometimes expanding — and endured. The very modes of that endurance are the subject of our research.",
                  ja: "私たちは「保存」ではなく「生存」に注目します。伝統は保存された遺産ではありません。生き残るために変化し、時に狭まり、時に拡張しながら耐えてきたものです。その耐え方そのものが研究の対象です。",
                  zh: "我們關注的不是「保存」而是「生存」。傳統不是被保存的遺產。它是為了生存而改變的——有時收縮，有時擴展——堅持下來的。那種堅持的方式本身，就是我們的研究對象。",
                })}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">3</p>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "비교 지역 (제주·오키나와·대만)",
                    en: "Regions (Jeju · Okinawa · Taiwan)",
                    ja: "比較地域（済州・沖縄・台湾）",
                    zh: "比較地區（濟州・沖繩・台灣）",
                  })}
                </p>
              </div>
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">7</p>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "연구팀 + 공동 연구자",
                    en: "Research Team + Collaborators",
                    ja: "研究チーム＋共同研究者",
                    zh: "研究團隊＋共同研究者",
                  })}
                </p>
              </div>
              <div className="bg-warm/50 rounded-2xl p-6 text-center">
                <p className="text-2xl text-earth font-serif mb-1">2026</p>
                <p className="text-sm text-text/60 font-light">
                  {t({
                    ko: "ISTR 리스본 발표",
                    en: "ISTR Lisbon Presentation",
                    ja: "ISTRリスボン発表",
                    zh: "ISTR里斯本發表",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 지원 기관 */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-xl text-deep mb-6">Supported by</h2>
            <div className="space-y-3 text-sm text-text/60 font-light">
              <p>
                {t({
                  ko: "2026 한국문화예술위원회 국제협력네트워크 (기획·네트워크, 단년)",
                  en: "2026 Arts Council Korea International Cooperation Network (Planning & Network, Single-Year)",
                  ja: "2026年 韓国文化芸術委員会 国際協力ネットワーク（企画・ネットワーク、単年）",
                  zh: "2026年 韓國文化藝術委員會 國際合作網絡（企劃・網絡，單年）",
                })}
              </p>
              <p>ISTR — International Society for Third-Sector Research</p>
              <p>
                {t({
                  ko: "성균관대학교 미래인문학소셜앙트레프래너십 융합전공",
                  en: "Sungkyunkwan University, Future Humanities & Social Entrepreneurship",
                  ja: "成均館大学校 未来人文学ソーシャルアントレプレナーシップ融合専攻",
                  zh: "成均館大學 未來人文學社會創業融合專業",
                })}
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
