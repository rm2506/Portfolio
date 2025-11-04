import React from "react";
import aramarkLogo from "../assets/logos/aramark.png";
import holmanLogo from "../assets/logos/holman.png";

export default function Experience() {
  const roles = [
    {
      id: "aramark",
      logo: aramarkLogo,
      role: "Technical Data Analyst Co-op",
      company: "Aramark Corp",
      location: "Philadelphia, PA",
      dates: "Sept 2023 – Mar 2024",
      summary:
        "Supported AI/tooling evaluations and data harmonization to improve developer and finance workflows.",
      bullets: [
        "Evaluated over 10 AI-assisted development tools, including Amazon CodeWhisperer and GitHub Copilot, benchmarking accuracy, latency, and usability to identify the most efficient integration options for internal developers.",
        "Collaborated with the Palantir Foundry Data Harmonization team to pilot new pipeline-builder capabilities, map data schemas, and provide structured feedback improving system reliability and user adoption.",
        "Processed and analyzed 64,000+ vendor records to uncover spend inconsistencies across financial and supply-chain systems, contributing to a more transparent vendor performance dataset.",
        "Developed a data-driven vendor exposure plan highlighting 50+ certified local and minority-owned suppliers, directly supporting Aramark’s DEI and sustainability sourcing objectives.",
      ],

      tags: ["Palantir Foundry", "AI Tools", "Data Analysis", "Vendor Spend"],
    },
    {
      id: "holman",
      logo: holmanLogo,
      role: "Information Management Developer Co-op",
      company: "Holman",
      location: "Mt. Laurel, NJ",
      dates: "Sept 2022 – Mar 2023",
      summary:
        "Built data integration queries and automation to make fleet operations reports more reliable.",
      bullets: [
        "Developed and maintained 100+ SQL/ETL queries across five enterprise databases to unify fleet-management data, ensuring consistent reporting across customer and operational systems.",
        "Automated 20+ FleetTrak workflow cases through process scripting and query optimization, cutting case resolution times by approximately 35% and improving operations visibility.",
        "Mapped ~50 inbound client data formats into standardized internal schemas, reducing ingestion and validation errors by nearly 40% and strengthening data integrity across platforms.",
        "Generated 36 detailed performance reports tracking case lifecycle metrics (lodged, in-progress, completed), providing visibility into resolution speed and operational efficiency.",
      ],

      tags: ["SQL / ETL", "FleetTrak", "Reporting", "Data Mapping"],
    },
  ];

  return (
    <section style={wrap}>
      <header style={headerBar}></header>

      <div style={timeline}>
        {roles.map((job, i) => (
          <article key={job.id} style={item}>
            {/* left timeline rail */}
            <div style={rail}>
              <div style={railDot} />
              {i !== roles.length - 1 && <div style={railLine} />}
            </div>

            {/* main card */}
            <div style={card}>
              <div style={cardTop}>
                <div style={leftHeader}>
                  {job.logo && (
                    <div style={logoWrap}>
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={logoImg}
                      />
                    </div>
                  )}
                  <div>
                    <h2 style={roleTitle}>{job.role}</h2>
                    <div style={companyLine}>
                      <span style={company}>{job.company}</span>
                      <span style={dot}>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <div style={dateBadge}>{job.dates}</div>
              </div>

              {job.summary && <p style={summary}>{job.summary}</p>}

              <ul style={bulletList}>
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              {job.tags?.length ? (
                <div style={tagRow}>
                  {job.tags.map((t) => (
                    <span key={t} style={tag}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- styles ---------- */

const wrap = {
  borderTop: "1px solid rgba(255,255,255,0.12)",
  padding: "3.5rem 1.25rem 3.75rem",
  backdropFilter: "blur(6px)",
  color: "#f5f7ff",
  minHeight: "100vh",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
};

const headerBar = {
  maxWidth: 980,
  margin: "0 auto 2.25rem",
};

const title = {
  fontSize: "2.35rem",
  fontWeight: 800,
  letterSpacing: "0.02em",
  margin: 0,
  background: "linear-gradient(90deg, #ffffff 20%, #b5c7ff 60%, #8ae9ff 100%)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const subtitle = {
  marginTop: ".55rem",
  color: "rgba(236,243,255,0.72)",
  maxWidth: 520,
  lineHeight: 1.5,
};

const timeline = {
  maxWidth: 980,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  position: "relative",
};

const item = {
  display: "flex",
  gap: 18,
  position: "relative",
};

const rail = {
  width: 28,
  display: "flex",
  justifyContent: "center",
  position: "relative",
};

const railDot = {
  width: 14,
  height: 14,
  borderRadius: "999px",
  border: "2px solid rgba(138,233,255,1)",
  background: "rgba(4,11,15,1)",
  zIndex: 2,
  marginTop: 16,
  boxShadow: "0 0 18px rgba(138,233,255,0.45)",
};

const railLine = {
  position: "absolute",
  top: 32,
  width: 2,
  height: "calc(100% - 18px)",
  background:
    "linear-gradient(180deg, rgba(138,233,255,0.1), rgba(138,233,255,0))",
};

const card = {
  background: "rgba(10,13,21,0.55)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
  padding: "1.2rem 1.25rem 1.1rem",
  flex: 1,
  backdropFilter: "blur(6px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const cardTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: 14,
  alignItems: "flex-start",
};

const leftHeader = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const logoWrap = {
  width: 46,
  height: 46,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  flexShrink: 0,
};

const logoImg = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  borderRadius: "inherit",
};

const roleTitle = {
  fontSize: "1.08rem",
  fontWeight: 700,
  margin: 0,
  color: "#fff",
};

const companyLine = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginTop: 4,
  fontSize: ".85rem",
  color: "rgba(235,242,255,0.7)",
};

const company = {
  fontWeight: 500,
  color: "rgba(255,255,255,0.9)",
};

const dot = { opacity: 0.4 };

const dateBadge = {
  background: "rgba(4,10,18,0.45)",
  border: "1px solid rgba(138,233,255,0.21)",
  borderRadius: 999,
  padding: "4px 12px 5px",
  fontSize: ".7rem",
  color: "rgba(236,243,255,0.85)",
  whiteSpace: "nowrap",
};

const summary = {
  margin: 0,
  fontSize: ".85rem",
  color: "rgba(236,243,255,0.78)",
  lineHeight: 1.5,
};

const bulletList = {
  margin: 0,
  paddingLeft: "1.15rem",
  display: "grid",
  gap: 4,
  color: "rgba(245,247,255,0.78)",
  fontSize: ".83rem",
  lineHeight: 1.5,
};

const tagRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 2,
};

const tag = {
  fontSize: ".7rem",
  padding: "4px 10px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
  color: "rgba(231,245,255,0.9)",
};
