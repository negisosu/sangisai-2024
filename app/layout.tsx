import type { Metadata } from "next";
import "./globals.css";
import { Background } from "./components/background";
import { m_plus_rounded_1c_300 } from "@/fonts/fonts";
import { BackTopButton } from "./components/backTopButton";

export const metadata: Metadata = {
  title: "産技祭2024",
  description: "",
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
        <Background/>
      </body>
    </html>
  );
}
