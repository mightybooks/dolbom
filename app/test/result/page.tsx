"use client";

export const dynamic = "force-dynamic";

declare global {
  interface Window {
    Kakao: any;
  }
}

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useTest } from "../TestContext";
import { QUESTIONS } from "@/data/ko/questions";
import {  calculateCareScore, determineResult,} from "@/lib/analytics/scoring";

import RESULT_MAP from "@/data/ko/resultMap";
import ResultArchiveCTA from "@/components/result/ResultArchiveCTA";


type ResultType = keyof typeof RESULT_MAP;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export default function ResultPage() {
  const router = useRouter();
  const { answers } = useTest();

  const [type, setType] = useState<ResultType>("plant");
  const [copied, setCopied] = useState(false);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  // ---------------------------------------
  // 결과 재계산 (단일 진실 원천)
  // ---------------------------------------
  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      // 답변이 없으면 테스트 처음으로
      router.replace("/test/q1");
      return;
    }

    const score = calculateCareScore(answers, QUESTIONS);
    const resultType = determineResult(score) as ResultType;

    setType(resultType);
  }, [answers, router]);

  const result = RESULT_MAP[type];
  const baseUrl = SITE_URL || window.location.origin;
  const currentUrl = `${baseUrl}${pathname}?type=${type}`;

  // ---------------------------------------
  // 링크 복사
  // ---------------------------------------
  async function copyLink() {
    await navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  // ---------------------------------------
  // 카카오 공유 (국문만)
  // ---------------------------------------
  function shareKakao() {
    if (!window.Kakao) return;

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
          mobileWebUrl: baseUrl,
          webUrl: baseUrl,
        },
      },
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

        {/* ✅ 응원 메시지 아카이빙 CTA */}
        <ResultArchiveCTA
          resultType={type}
          locale="ko"
        />

        <div className="flex flex-col gap-3 mb-8 mt-8">
          <button
            onClick={shareKakao}
            className="w-full rounded-full bg-[#FEE500] py-3 font-semibold text-[#191919]"
          >
            카카오톡으로 공유하기
          </button>

          <button
            onClick={copyLink}
            className="w-full rounded-full border py-3"
          >
            {copied ? "복사됨!" : "링크 복사하기"}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/test/q1")}
            className="w-full rounded-full bg-emerald-600 text-white py-3"
          >
            테스트 다시 하기
          </button>

          <button
            onClick={() => router.push("https://surimstudio.com/projects/tosiltosil?ref=care_energy")}
            className="w-full rounded-full border border-emerald-600 text-emerald-700 py-3"
          >
            토실토실 프로젝트 보러가기
          </button>
        </div>
      </section>
    </main>
  );
}
