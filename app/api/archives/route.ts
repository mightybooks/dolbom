import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const token = searchParams.get("token");
    const limit = Number(searchParams.get("limit") ?? 20);
    const locale = searchParams.get("locale");
    const hasMessage = searchParams.get("hasMessage") === "true";

    if (token !== process.env.ARCHIVE_API_TOKEN) {
      return NextResponse.json(
        { ok: false, message: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    let query = supabase
      .from("archives")
      .select("id, result_type, image_key, message, locale, created_at")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (locale) {
      query = query.eq("locale", locale);
    }

    if (hasMessage) {
      query = query.not("message", "is", null);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { ok: false, message: "FETCH_FAILED" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
