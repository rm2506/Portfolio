export default function Projects() {
  return (
    <section
      style={panelWrapper}
    >
      <h1 style={pageTitle}>Projects</h1>

      <ProjectCard
        title="OpenMario++ — Machine Learning Developer"
        date="Apr 2025 – Jun 2025"
        bullets={[
          "Personalized course recommendation system using Contextual Bandits, Q-Learning, and DQN.",
          "Improved recommendation accuracy by ~20% vs baseline.",
          "Integrated Meilisearch for <100ms ranked search & engagement tracking.",
        ]}
        tech="Python, ML/DL, Meilisearch"
      />

      <ProjectCard
        title="Fencing Tournament Mobile App — Full Stack Developer"
        date="Sep 2024 – Jun 2025"
        bullets={[
          "Cross-platform app to run & score fencing tournaments (timer, scoring, brackets, remote control).",
          "Cut setup time by 50% and cost by ~70% vs existing systems.",
          "Placed 3rd / 54 teams in Drexel CCI Senior Design 2025.",
        ]}
        tech="React Native, Node.js, REST APIs, real-time sync"
      />

      <ProjectCard
        title="CampusFinds — Full Stack Developer"
        date="Sep 2024 – Dec 2024"
        bullets={[
          "Student-only marketplace with login, listing filters, chat, ratings/safety.",
          "Back end built with Node.js, Express.js, PostgreSQL.",
          "Security/usability tested with 27 students.",
        ]}
        tech="Node.js, Express.js, PostgreSQL, Auth"
      />

      <ProjectCard
        title="YODEL — Project Manager / Back-End Developer"
        date="Jan 2022 – Jun 2022"
        bullets={[
          "Led 5-person Agile team; delivered 100% of sprints on time.",
          "Multi-user karaoke-style web platform with recording & sharing.",
        ]}
        tech="Agile/Scrum, Web app architecture"
      />
    </section>
  );
}

function ProjectCard({ title, date, bullets, tech }) {
  return (
    <div style={card}>
      <div style={rowBetween}>
        <div style={{ fontWeight: 600, color: "#111" }}>{title}</div>
        <div style={{ fontSize: "0.8rem", color: "#555" }}>{date}</div>
      </div>
      <ul style={ulStyle}>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div style={{ fontSize: "0.8rem", color: "#444" }}>Tech: {tech}</div>
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

const rowBetween = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: "0.5rem",
};

const ulStyle = {
  paddingLeft: "1.25rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  lineHeight: 1.5,
};
