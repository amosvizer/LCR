import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function generateOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1C2E",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Logo area */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#00E8FF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
                color: "#0B1C2E",
              }}
            >
              LCR
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#E1E6EB",
                letterSpacing: "0.5px",
              }}
            >
              LCR Aero Group
            </span>
          </div>
        </div>

        {/* Middle: Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: title.length > 40 ? "48px" : "56px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: "22px",
                color: "#E1E6EB",
                opacity: 0.7,
                margin: 0,
                maxWidth: "800px",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom: Accent line + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "4px",
              backgroundColor: "#00E8FF",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#00E8FF",
              letterSpacing: "1px",
            }}
          >
            lcr.aero
          </span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
