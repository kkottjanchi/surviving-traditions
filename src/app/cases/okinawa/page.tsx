"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import UnescoDive from "@/components/UnescoDive";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function OkinawaPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Okinawa, Japan
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              {t({ ko: "오키나와 — 편입된 전통", en: "Okinawa — Incorporated Traditions", ja: "沖縄 — 編入された伝統", zh: "沖繩 — 被編入的傳統" })}
            </h1>
            <p className="font-serif italic text-earth mb-8">
              琉球 Ryukyu · Kumiodori
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-warm rounded-full text-earth">
                  UNESCO ICH 2010
                </span>
                <span className="text-xs px-3 py-1 bg-accent/20 rounded-full text-accent">
                  {t({ ko: "답사 예정", en: "Field Visit Planned", ja: "現地調査予定", zh: "田野調查預定" })}
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  {t({
                    ko: "류큐 왕국(1429-1879)은 독립된 해양 왕국이었다. 1879년 일본에 강제 병합된 이후, 류큐의 궁중 예술인 쿠미오도리는 왕국의 외교 도구에서 민족 정체성의 상징으로 변환되었다.",
                    en: "The Ryukyu Kingdom (1429–1879) was an independent maritime kingdom. After its forced annexation by Japan in 1879, the royal court art of Kumiodori transformed from a diplomatic tool of the kingdom into a symbol of ethnic identity.",
                    ja: "琉球王国（1429〜1879年）は独立した海洋王国だった。1879年、日本への強制併合の後、琉球の宮廷芸術である组踊（クミオドリ）は、王国の外交ツールから民族的アイデンティティの象徴へと変容した。",
                    zh: "琉球王國（1429-1879年）是一個獨立的海洋王國。1879年被日本強制併吞後，琉球宮廷藝術組踊從王國的外交工具，轉化為民族認同的象徵。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "본토와의 관계 속에서 전통이 어떻게 정체성의 도구가 되었는가. 근대화의 압력 속에서 궁중 전승이라는 엘리트적 방식이 오히려 생존에 유리했는지, 불리했는지를 묻는다.",
                    en: "How did tradition become a tool of identity within the relationship with the mainland? We ask whether the elite method of royal court transmission proved advantageous or disadvantageous for survival amid the pressures of modernization.",
                    ja: "本土との関係の中で、伝統はいかにアイデンティティの道具となったのか。近代化の圧力の中で、宮廷伝承というエリート的な方法が、生存に有利だったのか、不利だったのかを問う。",
                    zh: "在與本土的關係中，傳統如何成為身份認同的工具？在現代化壓力下，宮廷傳承這種精英方式究竟有利於還是不利於生存？",
                  })}
                </p>
                <p>
                  {t({
                    ko: "제주와의 핵심 차이: 제주는 공동체 전체가 의례를 품었지만, 오키나와는 궁중이라는 특정 계층이 전승을 담당했다. 생존의 주체가 다르면 생존의 방식도 달라진다.",
                    en: "The key difference from Jeju: Jeju's entire community embraced the ritual, but in Okinawa, a specific class — the royal court — bore responsibility for transmission. When the subject of survival differs, so does the way of surviving.",
                    ja: "済州との核心的な違い：済州はコミュニティ全体が儀礼を担ったが、沖縄では宮廷という特定の階層が伝承を担当した。生存の主体が異なれば、生存の方式も異なる。",
                    zh: "與濟州的核心差異：濟州是整個社群承載儀式，而沖繩是宮廷這一特定階層負責傳承。生存的主體不同，生存的方式也不同。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({ ko: "역사적 맥락", en: "Historical Context", ja: "歴史的背景", zh: "歷史背景" })}
              </h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">1429-1879</span> —{" "}
                  {t({
                    ko: "류큐 왕국 450년 독립. 나하를 수도로 한·중·일 3국과 무역, '만국의 가교'로 번성. 쿠미오도리는 중국 사신 접대용 궁중 무용극",
                    en: "450 years of Ryukyu Kingdom independence. Flourished as the 'bridge of nations,' trading with Korea, China, and Japan from the capital Naha. Kumiodori was a royal court dance-drama for receiving Chinese envoys.",
                    ja: "450年の琉球王国の独立。那覇を首都に韓・中・日3国と貿易し、「万国の架け橋」として繁栄。组踊は中国使節接待用の宮廷舞踊劇だった。",
                    zh: "琉球王國450年的獨立。以那霸為首都，與韓中日三國貿易，作為「萬國之橋」繁榮昌盛。組踊是招待中國使節的宮廷舞蹈劇。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">1879</span> —{" "}
                  {t({
                    ko: "메이지 정부의 '류큐 처분'. 군대를 보내 왕을 폐위, 오키나와현으로 강제 병합. 류큐어 사용 금지, 일본식 교육 강제",
                    en: "The Meiji government's 'Ryukyu Disposal.' Troops sent to depose the king; forcible annexation as Okinawa Prefecture. Ryukyuan language banned; Japanese-style education forced.",
                    ja: "明治政府による「琉球処分」。軍隊を送り王を廃位し、沖縄県として強制的に併合。琉球語の使用禁止、日本式教育の強制。",
                    zh: "明治政府的「琉球處分」。派遣軍隊廢黜國王，強制併入沖繩縣。禁止使用琉球語，強制推行日本式教育。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">1945</span> —{" "}
                  {t({
                    ko: "오키나와 전투. 태평양전쟁 유일의 본토 지상전. 주민 10만 명 이상 사망. 집단 자결 강요",
                    en: "The Battle of Okinawa. The only ground battle on Japanese soil in the Pacific War. Over 100,000 civilians killed. Forced mass suicide.",
                    ja: "沖縄戦。太平洋戦争で唯一の本土地上戦。住民10万人以上が死亡。集団自決を強要された。",
                    zh: "沖繩戰役。太平洋戰爭中唯一的本土地面戰。超過10萬名居民死亡。被迫集體自決。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">1972</span> —{" "}
                  {t({
                    ko: "미군정 27년 후 일본 반환. 현재도 본토 면적 0.6%에 주일미군 기지 70%",
                    en: "Returned to Japan after 27 years of U.S. military administration. Still today, 70% of U.S. military bases in Japan occupy just 0.6% of Japan's land area.",
                    ja: "米軍統治27年後、日本に返還。現在も本土面積0.6%に在日米軍基地の70%が集中。",
                    zh: "美軍統治27年後歸還日本。至今，駐日美軍基地的70%仍集中在占日本本土面積0.6%的土地上。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">2009</span> —{" "}
                  {t({
                    ko: "UNESCO, 류큐어를 '소멸 위기 언어'로 지정. 60대 이상만 유창하게 구사",
                    en: "UNESCO designated the Ryukyuan language as 'endangered.' Only those in their 60s and older speak it fluently.",
                    ja: "UNESCOが琉球語を「消滅危機言語」に指定。60代以上しか流暢に話せない。",
                    zh: "聯合國教科文組織將琉球語列為「瀕危語言」。只有60歲以上的人才能流利使用。",
                  })}
                </p>
                <p>
                  <span className="text-earth font-medium">2010</span> —{" "}
                  {t({
                    ko: "쿠미오도리(組踊) UNESCO 무형문화유산 대표목록 등재",
                    en: "Kumiodori (組踊) inscribed on UNESCO's Representative List of Intangible Cultural Heritage.",
                    ja: "组踊（クミオドリ）がUNESCOの無形文化遺産代表一覧表に登録。",
                    zh: "組踊列入聯合國教科文組織非物質文化遺產代表作名錄。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 예술의 생존 */}
          <FadeIn delay={0.25}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({ ko: "예술의 생존", en: "Survival of the Arts", ja: "芸術の生存", zh: "藝術的生存" })}
              </h2>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  <strong className="font-medium text-deep">{t({ ko: "에이사(エイサー)", en: "Eisa (エイサー)", ja: "エイサー", zh: "艾薩舞（エイサー）" })}</strong>{" "}
                  —{" "}
                  {t({
                    ko: "오본 축제 때 추는 류큐 전통춤. 일본 정부가 금지하려 했지만 마을 사람들이 은밀하게 이어왔다. 지금은 오키나와 정체성의 상징.",
                    en: "the Ryukyuan traditional dance performed at the Obon festival. The Japanese government tried to ban it, but villagers passed it on in secret. Today it is a symbol of Okinawan identity.",
                    ja: "お盆に踊る琉球の伝統舞踊。日本政府が禁止しようとしたが、村人たちが密かに受け継いできた。今では沖縄のアイデンティティの象徴。",
                    zh: "盂蘭盆節跳的琉球傳統舞蹈。日本政府試圖禁止，但村民們秘密傳承下來。如今是沖繩認同的象徵。",
                  })}
                </p>
                <p>
                  <strong className="font-medium text-deep">{t({ ko: "삼선(三線)", en: "Sanshin (三線)", ja: "三線", zh: "三線" })}</strong>{" "}
                  —{" "}
                  {t({
                    ko: "뱀가죽으로 만든 3현 악기. 일제 시기 탄압받았지만 노인들이 집에서 연주했다. 지금은 오키나와 모든 학교에서 가르친다.",
                    en: "a three-stringed instrument made of snakeskin. Suppressed during the Japanese colonial period, but elders continued to play it at home. Today it is taught in every school in Okinawa.",
                    ja: "ヘビの皮で作った3弦楽器。日本統治時代に弾圧されたが、老人たちが家で弾き続けた。今では沖縄のすべての学校で教えられている。",
                    zh: "用蛇皮製成的三弦樂器。日治時期遭受壓制，但老人們在家中繼續演奏。如今在沖繩所有學校都有教授。",
                  })}
                </p>
                <p>
                  <strong className="font-medium text-deep">{t({ ko: "쿠미오도리(組踊)", en: "Kumiodori (組踊)", ja: "组踊（クミオドリ）", zh: "組踊" })}</strong>{" "}
                  —{" "}
                  {t({
                    ko: "18세기 류큐 왕조의 궁중 무용극. 왕조 해체 후에도 예인들이 이어왔고 2010년 UNESCO 등재.",
                    en: "the royal court dance-drama of the 18th-century Ryukyu dynasty. Performing artists continued it even after the dissolution of the dynasty; inscribed by UNESCO in 2010.",
                    ja: "18世紀琉球王朝の宮廷舞踊劇。王朝が解体された後も芸人たちが受け継ぎ、2010年にUNESCO登録。",
                    zh: "18世紀琉球王朝的宮廷舞蹈劇。王朝解體後，藝人們仍繼續傳承，2010年列入聯合國教科文組織名錄。",
                  })}
                </p>
                <p className="text-text/60">
                  {t({
                    ko: "하지만 관광 산업화가 진행되고 있다. 에이사는 호텔 쇼가 되고, 삼선은 기념품 가게에서 팔린다. 류큐어가 사라지면, 류큐 예능의 '감각'은 어떻게 되는가.",
                    en: "But touristification is advancing. Eisa has become a hotel show; sanshin is sold in souvenir shops. If the Ryukyuan language disappears, what becomes of the 'senses' of Ryukyuan performing arts?",
                    ja: "しかし観光産業化が進んでいる。エイサーはホテルのショーになり、三線はお土産屋で売られる。琉球語が消えれば、琉球芸能の「感覚」はどうなるのか。",
                    zh: "但觀光產業化正在推進。艾薩成了飯店表演，三線在紀念品店裡販售。如果琉球語消失，琉球藝能的「感覺」將何去何從？",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* UNESCO Dive 시각화 */}
          <FadeIn delay={0.3}>
            <div className="mb-8">
              <UnescoDive
                elementId="00405"
                title="Kumiodori, traditional Okinawan musical theatre (2010)"
                url="https://ich.unesco.org/en/RL/kumiodori-traditional-okinawan-musical-theatre-00405"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
              <h2 className="text-earth font-medium mb-4">
                {t({ ko: "열린 질문", en: "Open Questions", ja: "開かれた問い", zh: "開放性問題" })}
              </h2>
              <ul className="space-y-3 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "궁중 전승이라는 엘리트적 방식이 근대화 속 생존에 유리했는가, 불리했는가?",
                    en: "Did the elite method of royal court transmission prove advantageous or disadvantageous for survival amid modernization?",
                    ja: "宮廷伝承というエリート的な方式は、近代化の中での生存に有利だったのか、不利だったのか？",
                    zh: "宮廷傳承這種精英方式，在現代化過程中有利於還是不利於生存？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "류큐 정체성과 일본 국민 정체성 사이에서 쿠미오도리는 어떤 위치를 점하는가?",
                    en: "What position does Kumiodori occupy between Ryukyuan identity and Japanese national identity?",
                    ja: "琉球のアイデンティティと日本国民のアイデンティティの間で、组踊はどのような位置を占めるのか？",
                    zh: "在琉球認同與日本國民認同之間，組踊占據什麼樣的位置？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "미야코지마 판투(가면신 방문) 등 오키나와의 다른 전통과 쿠미오도리의 전승 방식 차이는?",
                    en: "What are the differences in transmission between Kumiodori and other Okinawan traditions, such as the Pantu masked deity ritual of Miyakojima?",
                    ja: "宮古島のパーントゥ（仮面神の訪問）など、沖縄の他の伝統とクミオドリの伝承方式の違いは？",
                    zh: "宮古島的パントゥ（面具神拜訪）等沖繩其他傳統與組踊傳承方式的差異是什麼？",
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
              {t({ ko: "← 전체 사례 보기", en: "← All Cases", ja: "← すべての事例", zh: "← 所有案例" })}
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
