import React from "react";
import { Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/data/projects";

export default function Nav() {
  const link =
    "min-h-[44px] inline-flex items-center text-slate-400 hover:text-indigo-400 transition-colors";
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10 text-white">
      <nav className="flex items-center justify-between px-6 md:px-10 h-14">
        <a
          href="#top"
          className="font-heading font-extrabold tracking-tight text-sm uppercase bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Ruma Choudhury
        </a>
        <div className="flex items-center gap-5 md:gap-7 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a className={link} href="#work">
            Work
          </a>
          <a className={`${link} hidden sm:inline-flex`} href="#process">
            Process
          </a>
          <a className={link} href="#contact">
            Contact
          </a>
          <a
            className={link}
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            className={link}
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
