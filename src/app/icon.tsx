import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
