"use client";

import { useState } from "react";

type Props = {
  resultType: string;
  locale: "ko" | "en";
};

const TEXT = {
  ko: {
    intro: `돌봄에너지는 우리 모두에게 잠재되어 있습니다.
돌봄을 필요로 하는 생명들을 위해 응원의 메시지를 남겨주세요.`,
    placeholder: "응원 메시지 (선택)",
    submit: "응원 메시지 보내기",
    sending: "전송 중...",
    success: "메시지가 수림 스튜디오에 전달되었습니다.",
    error400: "입력값을 다시 확인해 주세요.",
    error500: "서버 오류가 발생했습니다.",
    errorNetwork: "네트워크 오류가 발생했습니다.",
  },
  en: {
    intro: `Care energy exists within all of us.
Leave a message of support for lives that need care.`,
    placeholder: "Support message (optional)",
    submit: "Send support message",
    sending: "Sending...",
    success: "Your message has been delivered to Sulim Studio.",
    error400: "Please check your input.",
    error500: "A server error occurred.",
    errorNetwork: "A network error occurred.",
  },
};

export default function ResultArchiveCTA({
  resultType,
  locale,
}: Props) {
  const t = TEXT[locale];

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    if (loading || success) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/archive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "care-app",
          locale,
          result_type: resultType,
          image_key: resultType,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        if (res.status === 400) {
          setError(t.error400);
        } else {
          setError(data.message ?? t.error500);
        }
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch {
      setError(t.errorNetwork);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="mt-8 rounded-xl bg-emerald-50 p-4 text-center text-emerald-800 text-sm">
        {t.success}
      </div>
    );
  }

  return (
    <div className="mt-8 border rounded-xl p-4 bg-slate-50">
      <p className="text-sm text-slate-700 mb-3 text-center whitespace-pre-line">
        {t.intro}
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.placeholder}
        className="w-full rounded-md border p-2 text-sm mb-3"
        rows={3}
        disabled={loading}
      />

      {error && (
        <p className="text-xs text-red-600 mb-2 text-center">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-full bg-emerald-600 text-white py-2 text-sm disabled:opacity-50"
      >
        {loading ? t.sending : t.submit}
      </button>
    </div>
  );
}
