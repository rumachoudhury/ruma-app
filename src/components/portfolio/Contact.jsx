import { useState } from "react";
import { PROFILE as profile } from "../../data/projects";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New portfolio message from ${formData.get("name")}`);
    formData.append("from_name", "Ruma Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" required />
            </label>
            <button className="primary-button contact-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"} <Arrow />
            </button>
            <p className={`form-status ${status}`} role="status" aria-live="polite">
              {status === "success" && "Message sent. Thank you for reaching out."}
              {status === "error" && `Something went wrong. Email me directly at ${profile.email}.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
