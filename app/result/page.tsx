"use client";

// ---------------------------------------
// Kakao 타입 선언
// ---------------------------------------
declare global {
  interface Window {
    Kakao: any;
  }
}

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import RESULT_MAP from "./resultMap";

// RESULT_MAP의 key를 그대로 타입으로 사용
type ResultType = keyof typeof RESULT_MAP;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "";

export default function ResultPage() {
  const router = useRouter();

  // 기본값
  const [type, setType] = useState<ResultType>("plant");
  const [copied, setCopied] = useState(false);

  // ---------------------------------------
  // URL 쿼리에서 ?type= 값 읽기 (CSR 전용)
  // ---------------------------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type") as ResultType | null;

    if (t && t in RESULT_MAP) {
      setType(t);
    }
  }, []);

  const result = RESULT_MAP[type];

  const baseUrl = SITE_URL || window.location.origin;
  const currentUrl = `${baseUrl}/result?type=${type}`;

  // ---------------------------------------
  // 1) 링크 복사
  // ---------------------------------------
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error("링크 복사 실패:", e);
    }
  }

  // ---------------------------------------
  // 2) 카카오톡 공유
  // ---------------------------------------
  function shareKakao() {
    if (!window.Kakao) {
      alert("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    const Kakao = window.Kakao;

    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: result.title,
        description: result.description,
        imageUrl: `${baseUrl}${result.og}`,
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: "테스트 해보기",
          link: {
            mobileWebUrl: `${baseUrl}/test/q1`,
            webUrl: `${baseUrl}/test/q1`,
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

        <Image
          src={result.image}
          width={500}
          height={500}
          alt={result.title}
          className="w-full rounded-xl mb-6"
        />

        <h1 className="text-2xl font-bold text-emerald-900 mb-2 text-center">
          당신은 <span className="underline">{result.title}</span>입니다
        </h1>

        <p className="text-slate-700 text-center leading-relaxed mb-8">
          {result.description}
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <button
            onClick={shareKakao}
            className="w-full rounded-full bg-[#FEE500] text-black font-semibold py-3 hover:bg-yellow-300"
          >
            카카오톡으로 공유하기
          </button>

          <button
            onClick={copyLink}
            className="w-full rounded-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 hover:bg-slate-50"
          >
            {copied ? "복사됨!" : "링크 복사하기"}
          </button>
        </div>

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
