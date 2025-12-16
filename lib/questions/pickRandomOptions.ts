// lib/questions/pickRandomOptions.ts

import type { ChoiceOption } from "@/lib/types/care";

/**
 * 보기 옵션 랜덤 노출 규칙
 * - rabbit 정상 옵션 1개는 반드시 포함
 * - 정상 옵션(plant~dog) 중 2개 랜덤
 * - 병맛 옵션(weird) 중 2개 랜덤
 * - 총 5개 노출
 */
export function pickRandomOptions(
  all: ChoiceOption[]
): ChoiceOption[] {
  const normals = all.filter((o) => o.type !== "weird");
  const weirds = all.filter((o) => o.type === "weird");

  const rabbitCore = normals.find((o) => o.isCoreRabbit);
  const normalsWithoutRabbit = normals.filter((o) => !o.isCoreRabbit);

  // 정상 옵션 중 2개 랜덤
  const pickedNormals = [...normalsWithoutRabbit]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  // 병맛 옵션 중 2개 랜덤
  const pickedWeirds = [...weirds]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return [
    rabbitCore!, // rabbit은 반드시 포함
    ...pickedNormals,
    ...pickedWeirds,
  ];
}
