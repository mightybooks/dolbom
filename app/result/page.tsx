// app/result/page.tsx

"use client";

// ★ 두 번째 줄부터 아무거나 와도 됨
export const dynamic = "force-dynamic";

// ---------------------------------------
// Kakao 타입 선언 (카카오 SDK 전역 타입 보정)
// ---------------------------------------
declare global {
  interface Window {
    Kakao: any;
  }
}

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import RESULT_MAP from "./resultMap";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get("type") || "plant";
  const result = RESULT_MAP[type] || RESULT_MAP["plant"];

  const [copied, setCopied] = useState(false);

  // ---------------------------------------
  // 1) 링크 복사 기능
  // ---------------------------------------
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error("링크 복사 실패:", e);
    }
  }

  // ---------------------------------------
  // 2) 카카오톡 공유 기능
  // ---------------------------------------
  function shareKakao() {
    if (!window.Kakao) {
      alert("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    const Kakao = window.Kakao;

    // SDK 초기화(중복 초기화 방지)
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: result.title,
        description: result.description,
        // 배포 환경에서 정상적으로 동작하도록 절대경로 사용
        imageUrl: `${window.location.origin}${result.og}`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "테스트 해보기",
          link: {
            mobileWebUrl: `${window.location.origin}/test/q1`,
            webUrl: `${window.location.origin}/test/q1`,
          },
        },
      ],
    });
  }

  // ---------------------------------------
  // UI
  // ---------------------------------------
  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-10 flex flex-col items-center">
      <section className="max-w-md w-full bg-white p-6 rounded-2xl shadow-sm">

        {/* 결과 이미지 */}
        <Image
          src={result.image}
          width={500}
          height={500}
          alt={result.title}
          className="w-full rounded-xl mb-6"
        />

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-emerald-900 mb-2 text-center">
          당신은 <span className="underline">{result.title}</span>입니다
        </h1>

        {/* 설명 */}
        <p className="text-slate-700 text-center leading-relaxed mb-8">
          {result.description}
        </p>

        {/* 공유 버튼 */}
        <div className="flex flex-col gap-3 mb-8">

          {/* 카카오톡 공유 */}
          <button
            onClick={shareKakao}
            className="w-full rounded-full bg-[#FEE500] text-black font-semibold py-3 hover:bg-yellow-300"
          >
            카카오톡으로 공유하기
          </button>

          {/* 링크 복사 */}
          <button
            onClick={copyLink}
            className="w-full rounded-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 hover:bg-slate-50"
          >
            {copied ? "복사됨!" : "링크 복사하기"}
          </button>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/test/q1")}
            className="w-full rounded-full bg-emerald-600 text-white font-semibold py-3 hover:bg-emerald-700"
          >
            테스트 다시 하기
          </button>

          <button
            onClick={() => router.push("https://sulimstudio.com")}
            className="w-full rounded-full bg-white border border-emerald-600 text-emerald-700 font-semibold py-3 hover:bg-emerald-50"
          >
            토실토실 프로젝트 보러가기
          </button>
        </div>

      </section>
    </main>
  );
}
