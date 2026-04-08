"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About", ko: "소개" },
  { href: "/research", label: "Research", ko: "연구" },
  { href: "/cases", label: "Cases", ko: "사례" },
  { href: "/fieldwork", label: "Fieldwork", ko: "현장" },
  { href: "/team", label: "Team", ko: "팀" },
  { href: "/publications", label: "Publications", ko: "발표" },
  { href: "/board", label: "Board", ko: "글" },
  { href: "/join", label: "Join", ko: "참여" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1); // 0=sm, 1=md, 2=lg, 3=xl

  const fontClasses = ["font-size-sm", "font-size-md", "font-size-lg", "font-size-xl"];

  function changeFontSize(dir: number) {
    const next = Math.max(0, Math.min(3, fontSize + dir));
    setFontSize(next);
    const html = document.documentElement;
    fontClasses.forEach((c) => html.classList.remove(c));
    html.classList.add(fontClasses[next]);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-earth/10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="font-serif text-lg text-deep tracking-tight">
          Surviving Traditions
        </Link>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text/70 hover:text-earth transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 글씨 크기 + 모바일 메뉴 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeFontSize(-1)}
            className="w-7 h-7 rounded-full border border-earth/30 text-earth text-xs flex items-center justify-center hover:bg-warm transition-colors"
            aria-label="글씨 작게"
          >
            A-
          </button>
          <button
            onClick={() => changeFontSize(1)}
            className="w-7 h-7 rounded-full border border-earth/30 text-earth text-xs flex items-center justify-center hover:bg-warm transition-colors"
            aria-label="글씨 크게"
          >
            A+
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-earth"
            aria-label="메뉴"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-earth/10 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-text/70 hover:text-earth"
            >
              <span className="text-earth/50 mr-2">{item.ko}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
