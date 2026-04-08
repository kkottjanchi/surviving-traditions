"use client";

import Link from "next/link";
import { useState } from "react";
import LangSwitch from "./LangSwitch";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/cases", label: "Cases" },
  { href: "/fieldwork", label: "Fieldwork" },
  { href: "/team", label: "Team" },
  { href: "/publications", label: "Publications" },
  { href: "/board", label: "Board" },
  { href: "/join", label: "Join" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);

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
        {/* 언어 전환 */}
        <div className="flex items-center gap-3">
          <LangSwitch />
          <Link href="/" className="font-serif text-lg text-deep tracking-tight hidden sm:block">
            Surviving Traditions
          </Link>
        </div>

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
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
