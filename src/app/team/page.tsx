import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Team | Surviving Traditions",
  description: "생존전통 연구팀 — 4COP 현장 연구팀 + ISTR 공동 연구자",
};

const fieldTeam = [
  {
    initial: "S",
    name: "최샘이 SEMI CHOI",
    role: "기획 / 연구",
    affiliation: "성균관대학교 미래인문학소셜앙트레프래너십 융합전공",
    description: "프로젝트 총괄 기획. 남사당놀이 원로 예술인 연구(졸업논문)에서 출발, 전통예술 공동체의 자생 메커니즘을 이론화. ISTR 리스본 발표자.",
  },
  {
    initial: "Y",
    name: "박용화",
    role: "전통예술 / 풍물",
    affiliation: "풍물 교육 15년",
    description: "현장에서 전통예술의 저변이 줄어드는 것을 직접 목격해온 교육자. \"형태라도 남아줘야 한다\" — 확장론의 관점에서 생존을 본다.",
  },
  {
    initial: "K",
    name: "조계영",
    role: "공연 기술 / 연출",
    affiliation: "배우 / 연출가",
    description: "\"비주류를 제거해야 정체성이 생긴다\" — 축소론의 관점. 남사당이 여섯 가지로 지정된 순간 비주류가 제거됐고 오히려 정체성이 강화됐다고 본다.",
  },
  {
    initial: "W",
    name: "정윤희",
    role: "연구",
    affiliation: "",
    description: "연구 지원 및 현장 기록.",
  },
  {
    initial: "M",
    name: "김민솔",
    role: "베리어프리 / 장애학",
    affiliation: "대구대학교 박사과정",
    description: "접근성과 포용의 관점에서 전통예술의 전승을 바라본다. 베리어프리 공연기획 전문.",
  },
];

const istrTeam = [
  {
    initial: "O",
    name: "오민정",
    role: "공동 연구자",
    affiliation: "한국교원대학교 독일교육학과 교수",
    description: "ISTR 2026 공동 저자. 비교교육학 관점에서 전통 전승 메커니즘을 분석.",
  },
  {
    initial: "C",
    name: "최문영",
    role: "공동 연구자",
    affiliation: "성균관대학교 하이브리드미래문화연구소",
    description: "ISTR 2026 공동 저자. 제주 사회적기업 연구(KCI 등재 논문 3편 공동 집필).",
  },
];

function MemberCard({
  member,
}: {
  member: (typeof fieldTeam)[0];
}) {
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
              각자의 시각, 각자의 생존을 봅니다.
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
