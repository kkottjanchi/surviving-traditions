"use client";

import { useState } from "react";

interface UnescoDiveProps {
  elementId: string;
  title: string;
  url: string;
}

export default function UnescoDive({ elementId, title, url }: UnescoDiveProps) {
  const [showDive, setShowDive] = useState(false);
  const diveUrl = `https://ich.unesco.org/dive/constellation/?language=en&filter=${elementId}&focus=${elementId}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-earth/8">
      <div className="px-6 py-4 border-b border-earth/6 flex items-center justify-between">
        <div>
          <p className="text-xs text-sage uppercase tracking-widest mb-1">
            UNESCO Intangible Cultural Heritage
          </p>
          <h3 className="text-sm text-deep font-medium">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowDive(!showDive)}
            className="text-xs px-3 py-1.5 bg-earth text-white rounded-full hover:bg-accent transition-colors"
          >
            {showDive ? "닫기" : "Dive 시각화"}
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 border border-earth/30 text-earth rounded-full hover:bg-warm transition-colors"
          >
            UNESCO 페이지 →
          </a>
        </div>
      </div>
      {showDive && (
        <div className="relative w-full" style={{ paddingBottom: "60%" }}>
          <iframe
            src={diveUrl}
            className="absolute inset-0 w-full h-full border-0"
            title={`UNESCO Dive - ${title}`}
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      )}
    </div>
  );
}
