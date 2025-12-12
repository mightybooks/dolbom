// lib/analytics/careProfileData.ts

export type CareType = "plant" | "turtle" | "dog" | "cat" | "rabbit";

export const CareProfileData: Record<CareType, {
  title: string;
  description: string;
}> = {
  plant: {
    title: "식물형 돌봄러",
    description: "환경의 미세한 변화를 감지하고 조용한 안정감을 전하는 타입입니다."
  },
  turtle: {
    title: "거북이형 돌봄러",
    description: "신중함과 루틴 중심의 기본기로 생명을 지켜내는 타입입니다."
  },
  cat: {
    title: "고양이형 돌봄러",
    description: "과하지 않은 거리감과 관찰 중심 케어가 특징인 섬세한 타입입니다."
  },
  dog: {
    title: "개형 돌봄러",
    description: "애정 표현과 교감을 통해 큰 안정과 확신을 주는 타입입니다."
  },
  rabbit: {
    title: "토끼형 돌봄러",
    description: "예민한 신호 감지와 섬세한 환경 조성이 강점인 케어 타입입니다."
  }
};
