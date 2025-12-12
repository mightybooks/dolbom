// /app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { TestProvider } from "./test/TestContext";

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
      <body>
        {/* -----------------------------------------------------
           Kakao JavaScript SDK
           - 공유 기능을 위해 전역 window.Kakao 생성
           - 반드시 beforeInteractive 전략 사용
        ----------------------------------------------------- */}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
          strategy="beforeInteractive"
        />

        {/* 전역 상태 공급 (answers 저장소) */}
        <TestProvider>{children}</TestProvider>
      </body>
    </html>
  );
}
