"use client";

export const dynamic = "force-dynamic";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/en/test/result");
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
        Analyzing your results...<br />
        This test is actually part of a project that began with a single book.<br />
        If you want to boost your care energy,<br />
        read it once. No—read it twice.<br />
        Request it at your library, recommend it to friends…<br />
        Then you might become healthier. And maybe richer.
      </p>
    </main>
  );
}
