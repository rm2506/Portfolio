// src/pages/Resume.jsx
import resumePdf from "../assets/files/RuchikaMehta_Resume.pdf";

export default function Resume() {
  return (
    <section
      style={{
        minHeight: "78vh",
        padding: "4rem 1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#fff",
      }}
    >
      <div
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.04), rgba(0,0,0,0))",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          maxWidth: 720,
          width: "100%",
          padding: "2rem 2rem 1.6rem",
          backdropFilter: "blur(6px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* top action buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href={resumePdf}
            download
            style={{
              background: "linear-gradient(140deg,#fff,#dfe6ff)",
              color: "#0b1020",
              borderRadius: 999,
              padding: "0.65rem 1.4rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: ".4rem",
            }}
          >
            Download PDF
            <span style={{ fontSize: "1.05rem" }}>⬇</span>
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 999,
              padding: "0.6rem 1.2rem",
              textDecoration: "none",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              gap: ".35rem",
              background: "rgba(6,7,10,0.24)",
            }}
          >
            View in browser ↗
          </a>
        </div>

        {/* inline preview */}
        <div
          style={{
            marginTop: "1.5rem",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 14,
            overflow: "hidden",
            height: "65vh",
            background: "rgba(5,5,8,0.4)",
          }}
        >
          <iframe
            src={resumePdf}
            title="Ruchika Resume"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>

        {/* footer-style contact (clean, centered) */}
        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.3rem",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          {/* email */}
          <a
            href="mailto:ruchika.mehta25@gmail.com"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: ".9rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>ruchika.mehta25@gmail.com</span>
          </a>

          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/ruchikamehta25"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: ".9rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.96 0-1.73-.78-1.73-1.73s.77-1.73 1.73-1.73c.95 0 1.73.78 1.73 1.73s-.78 1.73-1.73 1.73zm13.5 10.3h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.57 0-1.81 1.23-1.81 2.48v4.78h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z" />
            </svg>
            <span>linkedin.com/in/ruchikamehta25</span>
          </a>
        </div>
      </div>
    </section>
  );
}
