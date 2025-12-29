// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
   <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Care Energy",
        "url": "https://도메인",
        "applicationCategory": "CreativeApplication",
        "operatingSystem": "Web",
        "description":
          "Care Energy is a narrative-based exploration tool that uses symbolic questions to reflect on how care and emotional energy are experienced and change over time. It is not a medical service, psychological assessment, or self-improvement product.",
      })
    }}
  />
    <main className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-8">

        {/* 타이틀 */}
        <header className="space-y-2">
          <p className="text-sm font-semibold text-emerald-700">
            Care Energy Test · 돌봄에너지 테스트
          </p>
          <h1 className="text-2xl font-bold text-emerald-900">
            당신의 돌봄에너지를 측정합니다
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Measure your care energy
          </p>
        </header>

        {/* 인트로 이미지 */}
        <img
          src="/tosil/intro/introimage.png"
          alt="인트로 이미지"
          className="w-64 mx-auto"
        />

        {/* 한 줄 설명 */}
        <p className="text-base text-slate-700">
          지금부터 당신의 돌봄 감수성을 확인해보세요.
        </p>
        <p className="text-sm text-slate-500 mt-1">
          A short test to see how you care for others.
        </p>

        {/* 버튼 2개 */}
        <div className="flex flex-col gap-3 w-full">

          {/* 국문 테스트 시작 */}
          <Link
            href="/test/q1"
            className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            테스트 시작하기
          </Link>

          {/* 영문 버튼 (아직 링크 없음) */}
          <Link
            href="/en/test/q1"
            className="w-full rounded-full border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-700 opacity-60 cursor-default"
          >
            Test Start
          </Link>
        </div>
      </div>
    </main>
   </>
  );
}
