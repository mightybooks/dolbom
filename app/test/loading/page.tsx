"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "../TestContext";
import { calculateCareScore, determineResult } from "@/lib/analytics/scoring";

export default function LoadingPage() {
  const router = useRouter();
  const { answers } = useTest();

  useEffect(() => {
    const timer = setTimeout(() => {
      const score = calculateCareScore(answers);
      const resultType = determineResult(score);
      router.push(`/result?type=${resultType}`);
    }, 2800);

    return () => clearTimeout(timer);
  }, [answers, router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-emerald-50">
      
      {/* 수리미 & 토실이 애니메이션 */}
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

      {/* 중앙 정렬 문구 */}
      <p className="text-base text-slate-700 mb-2 text-center max-w-sm leading-relaxed">
        테스트 결과를 분석 중입니다.<br/>
        돌봄에너지를 극대화하고 싶다면<br/> 
        한 번 읽어봐. 아니, 두 번 읽어봐.<br/>
        도서관에도 신청하고, 친구들에게도 권하고…<br/>
        그러면 넌 건강해지고, 부자가 되고…
      </p>
    </main>
  );
}
