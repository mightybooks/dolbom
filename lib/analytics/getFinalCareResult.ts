// lib/analytics/getFinalCareResult.ts

import { CareType } from "./scoring";
import { calculateCareScore, determineResult } from "./scoring";

export interface FinalCareResult {
  // 최종 결과 타입 (plant/turtle/dog/cat/rabbit/alien?)
  primaryCard: CareType;

  // 점수 분포 (각 타입별 0~7점)
  affinity: Record<CareType, number>;
}

export function getFinalCareResult(
  selected: Record<string, string>
): FinalCareResult {
  // 1. 점수 계산
  const affinity = calculateCareScore(selected);

  // 2. 가장 높은 점수의 타입 결정
  const primaryCard = determineResult(affinity);

  return {
    primaryCard,
    affinity,
  };
}
