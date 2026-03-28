import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Niurix shared social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1d1d1d 45%, #ff5b02 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#ff5b02",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "0.04em" }}>NIURIX</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "900px" }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.08 }}>
            High-Performance GPON Fiber Solutions
          </div>
          <div style={{ fontSize: 30, opacity: 0.92, lineHeight: 1.35 }}>
            Future-ready network infrastructure for products, software, and enterprise deployments.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            opacity: 0.95,
          }}
        >
          <div>niurix.com</div>
          <div style={{ fontWeight: 700 }}>Fiber. Scale. Reliability.</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
