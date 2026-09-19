const profile = {
  name: "Ruma Choudhury",
  role: "Full-Stack Developer",
  stack: "MERN Stack · React.js · Next.js · TypeScript",
  location: "New York, United States",
  email: "rumachoudhury7862@gmail.com",
  github: "https://github.com/rumachoudhury",
  linkedin: "https://www.linkedin.com/in/ruma-choudhury",
};

const projects = [
  {
    id: "01",
    title: "full-stack-havenfield",
    summary:
      "A full-stack platform engineered end-to-end with TypeScript across client, server, and data layer — a typed, cohesive system from database schema to UI.",
    tech: ["TypeScript", "Next.js", "Node.js"],
    url: "https://github.com/rumachoudhury/full-stack-havenfield",
    accent: "indigo",
  },
  {
    id: "02",
    title: "Sora-LandingPage",
    summary:
      "A calm, mindful productivity workspace landing page — scroll-driven choreography over a restrained, responsive interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/rumachoudhury/Sora-LandingPage",
    accent: "violet",
  },
  {
    id: "03",
    title: "bright-path-therapy",
    summary:
      "A full-stack healthcare platform: appointment booking, contact management, and an admin dashboard built on Next.js, Express, and MongoDB.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    url: "https://github.com/rumachoudhury/bright-path-therapy",
    accent: "cyan",
  },
  {
    id: "04",
    title: "monorepo-ecommerce-app",
    summary:
      "A fullstack ecommerce monorepo on Turborepo with an AI Assistant integration wired through n8n automation pipelines.",
    tech: ["Next.js", "Turborepo", "TypeScript", "n8n"],
    url: "https://github.com/rumachoudhury/monorepo-ecommerce-app",
    accent: "pink",
  },
  {
    id: "05",
    title: "school-management-dashboard",
    summary:
      "An operations dashboard for school administration — students, scheduling, and reporting composed in a fully typed frontend.",
    tech: ["TypeScript", "React"],
    url: "https://github.com/rumachoudhury/school-management-dashboard",
    accent: "blue",
  },
  {
    id: "06",
    title: "single-vendor-commerce",
    summary:
      "A single-vendor commerce stack split across a typed TypeScript backend/client and a Python AI service — one platform, three codebases.",
    tech: ["TypeScript", "Python", "Express", "React"],
    url: "https://github.com/rumachoudhury/single-vendor-commerce",
    accent: "orange",
  },
  {
    id: "07",
    title: "crm-dashboard",
    summary:
      "A CRM dashboard for pipeline and contact management — dense data rendered legible through deliberate interface structure.",
    tech: ["JavaScript", "React", "Node.js"],
    url: "https://github.com/rumachoudhury/crm-dashboard",
    accent: "green",
  },
  {
    id: "08",
    title: "ai-form-builder",
    summary:
      "An AI-assisted form builder, built as paired client and backend repositories — schema generation from natural-language prompts.",
    tech: ["TypeScript", "React", "Node.js"],
    url: "https://github.com/rumachoudhury/ai-form-builder",
    accent: "teal",
  },
];

const panels = [
  [
    "01 — Problem",
    "A therapy practice ran scheduling, client records, and inquiries out of scattered spreadsheets. Double-booked sessions and lost inquiries were routine, and no single person could see the state of the week.",
    "indigo",
  ],
  [
    "02 — Architecture",
    "A Next.js frontend served by an Express + MongoDB API. Appointments, contacts, and admin views share one typed data layer; the dashboard composes booking state from a single source of truth rather than parallel client copies.",
    "violet",
  ],
  [
    "03 — Resolution",
    "Staff book and manage appointments in one dashboard, inquiries flow into a contact pipeline, and double-booking is prevented at the data layer — the UI can no longer present a taken slot as free.",
    "cyan",
  ],
];

const codeLines = [
  "// appointments.ts — conflict guarded at the data layer",
  "export async function createAppointment(input: AppointmentInput) {",
  "  const conflict = await db.appointments.findOne({",
  "    therapistId: input.therapistId,",
  "    date: input.date,",
  "    overlaps: { start: input.start, end: input.end },",
  "  });",
  '  if (conflict) throw new ConflictError("SLOT_TAKEN");',
  "  return db.appointments.insert(normalize(input));",
  "}",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Home() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#top">
          RUMA<span>/</span>DEV
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="status">
            <span /> Available for Collaboration
          </p>
          <h1>
            Ruma
            <br />
            <em>Choudhury</em>
          </h1>
          <p className="role">
            {profile.role} <b>—</b> {profile.stack}
          </p>
          <p className="hero-copy">
            I build typed, end-to-end web systems — from the database schema to
            the last pixel of the interface.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              See the work <Arrow />
            </a>
            <ExternalLink className="outline-button" href={profile.github}>
              GitHub
            </ExternalLink>
            <ExternalLink className="outline-button" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
          <span>
            FULL
            <br />
            STACK
            <br />
            SYSTEMS
          </span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Built to be useful.</h2>
          </div>
          <span className="index-label">Index 01—08</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ExternalLink
              className={`project-card ${project.accent}`}
              href={project.url}
              key={project.id}
            >
              <div className="project-art" aria-hidden="true">
                <span>{project.id}</span>
                <div />
              </div>
              <div className="project-card-body">
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <span>{project.id}</span>
                </div>
                <p>{project.summary}</p>
                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <b className="project-link">
                  View repository <Arrow />
                </b>
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>

      <section className="logic-section" id="process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The Logic Breakdown</p>
            <h2>Case: bright-path-therapy</h2>
          </div>
          <span className="index-label">A closer look</span>
        </div>
        <div className="logic-track">
          {panels.map(([tag, body, color]) => (
            <article className={`logic-panel ${color}`} key={tag}>
              <p>{tag}</p>
              <span>{body}</span>
            </article>
          ))}
          <article className="logic-panel artifact">
            <p>04 — Artifact</p>
            <pre>
              {codeLines.map((line) => (
                <code
                  className={line.startsWith("//") ? "comment" : ""}
                  key={line}
                >
                  {line}
                  {"\n"}
                </code>
              ))}
            </pre>
          </article>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-top">
          <p className="status">
            <span /> Available for Collaboration
          </p>
          <p>
            {profile.location} <b>—</b>{" "}
            <time>
              {new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "America/New_York",
              }).format(new Date())}
            </time>{" "}
            local
          </p>
        </div>
        <a className="email-link" href={`mailto:${profile.email}`}>
          Email Me <Arrow />
          <small>({profile.email})</small>
        </a>
        <div className="footer-links">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href={`mailto:${profile.email}`}>Email</a>
          <span>New York</span>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {profile.name}</span>
          <span>Full-Stack · MERN · Next.js · TypeScript</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
