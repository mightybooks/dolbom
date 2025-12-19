"use client";

export const dynamic = "force-dynamic";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useTest } from "../TestContext";
import { QUESTIONS } from "@/data/en/questions";
import {
  calculateCareScore,
  determineResult,
} from "@/lib/analytics/scoring";

import RESULT_MAP from "@/data/en/resultMap";
import type { CareType } from "@/lib/types/care";
import ResultArchiveCTA from "@/components/result/ResultArchiveCTA";

type ResultType = CareType;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export default function ResultPage() {
  const router = useRouter();
  const { answers } = useTest();

  const [type, setType] = useState<ResultType>("plant");
  const [copied, setCopied] = useState(false);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  // ---------------------------------------
  // 결과 재계산 (Single Source of Truth)
  // ---------------------------------------
  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      router.replace("/en/test/q1");
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
        You are a <span className="underline">{result.title}</span>
      </h1>

      <p className="text-slate-700 text-center leading-relaxed mb-8">
        {result.description}
      </p>

      {/* ✅ 여기 */}
      <ResultArchiveCTA
        resultType={type}
        locale="en"
      />

      <div className="flex flex-col gap-3 mb-8 mt-8">
        <button
          onClick={copyLink}
          className="w-full rounded-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 hover:bg-slate-50"
        >
          {copied ? "Link copied!" : "Copy link"}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => router.push("/en/test/q1")}
          className="w-full rounded-full bg-emerald-600 text-white font-semibold py-3 hover:bg-emerald-700"
        >
          Take the test again
        </button>

        <button
          onClick={() => router.push("https://surimstudio.com/projects/tosiltosil/en?ref=care_energy")}
          className="w-full rounded-full bg-white border border-emerald-600 text-emerald-700 font-semibold py-3 hover:bg-emerald-50"
        >
          Visit Tosil Project
        </button>
      </div>
    </section>
  </main>
);
}
