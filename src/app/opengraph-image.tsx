import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dr. Fabián Lapo — Abogado en Santo Domingo, Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#2C1810",
          color: "#F5F0E8",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C4954A",
            marginBottom: 24,
          }}
        >
          Estudio Jurídico · Ecuador
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Dr. Fabián Lapo
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            color: "rgba(245,240,232,.75)",
            maxWidth: 900,
          }}
        >
          Asesoría Jurídica Integral en Santo Domingo, Ecuador
        </div>
      </div>
    ),
    { ...size }
  );
}
