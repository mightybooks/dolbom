// File: src/app/api/save-result/route.ts
import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      answers,
      score,
      care_profile_id,
      result_title,
      result_highlight,
    } = body;

    // ============================
    // 🔹 1) 필수값 체크
    // ============================
    if (
      !answers ||
      typeof score !== "number" ||
      !care_profile_id ||
      !result_title ||
      !result_highlight
    ) {
      return NextResponse.json(
        { ok: false, error: "필수 값 누락" },
        { status: 400 }
      );
    }

    // ============================
    // 🔹 2) Supabase 서버 클라이언트
    // ============================
    const supabase = createServerSupabase();

    // ============================
    // 🔹 3) DB 저장
    // ============================
    const { error } = await supabase.from("results").insert({
      answers,
      score,
      care_profile_id, // 예: "dog"
      result_title,
      result_highlight,
    });

    if (error) {
      console.error("[save-result] DB 저장 오류:", error);
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[save-result] 서버 오류:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
