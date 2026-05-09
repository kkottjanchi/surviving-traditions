"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

type Member = {
  initial: string;
  name: string;
  role: string;
  affiliation: string;
  description: string;
};

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-warm flex-shrink-0 flex items-center justify-center text-lg text-earth">
          {member.initial}
        </div>
        <div>
          <h3 className="text-deep font-medium text-sm">{member.name}</h3>
          <p className="text-xs text-earth">{member.role}</p>
          {member.affiliation && (
            <p className="text-xs text-text/40 mt-0.5">
              {member.affiliation}
            </p>
          )}
          <p className="text-sm text-text/60 font-light mt-2 leading-relaxed">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const t = useT();

  const fieldTeam: Member[] = [
    {
      initial: "S",
      name: "최샘이 SEMI CHOI",
      role: t({ ko: "총괄 · 연구 · 기획", en: "Director · Research · Planning", ja: "総括・研究・企画", zh: "總監・研究・企劃" }),
      affiliation: t({
        ko: "성균관대학교 미래인문학소셜앙트레프래너십 융합전공",
        en: "Sungkyunkwan University, Future Humanities & Social Entrepreneurship",
        ja: "成均館大学校 未来人文学ソーシャルアントレプレナーシップ融合専攻",
        zh: "成均館大學 未來人文學社會創業融合專攻",
      }),
      description: t({
        ko: "프로젝트 총괄 기획. 남사당놀이 원로 예술인 연구(졸업논문)에서 출발, 전통예술 공동체의 자생 메커니즘을 이론화. ISTR 리스본 발표자.",
        en: "Project director. Starting from research on elderly Namsadang Nori artists (doctoral thesis), theorizing the self-sustaining mechanisms of traditional art communities. ISTR Lisbon presenter.",
        ja: "プロジェクト総括企画。男寺堂遊び原老芸術人研究（卒業論文）から出発し、伝統芸術コミュニティの自生メカニズムを理論化。ISTRリスボン発表者。",
        zh: "專案總籌。從男寺黨遊戲原老藝術人研究（畢業論文）出發，理論化傳統藝術社群的自生機制。ISTR里斯本發表者。",
      }),
    },
    {
      initial: "Y",
      name: "박용화 Yonghwa Park",
      role: t({ ko: "전통예술 / 풍물", en: "Traditional Arts / Pungmul", ja: "伝統芸術・プンムル", zh: "傳統藝術 / 農樂" }),
      affiliation: t({ ko: "풍물 교육 15년", en: "15 years of Pungmul education", ja: "プンムル教育15年", zh: "農樂教育15年" }),
      description: t({
        ko: "현장에서 전통예술의 저변이 줄어드는 것을 직접 목격해온 교육자. \"형태라도 남아줘야 한다\" — 확장론의 관점에서 생존을 본다.",
        en: "An educator who has directly witnessed the shrinking base of traditional arts in the field. \"The form must survive at least\" — views survival from an expansionist perspective.",
        ja: "現場で伝統芸術の裾野が縮小していくのを直接目撃してきた教育者。「形だけでも残らなければ」— 拡張論の観点から生存を見る。",
        zh: "親眼目睹傳統藝術根基縮減的教育者。「至少形式要留存」—從擴張論的視角看待生存。",
      }),
    },
    {
      initial: "K",
      name: "조계영 Kyeyoung Jo",
      role: t({ ko: "배우", en: "Actor", ja: "俳優", zh: "演員" }),
      affiliation: "4COP",
      description: t({
        ko: "\"비주류를 제거해야 정체성이 생긴다\" — 축소론의 관점. 남사당이 여섯 가지로 지정된 순간 비주류가 제거됐고 오히려 정체성이 강화됐다고 본다.",
        en: "\"Identity emerges only when the marginal is removed\" — a reductionist perspective. Sees that when Namsadang was designated as six forms, the marginal was removed and identity was paradoxically strengthened.",
        ja: "「傍流を除去してこそアイデンティティが生まれる」— 縮小論の観点。男寺堂が六つに指定された瞬間に傍流が除去され、むしろアイデンティティが強化されたと見る。",
        zh: "「去除非主流才能形成認同」—縮小論視角。認為男寺黨被指定為六種時，非主流被排除，認同感反而強化。",
      }),
    },
    {
      initial: "W",
      name: "정윤희 Yunhee Jeong",
      role: t({ ko: "사진 · 기록 · 비평", en: "Photography · Documentation · Criticism", ja: "写真・記録・批評", zh: "攝影・記錄・批評" }),
      affiliation: t({
        ko: "비평그룹 시각 편집장 / 블랙리스트 이후 디렉터",
        en: "Editor-in-Chief, Criticism Group Sigak / Director, After Blacklist",
        ja: "批評グループ視覚 編集長 / ブラックリスト以降 ディレクター",
        zh: "批評團體視覺主編 / 黑名單之後 總監",
      }),
      description: t({
        ko: "마을교육공동체 현장연구(교육부·인천시, 2021) 책임연구자. 돌봄의 정치 '오이코스폴리틱스' 주제전시 기획(2023). 사진과 비평적 시각으로 현장을 기록한다.",
        en: "Lead researcher for community education fieldwork (Ministry of Education & Incheon, 2021). Curated the 'Oikospolitics' thematic exhibition on the politics of care (2023). Documents fieldwork through photography and critical perspective.",
        ja: "マウル教育共同体現地研究（教育部・仁川市、2021年）責任研究者。ケアの政治「オイコスポリティクス」主題展示企画（2023年）。写真と批評的視点で現場を記録する。",
        zh: "村落教育社群現場研究（教育部・仁川市，2021）主責研究者。策劃照護政治「Oikospolitics」主題展覽（2023）。以攝影與批評視角記錄現場。",
      }),
    },
    {
      initial: "M",
      name: "김민솔 Minsol Kim",
      role: t({ ko: "베리어프리 / 장애학", en: "Barrier-Free / Disability Studies", ja: "バリアフリー・障害学", zh: "無障礙 / 殘障研究" }),
      affiliation: t({ ko: "대구대학교 박사과정", en: "Daegu University, PhD Program", ja: "大邱大学校博士課程", zh: "大邱大學博士課程" }),
      description: t({
        ko: "접근성과 포용의 관점에서 전통예술의 전승을 바라본다. 베리어프리 공연기획 전문.",
        en: "Views the transmission of traditional arts through the lens of accessibility and inclusion. Specializes in barrier-free performance planning.",
        ja: "アクセシビリティと包摂の観点から伝統芸術の伝承を見る。バリアフリー公演企画の専門家。",
        zh: "從可及性與包容的視角審視傳統藝術的傳承。專精無障礙演出企劃。",
      }),
    },
  ];

  const istrTeam: Member[] = [
    {
      initial: "O",
      name: "오민정 Minjung Oh",
      role: t({ ko: "공동 연구자", en: "Co-Researcher", ja: "共同研究者", zh: "共同研究者" }),
      affiliation: t({
        ko: "한국교원대학교 독일교육학과 교수",
        en: "Professor, Department of German Education, Korea National University of Education",
        ja: "韓国教員大学校ドイツ教育学科教授",
        zh: "韓國教員大學德國教育學系教授",
      }),
      description: t({
        ko: "ISTR 2026 공동 저자. 비교교육학 관점에서 전통 전승 메커니즘을 분석.",
        en: "ISTR 2026 co-author. Analyzes traditional transmission mechanisms from a comparative education perspective.",
        ja: "ISTR 2026共同著者。比較教育学の観点から伝統伝承メカニズムを分析。",
        zh: "ISTR 2026共同作者。從比較教育學視角分析傳統傳承機制。",
      }),
    },
    {
      initial: "C",
      name: "최문영 Moonyoung Choi",
      role: t({ ko: "공동 연구자", en: "Co-Researcher", ja: "共同研究者", zh: "共同研究者" }),
      affiliation: t({
        ko: "성균관대학교 하이브리드미래문화연구소",
        en: "Hybrid Future Culture Research Institute, Sungkyunkwan University",
        ja: "成均館大学校ハイブリッド未来文化研究所",
        zh: "成均館大學混合未來文化研究所",
      }),
      description: t({
        ko: "ISTR 2026 공동 저자. 제주 사회적기업 연구(KCI 등재 논문 3편 공동 집필).",
        en: "ISTR 2026 co-author. Jeju social enterprise research (co-authored 3 KCI-indexed papers).",
        ja: "ISTR 2026共同著者。済州社会的企業研究（KCI収録論文3本を共同執筆）。",
        zh: "ISTR 2026共同作者。濟州社會企業研究（共同撰寫3篇KCI收錄論文）。",
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
              Team
            </h1>
            <p className="text-earth font-light mb-12">
              {t({ ko: "각자의 시각, 각자의 생존을 봅니다.", en: "Each perspective, each survival.", ja: "それぞれの視点、それぞれの生存を見ます。", zh: "各自的視角，各自的生存。" })}
            </p>
          </FadeIn>

          {/* 4COP 현장 연구팀 */}
          <FadeIn delay={0.1}>
            <h2 className="text-sm text-sage uppercase tracking-widest mb-6">
              4COP Field Research Team
            </h2>
          </FadeIn>
          <div className="space-y-4 mb-16">
            {fieldTeam.map((m, i) => (
              <FadeIn key={m.name} delay={0.1 + i * 0.05}>
                <MemberCard member={m} />
              </FadeIn>
            ))}
          </div>

          {/* ISTR 공동 연구자 */}
          <FadeIn delay={0.4}>
            <h2 className="text-sm text-sage uppercase tracking-widest mb-6">
              ISTR Co-Researchers
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {istrTeam.map((m, i) => (
              <FadeIn key={m.name} delay={0.4 + i * 0.05}>
                <MemberCard member={m} />
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
