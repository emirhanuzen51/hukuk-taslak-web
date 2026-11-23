import { ImageResponse } from "next/og";
import { initials } from "@/lib/lawyer";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#090d14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #c59b27",
          borderRadius: "14px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 28,
            fontWeight: "bold",
            letterSpacing: 2,
            fontFamily: "serif",
          }}
        >
          {initials}
        </span>
      </div>
    ),
    size
  );
}
