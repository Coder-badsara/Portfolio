import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, ChevronDown, Code2, Database, Server, Terminal, Award, GraduationCap, Briefcase, Menu, X, ArrowRight } from "lucide-react";

const COLORS = {
  bg: "#070b09",
  bgCard: "#0d1410",
  bgCardHover: "#111a15",
  bgSection: "#0a0e0c",
  accent: "#00e87a",
  accentDim: "#00c065",
  accentGlow: "rgba(0,232,122,0.15)",
  accentBorder: "rgba(0,232,122,0.25)",
  textPrimary: "#e8f0ea",
  textSecondary: "#7a9982",
  textMuted: "#4a6352",
  border: "rgba(255,255,255,0.06)",
  borderAccent: "rgba(0,232,122,0.3)",
};

const style = {
  bg: { background: COLORS.bg, color: COLORS.textPrimary, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" },
  card: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12 },
  cardHover: { background: COLORS.bgCardHover, border: `1px solid ${COLORS.borderAccent}`, borderRadius: 12 },
  accent: { color: COLORS.accent },
  accentBg: { background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, color: COLORS.accent },
  mono: { fontFamily: "'JetBrains Mono', 'Fira Code', monospace" },
  muted: { color: COLORS.textSecondary },
  mutedDark: { color: COLORS.textMuted },
};

function Badge({ children, variant = "default" }) {
  const variants = {
    default: { background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, color: COLORS.accent },
    muted: { background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary },
    skill: { background: "rgba(0,232,122,0.08)", border: `1px solid rgba(0,232,122,0.2)`, color: COLORS.accent },
  };
  return (
    <span style={{ ...variants[variant], borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 500, display: "inline-block", ...style.mono }}>
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
      <span style={{ ...style.mono, color: COLORS.accent, fontSize: 13 }}>// {children}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${COLORS.accentBorder}, transparent)` }} />
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 style={{ fontSize: 36, fontWeight: 700, color: COLORS.textPrimary, marginBottom: 4, letterSpacing: "-0.5px" }}>{children}</h2>;
}

function SkillCard({ category, icon: Icon, skills }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style.card,
        padding: "20px 22px",
        transition: "all 0.25s",
        border: hovered ? `1px solid ${COLORS.borderAccent}` : `1px solid ${COLORS.border}`,
        background: hovered ? COLORS.bgCardHover : COLORS.bgCard,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={16} color={COLORS.accent} />
        </div>
        <span style={{ fontWeight: 600, fontSize: 14, color: COLORS.textPrimary }}>{category}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skills.map((s) => <Badge key={s} variant="muted">{s}</Badge>)}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, num, repoUrl }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style.card,
        padding: "24px 26px",
        transition: "all 0.3s",
        border: hovered ? `1px solid ${COLORS.borderAccent}` : `1px solid ${COLORS.border}`,
        background: hovered ? COLORS.bgCardHover : COLORS.bgCard,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 16, right: 16, ...style.mono, fontSize: 48, fontWeight: 700, color: "rgba(0,232,122,0.04)", lineHeight: 1 }}>
        {String(num).padStart(2, "0")}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Server size={18} color={COLORS.accent} />
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: 18, color: COLORS.textPrimary, marginBottom: 2 }}>{title}</h3>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {tech.map((t) => <Badge key={t} variant="skill">{t}</Badge>)}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: 14 }}>
        {description.map((d, i) => (
          <p key={i} style={{ color: COLORS.textSecondary, fontSize: 14, lineHeight: 1.7, marginBottom: i < description.length - 1 ? 8 : 0 }}>
            <span style={{ color: COLORS.accent, ...style.mono, marginRight: 6 }}>→</span>{d}
          </p>
        ))}
      </div>
      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <button
          onClick={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
          style={{
            display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer",
            background: "transparent", border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary, transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accentBorder; e.currentTarget.style.color = COLORS.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textSecondary; }}
        >
          <Github size={13} /> GitHub
        </button>
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle, period, detail, isLast }) {
  return (
    <div style={{ display: "flex", gap: 18 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: COLORS.accent, border: `3px solid ${COLORS.bg}`, outline: `1px solid ${COLORS.accentBorder}`, marginTop: 4 }} />
        {!isLast && <div style={{ width: 1, flex: 1, background: COLORS.border, marginTop: 6 }} />}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : 28 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 2 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, color: COLORS.textPrimary }}>{title}</h3>
          <span style={{ ...style.mono, fontSize: 12, ...style.accentBg, padding: "2px 8px", borderRadius: 5 }}>{period}</span>
        </div>
        <p style={{ color: COLORS.accent, fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{subtitle}</p>
        {detail && <p style={{ color: COLORS.textSecondary, fontSize: 13, lineHeight: 1.6 }}>{detail}</p>}
      </div>
    </div>
  );
}

function CertCard({ title, issuer, date }) {
  return (
    <div style={{ ...style.card, padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Award size={18} color={COLORS.accent} />
      </div>
      <div>
        <h3 style={{ fontWeight: 600, fontSize: 15, color: COLORS.textPrimary, marginBottom: 3 }}>{title}</h3>
        <p style={{ color: COLORS.textSecondary, fontSize: 13 }}>{issuer}</p>
        <p style={{ ...style.mono, color: COLORS.textMuted, fontSize: 12, marginTop: 4 }}>{date}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const typeTarget = "Backend Developer | Django Specialist";
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1KMa9SwEoi7AwDdtQLG5nmlScxdyvuy8j";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i <= typeTarget.length) { setTypedText(typeTarget.slice(0, i)); i++; }
      else clearInterval(iv);
    }, 55);
    return () => clearInterval(iv);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const skills = [
    { category: "Languages & Frameworks", icon: Code2, skills: ["Python", "Django", "C++", "HTML", "Bootstrap"] },
    { category: "Backend Development", icon: Server, skills: ["REST APIs", "JWT Auth", "CRUD Operations", "Django ORM", "Middleware"] },
    { category: "Databases", icon: Database, skills: ["MySQL", "MySQL Workbench", "DataGrip", "Relational Schemas"] },
    { category: "Developer Tools", icon: Terminal, skills: ["Git", "GitHub", "Postman", "VS Code", "Requestly"] },
  ];

  const projects = [
    {
      num: 1, title: "Store Backend",
      repoUrl: "https://github.com/Coder-badsara/store-backend/tree/master/storefront",
      tech: ["Django", "REST API", "MySQL", "Postman"],
      description: [
        "Built scalable e-commerce backend with RESTful APIs for user authentication, product management, cart handling, and order processing.",
        "Implemented secure JWT-based authorization, modular architecture, and full CRUD operations with business logic separation.",
        "Designed relational database models and validated all API endpoints using Postman.",
      ],
    },
    {
      num: 2, title: "Employee Management System",
      repoUrl: "https://github.com/Coder-badsara/employees-management",
      tech: ["Django", "MySQL", "Django ORM"],
      description: [
        "Built a robust HR management platform with Django and MySQL, focusing on structured data integrity and efficient record-keeping.",
        "Designed a relational schema to manage complex relationships between employees, departments, and payroll records.",
        "Leveraged Django ORM for complex queries, improving maintainability and dramatically reducing raw SQL usage.",
      ],
    },
    {
      num: 3, title: "Order Management System",
      repoUrl: "https://github.com/Coder-badsara/Order-Management",
      tech: ["Django", "MySQL", "Backend"],
      description: [
        "Developed a centralized platform to automate the end-to-end order lifecycle from request to fulfillment.",
        "Architected a relational database managing high-volume transactional data, including many-to-many relationships between Orders and Products.",
      ],
    },
  ];

  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.03)", border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "12px 14px", color: COLORS.textPrimary, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" };

  return (
    <div style={style.bg}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Background grid */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,232,122,0.06) 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
      <div style={{ position: "fixed", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(7,11,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
        transition: "all 0.3s",
        padding: "0 5%",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ ...style.mono, color: COLORS.accent, fontWeight: 700, fontSize: 18 }}>UB<span style={{ color: COLORS.textMuted }}>.dev</span></span>
          <div style={{ display: "flex", gap: 4 }} className="nav-desktop">
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)}
                style={{ background: "none", border: "none", color: COLORS.textSecondary, fontSize: 14, cursor: "pointer", padding: "6px 12px", borderRadius: 6, fontFamily: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.textSecondary}
              >{l}</button>
            ))}
          </div>
          <button
            onClick={() => window.open("mailto:coderbadsara@gmail.com")}
            style={{ ...style.mono, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, color: COLORS.accent, borderRadius: 8, padding: "8px 18px", fontSize: 13, cursor: "pointer", fontWeight: 600, transition: "all 0.2s" }}
          >Hire Me</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 5% 60px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ ...style.accentBg, borderRadius: 20, padding: "5px 14px", fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.accent, display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to Internship & Fresher Backend Roles
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 16 }}>
            Hi, I'm <span style={{ color: COLORS.accent }}>Umesh</span><br />
            <span style={{ color: COLORS.textSecondary }}>Badsara.</span>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
            <span style={{ ...style.mono, color: COLORS.textMuted, fontSize: "clamp(14px, 2vw, 18px)" }}>$</span>
            <span style={{ ...style.mono, color: COLORS.accent, fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 500 }}>{typedText}<span style={{ animation: "blink 1s infinite", color: COLORS.accent }}>|</span></span>
          </div>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: COLORS.textSecondary, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
            I build <span style={{ color: COLORS.textPrimary, fontWeight: 500 }}>scalable backend systems</span>, REST APIs, and <span style={{ color: COLORS.textPrimary, fontWeight: 500 }}>database-driven web applications</span> using Django and MySQL.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("Projects")}
              style={{ background: COLORS.accent, color: "#070b09", border: "none", borderRadius: 9, padding: "12px 26px", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 7, transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            ><Code2 size={16} /> View Projects</button>
            <button
              onClick={() => scrollTo("Contact")}
              style={{ background: "transparent", color: COLORS.textPrimary, border: `1px solid ${COLORS.border}`, borderRadius: 9, padding: "12px 26px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accentBorder; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textPrimary; }}
            >Contact Me</button>
            <button
              onClick={() => window.open(resumeUrl, "_blank", "noopener,noreferrer")}
              style={{ background: "transparent", color: COLORS.textSecondary, border: `1px solid ${COLORS.border}`, borderRadius: 9, padding: "12px 26px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 7, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accentBorder; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textSecondary; }}
            ><Download size={15} /> Download Resume</button>
          </div>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: 16, marginTop: 56, flexWrap: "wrap" }}>
            {[["3+", "Backend Projects"], ["Django", "Primary Framework"], ["MySQL", "Database Stack"], ["REST APIs", "Core Skill"]].map(([num, label]) => (
              <div key={label} style={{ ...style.card, padding: "14px 20px", textAlign: "center", minWidth: 110 }}>
                <div style={{ ...style.mono, fontSize: 18, fontWeight: 700, color: COLORS.accent }}>{num}</div>
                <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>about_me</SectionLabel>
          <SectionTitle>Who I Am</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 36 }}>
            <div>
              <p style={{ color: COLORS.textSecondary, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                I'm a <span style={{ color: COLORS.textPrimary, fontWeight: 600 }}>Computer Science student</span> and aspiring backend developer passionate about building systems that are structured, secure, and scalable. I specialize in <span style={{ color: COLORS.accent }}>Django</span>, REST APIs, authentication systems, and relational databases.
              </p>
              <p style={{ color: COLORS.textSecondary, fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
                I enjoy designing clean <span style={{ color: COLORS.textPrimary, fontWeight: 600 }}>database schemas</span>, writing maintainable backend code, and building CRUD-based systems with proper authorization. I'm actively seeking opportunities as a <span style={{ color: COLORS.accent }}>Backend Developer / Django Developer</span>.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["Location", "Jaipur, Rajasthan"], ["Email", "coderbadsara@gmail.com"], ["Phone", "+91 7733957460"], ["Status", "Available for Work"]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ ...style.mono, fontSize: 12, color: COLORS.textMuted, minWidth: 70 }}>{k}:</span>
                    <span style={{ fontSize: 14, color: k === "Status" ? COLORS.accent : COLORS.textSecondary }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...style.card, padding: 28 }}>
              <div style={{ ...style.mono, fontSize: 12, color: COLORS.textMuted, marginBottom: 16, display: "flex", gap: 8 }}>
                <span style={{ color: "#e06c75" }}>●</span><span style={{ color: "#e5c07b" }}>●</span><span style={{ color: "#98c379" }}>●</span>
                <span style={{ marginLeft: 8 }}>professional_summary.py</span>
              </div>
              <div style={{ ...style.mono, fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.9 }}>
                <div><span style={{ color: "#c678dd" }}>class</span> <span style={{ color: "#61afef" }}>UmeshBadsara</span><span style={{ color: COLORS.textMuted }}>:</span></div>
                <div style={{ paddingLeft: 20 }}><span style={{ color: "#c678dd" }}>role</span> = <span style={{ color: "#98c379" }}>"Backend Developer"</span></div>
                <div style={{ paddingLeft: 20 }}><span style={{ color: "#c678dd" }}>framework</span> = <span style={{ color: "#98c379" }}>"Django"</span></div>
                <div style={{ paddingLeft: 20 }}><span style={{ color: "#c678dd" }}>database</span> = <span style={{ color: "#98c379" }}>"MySQL"</span></div>
                <div style={{ paddingLeft: 20 }}><span style={{ color: "#c678dd" }}>skills</span> = [<span style={{ color: "#98c379" }}>"REST APIs"</span>, <span style={{ color: "#98c379" }}>"Auth"</span>,</div>
                <div style={{ paddingLeft: 52 }}><span style={{ color: "#98c379" }}>"CRUD"</span>, <span style={{ color: "#98c379" }}>"ORM"</span>]</div>
                <div style={{ paddingLeft: 20 }}><span style={{ color: "#c678dd" }}>status</span> = <span style={{ color: COLORS.accent }}>"Open to Work"</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section style={{ padding: "20px 5% 80px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ ...style.card, padding: 32, borderLeft: `3px solid ${COLORS.accent}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Briefcase size={16} color={COLORS.accent} />
              <span style={{ ...style.mono, color: COLORS.accent, fontSize: 13, fontWeight: 600 }}>PROFESSIONAL SUMMARY</span>
            </div>
            <p style={{ color: COLORS.textSecondary, fontSize: 15, lineHeight: 1.9 }}>
              Fresher Backend Developer with hands-on experience in building backend systems using <span style={{ color: COLORS.textPrimary }}>Django</span> and <span style={{ color: COLORS.textPrimary }}>MySQL</span>. Skilled in developing RESTful APIs, implementing <span style={{ color: COLORS.textPrimary }}>authentication and authorization</span>, designing relational database schemas, and building CRUD-based web applications. Strong understanding of backend architecture, database relationships, and API testing using <span style={{ color: COLORS.textPrimary }}>Postman</span>. Passionate about creating scalable, secure, and maintainable backend solutions, and eager to start a career as a Django Backend Developer.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 5%", background: COLORS.bgSection, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>technical_skills</SectionLabel>
          <SectionTitle>Skills & Tools</SectionTitle>
          <p style={{ color: COLORS.textSecondary, fontSize: 15, marginBottom: 36, marginTop: 4 }}>Technologies and tools I work with to build backend systems.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
            {skills.map((s) => <SkillCard key={s.category} {...s} />)}
          </div>
          <div style={{ ...style.card, padding: "18px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>Soft Skills</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Problem-Solving", "Team Collaboration", "Adaptability", "Communication", "Eagerness to Learn"].map((s) => <Badge key={s} variant="muted">{s}</Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>backend_projects</SectionLabel>
          <SectionTitle>Projects</SectionTitle>
          <p style={{ color: COLORS.textSecondary, fontSize: 15, marginBottom: 36, marginTop: 4 }}>Backend systems I've built using Django, REST APIs, and MySQL.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "80px 5%", background: COLORS.bgSection, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>education</SectionLabel>
          <SectionTitle>Education</SectionTitle>
          <div style={{ marginTop: 36, maxWidth: 640 }}>
            <TimelineItem
              title="Bachelor of Technology (CSE)"
              subtitle="Vivekananda Institute of Technology, Jaipur, Rajasthan"
              period="2022 – 2026"
              detail="Focusing on software development, data structures, algorithms, and backend engineering. Actively building Django and MySQL-based backend projects alongside academic coursework."
            />
            <TimelineItem
              title="Senior Secondary (Science – Mathematics)"
              subtitle="Jaipur, Rajasthan"
              period="2020 – 2021"
              isLast
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>certifications</SectionLabel>
          <SectionTitle>Certifications</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 36 }}>
            <CertCard title="Understanding Generative AI for Tech Leaders" issuer="LinkedIn Learning" date="July 2025" />
            <CertCard title="Hacktoberfest Participation Certificate" issuer="Open Source Contribution — Hacktoberfest" date="October 2025" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 5%", background: COLORS.bgSection, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>get_in_touch</SectionLabel>
          <SectionTitle>Contact Me</SectionTitle>
          <p style={{ color: COLORS.textSecondary, fontSize: 15, marginBottom: 40, marginTop: 4 }}>Let's connect — I'm actively looking for backend developer opportunities.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: Phone, label: "Phone", val: "+91 7733957460", href: "tel:+917733957460" },
                { icon: Mail, label: "Email", val: "coderbadsara@gmail.com", href: "mailto:coderbadsara@gmail.com" },
                { icon: MapPin, label: "Location", val: "Jaipur, Rajasthan, India" },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} style={{ ...style.card, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color={COLORS.accent} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 1 }}>{label}</div>
                    {href ? <a href={href} style={{ fontSize: 14, color: COLORS.textSecondary, textDecoration: "none" }}>{val}</a> : <div style={{ fontSize: 14, color: COLORS.textSecondary }}>{val}</div>}
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                <a href="https://www.linkedin.com/in/umesh-badsara-7659581b5/" target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "12px 0", borderRadius: 9, background: COLORS.accentGlow, border: `1px solid ${COLORS.accentBorder}`, color: COLORS.accent, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/Coder-badsara" target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "12px 0", borderRadius: 9, background: "rgba(255,255,255,0.03)", border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
            <div style={{ ...style.card, padding: "28px 26px" }}>
              <h3 style={{ fontWeight: 600, fontSize: 16, marginBottom: 20, color: COLORS.textPrimary }}>Send a Message</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input placeholder="Your Name" style={inputStyle} onFocus={e => e.target.style.borderColor = COLORS.accentBorder} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <input placeholder="Your Email" type="email" style={inputStyle} onFocus={e => e.target.style.borderColor = COLORS.accentBorder} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <textarea placeholder="Your Message" rows={5} style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} onFocus={e => e.target.style.borderColor = COLORS.accentBorder} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <button
                  style={{ background: COLORS.accent, color: "#070b09", border: "none", borderRadius: 9, padding: "12px 0", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "opacity 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                ><ArrowRight size={16} /> Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 5%", borderTop: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, position: "relative", zIndex: 1 }}>
        <span style={{ ...style.mono, color: COLORS.textMuted, fontSize: 13 }}>Built by <span style={{ color: COLORS.accent }}>Umesh Badsara</span> — Backend Developer</span>
        <span style={{ color: COLORS.textMuted, fontSize: 13 }}>© 2025 Umesh Badsara. All rights reserved.</span>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://github.com/Coder-badsara" target="_blank" rel="noreferrer" style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.textMuted }}>
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/umesh-badsara-7659581b5/" target="_blank" rel="noreferrer" style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.textMuted }}>
            <Linkedin size={15} />
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #070b09; } ::-webkit-scrollbar-thumb { background: #1a2b20; border-radius: 3px; }
        section h1, section h2, section h3, section p { margin: 0; }
      `}</style>
    </div>
  );
}
