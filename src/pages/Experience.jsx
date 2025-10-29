export default function Experience() {
  return (
    <section
      style={panelWrapper}
    >
      <h1 style={pageTitle}>Experience</h1>

      <div style={card}>
        <JobHeader
          role="Technical Data Analyst Co-op"
          company="Aramark Corp"
          location="Philadelphia, PA"
          dates="Sep 2023 – Mar 2024"
        />
        <ul style={ulStyle}>
          <li>
            Evaluated 10+ AI coding tools (including Amazon CodeWhisperer) to
            improve developer efficiency.
          </li>
          <li>
            Tested Palantir Foundry pipeline-builder features and reported to
            data harmonization stakeholders.
          </li>
          <li>
            Analyzed 64,000+ vendor rows to fill spend gaps for finance and
            supply chain.
          </li>
          <li>
            Built a vendor exposure plan surfacing 50+ local/minority vendors
            for sourcing + tax optimization.
          </li>
        </ul>
      </div>

      <div style={card}>
        <JobHeader
          role="Information Management Developer Co-op"
          company="Holman"
          location="Mt. Laurel, NJ"
          dates="Sep 2022 – Mar 2023"
        />
        <ul style={ulStyle}>
          <li>
            Wrote 100+ SQL queries for ETL across 5+ systems to improve data
            consistency and access.
          </li>
          <li>
            Automated / resolved 20+ FleetTrak cases, improving response time
            for fleet operations.
          </li>
          <li>
            Mapped ~50 inbound client data formats to internal standards to cut
            ingestion errors.
          </li>
          <li>
            Generated 36+ performance reports tracking case throughput.
          </li>
        </ul>
      </div>
    </section>
  );
}

function JobHeader({ role, company, location, dates }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: "0.5rem",
      }}
    >
      <div style={{ fontWeight: 600, color: "#111" }}>
        {role} — {company}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#555", textAlign: "right" }}>
        <div>{location}</div>
        <div>{dates}</div>
      </div>
    </div>
  );
}

/* styles */
const panelWrapper = {
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(4px)",
  padding: "3rem 2rem",
  boxSizing: "border-box",
  color: "#000",
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const pageTitle = {
  fontSize: "2rem",
  fontWeight: 600,
  marginBottom: "1.5rem",
  color: "#000",
};

const card = {
  width: "100%",
  background: "#fff",
  borderRadius: "12px",
  border: "1px solid rgba(0,0,0,0.15)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  color: "#333",
  fontSize: "1rem",
  lineHeight: 1.5,
};

const ulStyle = {
  paddingLeft: "1.25rem",
  marginTop: "1rem",
  lineHeight: 1.5,
};
