import React from "react";
import aramarkLogo from "../assets/logos/aramark.png";
import holmanLogo from "../assets/logos/holman.png";
import drexelLogo from "../assets/logos/drexel.jpg";

export default function Experience() {
  const roles = [
    {
      id: "drexel-ambassador",
      logo: drexelLogo,
      role: "Student Ambassador (Paid)",
      company: "Drexel University",
      location: "Philadelphia, PA",
      dates: "Sept 2021 – Sept 2025",
      summary:
        "Represent Drexel at admissions events, leading campus tours and supporting prospective students and families.",
      bullets: [
        "Coordinate campus tours, open houses, and new student induction events with the Office of Admissions and Events & Visitor Relations.",
        "Communicate Drexel’s co-op model, academic programs, and student life to diverse groups of prospective students and parents.",
        "Answer questions, share personal experience, and provide guidance to help students evaluate fit and navigate the admissions process.",
        "Collaborate with 20+ ambassadors and staff each term to ensure smooth event flow and a consistent, welcoming visitor experience.",
      ],
      tags: ["Public Speaking", "Student Outreach", "Admissions Events"],
    },
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
