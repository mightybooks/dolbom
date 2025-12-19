"use client";

export const dynamic = "force-dynamic";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/test/result");
    }, 2800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-emerald-50">
      <div className="flex items-center gap-8 mb-6">
        <img
          src="/tosil/loading/surimi-book.png"
          className="w-40 surimi-book"
          alt="Surimi"
        />
        <img
          src="/tosil/loading/tosil-book.png"
          className="w-40 tosil-book"
          alt="Tosil"
        />
      </div>

      <p className="text-base text-slate-700 mb-2 text-center max-w-sm leading-relaxed">
        테스트 결과를 분석 중입니다.<br />
        사실 이 테스트는 책 한 권에서 시작된 프로젝트의 일부입니다.<br/>
        돌봄에너지를 극대화하고 싶다면<br />
        한 번 읽어봐. 아니, 두 번 읽어봐.<br />
        도서관에도 신청하고, 친구들에게도 권하고…<br />
        그러면 넌 건강해지고, 부자가 되고…
      </p>
    </main>
  );
}
