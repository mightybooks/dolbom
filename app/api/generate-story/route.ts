// app/api/generate-story/route.ts
import { NextResponse } from "next/server";

type Answer = {
  questionId: number;
  choiceId: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { answers: Answer[] };

    // TODO: 여기서 answers 기반으로 프롬프트 구성
    // const prompt = buildPrompt(body.answers);

    // TODO: OpenAI API 호출 (실 서비스에서 env로 키 주입)
    // const story = await callOpenAI(prompt);

    // 일단은 mock 응답
    const storyText =
      "이 자리는 나중에 OpenAI를 통해 생성된, 토실토실 세계관 돌봄에너지 스토리가 들어갈 자리입니다.";
    const energyType = "mock-type";

    return NextResponse.json(
      {
        storyText,
        energyType,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("[generate-story] error", e);
    return NextResponse.json(
      { error: "failed_to_generate" },
      { status: 500 }
    );
  }
}
