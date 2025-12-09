import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: { id: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 48,
          fontWeight: 800,
          color: "#0f766e",
        }}
      >
        TO-SIL TEST
      </div>
    ),
    size
  );
}
