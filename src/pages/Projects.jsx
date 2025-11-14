import React, { useMemo, useState, useEffect, useCallback } from "react";
import openMarioLogo from "../assets/logos/OpenMario.jpeg";
import fencingLogo from "../assets/logos/TournaFence.jpeg";
import campusFindsLogo from "../assets/logos/CampusFinds.jpeg";
import yodelLogo from "../assets/logos/Yodel.jpeg";
import OpenMarioPresentation from "../assets/files/OpenMarioPresentation.pdf";
import OpenMarioReport from "../assets/files/OpenMarioReport.pdf";
import TournaFencePresentation from "../assets/files/TournaFencePresentation.pdf";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // ESC to close modal
  const onKey = useCallback((e) => {
    if (e.key === "Escape") setActive(null);
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  const projects = useMemo(
    () => [
      {
        id: "openmario",
        title: "OpenMario++",
        role: "Machine Learning Developer",
        period: "Apr 2025 – Jun 2025",
        logo: openMarioLogo,
        oneLiner:
          "OpenMario++ augments OpenMario.com with a reinforcement-learning layer that steers Drexel students through 4000+ courses, returning an adaptive “Top-5” list tuned to each user’s major, progress, and live browsing signals.",
        bullets: [
          "Framed course selection as a Markov Decision Process; engineered a 260-dimensional context vector (major, GPA, search query, hover, bookmark)",
          "Implemented and compared three RL algorithms – Linear Contextual Bandits, Tabular Q-Learning, and Deep Q-Networks",
          "Achieved a 19.6 % click-through-rate and 0.160 average reward in live A/B tests; DQN policy converged to ~47 reward / episode",
          "Indexed 6000+ courses in Meilisearch (<150 ms retrieval) and pipelined real-time feedback via PostHog for online learning",
          "Authored a technical report and delivered a live demo to faculty (project grade: 98 %)",
        ],
        tech: [
          "Python",
          "PyTorch",
          "DQN",
          "Contextual Bandits",
          "Meilisearch",
          "FastAPI",
        ],
        metrics: ["~20% ↑ accuracy", "<100ms search RT"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/OpenMario/Recommender",
            kind: "code",
          },
          {
            label: "Paper (PDF)",
            href: OpenMarioReport,
            kind: "file",
            download: true,
          },

          {
            label: "Presentation Slides (PDF)",
            href: OpenMarioPresentation,
            kind: "file",
            download: true,
          },
        ],
      },
      {
        id: "fencing",
        title: "TournaFence",
        role: "Full Stack Developer",
        period: "Sep 2024 – Jun 2025",
        logo: fencingLogo,
        award: "3rd Place • Drexel Senior Design 2025",
        oneLiner:
          "TournaFence is a mobile-first fencing tournament platform that replaces legacy software with real-time scoring, wireless referee synchronization, and sleek multi-user design.",
        bullets: [
          "Designed and developed a mobile-first tournament management system using React Native and Expo, replacing outdated $800 desktop software",
          "Implemented real-time scoring and live bracket updates via an embedded TCP server for multi-user referee synchronization",
          "Integrated SQLite database for local persistence and cross-platform compatibility",
          "Built a custom Arduino-based scoring box, connecting hardware touch sensors with the app for instant result updates",
          "Conducted beta testing with competitive fencers to refine UI/UX and multilingual accessibility (English + 3 others)",
          "Improved setup efficiency — tournaments can now be created and live in under 2 minutes",
        ],
        tech: ["React Native", "Node.js", "PostgreSQL", "REST", "WebSockets"],
        metrics: ["50% ↓ setup time", "70% ↓ cost"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/FencingSeniorDesign/client",
            kind: "code",
          },
          {
            label: "Presentation Slides (PDF)",
            href: TournaFencePresentation,
            kind: "file",
            download: true,
          },
        ],
      },
      {
        id: "campusfinds",
        title: "CampusFinds",
        role: "Full Stack Developer",
        period: "Sep 2024 – Dec 2024",
        logo: campusFindsLogo,
        oneLiner:
          "CampusFinds is a secure, college-exclusive marketplace inspired by Facebook Marketplace, designed for students to buy/sell secondhand items using verified university email logins.",
        bullets: [
          "Developed a secure, college-exclusive marketplace using Node.js, Express, React, and PostgreSQL.",
          "Implemented user authentication via verified university emails to ensure trusted listings.",
          "Built dynamic product listings with images, descriptions, and real-time 'sold' status updates.",
          "Integrated live chat between buyers and sellers with WebSocket-based messaging.",
          "Added search, filters, and safe meetup recommendations for better user experience.",
          "Designed relational PostgreSQL schema ensuring data integrity and secure transactions.",
        ],
        metrics: ["100+ simulated listings", "real-time chat", "secure auth"],
        tech: ["Node.js", "Express", "PostgreSQL", "Auth", "React"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/dg-off/CampusFinds",
            kind: "code",
          },
          {
            label: "Demo",
            href: "https://campus-finds.vercel.app/",
            kind: "demo",
          },
        ],
      },
      {
        id: "yodel",
        title: "YODEL",
        role: "Project Manager / Back-End Developer",
        period: "Jan 2022 – Jun 2022",
        logo: yodelLogo,
        oneLiner:
          "Multi-user karaoke web platform enabling users to record, upload, and share real-time performances with built-in chat, audio-video conversion, and community interaction",
        bullets: [
          "Developed a multi-user karaoke web app enabling real-time audio and video recording.",
          "Built media uploader for users to share performances with community playback and feedback.",
          "Implemented karaoke converter to process and sync uploaded audio tracks.",
          "Created real-time chat module for user engagement during live sessions.",
          "Integrated video gallery and editor for browsing and managing uploaded performances.",
          "Led a 5-member Agile team; delivered all sprint milestones within schedule.",
        ],
        metrics: [
          "Real-time recording",
          "5-member Agile team",
          "100% sprint completion",
        ],

        tech: ["Agile/Scrum", "Node", "Web App"],

        links: [
          {
            label: "GitHub",
            href: "https://github.com/parakhkavin/YodelKaraoke",
            kind: "code",
          },
          {
            label: "Demo",
            href: "https://www.cs.drexel.edu/~kkp56/Yodel%20Website/Front/SignIn.html",
            kind: "demo",
          },
        ],
      },
      {
        id: "placeholder-1",
        placeholder: true,
        title: "New project loading…",
      },
      {
        id: "placeholder-2",
        placeholder: true,
        title: "Next build in progress…",
      },
    ],
    []
  );

  return (
    <section style={wrap}>
      {/* GRID */}
      <div style={grid}>
        {projects.map((p) =>
          p.placeholder ? (
            <PlaceholderTile key={p.id} p={p} />
          ) : (
            <ProjectTile
              key={p.id}
              p={p}
              onOpen={() => setActive(p)}
              hovered={hoveredId === p.id}
              dimmed={hoveredId && hoveredId !== p.id}
              onHover={() => setHoveredId(p.id)}
              onLeave={() => setHoveredId(null)}
            />
          )
        )}
      </div>

      {/* MODAL */}
      {active && (
        <>
          <div style={backdrop} onClick={() => setActive(null)} />
          <div role="dialog" aria-modal="true" style={modal}>
            <button
              aria-label="Close"
              style={closeBtn}
              onClick={() => setActive(null)}
            >
              ✕
            </button>

            <div style={modalHeader}>
              <div style={modalHeaderRow}>
                {active.logo && (
                  <div style={logoWrapLg} aria-hidden>
                    <img src={active.logo} alt="" style={logoImgLg} />
                  </div>
                )}
                <div>
                  <div style={modalTitle}>{active.title}</div>
                  <div style={modalMeta}>
                    {active.award && (
                      <div style={awardInline}>🏆 {active.award}</div>
                    )}

                    <span>{active.role}</span>
                    <span style={dot}>•</span>
                    <span>{active.period}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={modalBody}>
              <div style={oneLiner}>{active.oneLiner}</div>

              <ul style={bulletList}>
                {active.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div style={chipGroup}>
                {active.tech.map((t) => (
                  <span key={t} style={chip}>
                    {t}
                  </span>
                ))}
              </div>

              {(active.metrics?.length || active.links?.length) && (
                <div style={metaRow}>
                  <div style={pillRow}>
                    {(active.metrics || []).map((m) => (
                      <span key={m} style={pill}>
                        {m}
                      </span>
                    ))}
                  </div>

                  <div style={linkRow}>
                    {(active.links || []).map((l) => (
                      <LinkButton key={`${l.label}-${l.href}`} {...l} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ---------- Tiles ---------- */

function ProjectTile({ p, onOpen, hovered, dimmed, onHover, onLeave }) {
  return (
    <article
      style={{
        ...tile,
        ...(hovered ? tileHover : {}),
        ...(dimmed ? tileDimmed : {}),
      }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {p.award && <div style={awardBadge}>🏆 {p.award}</div>}
      <div style={tileTopGlow} />
      <div style={tileHead}>
        <div style={logoRow}>
          {p.logo && (
            <div style={logoWrap} aria-hidden>
              <img src={p.logo} alt="" style={logoImg} loading="lazy" />
            </div>
          )}
          <div>
            <div style={tileTitle}>{p.title}</div>
            <div style={tileMeta}>
              <div>{p.role}</div>
              <div style={{ opacity: 0.85, fontSize: "0.85rem" }}>
                {p.period}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={tileBody}>
        <p style={tileOneLiner}>{p.oneLiner}</p>

        <div style={miniChipGroup}>
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} style={miniChip}>
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span style={miniChipMore}>+{p.tech.length - 4}</span>
          )}
        </div>
      </div>

      <div style={{ ...tileCTA, ...(hovered ? tileCTAHover : {}) }}>
        View details
      </div>
    </article>
  );
}
/* ---------- Placeholder Tile ---------- */
function PlaceholderTile({ p }) {
  return (
    <article style={placeholderTile} aria-label="New project coming soon">
      <div style={placeholderGlow} />
      <div style={placeholderBadge}>Coming soon</div>
      <div style={placeholderIcon}>⌛</div>
      <div style={placeholderTitle}>{p.title}</div>
      <p style={placeholderText}>
        I’m still building this one — docs, link, and demo will appear here.
      </p>
      <div style={placeholderBarWrap}>
        <div style={placeholderBar} />
      </div>
      <div style={placeholderChips}>
        <span style={placeholderChip}>loading…</span>
        <span style={placeholderChip}>TBD</span>
      </div>
    </article>
  );
}

/* ---------- Link Button ---------- */

function LinkButton({ label, href, kind = "link", download }) {
  const icon =
    kind === "code" ? "" : kind === "demo" ? "▶" : kind === "file" ? "⬇" : "↗";

  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      rel={download ? undefined : "noreferrer"}
      style={ghostBtn}
      aria-label={`${label}${download ? " (download)" : ""}`}
      download={download || undefined}
      onClick={(e) => e.stopPropagation()}
    >
      <span style={{ marginRight: 6 }}>{icon}</span>
      {label}
      {!download && <span>&nbsp;↗</span>}
    </a>
  );
}

/* ---------- Styles ---------- */
const awardBadge = {
  position: "absolute",
  top: 250,
  right: 28,
  background: "linear-gradient(140deg, rgba(255,196,66,1), rgba(255,140,46,1))",
  color: "#0f1016",
  padding: "4px 12px 5px",
  borderRadius: 999,
  fontSize: ".65rem",
  fontWeight: 700,
  boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
  border: "1px solid rgba(255,255,255,0.35)",
  letterSpacing: ".01em",
  zIndex: 2,
};

const awardInline = {
  marginTop: 6,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  background: "rgba(255,196,66,0.16)",
  border: "1px solid rgba(255,196,66,0.55)",
  color: "#ffe8b3",
  padding: "3px 10px 4px",
  borderRadius: 999,
  fontSize: ".7rem",
  fontWeight: 600,
};

const wrap = {
  borderTop: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(6px)",
  padding: "3.5rem 1.25rem",
  color: "#f5f7ff",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "14px",
};

//Tile
const tile = {
  position: "relative",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.15)",
  background:
    "linear-gradient(180deg, rgba(15,15,20,0.55), rgba(15,15,20,0.35))",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
  padding: "14px 14px 12px",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  cursor: "pointer",
  transition:
    "transform .18s ease, box-shadow .18s ease, border-color .18s ease, opacity .18s ease",
};

const tileHover = {
  transform: "translateY(-4px) scale(1.02)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.6)",
  borderColor: "rgba(138,233,255,0.8)",
};

const tileDimmed = {
  opacity: 0.55,
  transform: "scale(0.98)",
  boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
};

const tileTopGlow = {
  position: "absolute",
  inset: 0,
  borderRadius: 16,
  background:
    "radial-gradient(1200px 300px at 50% -80%, rgba(125,115,255,0.22), rgba(34,211,238,0.12) 40%, rgba(0,0,0,0) 70%)",
  pointerEvents: "none",
};

const tileHead = { display: "flex", flexDirection: "column", gap: 6 };

const logoRow = { display: "flex", alignItems: "center", gap: 10 };

const logoWrap = {
  width: 52,
  height: 52,
  borderRadius: 12,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.25)",
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  flex: "0 0 auto",
};

const logoImg = {
  width: "100%", // fill entire container
  height: "100%",
  objectFit: "contain", // keeps aspect ratio; no squish
  borderRadius: "inherit", // matches the wrap’s roundness
};

const tileTitle = { fontWeight: 700, color: "#fff", lineHeight: 1.3 };
const tileMeta = {
  color: "rgba(255,255,255,0.78)",
  fontSize: ".85rem",
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.4,
};

const dot = { margin: "0 .5rem", opacity: 0.6 };

const tileBody = { display: "flex", flexDirection: "column", gap: 10 };
const tileOneLiner = { color: "rgba(255,255,255,0.88)", margin: 0 };

const miniChipGroup = { display: "flex", flexWrap: "wrap", gap: 6 };
const miniChip = {
  fontSize: ".75rem",
  padding: "4px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#e8eeff",
};
const miniChipMore = {
  ...miniChip,
  background: "rgba(138,233,255,0.15)",
  border: "1px solid rgba(138,233,255,0.35)",
};

const tileCTA = {
  marginTop: "auto",
  alignSelf: "flex-start",
  fontSize: ".85rem",
  color: "#e8eeff",
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "6px 10px",
  borderRadius: 10,
  background: "transparent",
  transition: "all .18s ease",
};

const tileCTAHover = {
  background: "rgba(138,233,255,0.12)",
  borderColor: "rgba(138,233,255,0.6)",
};

/* Modal */
const backdrop = {
  position: "fixed",
  inset: 0,
  background: "rgba(10, 12, 20, 0.75)",
  backdropFilter: "blur(4px)",
  zIndex: 30,
};

const modal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(860px, calc(100% - 28px))",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "linear-gradient(180deg, rgba(20,20,28,0.9), rgba(20,20,28,0.9))",
  boxShadow: "0 30px 120px rgba(0,0,0,0.55)",
  zIndex: 40,
  color: "#eaf2ff",
  maxHeight: "80vh",
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "auto 1fr",
};

const closeBtn = {
  position: "absolute",
  top: 14,
  right: 14,
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  width: 30,
  height: 30,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "1rem",
  lineHeight: "1rem",
};

const modalHeader = {
  padding: "18px 18px 6px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const modalHeaderRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const logoWrapLg = {
  ...logoWrap,
  width: 64,
  height: 64,
  borderRadius: 12,
};

const logoImgLg = {
  ...logoImg,
  width: 56,
  height: 56,
};

const modalTitle = { fontWeight: 800, fontSize: "1.15rem", color: "#fff" };
const modalMeta = {
  marginTop: 4,
  color: "rgba(255,255,255,0.78)",
  fontSize: ".9rem",
  display: "flex",
  alignItems: "center",
};

const modalBody = {
  padding: "14px 18px 18px 18px",
  overflow: "auto",
  display: "grid",
  gap: 14,
};

const oneLiner = {
  color: "rgba(255,255,255,0.92)",
  fontSize: "1rem",
};

const bulletList = {
  margin: 0,
  paddingLeft: "1.1rem",
  lineHeight: 1.6,
};

const chipGroup = { display: "flex", gap: 8, flexWrap: "wrap" };
const chip = {
  fontSize: ".85rem",
  padding: "6px 10px",
  borderRadius: 999,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.06))",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#eaf2ff",
  boxShadow: "0 2px 12px rgba(0,0,0,0.25) inset",
};

const metaRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
  alignItems: "center",
};
const pillRow = { display: "flex", gap: 8, flexWrap: "wrap" };
const pill = {
  fontSize: ".78rem",
  padding: "4px 10px",
  borderRadius: 999,
  background: "rgba(138,233,255,0.13)",
  border: "1px solid rgba(138,233,255,0.35)",
  color: "#dff8ff",
};
const linkRow = { display: "flex", gap: 8, flexWrap: "wrap" };
const ghostBtn = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.22)",
  color: "#e8eeff",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "all .2s ease",
  background: "transparent",
  backdropFilter: "blur(2px)",
};
/* ---------- Placeholder Styles ---------- */
const placeholderTile = {
  ...tile,
  background: "linear-gradient(180deg, rgba(9,11,20,0.45), rgba(9,11,20,0.25))",
  border: "1px dashed rgba(255,255,255,0.18)",
  alignItems: "flex-start",
};

const placeholderGlow = {
  position: "absolute",
  inset: 0,
  borderRadius: 16,
  background:
    "radial-gradient(600px 180px at 10% 0%, rgba(130,253,255,0.12), rgba(0,0,0,0) 70%)",
  pointerEvents: "none",
};

const placeholderBadge = {
  background: "rgba(138,233,255,0.12)",
  border: "1px solid rgba(138,233,255,0.35)",
  borderRadius: 999,
  padding: "3px 10px 4px",
  fontSize: ".7rem",
  marginBottom: 10,
};

const placeholderIcon = {
  width: 40,
  height: 40,
  borderRadius: 14,
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "grid",
  placeItems: "center",
  fontSize: "1.3rem",
  marginBottom: 10,
};

const placeholderTitle = { fontWeight: 700, fontSize: "1rem" };

const placeholderText = {
  opacity: 0.7,
  fontSize: ".8rem",
  lineHeight: 1.5,
  marginTop: 6,
  marginBottom: 10,
};

const placeholderBarWrap = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  borderRadius: 999,
  overflow: "hidden",
  marginBottom: 10,
};

const placeholderBar = {
  width: "48%",
  height: 5,
  background: "linear-gradient(90deg, #7dfcff 0%, #a3b3ff 100%)",
  borderRadius: 999,
};

const placeholderChips = { display: "flex", gap: 6 };

const placeholderChip = {
  fontSize: ".65rem",
  padding: "3px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
};
