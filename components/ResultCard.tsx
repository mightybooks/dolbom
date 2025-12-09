// File: src/components/ResultCard.tsx
"use client";

import type { FinalCareResult } from "@/lib/getFinalCareResult";
import { buildShareText } from "@/lib/shareText";
import { useCallback } from "react";

type ResultCardProps = {
  data: FinalCareResult;
};

export default function ResultCard({ data }: ResultCardProps) {
  const { primaryCard, affinity } = data;

  const shareText = buildShareText({
    title: primaryCard.title,
    affinity,
    url: typeof window !== "undefined" ? window.location.href : undefined,
  });

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shareText);
    alert("공유 문구가 복사되었습니다!");
  }, [shareText]);

  return (
    <section className="rounded-3xl border border-emerald-200 bg-white px-6 py-8 shadow-sm">
      {/* 최종 카드 제목 */}
      <h2 className="text-3xl font-bold text-emerald-900">
        {primaryCard.title}
      </h2>

      {/* 서브 타이틀 */}
      <p className="text-emerald-700 font-medium mt-1">
        {primaryCard.subtitle}
      </p>

      {/* 토끼 적합도 */}
      <div className="mt-6 mb-4">
        <p className="text-sm text-gray-600">토끼 돌봄 적합도</p>
        <p className="text-4xl font-extrabold text-emerald-800">
          {affinity}%
        </p>
      </div>

      {/* 주요 설명 */}
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {primaryCard.description}
      </p>

      {/* CTA: 테스트 제작 의도 */}
      <div className="mt-8 text-center text-gray-600 text-sm leading-relaxed">
        <p>이 테스트는 토실토실 프로젝트의 실화를 바탕으로 제작되었습니다.</p>
        <p>예민한 생명을 돌보는 일은 생각보다 많은 지식과 감정이 필요합니다.</p>

        <button
          onClick={handleCopy}
          className="mt-6 rounded-full bg-emerald-600 px-5 py-2 text-white font-semibold hover:bg-emerald-700 transition"
        >
          공유 문구 복사하기
        </button>
      </div>
    </section>
  );
}
