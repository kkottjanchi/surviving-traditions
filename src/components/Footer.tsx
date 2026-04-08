import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep text-white/50 text-center py-16 px-6 mt-auto">
      <p className="font-serif text-xl text-white/70 mb-2">
        Surviving Traditions
      </p>
      <p className="text-sm mb-6">
        생존전통 — 감각의 고고학
      </p>
      <nav className="flex flex-wrap justify-center gap-4 text-xs text-white/30 mb-8">
        <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
        <Link href="/research" className="hover:text-white/60 transition-colors">Research</Link>
        <Link href="/cases" className="hover:text-white/60 transition-colors">Cases</Link>
        <Link href="/fieldwork" className="hover:text-white/60 transition-colors">Fieldwork</Link>
        <Link href="/team" className="hover:text-white/60 transition-colors">Team</Link>
        <Link href="/publications" className="hover:text-white/60 transition-colors">Publications</Link>
        <Link href="/join" className="hover:text-white/60 transition-colors">Join</Link>
      </nav>
      <div className="text-xs text-white/25 space-y-1">
        <p>2026 한국문화예술위원회 국제협력네트워크</p>
        <p>Arts Council Korea International Cooperation Network</p>
      </div>
    </footer>
  );
}
