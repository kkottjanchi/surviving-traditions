"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import UnescoDive from "@/components/UnescoDive";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function JejuPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs text-sage uppercase tracking-widest mb-2">
              Case Study — Jeju, Korea
            </p>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-2">
              {t({
                ko: "제주 — 정착의 전통",
                en: "Jeju — Traditions of Settlement",
                ja: "済州 — 定着の伝統",
                zh: "濟州——定著的傳統",
              })}
            </h1>
            <p className="font-serif italic text-earth mb-8">
              済州島 · Chilmeori-dang Yeongdeung-gut
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-warm rounded-full text-earth">
                  UNESCO ICH 2009, 2016
                </span>
                <span className="text-xs px-3 py-1 bg-sage/20 rounded-full text-sage">
                  {t({
                    ko: "1차 답사 완료",
                    en: "Field Visit Completed",
                    ja: "現地調査完了",
                    zh: "田野調查完成",
                  })}
                </span>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  {t({
                    ko: "섬이라는 지형이 원형을 보존했다. 해녀의 삶과 영등굿은 분리되지 않는 하나의 생활이었다. 본토의 근현대사가 이곳의 문화에 직접 영향을 미치지 않았을 수도 있다 — 바다에서 일어나는 일이었으니까.",
                    en: "The island's geography preserved the original form. The life of Haenyeo and Yeongdeunggut were inseparable — one integrated way of life. The modern history of the mainland may not have directly reached this culture. It happened out at sea.",
                    ja: "島という地形が原型を保存した。海女の暮らしとヨンドゥングッは切り離せない一つの生活だった。本土の近現代史がこの地の文化に直接影響を与えなかったかもしれない — 海で起きていたことだったから。",
                    zh: "島嶼的地形保存了原型。海女的生活與靈登祭是不可分割的整體。朝鮮半島近現代史或許未曾直接觸及此地的文化——因為那是發生在海上的事。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "그러나 해녀가 줄어들면, 굿은 형식으로만 남는가? 별거 아닌 하루에 '나 이곳 사람이구나'를 느끼게 해주는 것 — 그것이 전통 앞에 '예술'이 붙는 이유일 수 있다.",
                    en: "But if the Haenyeo dwindle, does the gut survive only as form? What makes an ordinary day feel like 'I belong here' — that may be exactly why 'art' is placed before 'tradition.'",
                    ja: "しかし海女が減れば、グッは形式としてのみ残るのか？何でもない一日に「ここの人間なんだな」と感じさせるもの — それが伝統の前に「芸術」がつく理由かもしれない。",
                    zh: "但若海女日益減少，祭儀是否只剩形式？讓平凡的一天感受到「我是這裡的人」——這或許正是「藝術」冠於「傳統」之前的緣由。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "칠머리당 영등굿은 2009년 유네스코 인류무형문화유산 대표목록에, 제주 해녀 문화는 2016년에 등재되었다. 두 요소는 같은 바다, 같은 공동체에서 나왔지만 서로 다른 시점에 제도화되었다. 이 시차가 만들어낸 변화를 추적한다.",
                    en: "Chilmeori-dang Yeongdeunggut was inscribed on the UNESCO Representative List in 2009, and Jeju Haenyeo Culture in 2016. Both elements emerged from the same sea and community, yet were institutionalized at different moments. This project traces the changes that gap has produced.",
                    ja: "チルメオリダン・ヨンドゥングッは2009年にユネスコ無形文化遺産代表一覧に、済州の海女文化は2016年に登録された。二つの要素は同じ海、同じ共同体から生まれたが、異なる時点で制度化された。この時差が生み出した変化を追う。",
                    zh: "七梅里堂靈登祭於2009年列入UNESCO人類非物質文化遺產代表名錄，濟州海女文化於2016年列入。兩者同出一片海、同屬一個社群，卻在不同時間點被制度化。本研究追蹤這一時差所帶來的變化。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 현장 기록 */}
          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "현장 답사 기록",
                  en: "Fieldwork Record",
                  ja: "現地調査記録",
                  zh: "田野調查記錄",
                })}
              </h2>
              <div className="space-y-3 text-sm text-text/70 font-light">
                <p>
                  <span className="text-earth font-medium">4/1 오전 9시</span>{" "}
                  —{" "}
                  {t({
                    ko: "영등송별제 참관 (칠머리당 사라봉)",
                    en: "Attended Yeongdeung Farewell Ritual (Chilmeori-dang, Sarabong)",
                    ja: "霊登送別祭参観（チルメオリダン・サラボン）",
                    zh: "參觀靈登送別祭（七梅里堂沙羅峰）",
                  })}
                </p>
                <p>
                  {t({
                    ko: "해녀박물관 방문",
                    en: "Visited Haenyeo Museum",
                    ja: "海女博物館訪問",
                    zh: "參觀海女博物館",
                  })}
                </p>
                <p>
                  {t({
                    ko: "현장 기록: 영상 14건, 사진 20장",
                    en: "Field records: 14 videos, 20 photos",
                    ja: "現地記録：映像14件、写真20枚",
                    zh: "現場記錄：影片14件、照片20張",
                  })}
                </p>
                <p className="text-xs text-text/40 mt-4">
                  {t({
                    ko: "상세 기록은 Fieldwork 페이지에서 확인할 수 있습니다.",
                    en: "Detailed records are available on the Fieldwork page.",
                    ja: "詳細な記録はFieldworkページでご確認いただけます。",
                    zh: "詳細記錄請參閱田野調查頁面。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* UNESCO Dive 시각화 */}
          <FadeIn delay={0.3}>
            <div className="space-y-4 mb-8">
              <UnescoDive
                elementId="00187"
                title="Jeju Chilmeoridang Yeongdeunggut (2009)"
                url="https://ich.unesco.org/en/RL/jeju-chilmeoridang-yeongdeunggut-00187"
              />
              <UnescoDive
                elementId="01068"
                title="Culture of Jeju Haenyeo — Women Divers (2016)"
                url="https://ich.unesco.org/en/RL/culture-of-jeju-haenyeo-women-divers-01068"
              />
            </div>
          </FadeIn>

          {/* 연구 질문 */}
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
                    ko: "한국 근현대사가 제주 영등굿 문화에 직접 영향을 미치지 않았을 수 있다 — 바다에서 일어나는 일이었으니까. 이 가설은 유효한가?",
                    en: "Korea's modern history may not have directly affected Jeju's Yeongdeunggut culture — it happened out at sea. Is this hypothesis valid?",
                    ja: "韓国の近現代史が済州のヨンドゥングッ文化に直接影響を与えなかったかもしれない — 海で起きていたことだったから。この仮説は有効か？",
                    zh: "韓國近現代史或許未曾直接影響濟州靈登祭文化——因為那是發生在海上的事。這一假說是否成立？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "해녀가 줄어드는 것과 영등굿의 형식화는 어떤 관계인가?",
                    en: "What is the relationship between the declining number of Haenyeo and the formalization of Yeongdeunggut?",
                    ja: "海女の減少とヨンドゥングッの形式化はどのような関係にあるか？",
                    zh: "海女人數減少與靈登祭形式化之間存在怎樣的關係？",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "2009년 등재 이전과 이후, 공동체의 자생적 전승 방식에 어떤 변화가 있었나?",
                    en: "How did the community's organic transmission practices change before and after the 2009 inscription?",
                    ja: "2009年の登録前後で、共同体の自生的な伝承方式にどのような変化があったか？",
                    zh: "2009年列入名錄前後，社群自發性傳承方式發生了哪些變化？",
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
