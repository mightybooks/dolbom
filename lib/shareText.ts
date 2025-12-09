// File: src/lib/shareText.ts

type ShareTextParams = {
  title: string;      // 예: "토끼형 돌봄 에너지"
  affinity: number;   // 예: 82
  url?: string;       // 결과 페이지 URL
};

export function buildShareText({ title, affinity, url }: ShareTextParams): string {
  const base = `나는 토실토실 돌봄 에너지 테스트에서 '${title}' 타입이 나왔어요.
토끼 돌봄 적합도는 ${affinity}%랍니다.`;

  const tail = "\n\n당신의 돌봄 감수성은 몇 퍼센트인가요?";

  const link = url ? `\n${url}` : "";

  return base + tail + link;
}
