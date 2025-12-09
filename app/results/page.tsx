// File: src/app/results/page.tsx
import ResultCard from "@/components/ResultCard";
import { calculateCareScore, determineResult } from "@/lib/scoring";
import { getFinalCareResult } from "@/lib/getFinalCareResult";
import ResultPageClient from "./ResultPageClient";

// ==============================
// 1) SERVER COMPONENT
// ==============================

export default function ResultPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const raw = searchParams?.answers;

  if (!raw || typeof raw !== "string") {
    return (
      <div className="p-10 text-center">
        <p className="text-red-600">결과 계산에 필요한 데이터가 없습니다.</p>
      </div>
    );
  }

  // "1-a,2-b,3-d" → [{questionId:1, choiceId:"a"}...]
  const answers = raw.split(",").map((pair) => {
    const [q, a] = pair.split("-");
    return { questionId: Number(q), choiceId: a };
  });

  // 점수 계산
  const scoreObj = calculateCareScore(
    Object.fromEntries(answers.map((x) => [String(x.questionId), x.choiceId]))
  );

  // 최종 타입
  const resultType = determineResult(scoreObj);

  // 점수 합산
  const score = Object.values(scoreObj).reduce((a, b) => a + b, 0);

  // 최종 결과 데이터
  const finalData = getFinalCareResult(
    Object.fromEntries(answers.map(x => [String(x.questionId), x.choiceId]))
  );

  return (
    <ResultPageClient answers={answers} finalData={finalData} score={score} />
  );
}
