// app/test/TestContext.tsx

"use client";

import { createContext, useContext, useState } from "react";

export type Answers = {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
  q7?: string;
};

type TestContextType = {
  answers: Answers;
  setAnswer: (questionId: number, value: string) => void;
};

const TestContext = createContext<TestContextType | null>(null);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<Answers>({});

  const setAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`q${questionId}`]: value
    }));
  };

  return (
    <TestContext.Provider value={{ answers, setAnswer }}>
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const ctx = useContext(TestContext);
  if (!ctx) throw new Error("useTest must be used inside TestProvider");
  return ctx;
}
