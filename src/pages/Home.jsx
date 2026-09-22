import { useState } from "react";
import About from "../components/portfolio/About";
import Expertise from "../components/portfolio/Expertise";
import Projects from "../components/portfolio/Projects";
import Services from "../components/portfolio/Services";
import { PROFILE as profile } from "../data/projects";

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
  const [isLight, setIsLight] = useState(false);

  return (
    <main className={`portfolio ${isLight ? "light-theme" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#top">
          RUMA<span>/</span>DEV
        </a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#services">Services</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
          <a
            className="resume-nav-link"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLight((current) => !current)}
            aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
          >
            {isLight ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="status">
            <span /> Available for Collaboration
          </p>
          <h1>
            Hi, I&apos;m
            <br />
            <em>Ruma Choudhury</em>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </h1>
          <p className="role">
            MERN Stack Developer
          </p>
          <p className="hero-copy">
            I create modern, scalable web applications using MongoDB, Express,
            React, and Node.js. Passionate about clean code and exceptional
            user experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              View Projects <Arrow />
            </a>
            <ExternalLink className="outline-button" href={profile.github}>
              GitHub
            </ExternalLink>
            <ExternalLink className="outline-button" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
            <a
              className="outline-button"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Contact Me <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-ring ring-one" />
          <div className="hero-ring ring-two" />
          <div className="hero-core" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
          <div className="hero-label">
            <span>FULL STACK</span>
            <b>SYSTEMS</b>
            <small>RUMA / 001</small>
          </div>
        </div>
      </section>

      <About />
      <Expertise />
      <Services />

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Built to be useful.</h2>
          </div>
          <span className="index-label">Index 01—06</span>
        </div>
        <Projects />
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
