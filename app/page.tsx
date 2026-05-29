"use client";
import React from "react";
// app/page.tsx  ─  Tila Liao Portfolio

const projects = [
  {
    id: 1,
    washiColor: "#C5D5C0",
    tagBg: "#E2EDE0",
    tagAccent: "#5A8060",
    tag: "Game Development",
    title: "Soccer Game Prototype",
    description:
      "An AI-assisted gameplay prototype built in Unreal Engine 5, implementing interactive mechanics including projectile systems and enemy AI interaction.",
    tools: ["Unreal Engine 5", "C++", "GitLab"],
    rotate: "-0.8deg",
  },
  {
    id: 2,
    washiColor: "#EDD5D8",
    tagBg: "#F8EEEF",
    tagAccent: "#C27088",
    tag: "Software Engineering",
    title: "Music Store Management System",
    description:
      "A Java-based inventory and order management system featuring customer management, inventory tracking, and modular OOP architecture.",
    tools: ["Java", "IntelliJ IDEA", "OOP Design"],
    rotate: "0.6deg",
  },
  {
    id: 3,
    washiColor: "#F3E3B2",
    tagBg: "#FAF0D5",
    tagAccent: "#B48C25",
    tag: "Machine Learning",
    title: "ICU Mortality Prediction",
    description:
      "Evaluated Logistic Regression, Decision Trees, and Neural Networks for predicting ICU mortality probability, achieving a strong 0.88 AUC score.",
    tools: ["R", "Logistic Regression", "Neural Networks"],
    rotate: "0.8deg",
  },
  {
    id: 4,
    washiColor: "#BEDAF2",
    tagBg: "#DDEAF8",
    tagAccent: "#5585BE",
    tag: "Statistical Analysis",
    title: "Income Distribution Analysis",
    description:
      "Applied statistical visualization and modelling to analyse income distribution patterns across different customer educational backgrounds.",
    tools: ["R", "ggplot2", "Bootstrap Sampling"],
    rotate: "-0.6deg",
  },
];

const toolGroups = [
  {
    category: "AI & Ideation",
    headerColor: "#C5D5C0",
    pillBg: "#E2EDE0",
    pillText: "#5A8060",
    tools: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    category: "Development",
    headerColor: "#EDD5D8",
    pillBg: "#F8EEEF",
    pillText: "#C27088",
    tools: ["GitHub Copilot", "IntelliJ IDEA", "VS Code"],
  },
  {
    category: "Prototyping",
    headerColor: "#F3E3B2",
    pillBg: "#FAF0D5",
    pillText: "#B48C25",
    tools: ["Unreal Engine 5", "R Language", "Java"],
  },
  {
    category: "Visualization",
    headerColor: "#BEDAF2",
    pillBg: "#DDEAF8",
    pillText: "#5585BE",
    tools: ["ggplot2", "Excalidraw"],
  },
];

export default function Home() {
  return (
    <>
      {/* ─────────────── NAV ─────────────── */}
      <nav
        className="nav-blur fixed top-0 left-0 right-0 z-50 px-8 py-5 border-b"
        style={{ borderColor: "rgba(221,213,205,0.5)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.25rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "var(--text-primary)",
            }}
          >
            Tila Liao
          </span>

          <div className="flex gap-8">
  {['About', 'Projects', 'Tools', 'Contact'].map((item, i) => (
    <React.Fragment key={item}>
      {i > 0 && <span style={{ color: "var(--border-color)", fontSize: "0.55rem", margin: "0 0.4rem"}}>·</span>}
      <a 
        href={`#${item.toLowerCase()}`}
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "var(--text-primary)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "var(--text-muted)")
        }
      >
        {item}
      </a>
    </React.Fragment>
  ))}
</div>
        </div>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <section className="graph-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Floating decorative stars */}
        {[
          { top: "18%", left: "8%",  color: "var(--sage-accent)",     size: "1.3rem", delay: "0s",    opacity: 0.4 },
          { top: "30%", right: "7%", color: "var(--pink-accent)",     size: "1.9rem", delay: "1.5s",  opacity: 0.3 },
          { bottom: "28%", left: "12%",  color: "var(--lavender-accent)", size: "1.1rem", delay: "0.8s",  opacity: 0.3 },
          { bottom: "22%", right: "10%", color: "var(--yellow-accent)",   size: "0.9rem", delay: "2.1s",  opacity: 0.35 },
          { top: "55%", left: "5%",  color: "var(--pink-accent)",     size: "0.7rem", delay: "1.1s",  opacity: 0.25 },
          { top: "20%", right: "20%",color: "var(--sage-accent)",     size: "0.7rem", delay: "0.4s",  opacity: 0.3 },
        ].map((s, i) => (
          <span
            key={i}
            className="float-deco absolute select-none pointer-events-none"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              color: s.color,
              fontSize: s.size,
              opacity: s.opacity,
              animationDelay: s.delay,
              fontFamily: "var(--font-caveat)",
            }}
          >
            ✦
          </span>
        ))}

        <div className="text-center px-6 max-w-3xl mx-auto">
          {/* Handwritten greeting */}
          <p
            className="anim-fade-up"
            style={{
              fontFamily: "var(--font-caveat)",
              fontSize: "1.6rem",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            hello, i&apos;m
          </p>

          {/* Name */}
          <h1
            className="anim-fade-up d1"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4.5rem, 11vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
          >
            Tila Liao
          </h1>

          {/* Dot divider */}
          <div
            className="anim-fade-up d2 flex justify-center"
            style={{ margin: "1.75rem 0" }}
          >
            <span
              style={{
                color: "var(--sage)",
                fontSize: "1.4rem",
                letterSpacing: "0.4em",
              }}
            >
              · · ·
            </span>
          </div>

          {/* Tagline */}
          <p
            className="anim-fade-up d3"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--text-muted)",
              lineHeight: 1.55,
              letterSpacing: "0.01em",
            }}
          >
            Finding patterns in data,
            <br />
            and possibilities in people.
          </p>

          {/* CTA buttons */}
          <div
            className="anim-fade-up d4 flex gap-4 justify-center flex-wrap"
            style={{ marginTop: "2.75rem" }}
          >
            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: "var(--text-primary)",
                color: "var(--cream)",
                padding: "13px 32px",
                textDecoration: "none",
                transition: "opacity 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.78")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                padding: "13px 32px",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--cream-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll hint */}
          <p
            className="anim-fade-up d5"
            style={{
              fontFamily: "var(--font-caveat)",
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              opacity: 0.6,
              marginTop: "4rem",
            }}
          >
            scroll down ↓
          </p>
        </div>
      </section>

      {/* ─────────────── ABOUT ─────────────── */}
      <section id="about" style={{ padding: "7rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Text column */}
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>
                — 01 —
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                I&apos;m a Business Analytics student with a passion for finding
                the story hidden inside the numbers — and then communicating it
                in a way that actually matters to people.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  marginBottom: "1.75rem",
                }}
              >
                Across machine learning, software development, and statistical
                analysis, I&apos;ve learned to think analytically and act
                creatively. I&apos;m looking to bring that lens to business
                development, sales, or planning roles at international companies.
              </p>

              {/* Skill chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Business Analytics",
                  "Machine Learning",
                  "Statistical Analysis",
                  "Data Visualization",
                  "Java",
                  "R",
                  "AI-Assisted Workflows",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      background: "var(--cream-dark)",
                      border: "1px solid var(--border-color)",
                      padding: "4px 11px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky-note card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="paper-shadow"
                style={{
                  background: "var(--yellow-light)",
                  border: "1px solid var(--yellow)",
                  padding: "2.5rem 2.2rem",
                  maxWidth: "300px",
                  transform: "rotate(1.8deg)",
                  fontFamily: "var(--font-caveat)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--yellow-accent)",
                    marginBottom: "1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  quick facts ✦
                </p>
                <ul
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 2.1,
                    color: "var(--text-primary)",
                    listStyle: "none",
                  }}
                >
                  <li>📍 Based in Taiwan</li>
                  <li>🎓 Business Analytics</li>
                  <li>🌏 Targeting global roles</li>
                  <li>💡 ML × Business Strategy</li>
                  <li>🛠 R · Java · UE5 · AI tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROJECTS ─────────────── */}
      <section
        id="projects"
        style={{ background: "var(--cream-dark)", padding: "7rem 1.5rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              — 02 —
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Projects
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{ transform: `rotate(${project.rotate})` }}
              >
                <div
                  className="paper-shadow"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border-color)",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.025) rotate(0deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                  }}
                >
                  {/* Washi-tape header strip */}
                  <div
                    style={{
                      background: project.washiColor,
                      padding: "13px 20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: project.tagAccent,
                        fontWeight: 500,
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        marginBottom: "0.65rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.83rem",
                        lineHeight: 1.75,
                        color: "var(--text-muted)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tool pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.05em",
                            background: project.tagBg,
                            border: `1px solid ${project.washiColor}`,
                            padding: "3px 9px",
                            color: project.tagAccent,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TOOLS ─────────────── */}
      <section id="tools" style={{ padding: "7rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              — 03 —
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Tools & Workflow
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {toolGroups.map((group) => (
              <div
                key={group.category}
                className="paper-shadow"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden",
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    background: group.headerColor,
                    padding: "10px 18px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-caveat)",
                      fontSize: "1rem",
                      color: group.pillText,
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Tools */}
                <div style={{ padding: "1.25rem 1.1rem", display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.72rem",
                        background: group.pillBg,
                        color: group.pillText,
                        padding: "5px 12px",
                        borderRadius: "999px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CONTACT ─────────────── */}
      <section
        id="contact"
        className="graph-bg"
        style={{ padding: "7rem 1.5rem" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            — 04 —
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s connect.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              maxWidth: "420px",
              margin: "0 auto 2.5rem",
            }}
          >
            I'm always open to connect, learn from others, and explore new opportunities.
          </p>

          {/* Contact card */}
          <div
            className="paper-shadow"
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border-color)",
              padding: "2.5rem 3rem",
              display: "inline-block",
              maxWidth: "360px",
              width: "100%",
            }}
          >
            {/* Washi tape accent */}
            <div
              style={{
                background: "var(--sage)",
                width: "50px",
                height: "12px",
                margin: "-3.75rem auto 1.5rem",
                opacity: 0.75,
                transform: "rotate(-1.5deg)",
                borderRadius: "2px",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-caveat)",
                fontSize: "1rem",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              reach me at ✦
            </p>

            <a
              href="mailto:tila040105@gmail.com"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "var(--text-primary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-color)",
                paddingBottom: "2px",
                display: "block",
                marginBottom: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--sage-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              tila040105@gmail.com
            </a>

            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              0966-116-936
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer
        style={{
          padding: "2rem 1.5rem",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-caveat)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            opacity: 0.7,
          }}
        >
          Designed & developed by Tila Liao © 2026
        </p>
      </footer>
    </>
  );
}
