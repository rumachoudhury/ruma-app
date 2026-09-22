import { PROFILE as profile } from "../../data/projects";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <div>
          <p className="eyebrow">More About Me</p>
          <h2>Built with curiosity.</h2>
        </div>
        <span className="index-label">01 / About</span>
      </div>
      <div className="about-grid">
        <div className="profile-panel" aria-label="Ruma Choudhury">
          <span className="profile-initials">RC</span>
          <span className="profile-caption">Ruma / Full Stack</span>
        </div>
        <div className="about-copy">
          <h3>Hello! I&apos;m Ruma Choudhury.</h3>
          <p>
            I&apos;m a passionate MERN Stack Developer with hands-on experience
            building responsive and dynamic web applications. My journey into
            web development began with a simple curiosity about how websites
            work, and grew into a deep love for clean, scalable, user-friendly
            digital experiences.
          </p>
          <p>
            I enjoy turning complex problems into simple interfaces, learning
            new technologies, and sharing what I discover through projects and
            open-source work. I also enjoy working remotely, staying close to
            family while doing work I love.
          </p>
          <div className="about-stats">
            <strong>
              20+ <small>Projects completed</small>
            </strong>
            <strong>
              2+ <small>Years of practical experience</small>
            </strong>
          </div>
          <a
            className="outline-button"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
