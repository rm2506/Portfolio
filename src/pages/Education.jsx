import React from "react";
import ibmLogo from "../assets/logos/ibm.jpeg";
import palantirLogo from "../assets/logos/palantir.jpeg";
import ucdLogo from "../assets/logos/ucdavis.jpeg";

const BRAND_LOGOS = {
  IBM: ibmLogo,
  Palantir: palantirLogo,
  "UC Davis": ucdLogo,
  "University of California, Davis": ucdLogo,
};

export default function Education() {
  return (
    <section style={wrap}>
      {/* === Education Section === */}
      <div style={{ ...glassCard, position: "relative" }}>
        <div style={rowBetween}>
          <div>
            <div style={school}>Drexel University</div>
            <div style={degree}>
              B.S. in Computer Science
              <span style={muted}> · Concentrations:</span> Software
              Engineering, Artificial Intelligence & Machine Learning
            </div>
          </div>

          <div style={metaCol}>
            <div style={badgeRow}>
              <Badge>Philadelphia, PA</Badge>
              <Badge>Graduated · Sept 2025</Badge>
            </div>
          </div>
        </div>

        <div style={progressWrap}>
          <div style={progressTrack}>
            <div style={{ ...progressFill, width: "100%" }} />
          </div>
          <div style={progressMeta}>
            <span style={muted}>Status</span>
            <span style={completedText}>Completed</span>
          </div>
        </div>
      </div>

      {/* === Technical Profile Section === */}
      <div style={glassCard}>
        <SectionHeader
          title="Technical Profile"
          subtitle="Core skills across software, data, and AI"
        />

        <ChipRow label="Programming">
          {[
            "Python",
            "C#",
            "C++",
            "Java",
            "JavaScript",
            "Racket",
            "SQL",
            "React",
            "Bash",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </ChipRow>

        <ChipRow label="Frameworks & Databases">
          {[
            "Django",
            "React Native",
            "PL/SQL",
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "IntelliJ",
            "GitHub",
            "DrRacket",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </ChipRow>

        <ChipRow label="Cloud, Analytics & AI">
          {[
            "AWS",
            "Azure",
            "Palantir Foundry",
            "Power BI",
            "Tableau",
            "Cognos",
            "Microsoft Copilot",
            "Amazon CodeWhisperer",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </ChipRow>

        <ChipRow label="Practices">
          {["Agile/Scrum", "CI/CD", "REST APIs", "Unit Testing", "TDD"].map(
            (t) => (
              <Chip key={t}>{t}</Chip>
            )
          )}
        </ChipRow>
      </div>

      {/* === Certifications Section === */}
      <div style={glassCard}>
        <SectionHeader
          title="Certifications"
          subtitle="Verified learning and professional credentials"
        />

        <div style={certGrid}>
          <CertCard
            brand="IBM"
            color="linear-gradient(135deg,#5e60ff,#00eaff)"
            title="IBM Z Day 2024 – AI & Data Certificate"
            issuer="IBM"
            issued="Issued Oct 2024"
            href="https://www.virtualbadge.io/certificate-validator?credential=7ab7e94e-b19f-4193-8e44-f03b740be319"
            skills={["AI", "Data"]}
          />

          <CertCard
            brand="Palantir"
            color="linear-gradient(135deg,#111827,#374151)"
            title="Foundry Foundations"
            issuer="Palantir Technologies"
            issued="Issued Oct 2023"
            href="https://verify.skilljar.com/c/sqnrimdvvqn7"
            skills={["Foundry", "Data Pipelines"]}
          />

          <CertCard
            brand="UC Davis"
            color="linear-gradient(135deg,#ffd400,#003da5)"
            title="Data Wrangling, Analysis & A/B Testing with SQL"
            issuer="University of California, Davis"
            issued="Issued Aug 2022"
            href="https://www.coursera.org/account/accomplishments/certificate/9U8E2XDYJP8N"
            skills={["SQL", "A/B Testing"]}
          />

          <CertCard
            brand="UC Davis"
            color="linear-gradient(135deg,#ffd400,#003da5)"
            title="Distributed Computing with Spark SQL"
            issuer="University of California, Davis"
            issued="Issued Aug 2022"
            href="https://www.coursera.org/account/accomplishments/certificate/P9CVCCZX4TBT"
            skills={["Spark", "Databricks", "Delta Lake"]}
          />

          <CertCard
            brand="UC Davis"
            color="linear-gradient(135deg,#ffd400,#003da5)"
            title="SQL for Data Science"
            issuer="University of California, Davis"
            issued="Issued Aug 2022"
            href="https://www.coursera.org/account/accomplishments/certificate/2VR924ZCPDG8"
            skills={["SQL", "SQLite", "Data Science"]}
          />
        </div>
      </div>
    </section>
  );
}

/* === Small Components === */
function SectionHeader({ title, subtitle }) {
  return (
    <div style={sectionHeader}>
      <div style={sectionTitle}>{title}</div>
      <div style={sectionSub}>{subtitle}</div>
    </div>
  );
}

function Badge({ children }) {
  return <span style={badge}>{children}</span>;
}

function Ribbon({ children }) {
  return <div style={ribbon}>{children}</div>;
}

function Chip({ children }) {
  return <span style={chip}>{children}</span>;
}

function ChipRow({ label, children }) {
  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div style={rowLabel}>{label}</div>
      <div style={chipWrap}>{children}</div>
    </div>
  );
}

function CertCard({
  brand,
  color,
  title,
  issuer,
  issued,
  href,
  skills = [],
  logo, // optional explicit logo override
}) {
  const logoSrc = logo || BRAND_LOGOS[brand] || BRAND_LOGOS[issuer];

  return (
    <article style={certCard}>
      <div style={certHead}>
        <div style={{ ...logoDot, background: "none" }}>
          {logoSrc ? (
            <img src={logoSrc} alt={`${brand} logo`} style={logoImg} />
          ) : (
            <span style={{ fontWeight: 800 }}>{brand?.[0] ?? "•"}</span>
          )}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={certTitle}>{title}</div>
          <div style={certIssuer}>
            {issuer} · <span style={muted}>{issued}</span>
          </div>
        </div>
      </div>

      <div style={skillPillRow}>
        {skills.map((s) => (
          <span key={s} style={pill}>
            {s}
          </span>
        ))}
      </div>

      <a style={ghostBtn} href={href} target="_blank" rel="noreferrer">
        Show credential ↗
      </a>
    </article>
  );
}

/* === Styles === */

const logoImg = {
  width: 26,
  height: 26,
  objectFit: "contain",
  filter: "drop-shadow(0 0 6px rgba(0,0,0,0.35))",
};

const wrap = {
  borderTop: "1px solid rgba(255,255,255,0.15)",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
  padding: "3.5rem 1.25rem",
  color: "#f5f7ff",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
};

const glassCard = {
  width: "100%",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.15)",
  background:
    "linear-gradient(180deg, rgba(15,15,20,0.55), rgba(15,15,20,0.35))",
  boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
  padding: "1.25rem",
  marginBottom: "1.25rem",
};

const school = { fontWeight: 700, fontSize: "1.15rem", color: "#fff" };
const degree = {
  marginTop: 6,
  color: "rgba(255,255,255,0.8)",
  fontSize: "0.95rem",
  lineHeight: 1.5,
};

const rowBetween = {
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  flexWrap: "wrap",
};

const metaCol = { display: "flex", alignItems: "flex-start" };
const badgeRow = { display: "flex", gap: 8, flexWrap: "wrap" };

const badge = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#e8eeff",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: "0.75rem",
  whiteSpace: "nowrap",
};

const progressWrap = { marginTop: 14 };
const progressTrack = {
  height: 8,
  background: "rgba(255,255,255,0.12)",
  borderRadius: 999,
  overflow: "hidden",
};
const progressFill = {
  height: "100%",
  background: "linear-gradient(90deg,#9b8cff,#6ee7ff,#60a5fa,#a78bfa,#22d3ee)",
  boxShadow: "0 0 18px rgba(130,200,255,0.6)",
};
const progressMeta = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 6,
  fontSize: "0.8rem",
};

const muted = { color: "rgba(255,255,255,0.7)" };
const completedText = { color: "#eafff5", fontWeight: 700 };

const sectionHeader = {
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  paddingBottom: 10,
  marginBottom: 10,
};
const sectionTitle = { fontWeight: 700, color: "#fff" };
const sectionSub = { fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" };

const rowLabel = {
  fontSize: "0.78rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.7)",
  margin: "10px 0 6px",
};

const chipWrap = { display: "flex", flexWrap: "wrap", gap: 8 };
const chip = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 999,
  padding: "6px 10px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.06))",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#eaf2ff",
  fontSize: "0.85rem",
  boxShadow: "0 2px 12px rgba(0,0,0,0.25) inset",
};

const certGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "12px",
  marginTop: 8,
};
const certCard = {
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.15)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))",
  padding: 14,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};
const certHead = { display: "flex", gap: 12, alignItems: "center" };
const logoDot = {
  width: 40,
  height: 40,
  borderRadius: 12,
  display: "grid",
  placeItems: "center",
  color: "#fff",
  fontWeight: 800,
  letterSpacing: "0.02em",
  boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
};
const certTitle = { color: "#fff", fontWeight: 600, lineHeight: 1.3 };
const certIssuer = { fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" };

const skillPillRow = { display: "flex", gap: 8, flexWrap: "wrap" };
const pill = {
  fontSize: "0.75rem",
  padding: "4px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#e8eeff",
};

const ghostBtn = {
  marginTop: "2px",
  alignSelf: "flex-start",
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
