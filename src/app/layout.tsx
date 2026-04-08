import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-Z3ZGMM7S4H";

export const metadata: Metadata = {
  title: "Surviving Traditions | 생존전통",
  description:
    "전통은 어떻게 살아남는가. 제주, 오키나와, 대만 — 세 개의 섬, 세 가지 생존 방식.",
  openGraph: {
    title: "Surviving Traditions | 생존전통",
    description:
      "How do traditions survive? Jeju, Okinawa, Taiwan — three islands, three ways of survival.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-size-md h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans+JP:wght@300;400&family=Noto+Sans+TC:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
