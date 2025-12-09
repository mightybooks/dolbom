// lib/saveResult.ts
import { createSupabaseClient } from "./supabaseClient";

type Answer = {
  questionId: number;
  choiceId: string;
};

type ResultPayload = {
  title: string;
  highlight: string;
};

export async function saveResultToSupabase(
  answers: Answer[],
  result: ResultPayload
) {
  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase.from("results").insert({
      answers,
      result_title: result.title,
      result_highlight: result.highlight,
      client_type: "web",
    });

    if (error) {
      console.warn("[dolbom] Supabase 저장 에러:", error.message);
    }
  } catch (e) {
    console.warn("[dolbom] Supabase 저장 실패:", e);
  }
}
