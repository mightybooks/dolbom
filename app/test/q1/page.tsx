// app/test/q1/page.tsx

"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "../TestContext";
import { QUESTIONS } from "@/data/ko/questions";
import { pickRandomOptions } from "@/lib/questions/pickRandomOptions";

export default function Question1Page() {
  const router = useRouter();
  const { setAnswer } = useTest();

  const questionId = 1;
  const question = QUESTIONS.find((q) => q.id === `q${questionId}`);

  // 🔥 pickRandomOptions는 useState로 고정해야 함
  const [options] = useState(() =>
    question ? pickRandomOptions(question.options) : []
  );

  const handleSelect = (optionId: string) => {
    setAnswer(questionId, optionId);
   
  // 🔍 디버그용 콘솔 로그
  console.log(`Q${questionId} answered:`, optionId);

    router.push("/test/q2");
  };

  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-md space-y-8 text-center">
        <p className="text-xs font-semibold text-emerald-700">Q1</p>

        <h1 className="text-lg font-bold text-slate-900">
          {question?.title}
        </h1>

        <img
          src="/tosil/questions/q1.png"
          alt="q1 image"
          className="w-64 mx-auto animate-updown"
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
