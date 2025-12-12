"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "../TestContext";
import { QUESTIONS, pickRandomOptions } from "@/lib/analytics/scoring";

export default function Question7Page() {
  const router = useRouter();
  const { setAnswer } = useTest();

  const questionId = 7;
  const question = QUESTIONS.find((q) => q.id === `q${questionId}`);

  // 🔥 랜덤 옵션은 최초 렌더 1회만 생성해야 함
  const [options] = useState(() =>
    question ? pickRandomOptions(question.options) : []
  );

  const handleSelect = (optionId: string) => {
    setAnswer(questionId, optionId);

    // 🔍 디버그용 콘솔 로그
    console.log(`Q${questionId} answered:`, optionId);

    // 🔥 마지막 질문이므로 loading으로 이동
    router.push("/test/loading");
  };

  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-md space-y-8 text-center">
        
        <p className="text-xs font-semibold text-emerald-700">Q7</p>

        <h1 className="text-lg font-bold text-slate-900">
          {question?.title}
        </h1>

        <img
          src="/tosil/questions/q7.png"
          alt="q7 image"
          className="w-64 mx-auto animate-flash"
        />

        <div className="space-y-3 mt-6">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className="
                w-full rounded-xl bg-white border border-slate-200
                px-4 py-3 text-sm font-medium text-slate-800
                hover:bg-slate-50 active:bg-slate-100 shadow-sm
              "
            >
              {opt.label}
            </button>
          ))}
        </div>

      </div>
    </main>
  );
}
