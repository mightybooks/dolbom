/** @jsxImportSource react */
"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
