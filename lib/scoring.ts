// File: /lib/scoring.ts

export type CareType = "plant" | "turtle" | "dog" | "cat" | "rabbit";

export interface ChoiceOption {
  id: string;
  label: string;
  type: CareType;
}

export interface QuestionItem {
  id: string;
  title: string;
  options: ChoiceOption[];
}

// ============================================================================
// 7 QUESTIONS × 15 OPTIONS
// ============================================================================

export const QUESTIONS: QuestionItem[] = [
  // ---------------------------------------------------------------------------
  // Q1
  // ---------------------------------------------------------------------------
  {
    id: "q1",
    title: "귀가하는 길, 가로등 아래에서 흔들리는 상자를 발견했습니다. 상자 안에는 무엇이 있을까요?",
    options: [
      { id: "q1_1", label: "먼지투성이 작은 화분", type: "plant" },
      { id: "q1_2", label: "움직임이 거의 없는 작은 거북이", type: "turtle" },
      { id: "q1_3", label: "꼬리를 세운 채 울고 있는 고양이", type: "cat" },
      { id: "q1_4", label: "겁에 질린 강아지 한 마리", type: "dog" },
      { id: "q1_5", label: "배에 힘을 잔뜩 준 토끼 한 마리", type: "rabbit" },

      { id: "q1_6", label: "바람에 날린 낙엽 뭉치", type: "plant" },
      { id: "q1_7", label: "작은 플라스틱 수조", type: "turtle" },
      { id: "q1_8", label: "털이 부스스한 길냥이", type: "cat" },
      { id: "q1_9", label: "목줄이 풀린 강아지", type: "dog" },
      { id: "q1_10", label: "귀만 삐죽 보이는 토끼 실루엣", type: "rabbit" },

      { id: "q1_11", label: "시든 풀잎 한 줌", type: "plant" },
      { id: "q1_12", label: "겨울잠 준비 중인 거북이", type: "turtle" },
      { id: "q1_13", label: "작은 상처가 있는 고양이", type: "cat" },
      { id: "q1_14", label: "배고파 보이는 강아지", type: "dog" },
      { id: "q1_15", label: "가만히 떨고 있는 아기 토끼", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q2
  // ---------------------------------------------------------------------------
  {
    id: "q2",
    title: "상자를 열어본 당신. 생명체가 조심스레 당신을 바라봅니다. 당신의 첫 반응은?",
    options: [
      { id: "q2_1", label: "물을 찾아 주변을 둘러본다", type: "plant" },
      { id: "q2_2", label: "온도부터 확인한다", type: "turtle" },
      { id: "q2_3", label: "겁먹지 않게 천천히 손을 내민다", type: "cat" },
      { id: "q2_4", label: "“괜찮아”라는 말이 먼저 나온다", type: "dog" },
      { id: "q2_5", label: "가능한 잡음과 빛을 줄여준다", type: "rabbit" },

      { id: "q2_6", label: "건조 여부를 체크한다", type: "plant" },
      { id: "q2_7", label: "움직임이 정상인지 살핀다", type: "turtle" },
      { id: "q2_8", label: "눈치를 보며 거리를 조절한다", type: "cat" },
      { id: "q2_9", label: "먼저 쓰다듬고 싶어진다", type: "dog" },
      { id: "q2_10", label: "소리 없이 관찰한다", type: "rabbit" },

      { id: "q2_11", label: "빛을 가려준다", type: "plant" },
      { id: "q2_12", label: "체온 유지가 급한지 판단한다", type: "turtle" },
      { id: "q2_13", label: "상처 여부를 확인한다", type: "cat" },
      { id: "q2_14", label: "안정을 주기 위해 말 건다", type: "dog" },
      { id: "q2_15", label: "멀리서 가만히 기다린다", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q3
  // ---------------------------------------------------------------------------
  {
    id: "q3",
    title: "어떻게 집으로 데려갈까요?",
    options: [
      { id: "q3_1", label: "통풍이 잘되도록 박스를 조금 열어둔다", type: "plant" },
      { id: "q3_2", label: "흔들리지 않게 천천히 이동한다", type: "turtle" },
      { id: "q3_3", label: "큰 소리를 피하며 조심히 안는다", type: "cat" },
      { id: "q3_4", label: "따뜻하게 감싸안고 이동한다", type: "dog" },
      { id: "q3_5", label: "최대한 자극 없이 묵묵히 걸어간다", type: "rabbit" },

      { id: "q3_6", label: "박스 내부 온도를 맞춘다", type: "plant" },
      { id: "q3_7", label: "박스를 최대한 흔들리지 않게 고정한다", type: "turtle" },
      { id: "q3_8", label: "생명체가 나올 공간을 좁혀주지 않는다", type: "cat" },
      { id: "q3_9", label: "계속 말을 걸어주며 이동한다", type: "dog" },
      { id: "q3_10", label: "아예 팔에 안기지 않게 거리두며 이동", type: "rabbit" },

      { id: "q3_11", label: "빛이 너무 강하지 않게 조절한다", type: "plant" },
      { id: "q3_12", label: "최대한 평지를 찾아 걷는다", type: "turtle" },
      { id: "q3_13", label: "생명체의 반응을 수시로 체크한다", type: "cat" },
      { id: "q3_14", label: "중간중간 멈춰서 숨을 고르게 한다", type: "dog" },
      { id: "q3_15", label: "발소리도 줄이며 이동한다", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q4
  // ---------------------------------------------------------------------------
  {
    id: "q4",
    title: "집에 도착했습니다. 가장 먼저 할 일은?",
    options: [
      { id: "q4_1", label: "햇빛/조명을 먼저 맞춰준다", type: "plant" },
      { id: "q4_2", label: "온도 변화가 없는 방에 둔다", type: "turtle" },
      { id: "q4_3", label: "숨을 곳과 안전한 공간을 만든다", type: "cat" },
      { id: "q4_4", label: "부드러운 담요를 깐다", type: "dog" },
      { id: "q4_5", label: "조용한 방 한 켠에서 적응 시간을 준다", type: "rabbit" },

      { id: "q4_6", label: "직접 빛이 닿지 않도록 각도를 조정한다", type: "plant" },
      { id: "q4_7", label: "체온 저하를 막기 위한 패드를 둔다", type: "turtle" },
      { id: "q4_8", label: "숨구멍 있는 상자를 새로운 보금자리로 만든다", type: "cat" },
      { id: "q4_9", label: "간단한 간식을 준비한다", type: "dog" },
      { id: "q4_10", label: "자극 없이 배치를 한다", type: "rabbit" },

      { id: "q4_11", label: "수분 공급이 필요한지 체크", type: "plant" },
      { id: "q4_12", label: "조용한 공간에 두고 방해하지 않는다", type: "turtle" },
      { id: "q4_13", label: "아예 손대지 않고 지켜보기만 한다", type: "cat" },
      { id: "q4_14", label: "이름을 뭐라고 지을지 고민한다", type: "dog" },
      { id: "q4_15", label: "실루엣만 보이게 카메라를 멀리 둔다", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q5
  // ---------------------------------------------------------------------------
  {
    id: "q5",
    title: "한 시간 후, 새로운 생명체가 당신을 어떻게 바라보고 있나요?",
    options: [
      { id: "q5_1", label: "조금 살아난 듯 잎이 올라온다", type: "plant" },
      { id: "q5_2", label: "아직 느리지만 편안해 보인다", type: "turtle" },
      { id: "q5_3", label: "멀찍이 앉아 눈으로 관찰한다", type: "cat" },
      { id: "q5_4", label: "당신 주변을 맴돈다", type: "dog" },
      { id: "q5_5", label: "아직 경계하지만, 귀가 덜 떨린다", type: "rabbit" },

      { id: "q5_6", label: "조금 촉촉해진 느낌이다", type: "plant" },
      { id: "q5_7", label: "거북한 기색이 줄어든다", type: "turtle" },
      { id: "q5_8", label: "당신을 슬쩍 지나간다", type: "cat" },
      { id: "q5_9", label: "꼬리를 흔들며 쳐다본다", type: "dog" },
      { id: "q5_10", label: "지켜보고 있지만 울지 않는다", type: "rabbit" },

      { id: "q5_11", label: "잎의 색이 조금 맑아진다", type: "plant" },
      { id: "q5_12", label: "편히 등을 내어준다", type: "turtle" },
      { id: "q5_13", label: "당신 가까이 와 앉는다", type: "cat" },
      { id: "q5_14", label: "손을 핥으려 한다", type: "dog" },
      { id: "q5_15", label: "작게 숨을 내리며 안정을 얻는다", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q6
  // ---------------------------------------------------------------------------
  {
    id: "q6",
    title: "당신은 이 생명체와 어떤 하루를 보내고 싶나요?",
    options: [
      { id: "q6_1", label: "햇빛 드는 자리에서 조용히", type: "plant" },
      { id: "q6_2", label: "미지근한 물로 목욕시키기", type: "turtle" },
      { id: "q6_3", label: "창가에서 따뜻하게 낮잠", type: "cat" },
      { id: "q6_4", label: "산책 후 간식 먹기", type: "dog" },
      { id: "q6_5", label: "조용히 같은 공간에서 책 읽기", type: "rabbit" },

      { id: "q6_6", label: "새 흙 갈아주기", type: "plant" },
      { id: "q6_7", label: "꾸준히 온도 체크하기", type: "turtle" },
      { id: "q6_8", label: "옆에서 캣닢 가지고 놀기", type: "cat" },
      { id: "q6_9", label: "훈련 놀이하기", type: "dog" },
      { id: "q6_10", label: "멀찍이 떨어져 간식 주기", type: "rabbit" },

      { id: "q6_11", label: "분무기로 촉촉함 유지하기", type: "plant" },
      { id: "q6_12", label: "하루 종일 조용히 지켜보기", type: "turtle" },
      { id: "q6_13", label: "부드러운 소리 들려주기", type: "cat" },
      { id: "q6_14", label: "격하게 놀아주기", type: "dog" },
      { id: "q6_15", label: "최대한 자극 없이 존재하기", type: "rabbit" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Q7
  // ---------------------------------------------------------------------------
  {
    id: "q7",
    title: "마지막 질문입니다. 이 생명체가 당신에게 주는 감정은?",
    options: [
      { id: "q7_1", label: "차분함과 안정감", type: "plant" },
      { id: "q7_2", label: "묵직한 책임감", type: "turtle" },
      { id: "q7_3", label: "가까워지고 싶은 호기심", type: "cat" },
      { id: "q7_4", label: "보호하고 싶은 애정", type: "dog" },
      { id: "q7_5", label: "지켜주고 싶은 섬세함", type: "rabbit" },

      { id: "q7_6", label: "조용한 회복감", type: "plant" },
      { id: "q7_7", label: "꾸준히 확인하고 싶은 마음", type: "turtle" },
      { id: "q7_8", label: "적당한 거리와 편안함", type: "cat" },
      { id: "q7_9", label: "하루가 덜 외로워지는 느낌", type: "dog" },
      { id: "q7_10", label: "작은 숨소리에도 귀 기울이게 됨", type: "rabbit" },

      { id: "q7_11", label: "함께 있으면 더 나아지는 느낌", type: "plant" },
      { id: "q7_12", label: "책임과 신뢰", type: "turtle" },
      { id: "q7_13", label: "서로 알아가는 과정", type: "cat" },
      { id: "q7_14", label: "헉, 귀여워…라는 자기도 모를 반응", type: "dog" },
      { id: "q7_15", label: "작고 여린 존재를 위한 집중력", type: "rabbit" },
    ],
  },
];

// ============================================================================
// 점수 계산기
// ============================================================================

export function calculateCareScore(selected: Record<string, string>) {
  const score: Record<CareType, number> = {
    plant: 0,
    turtle: 0,
    cat: 0,
    dog: 0,
    rabbit: 0,
  };

  for (const q of QUESTIONS) {
    const chosen = selected[q.id];
    if (!chosen) continue;

    const opt = q.options.find((o) => o.id === chosen);
    if (!opt) continue;

    score[opt.type] += 1;
  }

  return score;
}

export function determineResult(score: Record<CareType, number>): CareType {
  let best: CareType = "rabbit";
  let max = -1;

  for (const key of Object.keys(score) as CareType[]) {
    if (score[key] > max) {
      max = score[key];
      best = key;
    }
  }

  return best;
}
