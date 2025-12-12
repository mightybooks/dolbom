// File: src/lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js";

/**
 * 서버(Next.js API Route, Server Component) 전용 Supabase 클라이언트
 * - 서비스 롤키(SUPABASE_SERVICE_ROLE_KEY)를 사용하므로 절대 클라이언트에서 import 금지!
 */

export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error("Supabase 환경 변수가 설정되지 않았습니다.");
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
