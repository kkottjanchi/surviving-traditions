"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

export default function JoinPage() {
  const t = useT();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep mb-4">
              Join Us
            </h1>
            <p className="text-earth font-light mb-8">
              {t({ ko: "동참", en: "How to Join", ja: "参加方法", zh: "如何參與" })}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({
                  ko: "당신의 지역에도 살아남은 전통이 있나요?",
                  en: "Is there a surviving tradition in your region?",
                  ja: "あなたの地域にも生き残った伝統がありますか？",
                  zh: "您的地區也有存活下來的傳統嗎？",
                })}
              </h2>
              <div className="space-y-4 text-[0.95rem] leading-relaxed font-light text-text/85">
                <p>
                  {t({
                    ko: "Surviving Traditions는 열린 연구 플랫폼입니다. 제주, 오키나와, 대만에서 시작했지만 — 전통이 살아남는 방식은 전 세계 어디에나 있습니다.",
                    en: "Surviving Traditions is an open research platform. We started in Jeju, Okinawa, and Taiwan — but the ways traditions survive exist everywhere in the world.",
                    ja: "Surviving Traditionsはオープンな研究プラットフォームです。済州、沖縄、台湾から始まりましたが、伝統が生き残る方式は世界中どこにでもあります。",
                    zh: "Surviving Traditions是一個開放的研究平台。從濟州、沖繩、台灣出發——但傳統存活的方式存在於世界各地。",
                  })}
                </p>
                <p>
                  {t({
                    ko: "연구자, 예술인, 기록자, 누구든 자신의 지역에서 목격한 '생존'의 사례를 가지고 합류할 수 있습니다.",
                    en: "Researchers, artists, documentarians — anyone can join with cases of 'survival' they have witnessed in their own region.",
                    ja: "研究者、芸術家、記録者、誰でも自分の地域で目撃した「生存」の事例を持って合流できます。",
                    zh: "研究者、藝術家、記錄者——任何人都可以帶著在自己地區目睹的「生存」案例加入。",
                  })}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-warm/40 rounded-2xl p-8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({ ko: "참여 방법", en: "How to Join", ja: "参加方法", zh: "如何參與" })}
              </h2>
              <div className="space-y-4 text-sm text-text/70 font-light">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p>
                    {t({
                      ko: "아래 연락처로 자신의 관심 분야와 제안할 사례를 알려주세요.",
                      en: "Contact us below with your field of interest and the case you'd like to propose.",
                      ja: "下記連絡先に、ご自身の関心分野と提案したい事例をお知らせください。",
                      zh: "請透過下方聯絡方式告知您的興趣領域及欲提案的案例。",
                    })}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p>
                    {t({
                      ko: "프로젝트 팀과 논의 후, Magic Link(이메일 로그인)를 통해 멤버로 초대됩니다.",
                      en: "After discussion with the project team, you will be invited as a member via Magic Link (email login).",
                      ja: "プロジェクトチームとの協議後、Magic Link（メールログイン）でメンバーとして招待されます。",
                      zh: "與專案團隊討論後，將透過Magic Link（電子郵件登入）受邀成為會員。",
                    })}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-earth text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p>
                    {t({
                      ko: "자신의 페이지에서 현장 기록, 글, 미디어를 올리고 다른 멤버들과 교류합니다.",
                      en: "On your own page, upload field records, writings, and media, and interact with other members.",
                      ja: "自分のページで現地記録、文章、メディアをアップロードし、他のメンバーと交流します。",
                      zh: "在您自己的頁面上傳現場記錄、文章與媒體，並與其他會員交流。",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
              <h2 className="text-earth font-medium mb-4">
                {t({ ko: "이런 분을 찾습니다", en: "We Are Looking For", ja: "こんな方を探しています", zh: "我們在尋找這樣的人" })}
              </h2>
              <ul className="space-y-2 text-sm text-text/70 font-light">
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "자신의 지역에서 전통예술/의례/공동체의 생존 방식을 연구하거나 기록하는 분",
                    en: "Those researching or documenting the survival of traditional arts, rituals, or communities in their region",
                    ja: "自分の地域で伝統芸術・儀礼・コミュニティの生存方式を研究または記録している方",
                    zh: "在自己地區研究或記錄傳統藝術/儀式/社群存活方式的人",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "무형문화유산 정책, 제도화의 역설에 관심 있는 연구자",
                    en: "Researchers interested in intangible cultural heritage policy and the paradox of institutionalization",
                    ja: "無形文化遺産政策、制度化のパラドックスに関心のある研究者",
                    zh: "對無形文化遺產政策及制度化矛盾感興趣的研究者",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "현장에서 직접 전통을 전승하고 있는 예술인, 장인",
                    en: "Artists and craftspeople who are directly transmitting tradition in the field",
                    ja: "現場で直接伝統を伝承している芸術家、職人",
                    zh: "在現場直接傳承傳統的藝術家、工匠",
                  })}
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  {t({
                    ko: "비교 문화 연구, 감각 민족지학, 구술사 방법론에 관심 있는 분",
                    en: "Those interested in comparative cultural studies, sensory ethnography, or oral history methodology",
                    ja: "比較文化研究、感覚民族誌学、口述史方法論に関心のある方",
                    zh: "對比較文化研究、感官民族誌、口述歷史方法論感興趣的人",
                  })}
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-deep rounded-2xl p-8 text-center">
              <h2 className="font-serif text-xl text-white/80 mb-4">
                Contact
              </h2>
              <p className="text-sm text-white/50 font-light mb-6">
                {t({
                  ko: "참여 문의 및 제안은 아래로 연락해주세요.",
                  en: "For inquiries and proposals, please contact us below.",
                  ja: "参加に関するお問い合わせや提案は下記までご連絡ください。",
                  zh: "參與諮詢及提案請聯絡以下信箱。",
                })}
              </p>
              <a
                href="mailto:kccf.rpt@gmail.com"
                className="inline-block px-6 py-3 bg-earth text-white rounded-full text-sm hover:bg-accent transition-colors"
              >
                kccf.rpt@gmail.com
              </a>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
