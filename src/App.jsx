import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";

import bgImg from "./assets/HomeBG.jpg";

export default function App() {
  const linkStyle = {
    color: "#ffffffff",
    textDecoration: "none",
    fontWeight: 500,
    letterSpacing: "0.05em",
    fontSize: "1rem",
    padding: "1rem 0",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const activeStyle = {
    fontWeight: 800,
    paddingBottom: "0.25rem",
  };

  return (
    <Router>
      {/* Global layout wrapper */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          color: "#fffdfdff",
        }}
      >
        {/* GLOBAL NAVBAR */}
        <header
          style={{
            width: "100%",
            borderBottom: "1px solid #ffffffff",
            textAlign: "center",
            padding: "0.4rem 0",
            backgroundColor: "transparent",
            position: "relative",
            zIndex: 10,
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2.5rem",
            }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {}),
              })}
            >
              HOME
            </NavLink>

            <NavLink
              to="/education"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {}),
              })}
            >
              EDUCATION
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {}),
              })}
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/experience"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {}),
              })}
            >
              EXPERIENCE
            </NavLink>

            <a href="/Ruchika_Mehta_Resume.pdf" download style={linkStyle}>
              RESUME
            </a>
          </nav>
        </header>

        {/* ROUTED PAGE CONTAINER */}
        <main
          style={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 1rem", // space below navbar
            boxSizing: "border-box",
          }}
        >
          {/* inner max-width wrapper so content doesn't go super wide */}
          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
