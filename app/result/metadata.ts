// app/result/metadata.ts

import RESULT_MAP from "./resultMap";

export async function generateMetadata({ searchParams }: any) {
  const type = searchParams?.type || "plant";
  const data = RESULT_MAP[type] || RESULT_MAP["plant"];

  const fullUrl = `https://YOUR_DOMAIN${data.og}`;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [{ url: fullUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [fullUrl],
    },
  };
}
