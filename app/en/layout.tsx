// app/en/layout.tsx
"use client";

import { TestProvider } from "./test/TestContext";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TestProvider>{children}</TestProvider>;
}
