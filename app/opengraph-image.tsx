import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #050816 0%, #0a0f1f 50%, #0d1321 100%)",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.03) 0%, transparent 70%)
            `,
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #22d3ee, #8b5cf6, #22d3ee)",
          }}
        />

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 80px" }}>
          {/* Title/Name */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                background: "rgba(34, 211, 238, 0.1)",
                border: "1px solid rgba(34, 211, 238, 0.2)",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#22d3ee",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <span style={{ width: "6px", height: "6px", background: "#22d3ee", borderRadius: "50%" }} />
              AI/ML Engineer & Data Scientist
            </div>
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gomti Kumari
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.5,
              maxWidth: "700px",
              margin: "0 auto 32px",
            }}
          >
            Building intelligent systems, predictive analytics & AI-driven applications
          </p>

          {/* Divider */}
          <div
            style={{
              width: "120px",
              height: "3px",
              margin: "0 auto 32px",
              background: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
              borderRadius: "2px",
            }}
          />

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            {["Machine Learning", "Python", "PyTorch", "Data Science", "LLMs", "MLOps"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 18px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(34, 211, 238, 0.15)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Website URL */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              background: "rgba(34, 211, 238, 0.08)",
              border: "1px solid rgba(34, 211, 238, 0.2)",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 500,
              color: "#22d3ee",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            gomti-portfolio.vercel.app
          </div>
        </div>

        {/* Bottom accent elements */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <span>✦</span>
          Portfolio
          <span>✦</span>
          Projects
          <span>✦</span>
          Research
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <span>GitHub:</span>
          <span style={{ color: "#22d3ee" }}>@Yehmeg</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}