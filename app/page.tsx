"use client";
import React, { useState } from "react";
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
    kaomoji: "(・ω・)",
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
    kaomoji: "ʚ♡ɞ",
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
    tools: ["R", "ggplot2", "Bootstrap Sampling", "Statistical Modelling"],
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
    deco: "✶ ✸ ✶" 
  },
  {
    category: "Visualization",
    headerColor: "#BEDAF2",
    pillBg: "#DDEAF8",
    pillText: "#5585BE",
    tools: ["ggplot2", "Excalidraw"],
     deco: "❀ ✿ ❀"
  },
];

export default function Home()
 {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<number>(0);
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

            {/* Lined notebook card */}
<div style={{ display: "flex", justifyContent: "center" }}>
  <div style={{ position: "relative", maxWidth: "300px", width: "100%" }}>
    {/* Washi tape top */}
    <div style={{
      position: "absolute", top: "-8px", left: "30px",
      width: "80px", height: "13px",
      background: "#C5D5C0", opacity: 0.8,
      transform: "rotate(-2deg)", borderRadius: "2px", zIndex: 3,
    }}/>
    {/* Notebook */}
    <div className="paper-shadow" style={{
      background: "#FEFEFE",
      border: "1px solid var(--border-color)",
      transform: "rotate(1.5deg)",
      overflow: "hidden",
    }}>
      {/* Red margin line */}
      <div style={{ display: "flex" }}>
        <div style={{
          width: "28px", minHeight: "100%",
          background: "rgba(220,150,150,0.12)",
          borderRight: "1.5px solid rgba(220,130,130,0.3)",
          flexShrink: 0,
        }}/>
        {/* Lined content */}
        <div style={{
          flex: 1,
          backgroundImage: "linear-gradient(rgba(160,148,138,0.15) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          padding: "1rem 1rem 1rem 0.75rem",
        }}>
          <p style={{
            fontFamily: "var(--font-caveat)",
            fontSize: "1rem",
            color: "var(--text-muted)",
            marginBottom: "0",
            lineHeight: "32px",
            paddingBottom: "32px",
          }}>
            ✿ quick notes ✿
          </p>
          {[
            { icon: "📍", text: "Based in Taiwan" },
            { icon: "🎓", text: "Business Analytics" },
            { icon: "🌏", text: "Targeting global roles" },
            { icon: "💡", text: "ML × Business Strategy" },
            { icon: "🛠", text: "R · Java · UE5 · AI" },
          ].map((item) => (
            <div key={item.text} style={{
              fontFamily: "var(--font-caveat)",
              fontSize: "1.05rem",
              color: "var(--text-primary)",
              lineHeight: "32px",
            }}>
              {item.icon} {item.text}
            </div>
          ))}
          <p style={{
            fontFamily: "var(--font-caveat)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            lineHeight: "32px",
            textAlign: "right",
            opacity: 0.6,
          }}>
            ₊˚✧ always learning
         </p>
        </div>
      </div>
    </div>
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
              style={{ transform: `rotate(${project.rotate})`, position: "relative", cursor: "pointer" }}
              onClick={() => setActiveProject(project.id)}
            >
               <div
                  className="paper-shadow"
                  style={{
                    background: "#FFFFFF",
                    backgroundImage: "linear-gradient(rgba(160,148,138,0.07) 1px, transparent 1px)",
                    backgroundSize: "100% 28px",
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
                  {project.kaomoji && (
                  <div style={{
                   position: "absolute",
                  top: "10px",
                  right: "14px",
                  fontFamily: "var(--font-caveat)",
                  fontSize: "0.85rem",
                  color: project.tagAccent,
                  opacity: 0.65,
                  zIndex: 2,
                }}>
                  {project.kaomoji}
                </div>
              )}
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "var(--font-caveat)",
                    fontSize: "1rem",
                    color: group.pillText,
                  }}>
                    {group.category}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-caveat)",
                    fontSize: "0.75rem",
                    color: group.pillText,
                    opacity: 0.7,
                    letterSpacing: "0.1em",
                  }}>
                    {group.deco}
                  </span>
                </div>
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
     {/* ─────────────── MODAL ─────────────── */}
      {activeProject !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(56,48,42,0.45)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setActiveProject(null)}
        >
          <div
            style={{
              background: "var(--cream)",
              maxWidth: "860px", width: "100%",
              maxHeight: "88vh", overflowY: "auto",
              position: "relative",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: "absolute", top: "1rem", left: "1rem",
                zIndex: 10, background: "var(--cream-dark)",
                border: "1px solid var(--border-color)",
                width: "32px", height: "32px",
                cursor: "pointer", fontSize: "1rem",
                color: "var(--text-muted)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>

            {/* ── PROJECT 1: UE5 — top GIF, bottom two-col ── */}
            {activeProject === 1 && (
              <div>
                <div style={{ width: "100%", maxHeight: "340px", overflow: "hidden" }}>
                  <img
                    src="/Hero Image - Movement.gif"
                    alt="Soccer Game Prototype"
                    style={{ width: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "2rem", padding: "2.5rem 2.5rem 2rem",
                }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5A8060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Task</p>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                      Develop a gameplay prototype in UE5 to explore core game mechanics and rapid development workflows.
                    </p>
                    <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5A8060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>My Role</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {[
                        "Designed gameplay systems and player movement",
                        "Implemented enemy interactions and projectile mechanics",
                        "Built UI elements and prototype integration",
                      ].map(point => (
                        <li key={point} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "0.2rem", display: "flex", gap: "0.5rem" }}>
                          <span style={{ color: "#5A8060", flexShrink: 0 }}>·</span>{point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5A8060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Outcome</p>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                      Delivered a playable prototype featuring movement, shooting, enemy interaction, obstacles, traps, and pickups.
                    </p>
                    <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5A8060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>What I Learned</p>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
                      Rapid prototyping, gameplay iteration, UE5 architecture, and how AI-assisted workflows can accelerate development.
                    </p>
                  </div>
                </div>
                <div style={{ padding: "0 2.5rem 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {["Unreal Engine 5", "C++", "GitLab", "AI-Assisted"].map(t => (
                    <span key={t} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem", letterSpacing: "0.05em", background: "#E2EDE0", border: "1px solid #C5D5C0", padding: "3px 9px", color: "#5A8060" }}>{t}</span>
                  ))}
                </div>
                {/* ── GALLERY ── */}
<div style={{ padding: "2rem 2.5rem 3rem", borderTop: "1px solid var(--border-color)" }}>

  <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#5A8060", marginBottom: "1.5rem" }}>
    𖡼.𖤣 gallery 𖥧𖡼.
  </p>

  {[
    {
      title: "Player Feedback System",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ transform: "rotate(-0.8deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Hero Image - Movement.gif" alt="Movement" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Hero Image - Movement.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Players can <span style={{ color: "#C27088" }}>move</span> using the <span style={{ color: "#C27088" }}>W, A, S, D</span> keys, and <span style={{ color: "#C27088" }}>jump</span> using the <span style={{ color: "#C27088" }}>Spacebar</span>.
                </p>
              </div>
            </div>
          </div>
          <div style={{ transform: "rotate(0.6deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Interaction.gif" alt="Interaction" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Interaction.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  The ball glows green when approached, and a short animation plays when a goal is scored.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Risk & Challenge Mechanic",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ transform: "rotate(0.9deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Obstacles.gif" alt="Obstacles" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Obstacles.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Obstacles block the player's movement.
                </p>
              </div>
            </div>
          </div>
          <div style={{ transform: "rotate(-0.5deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Traps.gif" alt="Traps" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Traps.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Stepping on a trap temporarily freezes the player and enemy.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Resource Collection System",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ transform: "rotate(-0.7deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Element Pickup.gif" alt="Element Pickup" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Element Pickup.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Before the first shooting, players can collect element.
                </p>
              </div>
            </div>
          </div>
          <div style={{ transform: "rotate(0.8deg)" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Element options.gif" alt="Element options" style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Element options.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Press <span style={{ color: "#5A8060" }}>I</span> to open the <span style={{ color: "#C27088" }}>element menu</span>, use <span style={{ color: "#C27088" }}>J / L</span> to <span style={{ color: "#C27088" }}>navigate</span>, and <span style={{ color: "#C27088" }}>K</span> to <span style={{ color: "#C27088" }}>confirm</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Element-Based Combat System",
      content: (
        <div>
          <div style={{ transform: "rotate(-0.4deg)", marginBottom: "1rem" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
              <div style={{ background: "#C5D5C0", height: "8px" }} />
              <img src="/Projectile Shooting.gif" alt="Projectile Shooting" style={{ width: "100%", display: "block", maxHeight: "180px", objectFit: "cover" }} />
              <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Projectile Shooting.gif</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  Players can <span style={{ color: "#C27088" }}>fire projectiles</span> by pressing <span style={{ color: "#C27088" }}>O</span>.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.8rem" }}>
            {[
              { emoji: "💧", label: "Water Element", color: "#BEDAF2", accent: "#5585BE", desc: "Slows enemy movement for seconds." },
              { emoji: "🧊", label: "Ice Element",   color: "#DDEAF8", accent: "#5585BE", desc: "Temporarily freezes enemies in place." },
              { emoji: "🔥", label: "Fire Element",  color: "#F3E3B2", accent: "#B48C25", desc: "Direct damage to enemies." },
            ].map((el, i) => (
              <div key={el.label} style={{ transform: `rotate(${i % 2 === 0 ? "-0.6" : "0.7"}deg)` }}>
                <div style={{ background: el.color, border: "1px solid var(--border-color)", padding: "1rem", textAlign: "center" }} className="paper-shadow">
                  <p style={{ fontSize: "1.6rem", margin: "0 0 0.4rem" }}>{el.emoji}</p>
                  <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: el.accent, marginBottom: "0.3rem" }}>{el.label}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ].map((section, idx) => (
    <div key={section.title} style={{ marginBottom: "0.6rem" }}>
      {/* Accordion header */}
      <button
        onClick={() => setOpenSection(openSection === idx ? -1 : idx)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between",
          background: openSection === idx ? "#E2EDE0" : "#F0F5EF",
          border: `1px solid ${openSection === idx ? "#C5D5C0" : "#C5D5C0"}`,
          padding: "0.7rem 1rem",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{
            fontFamily: "var(--font-caveat)",
            fontSize: "0.75rem",
            color: openSection === idx ? "#5A8060" : "var(--text-muted)",
            letterSpacing: "0.05em",
          }}>
            {openSection === idx ? "𖤣" : "𖥧"}
          </span>
          <span style={{
            fontFamily: "var(--font-caveat)",
            fontSize: "0.95rem",
            color: openSection === idx ? "#5A8060" : "var(--text-muted)",
            fontWeight: openSection === idx ? 600 : 400,
          }}>
            {section.title}
          </span>
        </div>
        <span style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "0.65rem",
          color: openSection === idx ? "#5A8060" : "var(--text-muted)",
          letterSpacing: "0.1em",
        }}>
          {openSection === idx ? "▲ close" : "▼ open"}
        </span>
      </button>

      {/* Accordion content */}
      {openSection === idx && (
        <div style={{
          border: "1px solid #C5D5C0",
          borderTop: "none",
          padding: "1.2rem 1rem",
          background: "#F5FAF5",
        }}>
          {section.content}
        </div>
      )}
    </div>
  ))}
  </div>
</div>
)}

             {/* ── PROJECT 2: Music Store — left image, right text ── */}
            {activeProject === 2 && (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "420px" }}>
                  <div style={{ background: "var(--cream-dark)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                    <img
                      src="/architecture.png"
                      alt="Music Store Architecture"
                      style={{ width: "100%", objectFit: "contain", maxHeight: "360px" }}
                    />
                  </div>
                  <div style={{ padding: "3rem 2.5rem 2rem" }}>
                    <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#C27088", marginBottom: "1.5rem" }}>꒰ Music Store System ꒱</p>
                    {[
                      { label: "Task", text: "Develop a modular inventory and order management system using object-oriented programming principles." },
                      { label: "My Role", bullets: [
                        "Designed system architecture and class structure",
                        "Implemented inventory and order management logic",
                        "Structured the project using OOP principles",
                      ]},
                      { label: "Key Outcome", text: "Built a modular Java application featuring customer management, inventory tracking, and order processing." },
                      { label: "What I Learned", text: "Strengthened understanding of inheritance, abstraction, enums, modular design, and maintainable software architecture." },
                    ].map(item => (
                      <div key={item.label} style={{ marginBottom: "1.2rem" }}>
                        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#C27088", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.label}</p>
                        {"bullets" in item ? (
                          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                            {item.bullets!.map(point => (
                              <li key={point} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "0.2rem", display: "flex", gap: "0.5rem" }}>
                                <span style={{ color: "#C27088", flexShrink: 0 }}>·</span>{point}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)" }}>{item.text}</p>
                        )}
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                      {["Java", "IntelliJ IDEA", "OOP Design"].map(t => (
                        <span key={t} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem", background: "#F8EEEF", border: "1px solid #EDD5D8", padding: "3px 9px", color: "#C27088" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── BEHIND THE SYSTEM ── */}
                <div style={{ padding: "2rem 2.5rem 3rem", borderTop: "1px solid var(--border-color)" }}>
                  <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#C27088", marginBottom: "2rem" }}>
                    ✿ behind the system
                  </p>

                  {/* System Architecture */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                      <div style={{ height: "1px", width: "24px", background: "#C27088", opacity: 0.5 }} />
                      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>System Architecture</p>
                      <div style={{ height: "1px", flex: 1, background: "#C27088", opacity: 0.2 }} />
                    </div>
                    <div style={{ transform: "rotate(-0.6deg)" }}>
                      <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
                        <div style={{ background: "#EDD5D8", height: "8px" }} />
                        <img src="/architecture.png" alt="Architecture" style={{ width: "100%", display: "block", maxHeight: "260px", objectFit: "contain", background: "#fff", padding: "1rem" }} />
                        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>architecture.png</p>
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                            Structured the application into interconnected classes that manage customers, orders, and inventory operations within the store system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Structure */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                      <div style={{ height: "1px", width: "24px", background: "#C27088", opacity: 0.5 }} />
                      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Project Structure</p>
                      <div style={{ height: "1px", flex: 1, background: "#C27088", opacity: 0.2 }} />
                    </div>
                    <div style={{ transform: "rotate(0.5deg)" }}>
                      <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
                        <div style={{ background: "#EDD5D8", height: "8px" }} />
                        <img src="/IntelliJ project structure.png" alt="IntelliJ Project Structure" style={{ width: "100%", display: "block", maxHeight: "260px", objectFit: "contain", background: "#1e1e2e", padding: "1rem" }} />
                        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>IntelliJ project structure.png</p>
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                            Organized the application into multiple classes, including customers, orders, inventory items, and store management components, following object-oriented design principles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Logic */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                      <div style={{ height: "1px", width: "24px", background: "#C27088", opacity: 0.5 }} />
                      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Core Logic</p>
                      <div style={{ height: "1px", flex: 1, background: "#C27088", opacity: 0.2 }} />
                    </div>
                    <div style={{ transform: "rotate(-0.4deg)" }}>
                      <div style={{ background: "#fff", border: "1px solid #EDD5D8", overflow: "hidden" }} className="paper-shadow">
                        <div style={{ background: "#EDD5D8", height: "8px" }} />
                        <div style={{ background: "#FDF8F9", padding: "1.2rem 1.4rem", fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 1.8, color: "#5A4A4E", borderBottom: "1px solid #EDD5D8" }}>
                          <span style={{ color: "#C27088" }}>public </span>
                          <span style={{ color: "#B48C25" }}>Order</span>
                          <span>(</span>
                          <span style={{ color: "#5585BE" }}>int </span>
                          <span>orderID, </span>
                          <span style={{ color: "#5585BE" }}>List</span>
                          <span>&lt;StoreItem&gt; items, </span>
                          <span style={{ color: "#5585BE" }}>Date </span>
                          <span>purchaseDate, </span>
                          <span style={{ color: "#5585BE" }}>double </span>
                          <span>total) {"{"}</span>
                          <br />
                          <span style={{ paddingLeft: "1.5rem", display: "block" }}><span style={{ color: "#5A8060" }}>this</span>.orderID = orderID;</span>
                          <span style={{ paddingLeft: "1.5rem", display: "block" }}><span style={{ color: "#5A8060" }}>this</span>.items = items;</span>
                          <span style={{ paddingLeft: "1.5rem", display: "block" }}><span style={{ color: "#5A8060" }}>this</span>.purchaseDate = purchaseDate;</span>
                          <span style={{ paddingLeft: "1.5rem", display: "block" }}><span style={{ color: "#5A8060" }}>this</span>.total = total;</span>
                          <span>{"}"}</span>
                        </div>
                        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)" }}>
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                            Implemented an order system that stores purchased items, purchase dates, and transaction totals, enabling structured order tracking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Interface */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                      <div style={{ height: "1px", width: "24px", background: "#C27088", opacity: 0.5 }} />
                      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>User Interface</p>
                      <div style={{ height: "1px", flex: 1, background: "#C27088", opacity: 0.2 }} />
                    </div>
                    <div style={{ transform: "rotate(0.7deg)" }}>
                      <div style={{ background: "#fff", border: "1px solid #EDD5D8", overflow: "hidden" }} className="paper-shadow">
                        <div style={{ background: "#EDD5D8", height: "8px" }} />
                        <div style={{ background: "#FDF8F9", padding: "1.2rem 1.4rem", fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 2, color: "#5A4A4E", borderBottom: "1px solid #EDD5D8" }}>
                          <p style={{ color: "#C27088", marginBottom: "0.4rem", fontFamily: "var(--font-caveat)", fontSize: "0.85rem" }}>--- Music Store Management System ---</p>
                          {[
                            "1. Add a new customer",
                            "2. Display a list of all customers",
                            "3. Add a new record to the store inventory",
                            "4. Add a new t-shirt to the store inventory",
                            "5. Display a list of all items and their stock levels",
                            "6. Update the stock level of an item",
                            "7. Enter and store details of a new customer order",
                            "8. Output a list of all orders placed this month",
                            "9. Exit the program",
                          ].map((line, i) => (
                            <div key={i} style={{ display: "flex", gap: "0.5rem" }}>
                              <span style={{ color: "#C27088", flexShrink: 0, opacity: 0.6 }}>›</span>
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)" }}>
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                            Developed a menu-driven console interface that allows users to manage customers, inventory, orders, and stock updates through a centralized system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Workflow */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                      <div style={{ height: "1px", width: "24px", background: "#C27088", opacity: 0.5 }} />
                      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Workflow</p>
                      <div style={{ height: "1px", flex: 1, background: "#C27088", opacity: 0.2 }} />
                    </div>
                    <div style={{ transform: "rotate(-0.5deg)" }}>
                      <div style={{ background: "#fff", border: "1px solid var(--border-color)", overflow: "hidden" }} className="paper-shadow">
                        <div style={{ background: "#EDD5D8", height: "8px" }} />
                        <img src="/System Flow.png" alt="System Flow" style={{ width: "100%", display: "block", maxHeight: "260px", objectFit: "contain", background: "#fff", padding: "1rem" }} />
                        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid var(--border-color)" }}>
                          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>System Flow.png</p>
                          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                            Designed a workflow showing how customer orders interact with inventory records and update store stock levels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}


            {/* ── PROJECT 3: ICU — top AUC chart, bottom two-col text ── */}
{activeProject === 3 && (
  <div>
    <div style={{ background: "var(--cream-dark)", padding: "2rem 2.5rem" }}>
      <div style={{ background: "#fff", border: "1px solid var(--border-color)", padding: "1.2rem 1.4rem" }}>
        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>Model AUC Comparison ✦</p>
        {[
          { name: "XGBoost", auc: 0.8876, best: true },
          { name: "Random Forest", auc: 0.8614, best: false },
          { name: "Logistic Regression", auc: 0.8539, best: false },
          { name: "Neural Network", auc: 0.8179, best: false },
          { name: "Decision Tree", auc: 0.7039, best: false },
        ].map(m => (
          <div key={m.name} style={{ marginBottom: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem", color: m.best ? "#B48C25" : "var(--text-muted)", fontWeight: m.best ? 500 : 400 }}>{m.name}{m.best ? " ★" : ""}</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem", color: "var(--text-muted)" }}>{m.auc}</span>
            </div>
            <div style={{ height: "5px", background: "var(--cream-dark)", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${(m.auc - 0.65) / 0.28 * 100}%`, background: m.best ? "#F3E3B2" : "#E8E2D8", borderRadius: "2px" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", padding: "2.5rem 2.5rem 2rem" }}>
      <div>
        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#B48C25", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Task</p>
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>Predict ICU mortality risk using clinical data and compare machine learning approaches.</p>
        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#B48C25", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>My Role</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {["Performed data preparation and feature analysis", "Trained and evaluated multiple ML models", "Visualized results and interpreted model performance"].map(point => (
            <li key={point} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "0.2rem", display: "flex", gap: "0.5rem" }}>
              <span style={{ color: "#B48C25", flexShrink: 0 }}>·</span>{point}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#B48C25", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Outcome</p>
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>Achieved an AUC of 0.88 while comparing Logistic Regression, Decision Trees, and Neural Networks.</p>
        <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#B48C25", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>What I Learned</p>
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)" }}>Learned the trade-off between predictive performance, interpretability, and model complexity.</p>
      </div>
    </div>
    <div style={{ padding: "0 2.5rem 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {["R", "Logistic Regression", "Neural Networks", "XGBoost"].map(t => (
        <span key={t} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem", background: "#FAF0D5", border: "1px solid #F3E3B2", padding: "3px 9px", color: "#B48C25" }}>{t}</span>
      ))}
    </div>
    {/* ── PROJECT SHOWCASE ── */}
<div style={{ padding: "2rem 2.5rem 3rem", borderTop: "1px solid var(--border-color)" }}>

  <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#B48C25", marginBottom: "2rem" }}>
    ✦ project showcase
  </p>

  {/* ── Model Performance ── */}
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#B48C25", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Model Performance</p>
      <div style={{ height: "1px", flex: 1, background: "#B48C25", opacity: 0.2 }} />
    </div>
    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: "1rem", paddingLeft: "0.2rem" }}>
      Evaluated and compared six machine learning approaches and identified XGBoost as the most accurate approach for estimating ICU mortality risk.
    </p>
    <div style={{ transform: "rotate(-0.5deg)" }}>
      <div style={{ background: "#fff", border: "1px solid #F3E3B2", overflow: "hidden" }} className="paper-shadow">
        <div style={{ background: "#F3E3B2", height: "8px" }} />
        <div style={{ background: "#FCF8EE", padding: "1.2rem 1.4rem" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: "#B48C25", marginBottom: "1rem" }}>Model AUC Comparison ✦</p>
          {[
            { name: "XGBoost", auc: 0.8876, best: true },
            { name: "Weighted Ensemble (XGB 70% + RF 30%)", auc: 0.8826, best: false },
            { name: "Random Forest", auc: 0.8614, best: false },
            { name: "Logistic Regression", auc: 0.8539, best: false },
            { name: "kNN", auc: 0.8483, best: false },
            { name: "Neural Network", auc: 0.8179, best: false },
            { name: "Decision Tree", auc: 0.7039, best: false },
          ].map(m => (
            <div key={m.name} style={{ marginBottom: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem", color: m.best ? "#B48C25" : "var(--text-muted)", fontWeight: m.best ? 500 : 400 }}>
                  {m.name}{m.best ? " ★" : ""}
                </span>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem", color: "var(--text-muted)" }}>{m.auc}</span>
              </div>
              <div style={{ height: "5px", background: "#F0EAE2", borderRadius: "2px" }}>
                <div style={{ height: "100%", width: `${(m.auc - 0.65) / 0.28 * 100}%`, background: m.best ? "#F3E3B2" : "#E8E2D8", borderRadius: "2px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* ── Key Insights ── */}
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#B48C25", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Key Insights</p>
      <div style={{ height: "1px", flex: 1, background: "#B48C25", opacity: 0.2 }} />
    </div>
    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: "1rem", paddingLeft: "0.2rem" }}>
      Explored key clinical factors associated with patient outcomes, revealing that age, oxygen levels, blood pressure, and existing health conditions were strongly linked to mortality risk.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      {/* Data Insights card */}
      <div style={{ transform: "rotate(0.6deg)" }}>
        <div style={{ background: "#fff", border: "1px solid #F3E3B2", overflow: "hidden" }} className="paper-shadow">
          <div style={{ background: "#F3E3B2", padding: "8px 14px" }}>
            <span style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: "#B48C25" }}>◈ Data Insights</span>
          </div>
          <div style={{ padding: "1rem", background: "#FCF8EE" }}>
            {[
              "Older patients had higher mortality (~7 years older on average)",
              "MICU and CCU units had the highest mortality rates",
              "~11.2% death rate with higher mortality among patients with more comorbidities",
              "SpO2_Min and MeanBP_Min most negatively correlated with mortality",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "#B48C25", flexShrink: 0, fontFamily: "var(--font-caveat)", fontSize: "0.8rem" }}>✦</span>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature Engineering card */}
      <div style={{ transform: "rotate(-0.7deg)" }}>
        <div style={{ background: "#fff", border: "1px solid #F3E3B2", overflow: "hidden" }} className="paper-shadow">
          <div style={{ background: "#F3E3B2", padding: "8px 14px" }}>
            <span style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: "#B48C25" }}>◈ Feature Engineering</span>
          </div>
          <div style={{ padding: "1rem", background: "#FCF8EE" }}>
            {[
              "Engineered: shock index, pulse pressure, SpO2/RespRate ratio",
              "One-hot encoded: gender, admission type, care unit, insurance",
              "Added comorbidity features: sepsis, heart failure, renal failure, cancer",
              "Standardised all predictors; stratified 80/20 train/validation split",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "#B48C25", flexShrink: 0, fontFamily: "var(--font-caveat)", fontSize: "0.8rem" }}>✦</span>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ── Risk Predictions ── */}
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#B48C25", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Risk Predictions</p>
      <div style={{ height: "1px", flex: 1, background: "#B48C25", opacity: 0.2 }} />
    </div>
    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: "1rem", paddingLeft: "0.2rem" }}>
      Generated individual mortality risk scores for ICU patients, enabling the model to estimate the probability of adverse outcomes for unseen cases.
    </p>
    <div style={{ transform: "rotate(0.4deg)" }}>
      <div style={{ background: "#fff", border: "1px solid #F3E3B2", overflow: "hidden" }} className="paper-shadow">
        <div style={{ background: "#F3E3B2", height: "8px" }} />
        <div style={{ background: "#FCF8EE", padding: "1.2rem 1.4rem" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: "#B48C25", marginBottom: "1rem" }}>XGBoost Prediction Output ✦</p>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr", gap: "0.5rem", marginBottom: "0.5rem", paddingBottom: "0.4rem", borderBottom: "1px solid #F3E3B2" }}>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", color: "#B48C25", letterSpacing: "0.08em", textTransform: "uppercase" }}>icustay_id</span>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", color: "#B48C25", letterSpacing: "0.08em", textTransform: "uppercase" }}>probability</span>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", color: "#B48C25", letterSpacing: "0.08em", textTransform: "uppercase" }}>risk level</span>
          </div>
          {[
            { id: "280003", prob: 0.903, risk: "High", bar: 18 },
            { id: "204280", prob: 0.620, risk: "High", bar: 12 },
            { id: "312213", prob: 0.312, risk: "Medium", bar: 6 },
            { id: "206770", prob: 0.039, risk: "Low", bar: 1 },
            { id: "206551", prob: 0.003, risk: "Low", bar: 0.5 },
          ].map(row => (
            <div key={row.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>{row.id}</span>
              <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>{row.prob.toFixed(3)}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <div style={{ height: "6px", width: `${row.bar * 5}px`, maxWidth: "80px", background: row.risk === "High" ? "#C27088" : row.risk === "Medium" ? "#B48C25" : "#C5D5C0", borderRadius: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", color: row.risk === "High" ? "#C27088" : row.risk === "Medium" ? "#B48C25" : "#5A8060" }}>{row.risk}</span>
              </div>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.8rem", opacity: 0.7 }}>
            ✦ showing representative samples from submission_xgboost output
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

  </div>
)}

{/* ── PROJECT 4: Income — left text, right image ── */}
{activeProject === 4 && (
  <div>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "500px" }}>
    <div style={{ padding: "3rem 2rem 2rem 2.5rem", overflowY: "auto" }}>
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#5585BE", marginBottom: "1.5rem" }}>꒰ Income Distribution ꒱</p>
      {[
        { label: "Task", text: "Analyze customer income distributions and communicate statistical insights to non-technical stakeholders." },
        { label: "My Role", bullets: ["Created visualizations and evaluated statistical models", "Interpreted findings across educational groups", "Translated technical results into actionable insights for managers"] },
        { label: "Key Outcome", text: "Found income distributions were right-skewed and that Gamma/Exponential distributions fit better than Normal." },
        { label: "What I Learned", text: "Practical statistical modelling techniques and how to communicate findings through visualisation and stakeholder-focused interpretation." },
      ].map(item => (
        <div key={item.label} style={{ marginBottom: "1.2rem" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5585BE", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.label}</p>
          {"bullets" in item ? (
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {item.bullets!.map(point => (
                <li key={point} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "0.2rem", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "#5585BE", flexShrink: 0 }}>·</span>{point}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text-muted)" }}>{item.text}</p>
          )}
        </div>
      ))}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
        {["R", "ggplot2", "Bootstrap Sampling", "Statistical Modelling"].map(t => (
          <span key={t} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem", background: "#DDEAF8", border: "1px solid #BEDAF2", padding: "3px 9px", color: "#5585BE" }}>{t}</span>
        ))}
      </div>
    </div>
    <div style={{ background: "var(--cream-dark)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <img src="/Hero image - statistic.png" alt="Income Distribution QQ Plot" style={{ width: "100%", objectFit: "contain" }} />
    </div>
  </div>

    {/* ── STATISTICAL INSIGHTS ── */}
<div style={{ padding: "2rem 2.5rem 3rem", borderTop: "1px solid var(--border-color)" }}>

  <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem", color: "#5585BE", marginBottom: "2rem" }}>
    ·* statistical insights
  </p>

  {/* ── Income Distribution ── */}
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#5585BE", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Income Distribution</p>
      <div style={{ height: "1px", flex: 1, background: "#5585BE", opacity: 0.2 }} />
    </div>
    <div style={{ transform: "rotate(-0.5deg)" }}>
      <div style={{ background: "#fff", border: "1px solid #BEDAF2", overflow: "hidden" }} className="paper-shadow">
        <div style={{ background: "#BEDAF2", height: "8px" }} />
        <img src="/Income Distribution.png" alt="Income Distribution" style={{ width: "100%", display: "block", objectFit: "contain", background: "#fff", padding: "0.5rem" }} />
        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid #BEDAF2" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Income Distribution.png</p>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
            Most customers fall within lower income ranges, while a small number of high-income customers create a long right tail in the distribution.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* ── Income by Education ── */}
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#5585BE", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Income by Education</p>
      <div style={{ height: "1px", flex: 1, background: "#5585BE", opacity: 0.2 }} />
    </div>
    <div style={{ transform: "rotate(0.4deg)" }}>
      <div style={{ background: "#fff", border: "1px solid #BEDAF2", overflow: "hidden" }} className="paper-shadow">
        <div style={{ background: "#BEDAF2", height: "8px" }} />
        <img src="/Income Distribution base on different education.png" alt="Income by Education" style={{ width: "100%", display: "block", objectFit: "contain", background: "#fff", padding: "0.5rem" }} />
        <div style={{ padding: "0.6rem 0.8rem 0.7rem", background: "var(--cream)", borderTop: "1px solid #BEDAF2" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", opacity: 0.6 }}>Income Distribution base on different education.png</p>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
            Income patterns vary across education levels, with postgraduate groups generally concentrated at higher income ranges.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* ── Distribution Fit Analysis ── */}
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#5585BE", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Distribution Fit Analysis</p>
      <div style={{ height: "1px", flex: 1, background: "#5585BE", opacity: 0.2 }} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.8rem" }}>
      {[
        { file: "QQplot for normal model.png", label: "QQplot for normal model.png", desc: "Poor fit due to strong deviation from the theoretical line.", rotate: "-0.6deg", verdict: "✗ Poor", verdictColor: "#C27088" },
        { file: "QQplot for Gamma distribution.png", label: "QQplot for Gamma distribution.png", desc: "Closely follows observed data and captures skewness effectively.", rotate: "0.5deg", verdict: "✓ Good", verdictColor: "#5A8060" },
        { file: "QQplot for exponential distribution.png", label: "QQplot for exponential distribution.png", desc: "Performs similarly to Gamma and provides a strong representation of the data.", rotate: "-0.4deg", verdict: "✓ Good", verdictColor: "#5A8060" },
      ].map((item) => (
        <div key={item.file} style={{ transform: `rotate(${item.rotate})` }}>
          <div style={{ background: "#fff", border: "1px solid #BEDAF2", overflow: "hidden" }} className="paper-shadow">
            <div style={{ background: "#BEDAF2", height: "8px" }} />
            <img src={`/${item.file}`} alt={item.label} style={{ width: "100%", display: "block", maxHeight: "160px", objectFit: "contain", background: "#fff" }} />
            <div style={{ padding: "0.5rem 0.7rem 0.6rem", background: "var(--cream)", borderTop: "1px solid #BEDAF2" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2rem" }}>
                <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.68rem", color: "var(--text-muted)", margin: 0, opacity: 0.6 }}>{item.label}</p>
                <span style={{ fontFamily: "var(--font-caveat)", fontSize: "0.75rem", color: item.verdictColor, flexShrink: 0, marginLeft: "0.3rem" }}>{item.verdict}</span>
              </div>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ── Bootstrap Estimation ── */}
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#5585BE", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>Bootstrap Estimation</p>
      <div style={{ height: "1px", flex: 1, background: "#5585BE", opacity: 0.2 }} />
    </div>
    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: "1rem" }}>
      Bootstrap resampling was used to estimate income percentiles and confidence intervals without relying on strict distribution assumptions.
    </p>
    <div style={{ transform: "rotate(0.3deg)" }}>
      <div style={{ background: "#fff", border: "1px solid #BEDAF2", overflow: "hidden" }} className="paper-shadow">
        <div style={{ background: "#BEDAF2", height: "8px" }} />
        <div style={{ background: "#EDF4FB", padding: "1.2rem 1.4rem" }}>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.85rem", color: "#5585BE", marginBottom: "1rem" }}>Bootstrap 95% CI — 80th Percentile ·*</p>
          {[
            { model: "Normal", ci: "[140.4, 184.2]", note: "widest interval", star: false },
            { model: "Gamma", ci: "[123.5, 162.3]", note: "best fit ★", star: true },
            { model: "Exponential", ci: "[124.7, 163.3]", note: "strong fit", star: false },
            { model: "Sample (no model)", ci: "[116.1, 172.7]", note: "model-free", star: false },
          ].map((row) => (
            <div key={row.model} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", alignItems: "center", marginBottom: "0.6rem", paddingBottom: "0.6rem", borderBottom: "1px solid #DDEAF8" }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", color: row.star ? "#5585BE" : "var(--text-muted)", fontWeight: row.star ? 500 : 400 }}>{row.model}</span>
              <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>{row.ci}</span>
              <span style={{ fontFamily: "var(--font-caveat)", fontSize: "0.78rem", color: row.star ? "#5585BE" : "var(--text-muted)", opacity: row.star ? 1 : 0.7 }}>{row.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* ── Manager Takeaways ── */}
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
      <div style={{ height: "1px", width: "24px", background: "#5585BE", opacity: 0.5 }} />
      <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>ﾟ｡ Manager Takeaways ·*</p>
      <div style={{ height: "1px", flex: 1, background: "#5585BE", opacity: 0.2 }} />
    </div>
    <div style={{ border: "2px solid #BEDAF2", background: "#EDF4FB", padding: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* Key Findings */}
        <div>
          <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 500, color: "#5585BE", marginBottom: "1rem", letterSpacing: "0.01em" }}>Key Findings</p>
          {[
            "Most customers belong to lower income brackets, with a small number of high-income outliers.",
            "Income distributions are strongly right-skewed and do not follow a normal distribution.",
            "Gamma and Exponential models provide a substantially better fit than Normal models.",
            "The estimated 80th percentile income falls around $140k–$150k.",
            "Bootstrap analysis provides a reliable uncertainty range for decision-making.",
          ].map((point, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ color: "#5585BE", flexShrink: 0, fontFamily: "var(--font-caveat)", fontSize: "0.9rem", marginTop: "1px" }}>·*</span>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.82rem", lineHeight: 1.75, color: "var(--text-primary)", margin: 0 }}>{point}</p>
            </div>
          ))}
        </div>
        {/* Business Impact */}
        <div>
          <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 500, color: "#5585BE", marginBottom: "1rem", letterSpacing: "0.01em" }}>Business Impact</p>
          <div style={{ background: "#fff", border: "1px solid #BEDAF2", padding: "1.2rem 1.4rem" }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.83rem", lineHeight: 1.85, color: "var(--text-muted)", margin: 0 }}>
              Customer income is highly unevenly distributed. Segmenting customers by income level rather than relying on average income may provide more accurate targeting and planning decisions.
            </p>
          </div>
          {/* 80th percentile highlight */}
          <div style={{ marginTop: "1rem", background: "#BEDAF2", padding: "1rem 1.4rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 400, color: "#5585BE", margin: 0, lineHeight: 1 }}>$143k</p>
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#5585BE", margin: "0 0 0.2rem" }}>Est. 80th Percentile</p>
              <p style={{ fontFamily: "var(--font-caveat)", fontSize: "0.8rem", color: "#5585BE", opacity: 0.75, margin: 0 }}>Gamma model · bootstrap CI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</div> 
)}

</div>
</div>

      )}
    </>
  );
}
