import { PROFILE as profile } from "../../data/projects";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-top">
          <p className="status">
            <span /> Available for Collaboration
          </p>
          <p>
            NY <b>—</b>{" "}
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
        <div className="contact-content">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Let&apos;s build something useful.</h2>
            <p className="contact-copy">
              Have a product idea, a project in progress, or a problem to solve?
              I&apos;d love to hear what you&apos;re working on.
            </p>
          </div>
          <a className="email-link" href={`mailto:${profile.email}`}>
            Email Me <Arrow />
            <small>{profile.email}</small>
          </a>
        </div>
      </div>
    </section>
  );
}
