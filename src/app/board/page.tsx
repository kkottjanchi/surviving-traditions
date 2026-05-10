"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { useT, useLang } from "@/lib/i18n";
import { supabase, type Post } from "@/lib/supabase";

type AuthState = "idle" | "sending" | "sent" | "logged_in";

function formatDate(iso: string) {
  return iso.slice(0, 10).replace(/-/g, ".");
}

async function translateText(text: string, to: string): Promise<string> {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ko|${to}&de=saemyi@gmail.com`
    );
    const data = await res.json();
    if (data.responseStatus === 200) return data.responseData.translatedText;
    return text;
  } catch {
    return text;
  }
}

async function translatePost(title: string, body: string) {
  const targets: [string, string][] = [["en", "en"], ["ja", "ja"], ["zh-TW", "zh"]];
  const result: Record<string, { title: string; body: string }> = {};
  await Promise.all(
    targets.map(async ([apiLang, storeLang]) => {
      const [t, b] = await Promise.all([
        translateText(title, apiLang),
        translateText(body, apiLang),
      ]);
      result[storeLang] = { title: t, body: b };
    })
  );
  return result;
}

export default function BoardPage() {
  const t = useT();
  const { locale } = useLang();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [authState, setAuthState] = useState<AuthState>("idle");
  const [session, setSession] = useState<{ email: string } | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [submitDone, setSubmitDone] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user?.email) {
        setSession({ email: data.session.user.email });
        setAuthState("logged_in");
      }
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      if (s?.user?.email) {
        setSession({ email: s.user.email });
        setAuthState("logged_in");
      } else {
        setSession(null);
        setAuthState("idle");
      }
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setPosts(data as Post[]);
        setLoading(false);
      });
  }, [submitDone]);

  async function sendMagicLink() {
    if (!email) return;
    setAuthState("sending");
    await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href },
    });
    setAuthState("sent");
  }

  async function submitPost() {
    if (!title.trim() || !body.trim()) return;
    setTranslating(true);
    const translations = await translatePost(title.trim(), body.trim());
    setTranslating(false);
    setSubmitting(true);
    await supabase.from("posts").insert({
      author_email: session!.email,
      author_name: authorName.trim() || session!.email.split("@")[0],
      title: title.trim(),
      body: body.trim(),
      lang: "ko",
      translations,
    });
    setTitle("");
    setBody("");
    setAuthorName("");
    setShowForm(false);
    setSubmitting(false);
    setSubmitDone((v) => !v);
  }

  function getTitle(post: Post) {
    if (locale !== "ko" && post.translations?.[locale]?.title) {
      return post.translations[locale]!.title;
    }
    return post.title;
  }

  function getBody(post: Post) {
    if (locale !== "ko" && post.translations?.[locale]?.body) {
      return post.translations[locale]!.body;
    }
    return post.body;
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-4">
              <h1 className="font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-deep">
                Board
              </h1>
              {session && (
                <button
                  onClick={() => setShowForm((v) => !v)}
                  className="text-sm text-earth border border-earth/30 rounded-xl px-4 py-1.5 hover:bg-earth/5 transition-colors"
                >
                  {showForm
                    ? t({ ko: "취소", en: "Cancel", ja: "キャンセル", zh: "取消" })
                    : t({ ko: "+ 글쓰기", en: "+ Write", ja: "+ 書く", zh: "+ 撰寫" })}
                </button>
              )}
            </div>
            <p className="text-earth font-light mb-8">
              {t({
                ko: "각자의 시각으로 쓰고, 함께 읽습니다.",
                en: "Write from your own perspective, read together.",
                ja: "それぞれの視点で書き、ともに読みます。",
                zh: "各自視角書寫，共同閱讀。",
              })}
            </p>
          </FadeIn>

          {/* 글쓰기 폼 */}
          {showForm && session && (
            <FadeIn>
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8 mb-8">
                <h2 className="text-sm text-sage uppercase tracking-widest mb-4">
                  {t({ ko: "새 글", en: "New Post", ja: "新しい投稿", zh: "新文章" })}
                </h2>
                <input
                  className="w-full border border-earth/20 rounded-xl px-4 py-2.5 text-sm text-deep placeholder:text-text/30 mb-3 outline-none focus:border-earth/50 transition-colors"
                  placeholder={t({ ko: "이름 (비워두면 이메일 앞자리)", en: "Name (blank = email prefix)", ja: "名前（空白でメール前部分）", zh: "姓名（空白則使用郵箱前綴）" })}
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
                <input
                  className="w-full border border-earth/20 rounded-xl px-4 py-2.5 text-sm text-deep placeholder:text-text/30 mb-3 outline-none focus:border-earth/50 transition-colors"
                  placeholder={t({ ko: "제목", en: "Title", ja: "タイトル", zh: "標題" })}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="w-full border border-earth/20 rounded-xl px-4 py-2.5 text-sm text-deep placeholder:text-text/30 mb-4 outline-none focus:border-earth/50 transition-colors min-h-[140px] resize-none leading-relaxed"
                  placeholder={t({
                    ko: "현장 기록, 분석, 질문, 토론 — 형식 제한 없음",
                    en: "Field records, analysis, questions, discussions — no format limit",
                    ja: "現地記録、分析、質問、討論 — 形式不問",
                    zh: "現場記錄、分析、提問、討論——不限形式",
                  })}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-text/30">{session.email}</p>
                  <button
                    onClick={submitPost}
                    disabled={submitting || translating || !title.trim() || !body.trim()}
                    className="text-sm text-white bg-earth rounded-xl px-5 py-2 disabled:opacity-40 hover:bg-earth/80 transition-colors"
                  >
                    {translating
                      ? t({ ko: "번역 중...", en: "Translating...", ja: "翻訳中...", zh: "翻譯中..." })
                      : submitting
                      ? t({ ko: "저장 중...", en: "Saving...", ja: "保存中...", zh: "儲存中..." })
                      : t({ ko: "게시", en: "Post", ja: "投稿", zh: "發布" })}
                  </button>
                </div>
                {translating && (
                  <p className="text-xs text-text/40 mt-2 text-right">
                    {t({
                      ko: "한국어 글을 영어·일본어·중국어로 번역하고 있습니다",
                      en: "Translating your post to English, Japanese, and Chinese",
                      ja: "日本語・英語・中国語に翻訳しています",
                      zh: "正在將文章翻譯成英文、日文、中文",
                    })}
                  </p>
                )}
              </div>
            </FadeIn>
          )}

          {/* 로그인 */}
          {!session && (
            <FadeIn delay={0.05}>
              <div className="bg-warm/40 rounded-2xl p-6 mb-10 border border-earth/8">
                <p className="text-sm text-text/70 font-light mb-3">
                  {t({
                    ko: "멤버 이메일로 Magic Link(비밀번호 없이 이메일 링크 클릭으로 로그인)를 받아 글을 쓸 수 있습니다.",
                    en: "Members can log in via Magic Link — a one-click login sent to your email, no password needed.",
                    ja: "メンバーはMagic Link（パスワード不要、メールのリンクをクリックするだけ）でログインして投稿できます。",
                    zh: "會員可透過Magic Link登入——點擊發送到信箱的連結即可，無需密碼。",
                  })}
                </p>
                {authState === "sent" ? (
                  <p className="text-sm text-earth">
                    {t({
                      ko: "이메일을 확인하세요. 링크를 클릭하면 로그인됩니다.",
                      en: "Check your email and click the link to log in.",
                      ja: "メールをご確認ください。リンクをクリックするとログインできます。",
                      zh: "請查看信箱，點擊連結即可登入。",
                    })}
                  </p>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      className="flex-1 border border-earth/20 rounded-xl px-4 py-2 text-sm outline-none focus:border-earth/50 transition-colors"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMagicLink()}
                    />
                    <button
                      onClick={sendMagicLink}
                      disabled={authState === "sending" || !email}
                      className="text-sm text-earth border border-earth/30 rounded-xl px-4 py-2 hover:bg-earth/5 disabled:opacity-40 transition-colors whitespace-nowrap"
                    >
                      {authState === "sending"
                        ? t({ ko: "전송 중...", en: "Sending...", ja: "送信中...", zh: "傳送中..." })
                        : t({ ko: "링크 받기", en: "Send Link", ja: "リンク送信", zh: "取得連結" })}
                    </button>
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {/* 로그인 상태 */}
          {session && (
            <FadeIn delay={0.05}>
              <div className="flex items-center justify-between text-xs text-text/40 mb-8">
                <span>{session.email}</span>
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="hover:text-text/70 transition-colors"
                >
                  {t({ ko: "로그아웃", en: "Logout", ja: "ログアウト", zh: "登出" })}
                </button>
              </div>
            </FadeIn>
          )}

          {/* 게시글 목록 */}
          <FadeIn delay={0.1}>
            <h2 className="text-sm text-sage uppercase tracking-widest mb-6">
              {t({ ko: "게시글", en: "Posts", ja: "投稿", zh: "文章" })}
            </h2>
          </FadeIn>

          {loading ? (
            <div className="text-center text-text/30 text-sm py-12">
              {t({ ko: "불러오는 중...", en: "Loading...", ja: "読み込み中...", zh: "載入中..." })}
            </div>
          ) : posts.length === 0 ? (
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-earth/8 text-center">
                <p className="text-text/40 text-sm font-light">
                  {t({
                    ko: "아직 게시글이 없습니다. 첫 글을 써보세요.",
                    en: "No posts yet. Be the first to write.",
                    ja: "まだ投稿がありません。最初の投稿をしてみてください。",
                    zh: "還沒有文章。來寫第一篇吧。",
                  })}
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => (
                <FadeIn key={post.id} delay={0.1 + i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
                    <p className="text-xs text-sage mb-2">
                      {post.author_name} · {formatDate(post.created_at)}
                    </p>
                    <h3 className="text-sm text-deep font-medium mb-2">{getTitle(post)}</h3>
                    <p className="text-sm text-text/60 font-light leading-relaxed whitespace-pre-line">
                      {getBody(post)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* 미리보기 샘플 */}
          <FadeIn delay={0.3}>
            <h2 className="text-sm text-sage uppercase tracking-widest mt-16 mb-6">
              {t({
                ko: "미리보기 — 3/15 첫 모임 토론에서",
                en: "Preview — From the 3/15 First Meeting Discussion",
                ja: "プレビュー — 3/15第1回ミーティングの討論より",
                zh: "預覽 — 3/15第一次聚會討論",
              })}
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                author: "최샘이",
                date: "2026.03.15",
                titleKo: "생존 방식은 왜 다른가 — 유랑과 정착의 비교",
                titleEn: "Why do survival strategies differ — Comparing itinerant and settled traditions",
                titleJa: "生存方式はなぜ異なるのか — 流浪と定住の比較",
                titleZh: "為何生存方式不同——流浪與定居的比較",
                bodyKo: "남사당은 전국을 돌아다녔고, 여섯 가지만 남았다. 영등굿은 섬 안에서 공동체가 온전히 품었다...",
                bodyEn: "Namsadang traveled the country and only six forms survived. Yeongdeunggut was wholly embraced by the community within the island...",
                bodyJa: "男寺堂は全国を渡り歩き、六つだけが残った。ヨンドゥングッは島の中でコミュニティが丸ごと抱えた...",
                bodyZh: "男寺黨走遍全國，只剩六種形式。靈登祭在島內被社群完整承載……",
              },
              {
                author: "박용화",
                date: "2026.03.15",
                titleKo: "형태라도 남아야 한다 — 저변 확대의 의미",
                titleEn: "The form must survive — The meaning of expanding the base",
                titleJa: "形だけでも残らなければ — 裾野拡大の意味",
                titleZh: "至少形式要留存——擴大根基的意義",
                bodyKo: "풍물 교육 15년. 대회에 풍물단이 안 나와. 상모 돌려서 전체 판 가는 건 이제 없어지고 있다...",
                bodyEn: "15 years of Pungmul education. Pungmul troupes no longer show up at competitions...",
                bodyJa: "プンムル教育15年。大会にプンムル団が出なくなった...",
                bodyZh: "農樂教育15年。比賽裡農樂隊不出現了……",
              },
              {
                author: "조계영",
                date: "2026.03.15",
                titleKo: "비주류를 제거해야 정체성이 생긴다",
                titleEn: "Identity emerges only when the marginal is removed",
                titleJa: "傍流を除去してこそアイデンティティが生まれる",
                titleZh: "去除非主流才能形成認同",
                bodyKo: "남사당이 여섯 가지로 지정된 순간 비주류가 제거됐고, 오히려 정체성이 강화됐다...",
                bodyEn: "The moment Namsadang was designated as six forms, the marginal was removed and identity was paradoxically strengthened...",
                bodyJa: "男寺堂が六つに指定された瞬間に傍流が除去され、むしろアイデンティティが強化された...",
                bodyZh: "男寺黨被指定為六種的那一刻，非主流被排除，認同感反而強化了……",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.35 + i * 0.05}>
                <div className="bg-white/60 rounded-2xl p-6 border border-earth/6">
                  <p className="text-xs text-sage mb-2">{item.author} · {item.date}</p>
                  <h3 className="text-sm text-deep font-medium mb-2">
                    {locale === "en" ? item.titleEn : locale === "ja" ? item.titleJa : locale === "zh" ? item.titleZh : item.titleKo}
                  </h3>
                  <p className="text-sm text-text/50 font-light">
                    {locale === "en" ? item.bodyEn : locale === "ja" ? item.bodyJa : locale === "zh" ? item.bodyZh : item.bodyKo}
                  </p>
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
