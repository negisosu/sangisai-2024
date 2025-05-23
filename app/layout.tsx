import type { Metadata } from "next";
import "./globals.css";
import { Background } from "./components/background";
import { m_plus_rounded_1c_300 } from "@/fonts/fonts";
import { BackTopButton } from "./components/backTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

export const metadata: Metadata = {
  title: "産技祭2024",
  description: "こちらは2024年度の産技祭ホームページです。開催日程は10月26日と10月27日です。ぜひご来場ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body className={`${m_plus_rounded_1c_300.className}`}>
        <BackTopButton/>
        {children}
        <div className="h-52"/>
        <Background/>
        <SpeedInsights/>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
      </body>
    </html>
  );
}

