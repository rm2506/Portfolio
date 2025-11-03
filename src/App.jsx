import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";

import bgImg from "./assets/HomeBG.jpg"; // full-screen gradient background

export default function App() {
  // shared nav link style
  const linkStyle = {
    color: "#ffffffff",
    textDecoration: "none",
    fontWeight: 500,
    letterSpacing: "0.05em",
    fontSize: "1rem",
    padding: "1rem 0",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
        {/* GLOBAL NAVBAR (same on all pages) */}
        <header
          style={{
            width: "100%",
            //borderTop: "1px solid #ffffffff",
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
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
            <Link to="/education" style={linkStyle}>
              EDUCATION
            </Link>
            <Link to="/projects" style={linkStyle}>
              PROJECTS
            </Link>
            <Link to="/experience" style={linkStyle}>
              EXPERIENCE
            </Link>
            <a
              href="/Ruchika_Mehta_Resume.pdf"
              download
              style={linkStyle}
            >
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
