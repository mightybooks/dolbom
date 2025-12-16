// data/ko/resultMap.ts

import type { CareType } from "@/lib/types/care";

export type CareResultContent = {
  title: string;
  description: string;
  image: string;
  og: string;
};

const RESULT_MAP: Record<CareType, CareResultContent> = {
  plant: {
    title: "식물형 돌봄러",
    description:
      "환경의 미세한 변화를 누구보다 먼저 감지하고, 조용히 안정감을 전하는 타입입니다.",
    image: "/tosil/results/result_plant.png",
    og: "/tosil/og/og_plant.png",
  },
  turtle: {
    title: "거북이형 돌봄러",
    description:
      "신중하게 살피고, 일관된 루틴으로 생명을 지켜내는 묵직한 기본기형 돌봄러입니다.",
    image: "/tosil/results/result_turtle.png",
    og: "/tosil/og/og_turtle.png",
  },
  dog: {
    title: "개형 돌봄러",
    description:
      "따뜻한 교감과 직접적인 애정 표현을 통해 생명체에게 큰 안정과 확신을 주는 타입입니다.",
    image: "/tosil/results/result_dog.png",
    og: "/tosil/og/og_dog.png",
  },
  cat: {
    title: "고양이형 돌봄러",
    description:
      "관찰과 간접적인 배려를 기반으로 하는 섬세한 케어러. 과하지 않은 돌봄이 장점입니다.",
    image: "/tosil/results/result_cat.png",
    og: "/tosil/og/og_cat.png",
  },
  rabbit: {
    title: "토끼형 돌봄러",
    description:
      "예민한 신호를 빠르게 감지하고, 세심한 환경 관리로 생명체에게 가장 최적의 공간을 제공하는 타입입니다.",
    image: "/tosil/results/result_rabbit.png",
    og: "/tosil/og/og_rabbit.png",
  },
  alien: {
    title: "외계친화형 돌봄러",
    description:
      "지구의 생태계와는 다른 알고리즘을 가진 신비한 존재. 토실이와 수리미가 연구 중입니다.",
    image: "/tosil/results/result_alien.png",
    og: "/tosil/og/og_alien.png",
  },
  mix: {
    title: "짬뽕형 돌봄러",
    description:
      "당신은 한 가지 방식으로 돌보는 사람이 아닙니다. 두 가지 이상의 돌봄 스타일이 뒤섞인 독특한 복합형입니다.",
    image: "/tosil/results/result_mix.png",
    og: "/tosil/og/og_mix.png",
  },
};

export default RESULT_MAP;
