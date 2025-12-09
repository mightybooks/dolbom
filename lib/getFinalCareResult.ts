// File: /lib/getFinalCareResult.ts
// 최종 결과 조립 파일 (scoring.ts + results.ts 결합)

import { calculateCareScore, determineResult } from "./scoring";
import { RESULT_CARDS, RABBIT_META_CARD } from "./results";
import type { CareType } from "./results";

export type FinalCareResult = {
  primaryType: CareType;
  primaryCard: {
    title: string;
    subtitle: string;
    description: string[];
    rabbitAffinity: number;
  };
  rabbitMeta: typeof RABBIT_META_CARD;
  affinity: number;
  rawScore: Record<string, number>;
};

// selected: { q1: "q1_3", q2: "q2_10", ... }
export function getFinalCareResult(selected: Record<string, string>) {
  const score = calculateCareScore(selected);

  const primary: CareType = determineResult(score);

  const primaryCard = RESULT_CARDS[primary];
  const affinity = primaryCard.rabbitAffinity;

  return {
    primaryType: primary,
    primaryCard,
    rabbitMeta: RABBIT_META_CARD,
    affinity,
    rawScore: score,
  };
}

