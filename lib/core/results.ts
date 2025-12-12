// File: /lib/results.ts
// 돌봄 에너지 테스트 결과카드 + 토끼 메타 카드 + 타입 정의
// 그대로 복사해 붙여넣으면 즉시 사용 가능합니다.

export type CareType = "plant" | "turtle" | "cat" | "dog" | "rabbit";

export interface ResultCard {
  id: CareType;
  title: string;
  subtitle: string;
  description: string[];
  rabbitAffinity: number; // 토끼 적합도 (0~100)
}

// --------------------------------------------------------------
// 1차 결과카드 매핑 (사용자가 받는 메인 타입 결과)
// --------------------------------------------------------------

export const RESULT_CARDS: Record<CareType, ResultCard> = {
  plant: {
    id: "plant",
    title: "식물형 돌봄 에너지",
    subtitle: "조용히 안정시키는 타입",
    description: [
      "당신은 생명을 ‘가라앉히는 힘’을 가진 사람입니다.",
      "자극을 최소화하고, 환경을 조정하여 편안함을 만들어냅니다.",
      "돌봄의 기본은 ‘환경 관리’라는 걸 잘 알고 있는 타입입니다."
    ],
    rabbitAffinity: 68
  },

  turtle: {
    id: "turtle",
    title: "거북이형 돌봄 에너지",
    subtitle: "지속성・꾸준함・체계의 사람",
    description: [
      "당신은 생명을 지킬 때 ‘일관성’을 가장 중요하게 여깁니다.",
      "변화를 천천히 받아들이게 하는 방식으로 안정을 줍니다.",
      "돌봄에서 가장 중요한 ‘지속성’을 이미 갖춘 타입입니다."
    ],
    rabbitAffinity: 72
  },

  cat: {
    id: "cat",
    title: "고양이형 돌봄 에너지",
    subtitle: "관찰, 거리두기, 미세한 신호에 반응",
    description: [
      "당신은 생명의 ‘리듬’을 존중합니다.",
      "과한 간섭을 삼가고, 상대가 원하는 만큼 다가갑니다.",
      "섬세한 감각으로 상황을 먼저 읽는 능력이 뛰어납니다."
    ],
    rabbitAffinity: 80
  },

  dog: {
    id: "dog",
    title: "개형 돌봄 에너지",
    subtitle: "따뜻함・애정・직관적 케어",
    description: [
      "당신은 생명에게 감정적으로 가장 큰 안정감을 주는 타입입니다.",
      "돌봄 과정에서의 ‘신뢰 형성’이 탁월합니다.",
      "따뜻한 상호작용이 필요한 존재에게 강한 힘을 발휘합니다."
    ],
    rabbitAffinity: 77
  },

  rabbit: {
    id: "rabbit",
    title: "토끼형 돌봄 에너지",
    subtitle: "예민함을 다루는 최고의 감수성",
    description: [
      "당신은 작은 변화에도 빠르게 감지하는 사람입니다.",
      "미세한 신호를 읽고 필요한 만큼의 케어를 합니다.",
      "‘예민한 생명’을 돌보는 데 가장 적합한 감수성을 지녔습니다."
    ],
    rabbitAffinity: 95
  }
};

// --------------------------------------------------------------
// 2차 카드: 모든 타입에 공통으로 붙는 ‘토끼 메타 카드’
// --------------------------------------------------------------

export const RABBIT_META_CARD = {
  title: "왜 토끼 감수성이 중요한가?",
  description: [
    "토끼는 예민하고, 작은 변화에도 크게 반응하는 생명입니다.",
    "그래서 토끼를 돌볼 수 있는 사람은 ‘모든 생명을 다룰 수 있는 감수성’을 갖추고 있습니다.",
    "당신의 유형에서 발견된 돌봄 에너지는 토끼 돌봄 감수성과 깊게 연결되어 있습니다."
  ]
};

// --------------------------------------------------------------
// 결과 페이지에서 사용할 최종 조립 함수 (선택)
// scoring.ts + results.ts 연결용
// --------------------------------------------------------------

import { calculateCareScore, determineResult } from "../analytics/scoring";

export function getFinalCareResult(selected: Record<string, string>) {
  const score = calculateCareScore(selected);
  const primary = determineResult(score); // plant | turtle | cat | dog | rabbit
  const card = RESULT_CARDS[primary];

  return {
    primaryType: primary,
    primaryCard: card,
    rabbitMeta: RABBIT_META_CARD,
    affinity: card.rabbitAffinity
  };
}
