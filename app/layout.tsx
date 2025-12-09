// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "돌봄에너지 테스트 - dolbom",
  description: "돌봄 감수성을 확인하는 토실토실 돌봄에너지 테스트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
