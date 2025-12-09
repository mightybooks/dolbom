// ---------------------------------------------
// 토실토실 돌봄에너지 테스트
// 결과 유형 데이터 테이블 (초안 완성본)
// ---------------------------------------------

export type CareProfileId =
  | "A" // 편안-관찰형
  | "B" // 장난-긍정형
  | "C" // 신중-학습형
  | "D" // 헌신-과몰입형
  | "E" // 구조-대응형
  | "F" // 온기-정서형
  | "G"; // 조율-매니저형

export interface CareProfileItem {
  id: CareProfileId;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  advice: string[];
  ogImageKey: string; // OG 이미지 자동 매핑용 key
}

export const CARE_PROFILES: Record<CareProfileId, CareProfileItem> = {
  A: {
    id: "A",
    title: "편안-관찰형",
    subtitle: "Quiet Guardian",
    summary: "대체로 침착하며, 생명체의 변화를 조용히 관찰하는 타입입니다.",
    description:
      "돌발적인 문제보다 패턴을 이해하는 데 강하며, 반려동물의 아주 미세한 변화를 포착하는 능력이 뛰어납니다. 다만 행동 개입이 늦어지는 경향이 있어, 긴급상황 대응은 별도의 루틴이 필요할 수 있습니다.",
    advice: [
      "정기 점검 루틴을 캘린더에 자동화하세요.",
      "갑작스러운 문제에 대비해 ‘즉각 행동 리스트’를 만들면 도움이 됩니다.",
    ],
    ogImageKey: "profileA",
  },

  B: {
    id: "B",
    title: "장난-긍정형",
    subtitle: "Bright Buddy",
    summary: "에너지가 많고, 돌봄을 놀이처럼 즐기는 타입입니다.",
    description:
      "관계 형성이 매우 빠르고 동물의 불안을 잘 풀어줍니다. 단, 재미 중심의 돌봄은 장기 케어 구조를 흐트러뜨릴 수 있습니다.",
    advice: [
      "놀이 시간과 케어 시간을 구분해 두세요.",
      "기록이 약한 편이니 급여/투약 체크리스트를 만들면 좋습니다.",
    ],
    ogImageKey: "profileB",
  },

  C: {
    id: "C",
    title: "신중-학습형",
    subtitle: "Care Researcher",
    summary: "정보를 모으고 분석하는 과정 자체를 즐기는 타입입니다.",
    description:
      "새로운 지식을 빠르게 흡수하며 관리의 정확도가 높습니다. 단, 준비가 완벽하지 않으면 행동을 미루는 경향이 있습니다.",
    advice: [
      "‘80% 준비되면 행동하기’ 규칙을 권장합니다.",
      "지식 과부하를 피하기 위해 출처를 3개 이하로 제한하세요.",
    ],
    ogImageKey: "profileC",
  },

  D: {
    id: "D",
    title: "헌신-과몰입형",
    subtitle: "The Devoted",
    summary: "돌봄을 자기 일처럼 끌어안고 몰입하는 경향이 강합니다.",
    description:
      "애정이 깊고 책임감이 강합니다. 다만 본인이 번아웃되는 속도도 빠른 편이며, 오히려 돌봄의 질을 해칠 위험도 존재합니다.",
    advice: [
      "하루에 10분이라도 ‘돌봄에서 벗어난 시간’을 확보하세요.",
      "책임 공유 파트너를 한 명 두는 것이 좋습니다.",
    ],
    ogImageKey: "profileD",
  },

  E: {
    id: "E",
    title: "구조-대응형",
    subtitle: "Rescue Mode",
    summary: "위기에 빠진 생명을 보면 몸이 먼저 움직이는 타입입니다.",
    description:
      "빠른 판단력과 실행력을 갖추고 있어 구조 상황에 적합합니다. 문제는 ‘위기 상황이 아닌 일상’을 유지하는 데 약합니다.",
    advice: [
      "정상적인 일상 루틴을 의식적으로 만들어 두세요.",
      "구조 직후의 감정 기복을 점검하는 것이 좋습니다.",
    ],
    ogImageKey: "profileE",
  },

  F: {
    id: "F",
    title: "온기-정서형",
    subtitle: "Warm Listener",
    summary: "감정 공감 능력이 뛰어나며 동물의 정서를 빠르게 읽습니다.",
    description:
      "불안 완화와 안정감 제공에 강점이 있지만, 감정 과몰입으로 인해 상황 판단력이 흐려질 때도 있습니다.",
    advice: [
      "정서와 사실을 분리하는 체크리스트를 사용하세요.",
      "반려동물 일지에 ‘기분 vs 사실’을 따로 기록해보세요.",
    ],
    ogImageKey: "profileF",
  },

  G: {
    id: "G",
    title: "조율-매니저형",
    subtitle: "System Keeper",
    summary: "일정을 짜고 시스템을 유지하는 데 최적화된 타입입니다.",
    description:
      "돌봄 리듬을 잘 만들고 유지하는 능력이 탁월합니다. 단, 계획을 흐트러뜨리는 변수에 지나치게 스트레스를 받을 수 있습니다.",
    advice: [
      "변수 발생 시 대체 시나리오를 2개만 만들어두세요.",
      "너무 빡빡한 계획보단 ‘1시간 탄력 구간’을 추가하세요.",
    ],
    ogImageKey: "profileG",
  },
};
