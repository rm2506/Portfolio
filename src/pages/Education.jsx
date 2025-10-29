export default function Education() {
  return (
    <section
      style={panelWrapper}
    >
      <h1 style={pageTitle}>Education</h1>

      {/* Degree / School Card */}
      <div style={card}>
        <div style={rowBetween}>
          <div style={{ fontWeight: 600, color: "#111", fontSize: "1.05rem" }}>
            Drexel University
          </div>

          <div style={metaBlock}>
            <div style={badgeRow}>
              <span style={badge}>Philadelphia, PA</span>
              <span style={badge}>Graduation: Sept 2025</span>
            </div>
          </div>
        </div>

        <div style={{ color: "#444", lineHeight: 1.5, fontSize: "0.95rem" }}>
          B.S. in Computer Science <br />
          Concentration: Software Engineering, Artificial Intelligence and Machine Learning
        </div>
      </div>

      {/* Skills / Technical Profile Card */}
      <div style={card}>
        <div style={sectionHeaderRow}>
          <div style={sectionHeaderTitle}>Technical Profile</div>
          <div style={sectionSub}>
            Strong foundation in software engineering, AI/ML, data, and cloud tooling.
          </div>
        </div>

        <SkillRow
          label="Programming Languages"
          value="Python, C#, C, C++, Java, JavaScript, Racket, SQL, ReactJS, Bash"
        />

        <SkillRow
          label="Frameworks & Tools"
          value="Azure, React Native, DrRacket, IntelliJ, PL/SQL, GitHub, Django, MySQL, PostgreSQL, SQLite"
        />

        <SkillRow
          label="Cloud & Platforms"
          value="AWS, Microsoft Copilot, Amazon CodeWhisperer, Palantir Foundry, Power BI, Tableau, Cognos"
        />

        <SkillRow
          label="Practices"
          value="Agile/Scrum, CI/CD, REST API Development, Unit Testing, Test-Driven Development (TDD)"
        />

        <SkillRow
          label="Certifications"
          value="AI & Data (IBM), Foundry Foundations (Palantir), SQL (UC Davis), A/B Testing with SQL (UC Davis)"
        />
      </div>
    </section>
  );
}

/* helper row for skills */
function SkillRow({ label, value }) {
  return (
    <div style={rowOuter}>
      <div style={rowLabel}>{label}</div>
      <div style={rowValue}>{value}</div>
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
  padding: "1.5rem 1.5rem 1rem 1.5rem",
  marginBottom: "1.5rem",
  color: "#333",
  fontSize: "1rem",
  lineHeight: 1.5,
  boxSizing: "border-box",
};

const rowBetween = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: "0.75rem",
  marginBottom: "0.75rem",
};

const badgeRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  justifyContent: "flex-end",
};

const badge = {
  backgroundColor: "#f4ecdd",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "999px",
  padding: "0.4rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#444",
  lineHeight: 1.2,
  whiteSpace: "nowrap",
};

const metaBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  minWidth: "200px",
};

const sectionHeaderRow = {
  borderBottom: "1px solid rgba(0,0,0,0.07)",
  paddingBottom: "0.75rem",
  marginBottom: "0.75rem",
};

const sectionHeaderTitle = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#111",
  marginBottom: "0.25rem",
};

const sectionSub = {
  fontSize: "0.8rem",
  color: "#666",
  lineHeight: 1.4,
};

const rowOuter = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  fontSize: "0.9rem",
  lineHeight: 1.5,
  padding: "0.75rem 0",
  borderTop: "1px solid rgba(0,0,0,0.08)",
};

const rowLabel = {
  fontWeight: 600,
  color: "#222",
  minWidth: "180px",
  marginRight: "1rem",
  fontSize: "0.8rem",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
};

const rowValue = {
  flex: 1,
  color: "#333",
  maxWidth: "700px",
  fontSize: "0.9rem",
};
