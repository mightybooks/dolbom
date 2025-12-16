import type { QuestionItem } from "@/lib/types/care";

export const QUESTIONS: QuestionItem[] = [
  {
    id: "q1",
    title:
      "귀가하는 길, 가로등 아래서 작게 흔들리는 박스를 발견했습니다. 박스 안에는 무엇이 있을까요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q1_plant",
        label: "말라가는 잎을 달고 있는 작은 화분",
        type: "plant",
      },
      {
        id: "q1_turtle",
        label: "움찔하며 머리를 안으로 숨긴 작은 거북이",
        type: "turtle",
      },
      {
        id: "q1_cat",
        label: "두 눈만 반짝이며 나를 바라보는 고양이 실루엣",
        type: "cat",
      },
      {
        id: "q1_dog",
        label: "꼬리만 흔들다 멈춘 겁먹은 강아지",
        type: "dog",
      },
      {
        id: "q1_rabbit",
        label: "부들부들 떨며 귀만 보이는 아기 토끼",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q1_w1", label: "갑자기 노래하는 휴대용 스피커", type: "weird" },
      { id: "q1_w2", label: "눈을 깜빡이는 기계 부품 묶음", type: "weird" },
      { id: "q1_w3", label: "문양이 새겨진 고대의 돌덩이", type: "weird" },
      { id: "q1_w4", label: "작은 외계 생명체처럼 생긴 점액질", type: "weird" },
      { id: "q1_w5", label: "안에서 누군가 기침하는 소리", type: "weird" },
      { id: "q1_w6", label: "빛을 머금은 작은 결정체", type: "weird" },
      { id: "q1_w7", label: "텅 빈 상자...라고 하기엔 미세한 온기", type: "weird" },
      { id: "q1_w8", label: "갑자기 움직였다 멈추는 작은 그림자", type: "weird" },
      { id: "q1_w9", label: "형언할 수 없는 냄새만 나는 무언가", type: "weird" },
      { id: "q1_w10", label: "반쯤 살아 있는 인형 같은 것", type: "weird" },
    ],
  },

  // =============================================================
  // Q2 — 생명체가 당신을 올려다봅니다. 당신은 가장 먼저 어떻게 반응하나요?
  // =============================================================

  {
    id: "q2",
    title:
      "박스 속 생명체가 당신을 올려다봅니다. 당신은 가장 먼저 어떻게 반응하나요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q2_plant",
        label: "조용히 주변을 정돈해 안정된 환경을 만들어준다",
        type: "plant",
      },
      {
        id: "q2_turtle",
        label: "당황스러워 한 발 뒤로 물러난다",
        type: "turtle",
      },
      {
        id: "q2_cat",
        label: "생명체의 반응을 살피며 천천히 눈을 깜빡여 준다",
        type: "cat",
      },
      {
        id: "q2_dog",
        label: "괜찮다고 낮은 목소리로 말을 건다",
        type: "dog",
      },
      {
        id: "q2_rabbit",
        label: "숨소리조차 줄이고 조심스럽게 손등을 내민다",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q2_w1", label: "갑자기 ASMR처럼 속삭이며 말을 걸어본다", type: "weird" },
      { id: "q2_w2", label: "주머니에서 사탕을 꺼내 흔든다", type: "weird" },
      { id: "q2_w3", label: "핸드폰을 켜서 ‘이거 실화냐’ 촬영을 시작한다", type: "weird" },
      { id: "q2_w4", label: "본능적으로 요가 자세를 취한다", type: "weird" },
      { id: "q2_w5", label: "박스에 명상 음악을 틀어준다", type: "weird" },
      { id: "q2_w6", label: "갑자기 생명체에게 이름을 붙여버린다", type: "weird" },
      { id: "q2_w7", label: "이건 분명 천사의 시험이라고 믿는다", type: "weird" },
      { id: "q2_w8", label: "갑자기 인사말을 세 가지 언어로 해본다", type: "weird" },
      { id: "q2_w9", label: "생명체에게 음악 취향을 물어본다", type: "weird" },
      { id: "q2_w10", label: "일단 셀카 한 장 찍는다", type: "weird" },
    ],
  },

  // =============================================================
  // Q3 — 생명체가 떨고 있습니다. 당신은 어떻게 안정시키나요?
  // =============================================================

  {
    id: "q3",
    title: "생명체가 떨고 있습니다. 당신은 어떻게 안정시키나요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q3_plant",
        label: "주변 온도를 조절하고 조용한 공간을 만들며 안정시키려 한다",
        type: "plant",
      },
      {
        id: "q3_turtle",
        label: "너무 가까이 다가가지 않고 시간이 해결해주기를 기다린다",
        type: "turtle",
      },
      {
        id: "q3_cat",
        label: "직접 만지지 않고 부드러운 소리나 환경으로 긴장을 풀어준다",
        type: "cat",
      },
      {
        id: "q3_dog",
        label: "따뜻한 담요나 손난로를 가져와 물리적으로 안정을 돕는다",
        type: "dog",
      },
      {
        id: "q3_rabbit",
        label: "천천히 낮은 자세로 몸을 낮추고, 손등을 내밀어 존재만 전한다",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q3_w1", label: "갑자기 자장가를 라이브로 부르기 시작한다", type: "weird" },
      { id: "q3_w2", label: "집에 있는 향초를 다 켜고 ‘스파 분위기’를 만든다", type: "weird" },
      { id: "q3_w3", label: "생명체에게 ‘심호흡 같이 할래?’라고 제안한다", type: "weird" },
      { id: "q3_w4", label: "갑자기 ASMR 톤으로 생명체의 하루를 인터뷰한다", type: "weird" },
      { id: "q3_w5", label: "박스 주변에 의미 모를 동그라미를 그린다", type: "weird" },
      { id: "q3_w6", label: "생명체에게 AI 스피커로 클래식을 들려준다", type: "weird" },
      { id: "q3_w7", label: "갑자기 생명체와 스트레칭을 함께 한다", type: "weird" },
      { id: "q3_w8", label: "이 상황을 ‘성장의 프롤로그’라고 혼자 내레이션한다", type: "weird" },
      { id: "q3_w9", label: "생명체에게 MBTI를 물어본다", type: "weird" },
      { id: "q3_w10", label: "갑자기 꽃말을 읊으며 무드 조성을 시도한다", type: "weird" },
    ],
  },

  // =============================================================
  // Q4 — 방을 둘러보던 생명체가 갑자기 구석으로 숨습니다. 왜 그런 걸까요?
  // =============================================================

  {
    id: "q4",
    title: "방을 둘러보던 생명체가 갑자기 구석으로 숨습니다. 왜 그런 걸까요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q4_plant",
        label: "빛의 방향이나 강도가 불편했기 때문이라고 판단한다",
        type: "plant",
      },
      {
        id: "q4_turtle",
        label: "새로운 환경에 적응하기 위한 자연스러운 행동이라고 이해한다",
        type: "turtle",
      },
      {
        id: "q4_cat",
        label: "안전하다고 느끼는 ‘자기만의 영역’을 찾는 행동으로 해석한다",
        type: "cat",
      },
      {
        id: "q4_dog",
        label: "당신의 움직임이나 소리가 조금 부담스러웠을 가능성을 떠올린다",
        type: "dog",
      },
      {
        id: "q4_rabbit",
        label: "갑작스러운 자극이 있었고, 안정될 시간을 스스로 찾는 중이라 본다",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q4_w1", label: "구석에 ‘에너지 포탈’이 있다고 믿는 듯 하다", type: "weird" },
      { id: "q4_w2", label: "당신의 얼굴이 갑자기 크게 느껴졌을 가능성이 있다", type: "weird" },
      { id: "q4_w3", label: "구석에서만 잡히는 와이파이를 찾는 것 같다", type: "weird" },
      { id: "q4_w4", label: "몰래 당신을 관찰하기 위한 잠입 모드에 돌입한 듯하다", type: "weird" },
      { id: "q4_w5", label: "구석에서만 들리는 소리를 감지한 것처럼 행동한다", type: "weird" },
      { id: "q4_w6", label: "구석의 먼지가 더 마음에 든 모양이다", type: "weird" },
      { id: "q4_w7", label: "사실 당신보다 방의 귀퉁이에 더 호감을 느낀 듯하다", type: "weird" },
      { id: "q4_w8", label: "잠시 현실 세계를 ‘로그아웃’하려는 중이다", type: "weird" },
      { id: "q4_w9", label: "구석에 숨으면 레벨업이 된다고 믿는 듯하다", type: "weird" },
      { id: "q4_w10", label: "구석에 있던 먼지토끼와 첫 회담 중일 수 있다", type: "weird" },
    ],
  },

  // =============================================================
  // Q5 — 생명체가 점점 움직임이 줄어들고 먹이에 반응이 둔해졌습니다.
  //      당신의 첫 대응은 무엇인가요?
  // =============================================================

  {
    id: "q5",
    title: "생명체가 점점 움직임이 줄어들고 먹이에 반응이 둔해졌습니다. 당신의 첫 대응은 무엇인가요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q5_plant",
        label: "환경 요인(빛, 환기, 건조도)을 점검하며 주변을 먼저 조절한다",
        type: "plant",
      },
      {
        id: "q5_turtle",
        label: "온도 변화가 있었는지 확인하고, 안정적인 온도를 유지해준다",
        type: "turtle",
      },
      {
        id: "q5_cat",
        label: "불안하거나 낯선 것이 없는지 주변 자극 요소를 제거한다",
        type: "cat",
      },
      {
        id: "q5_dog",
        label: "가볍게 불러보며 반응을 확인하고, 옆에서 조용히 기다려준다",
        type: "dog",
      },
      {
        id: "q5_rabbit",
        label: "조용하고 어두운 환경을 만들어 최대한 스트레스를 줄여준다",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q5_w1", label: "혹시 방 안에 ‘에너지 빨아먹는 유령’이 있는지 살핀다", type: "weird" },
      { id: "q5_w2", label: "스마트폰으로 생명체의 ‘배터리 잔량’을 확인할 방법을 찾는다", type: "weird" },
      { id: "q5_w3", label: "갑자기 노래를 틀어 ‘기분 전환 요법’을 시도한다", type: "weird" },
      { id: "q5_w4", label: "혹시 AI가 고장난 것처럼 재부팅을 시도해볼까 고민한다", type: "weird" },
      { id: "q5_w5", label: "이건 분명 상급자에게 보고해야 할 버그라고 생각한다", type: "weird" },
      { id: "q5_w6", label: "먹이를 흔들어보며 ‘혹시 스위치가 안 눌렸나?’ 생각한다", type: "weird" },
      { id: "q5_w7", label: "일단 당신이 먼저 간식을 먹어보며 반응을 유도한다", type: "weird" },
      { id: "q5_w8", label: "생명체가 사실 ‘절전 모드’라는 결론을 내린다", type: "weird" },
      { id: "q5_w9", label: "갑자기 점을 보면서 오늘의 운세를 체크한다", type: "weird" },
      { id: "q5_w10", label: "“혹시 네가 외계 잠수함이냐?”라고 질문해본다", type: "weird" },
    ],
  },


  // =============================================================
  // Q6 — 며칠 뒤, 생명체가 조심스레 당신 옆에 와 앉습니다.
  //      그 순간 당신의 마음에 떠오른 감정은 무엇인가요?
  // =============================================================

  {
    id: "q6",
    title: "며칠 뒤, 생명체가 조심스레 당신 옆에 와 앉습니다. 그 순간 당신의 마음에 떠오른 감정은 무엇인가요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q6_plant",
        label: "햇빛처럼 잔잔하게 퍼지는 평온함",
        type: "plant",
      },
      {
        id: "q6_turtle",
        label: "조심스레 쌓여가는 신뢰감",
        type: "turtle",
      },
      {
        id: "q6_cat",
        label: "말은 없지만 가까워졌다는 미묘한 따뜻함",
        type: "cat",
      },
      {
        id: "q6_dog",
        label: "누군가 나를 믿고 의지한다는 감동",
        type: "dog",
      },
      {
        id: "q6_rabbit",
        label: "이 작은 존재를 지켜주고 싶다는 섬세한 책임감",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q6_w1", label: "‘혹시 나를 조종하려고 온 건가?’라는 음모론적 감정", type: "weird" },
      { id: "q6_w2", label: "갑자기 BGM이 깔리는 느낌: ‘뭔가 이벤트 시작 아님?’", type: "weird" },
      { id: "q6_w3", label: "이쯤 되면 나도 NPC라는 생각이 든다", type: "weird" },
      { id: "q6_w4", label: "이 생명체가 생각보다 높은 레벨의 존재 아닐까?", type: "weird" },
      { id: "q6_w5", label: "이 장면을 사진으로 찍어두면 조회수가 잘 나올 것 같다", type: "weird" },
      { id: "q6_w6", label: "갑자기 다큐멘터리 내레이션이 들리는 환청", type: "weird" },
      { id: "q6_w7", label: "‘이게 바로 펫 키운다고 올리는 감정인가?’ 하는 상업적 깨달음", type: "weird" },
      { id: "q6_w8", label: "지금 이 순간, 혹시 퀘스트 창이 열릴까 기대한다", type: "weird" },
      { id: "q6_w9", label: "정말 뜬금없이 라면이 먹고 싶어진다", type: "weird" },
      { id: "q6_w10", label: "‘우린 지금 서로에게 익숙해진 건가...?’라는 뜬금 로맨스 각", type: "weird" },
    ],
  },

  // =============================================================
  // Q7 — 이제 생명체는 당신을 의지하게 되었습니다.
  //      앞으로 어떻게 돌보며 함께 살아갈까요?
  // =============================================================

  {
    id: "q7",
    title: "이제 생명체는 당신을 의지하게 되었습니다. 앞으로 어떻게 돌보며 함께 살아갈까요?",
    options: [
      // 정상 옵션 5개
      {
        id: "q7_plant",
        label: "하루의 리듬을 맞춰 조용히, 묵묵히 살아간다",
        type: "plant",
      },
      {
        id: "q7_turtle",
        label: "안정적인 환경을 꾸준히 유지하며 책임 있게 지킨다",
        type: "turtle",
      },
      {
        id: "q7_cat",
        label: "서로 간격을 존중하며 천천히 가까워진다",
        type: "cat",
      },
      {
        id: "q7_dog",
        label: "일상을 함께 보내며 애정을 표현하고 교감한다",
        type: "dog",
      },
      {
        id: "q7_rabbit",
        label: "섬세한 변화에도 귀 기울이며 오래 돌봐준다",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // 병맛 옵션 10개
      { id: "q7_w1", label: "이 생명체와 함께 세계 정복 계획을 세운다", type: "weird" },
      { id: "q7_w2", label: "이제 둘만의 유튜브 채널을 개설한다", type: "weird" },
      { id: "q7_w3", label: "우리의 관계를 장편 다큐멘터리로 제작한다", type: "weird" },
      { id: "q7_w4", label: "생명체에게 월세 절반을 받는 상상을 해본다", type: "weird" },
      { id: "q7_w5", label: "그냥 서로 가끔 씹고 가끔 보며 사는 거지 뭐", type: "weird" },
      { id: "q7_w6", label: "이 생명체가 사실 인간보다 똑똑하다는 결론을 낸다", type: "weird" },
      { id: "q7_w7", label: "우주의 균형을 지키는 비밀조직의 스카웃 제안을 기다린다", type: "weird" },
      { id: "q7_w8", label: "둘이서 가끔 라면을 끓여 먹으며 팀워크를 다진다", type: "weird" },
      { id: "q7_w9", label: "함께 사는 김에 공동 창업도 고려한다", type: "weird" },
      { id: "q7_w10", label: "갑자기 이 생명체가 나를 키우는 것 같은 느낌이 든다", type: "weird" },
    ],
  },
];