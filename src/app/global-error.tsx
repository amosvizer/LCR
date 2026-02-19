"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#0B1C2E",
            color: "#E1E6EB",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: "16px", maxWidth: "400px", lineHeight: 1.6 }}>
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              borderRadius: "9999px",
              backgroundColor: "#00E8FF",
              color: "#0B1C2E",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
