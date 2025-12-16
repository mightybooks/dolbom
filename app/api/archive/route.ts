import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    // -----------------------------------
    // 환경변수
    // -----------------------------------
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        {
          ok: false,
          code: "SERVER_CONFIG_ERROR",
          message: "서버 설정 오류입니다.",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    );

    // -----------------------------------
    // payload
    // -----------------------------------
    const body = await req.json();
    const {
      source,
      locale,
      result_type,
      image_key,
      message,
    } = body ?? {};

    // -----------------------------------
    // validation
    // -----------------------------------
    if (
      source !== "care-app" ||
      !locale ||
      !result_type ||
      !image_key
    ) {
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_PAYLOAD",
          message: "잘못된 요청입니다.",
        },
        { status: 400 }
      );
    }

    if (!["ko", "en"].includes(locale)) {
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_LOCALE",
          message: "허용되지 않은 언어입니다.",
        },
        { status: 400 }
      );
    }

    const safeMessage =
      typeof message === "string" && message.trim().length > 0
        ? message.trim()
        : null;

    // -----------------------------------
    // insert
    // -----------------------------------
    const { error } = await supabase
      .from("archives")
      .insert({
        source,
        locale,
        result_type,
        image_key,
        message: safeMessage,
      });

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          code: "ARCHIVE_FAILED",
          message: "메시지를 저장하지 못했습니다.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "아카이빙 완료",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_ERROR",
        message: "서버 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
