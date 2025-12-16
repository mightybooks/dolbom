// /lib/analytics/scoring.ts

import type {
  CareType,
  CareScoreType,
  QuestionItem,
} from "@/lib/types/care";

// ============================================================================
// 점수 계산기
// - QUESTIONS를 내부에서 참조하지 않는다
// - 질문 배열은 외부에서 주입받는다
// ============================================================================

export function calculateCareScore(
  selected: Record<string, string>,
  questions: QuestionItem[]
): Record<CareScoreType, number> {
  const score: Record<CareScoreType, number> = {
    plant: 0,
    turtle: 0,
    cat: 0,
    dog: 0,
    rabbit: 0,
    alien: 0,
  };

  for (const q of questions) {
    const chosenId = selected[q.id];
    if (!chosenId) continue;

    const opt = q.options.find((o) => o.id === chosenId);
    if (!opt) continue;

    if (opt.type === "weird") {
      score.alien += 1;
    } else {
      score[opt.type as CareScoreType] += 1;
    }
  }

  return score;
}

// ============================================================================
// 최종 타입 결정
// 규칙:
// 1) alien 점수 ≥ 3 → alien
// 2) 그 외에는 plant~rabbit 중 최고점
// 3) 동점이면 mix
// ============================================================================

export function determineResult(
  score: Record<CareScoreType, number>
): CareType {
  // 1. 외계형 우선
  if (score.alien >= 3) return "alien";

  // 2. 비교 대상 (alien 제외)
  const normalTypes: Exclude<CareScoreType, "alien">[] = [
    "plant",
    "turtle",
    "cat",
    "dog",
    "rabbit",
  ];

  // 3. 최고 점수
  const max = Math.max(...normalTypes.map((t) => score[t]));

  // 4. 최고 점수 타입들
  const topTypes = normalTypes.filter((t) => score[t] === max);

  // 5. 단독 1위
  if (topTypes.length === 1) {
    return topTypes[0];
  }

  // 6. 동점 → 믹스형
  return "mix";
}
