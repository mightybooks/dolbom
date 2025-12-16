"use client";

import { TestProvider } from "../test/TestContext";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TestProvider>{children}</TestProvider>;
}
