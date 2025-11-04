import myPhoto from "../assets/me.jpeg";

export default function Home() {
  return (
    <section
      style={{
        width: "100%",
        color: "#ffffffff",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      {/* ================= HERO (shows first, over the new neon gradient) ================ */}
      <div
        style={{
          minHeight: "82vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 1rem 4rem",
          boxSizing: "border-box",
          color: "rgba(255,255,255,0.95)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* animation for gradient text */}
        <style>{`
    @keyframes nameSweep {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>

        {/* big soft glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
            bottom: "-30%",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        {/* glow behind name */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "420px",
            height: "220px",
            top: "35%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 65%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />

        {/* name */}
        <h1
          style={{
            margin: 0,
            lineHeight: 1.03,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            fontSize: "clamp(3.3rem, 9vw, 6.7rem)",
            textTransform: "uppercase",
            background:
              "linear-gradient(120deg, #ffffff 0%, #cbb8ff 35%, #6de4ff 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "180% 180%",
            animation: "nameSweep 12s ease-in-out infinite",
            zIndex: 1,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
          }}
        >
          Ruchika Mehta
        </h1>

        {/* thin accent line */}
        <div
          style={{
            width: "58px",
            height: "2px",
            background: "rgba(255,255,255,0.65)",
            marginTop: "1.1rem",
            borderRadius: 999,
            zIndex: 1,
          }}
        />

        {/* subtitle */}
        <p
          style={{
            marginTop: "1.1rem",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
            fontSize: "1rem",
            opacity: 0.9,
            zIndex: 1,
          }}
        >
          Software Engineer · AI &amp; Machine Learning · App Developer
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2.3rem",
            zIndex: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#about-section"
            style={{
              padding: "0.85rem 1.9rem",
              background: "rgba(255,255,255,0.9)",
              color: "#10111a",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 18px 35px rgba(0,0,0,0.12)",
            }}
          >
            View my story
          </a>
          <a
            href="/projects" // if you have an id for projects
            style={{
              padding: "0.85rem 1.9rem",
              background: "rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: 999,
              color: "#fff",
              textDecoration: "none",
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
              backdropFilter: "blur(6px)",
            }}
          >
            See projects ↗
          </a>
        </div>
      </div>

      {/* ===== WIDTH LIMITER FOR THE REST OF THE PAGE (appears after scroll) ===== */}
      <div
        id="about-section"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "4.7rem 1.5rem 4rem 1.5rem",
          boxSizing: "border-box",
        }}
      >
        {/* ====== HEADING BLOCK (now below the hero) ====== */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2
            style={{
              fontSize: "4.7rem",
              fontWeight: 400,
              lineHeight: 1.05,
              margin: 0,
              padding: 0,
              color: "#ffffffff",
              fontFamily: "'Safira March', 'Playfair Display', serif",
            }}
          >
            <span
              style={{
                fontStyle: "italic",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                fontWeight: 300,
              }}
            >
              Hello,
            </span>{" "}
            <span
              style={{
                fontStyle: "normal",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                fontWeight: 350,
              }}
            >
              I am Ruchika
            </span>
          </h2>
        </div>

        {/* full-width bottom line under heading */}
        <div
          style={{
            borderTop: "1px solid #ffffffff",
            width: "100vw",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "0.5rem",
          }}
        />

        {/* ====== ABOUT ME / VALUES SECTION ====== */}
        <section
          style={{
            marginTop: "2rem",
            width: "100%",
            color: "#ffffffff",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2rem",
            }}
          >
            {/* LEFT COLUMN - PHOTO (glass frame) */}
            <div
              style={{
                flex: "0 0 320px",
                maxWidth: "320px",
                alignSelf: "center",
                marginLeft: "-1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
                  border: "1px solid rgba(255,255,255,0.35)",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at top, rgba(255,140,180,0.35), rgba(0,0,0,0) 65%)",
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={myPhoto}
                  alt="Ruchika"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN - TEXT */}
            <div
              style={{
                flex: "1 1 700px",
                minWidth: "300px",
                maxWidth: "850px",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#ffffffff",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  margin: "0 0 1rem 0",
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                  color: "#ffffffff",
                }}
              >
                Shaped by Diversity, Driven by Connection
              </h3>

              {/* Global Citizen */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                    color: "#ffffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="globe">
                    🌍
                  </span>
                  <span>Global Citizen</span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                  }}
                >
                  Born in New Delhi, India, and raised across Asia, West Africa,
                  and the United States, I’ve been shaped by diverse
                  environments that taught me empathy, collaboration, and
                  resilience. My time at Ghana International School guided by
                  its motto “Understanding of Each Other” deepened my
                  appreciation for diversity and cultural exchange. Later,
                  studying in Philadelphia, USA, gave me opportunities to apply
                  those global values in academic and professional settings,
                  where innovation thrives through inclusion and perspective.
                  These experiences together shaped me into a curious learner
                  and global thinker, comfortable leading and connecting across
                  borders.
                </p>
              </div>

              {/* Excellent Communication */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                    color: "#fcfbfbff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="speech">
                    💬
                  </span>
                  <span>Excellent Communication</span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                  }}
                >
                  India taught me Atithi Devo Bhava — the guest is divine, and
                  Ghana taught me that true understanding begins with listening.
                  Living and studying in the U.S. strengthened these foundations
                  by exposing me to collaboration in multicultural academic and
                  professional teams. I communicate clearly across cultures and
                  disciplines, bridging technical insight with human
                  understanding which is an essential skill in technology-driven
                  environments.
                </p>
              </div>

              {/* Adaptive and Innovative */}
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                    color: "#ffffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="cycle">
                    🔄
                  </span>
                  <span>Adaptive and Innovative</span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                  }}
                >
                  Transitioning between continents and cultures has taught me to
                  embrace change as a constant. Moving to the U.S. to pursue my
                  B.S. in Computer Science challenged me to blend creativity
                  with structure, turning curiosity into innovation. Whether
                  learning a new framework or collaborating across time zones, I
                  thrive in dynamic settings that demand agility, empathy, and
                  continuous growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FULL-WIDTH REFLECTIVE SECTION ====== */}
        <section
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            borderTop: "1px solid #ffffffff",
            borderBottom: "1px solid #ffffffff",
            marginTop: "2rem",
            padding: "1rem 1rem",
            textAlign: "center",
            boxSizing: "border-box",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#ffffffff",
            background: "transparent",
          }}
        >
          <div style={{ maxWidth: "950px", margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "1.8rem",
                marginBottom: "0.3rem",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                fontStyle: "italic",
              }}
            >
              For me, technology is a language and communication is its grammar.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
              }}
            >
              My multicultural background gave me the patience to listen and my
              technical training gave me the precision to build. At Drexel
              University, where I’m pursuing a B.S. in Computer Science, I’ve
              explored how intelligence can be built not just into machines, but
              into systems that empower people. My focus on Artificial
              Intelligence, Machine Learning, and Software Engineering has been
              less about algorithms alone, and more about designing clarity,
              empathy, and purpose into technology.
            </p>
          </div>
        </section>

        {/* ====== CONTACT / FOOTER SECTION ====== */}
        <section
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "0.5rem",
            padding: "1rem 0 1rem 0",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
            fontSize: "1rem",
            color: "#ffffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {/* EMAIL */}
            <a
              href="mailto:ruchika.mehta25@gmail.com"
              style={{
                color: "#ffffffff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>ruchika.mehta25@gmail.com</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/ruchikamehta25"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffffff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.96 0-1.73-.78-1.73-1.73s.77-1.73 1.73-1.73c.95 0 1.73.78 1.73 1.73s-.78 1.73-1.73 1.73zm13.5 10.3h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.57 0-1.81 1.23-1.81 2.48v4.78h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z" />
              </svg>
              <span>linkedin.com/in/ruchikamehta25</span>
            </a>
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              opacity: 0.75,
            }}
          >
            © 2025 Ruchika Mehta · Portfolio
          </p>
        </section>
      </div>
    </section>
  );
}
