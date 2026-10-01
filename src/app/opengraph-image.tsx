import { ImageResponse } from "next/og";

export const alt = "Basel Yosry, backend engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090909",
          color: "#F2F2F0",
          fontSize: 96,
          fontWeight: 600,
          letterSpacing: "-0.03em",
        }}
      >
        Basel Yosry
      </div>
    ),
    { ...size },
  );
}
