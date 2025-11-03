import myPhoto from "../assets/me.jpeg";

export default function Home() {
  return (
    <section
      style={{
        width: "100%",
        color: "#ffffffff",
        fontFamily: "'Playfair Display', Georgia, serif",
      }}
    >
      {/* ================= HERO (shows first, over the new neon gradient) ================ */}
      <div
        style={{
          minHeight: "82vh",          // fill most of the screen
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 1rem 4rem",
          boxSizing: "border-box",
          // light text so it pops on your dark neon bg
          color: "rgba(255,255,255,0.95)",
        }}
      >
        <h1
          style={{
            margin: 0,
            lineHeight: 1,
            fontWeight: 300,
            letterSpacing: "0.0em",
            fontSize: "clamp(3rem, 10vw, 8.5rem)",
            textTransform: "uppercase",
            textShadow: "0 6px 30px rgba(0,0,0,0.35)",
            fontFamily: "'Safira March', 'Playfair Display', serif",
            lineSpacing: "-0.02em",
          }}
        >
          Ruchika&nbsp;Mehta
        </h1>

        <p
          style={{
            marginTop: "1.25rem",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
            opacity: 0.95,
            textShadow: "0 3px 18px rgba(0,0,0,0.35)",
          }}
        >
          Software Engineer · AI &amp; Machine Learning · App Developer
        </p>

        {/* subtle scroll cue */}
        <a
  href="#about-section"
  style={{
    marginTop: "3rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.8)",
    borderRadius: "40px",
    textDecoration: "none",
    backdropFilter: "blur(8px)",
    background: "rgba(255,255,255,0.1)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.3)";
    e.currentTarget.style.color = "#000";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
    e.currentTarget.style.color = "#fff";
  }}
>
  Learn More
</a>

      </div>

      {/* ===== WIDTH LIMITER FOR THE REST OF THE PAGE (appears after scroll) ===== */}
      <div
        id="about-section"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "4.8rem 1.5rem 4rem 1.5rem",
          boxSizing: "border-box",
        }}
      >
        {/* ====== HEADING BLOCK (now below the hero) ====== */}
        <div style={{ textAlign: "center", paddingTop: 0, marginTop: 0 }}>
          <h2
            style={{
              fontSize: "4.5rem",
              fontWeight: 400,
              lineHeight: 1.05,
              margin: 0,
              padding: 0,
              color: "#ffffffff",
            }}
          >
            <span style={{ fontStyle: "italic", fontFamily: "'Safira March', 'Playfair Display', serif", fontWeight: 300 }}>Hello,</span>{" "}
            <span style={{ fontStyle: "normal", fontFamily: "'Safira March', 'Playfair Display', serif", fontWeight: 500 }}>
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
            fontFamily: "'Playfair Display', Georgia, serif",
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
            {/* LEFT COLUMN - PHOTO */}
            <div
              style={{
                flex: "0 0 320px",
                maxWidth: "320px",
                border: "2px solid #000",
                padding: "0.5rem",
                boxSizing: "border-box",
                alignSelf: "center",
                marginLeft: "-1rem",
                marginTop: "1rem",
                transform: "translateY(10px)",
                background: "#fff",
              }}
            >
              <img
                src={myPhoto}
                alt="Ruchika"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  border: "1px solid #ffffffff",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* RIGHT COLUMN - TEXT */}
            <div
              style={{
                flex: "1 1 600px",
                minWidth: "300px",
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
                  fontFamily: "'Safira March', 'Playfair Display', serif",
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
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Safira March', 'Playfair Display', serif",
                    color: "#ffffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="globe">
                    🌍
                  </span>
                  <span>Global Citizen</span>
                </div>
                <p style={{ margin: 0, fontSize: "1.2rem", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",}}>
                  Born in New Delhi, India, and raised across Asia, West Africa,
                  and the United States, I’ve been shaped by diverse
                  environments that taught me empathy, collaboration, and
                  resilience. My time at Ghana International School — guided by
                  its motto “Understanding of Each Other” — deepened my
                  appreciation for diversity and cultural exchange. Later,
                  studying in Philadelphia, USA, gave me opportunities to apply
                  those global values in academic and professional settings,
                  where innovation thrives through inclusion and perspective.
                  These experiences shaped me into a curious learner and global
                  thinker, comfortable leading and connecting across borders.
                </p>
              </div>

              {/* Excellent Communication */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Safira March', 'Playfair Display', serif",
                    color: "#fcfbfbff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="speech">
                    💬
                  </span>
                  <span>Excellent Communication</span>
                </div>
                <p style={{ margin: 0, fontSize: "1.2rem", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>
                  India taught me <em>Atithi Devo Bhava</em> — the guest is
                  divine — and Ghana taught me that true understanding begins
                  with listening. Living and studying in the U.S. strengthened
                  these foundations by exposing me to collaboration in
                  multicultural academic and professional teams. I communicate
                  clearly across cultures and disciplines, bridging technical
                  insight with human understanding — an essential skill in
                  technology-driven environments.
                </p>
              </div>

              {/* Adaptive and Innovative */}
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Safira March', 'Playfair Display', serif",
                    color: "#ffffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span role="img" aria-label="cycle">
                    🔄
                  </span>
                  <span>Adaptive and Innovative</span>
                </div>
                <p style={{ margin: 0, fontSize: "1.2rem", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>
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
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "1.15rem",
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
                fontSize: "2rem",
                marginBottom: "0.3rem",
                fontFamily: "'Safira March', 'Playfair Display', serif",
                fontStyle: "bold",
              }}
            >
              For me, technology is a language and communication is its grammar.
            </p>
            <p style={{ margin: 0, fontSize: "1.2rem", fontFamily: "'Playfair Display', Georgia, serif"  }}>
              My multicultural background gave me the patience to listen and my
              technical training gave me the precision to build. At Drexel
              University, where I’m pursuing a B.S. in Computer Science, I’ve
              explored how intelligence can be built not just into machines,
              but into systems that empower people. My focus on Artificial
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
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
              <span style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                ruchika.mehta25@gmail.com
              </span>
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
              <span style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>
                linkedin.com/in/ruchikamehta25
              </span>
            </a>
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              opacity: 0.75,
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            © 2025 Ruchika Mehta · Portfolio
          </p>
        </section>
      </div>
    </section>
  );
}
