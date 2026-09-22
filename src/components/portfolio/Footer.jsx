import { PROFILE as profile } from "../../data/projects";

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Ruma.dev</strong>
          <p>Building useful digital experiences, one line at a time.</p>
        </div>
        <div className="footer-socials" aria-label="Social links">
          <ExternalLink className="social-link" href={profile.github}>
            GH
          </ExternalLink>
          <ExternalLink className="social-link" href={profile.linkedin}>
            in
          </ExternalLink>
          <a className="social-link" href={`mailto:${profile.email}`}>
            @
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {profile.name}</span>
          <span>Made with care · Full-Stack Developer</span>
        </div>
      </div>
    </footer>
  );
}
