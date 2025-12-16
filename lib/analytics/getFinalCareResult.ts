// lib/analytics/getFinalCareResult.ts

import type {
  CareType,
  CareScoreType,
  QuestionItem,
} from "@/lib/types/care";

import {
  calculateCareScore,
  determineResult,
} from "@/lib/analytics/scoring";

export interface FinalCareResult {
  // 최종 결과 타입 (plant/turtle/dog/cat/rabbit/alien/mix)
  primaryCard: CareType;

  // 점수 분포
  affinity: Record<CareScoreType, number>;
}

export function getFinalCareResult(
  selected: Record<string, string>,
  questions: QuestionItem[]
): FinalCareResult {
  // 1. 점수 계산
  const affinity = calculateCareScore(selected, questions);

  // 2. 최종 결과 결정
  const primaryCard = determineResult(affinity);

  return {
    primaryCard,
    affinity,
  };
}
