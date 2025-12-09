// File: src/app/results/ResultPageClient.tsx
"use client";

import { useEffect } from "react";
import ResultCard from "@/components/ResultCard";
import { saveResultToSupabase } from "@/lib/saveResult";

type ResultPageClientProps = {
  answers: { questionId: number; choiceId: string }[];
  finalData: any;
  score: number;
};

export default function ResultPageClient({
  answers,
  finalData,
  score,
}: ResultPageClientProps) {
  useEffect(() => {
    async function save() {
      try {
        await saveResultToSupabase(answers, {
          title: finalData.profile.title,
          highlight: String(score),
        });
      } catch (e) {
        console.warn("[dolbom] 결과 저장 실패:", e);
      }
    }
    save();
  }, [answers, finalData, score]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <ResultCard data={finalData} />
    </div>
  );
}
