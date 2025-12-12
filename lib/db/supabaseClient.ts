// lib/supabaseClient.ts
import { createBrowserClient } from "@supabase/ssr";

export function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // 개발 단계에서만 보는 경고용
    console.warn("[Supabase] 환경변수가 설정되지 않았습니다.");
  }

  return createBrowserClient(
    url ?? "",
    anonKey ?? ""
  );
}
