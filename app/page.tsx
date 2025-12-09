// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
        <header className="space-y-3">
          <p className="text-sm font-semibold text-emerald-700">
            토실토실 프로젝트 · 돌봄에너지 테스트
          </p>
          <h1 className="text-3xl font-bold text-emerald-900">
            나는 어느 정도의 <span className="underline">돌봄 에너지</span>를 가지고 있을까?
          </h1>
          <p className="text-base leading-relaxed text-slate-700">
            7개의 질문에 답하면, 지금 나의 돌봄 감수성을
            토실토실 세계관에 맞춘 이야기와 함께 보여드립니다.
            토끼를 키우지 않아도, 반려동물이 없어도 참여하실 수 있어요.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            어떻게 진행되나요?
          </h2>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-700">
            <li>가볍게 7개의 질문에 답합니다.</li>
            <li>대표님의 선택을 바탕으로 돌봄에너지 이야기가 생성됩니다.</li>
            <li>SNS에서 공유하기 좋은 결과 화면이 제공됩니다.</li>
          </ol>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            지금은 테스트 버전입니다. 결과는 언제든 바뀔 수 있어요.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            돌봄에너지 테스트 시작하기
          </Link>
        </div>
      </div>
    </main>
  );
}
