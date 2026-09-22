# Ruma Choudhury | Full-Stack Developer Portfolio

Personal portfolio for **Ruma Choudhury**, a MERN Stack and Full-Stack Developer focused on React, Next.js, TypeScript, and reliable end-to-end web experiences.

The portfolio showcases selected projects, technical expertise, development services, a responsive resume, and direct contact links.

## Links

- **GitHub:** [github.com/rumachoudhury](https://github.com/rumachoudhury)
- **LinkedIn:** [linkedin.com/in/ruma-choudhury](https://www.linkedin.com/in/ruma-choudhury)
- **Resume:** [`public/resume.html`](public/resume.html)

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Full-screen hero with animated CSS artwork
- Dark and light theme toggle
- Scroll-triggered section reveal animations
- About, Expertise, Services, Projects, Contact, and Footer sections
- Screenshot previews for featured projects
- Live project and code links
- Responsive standalone resume with print support
- Reduced-motion support for accessibility
- Semantic sections, keyboard focus states, and external-link handling

## Featured Projects

| Project | Focus | Technologies |
| --- | --- | --- |
| [Full-Stack Havenfield](https://github.com/rumachoudhury/full-stack-havenfield) | Typed full-stack platform | TypeScript, Next.js, Node.js |
| [Skylight Panthers](https://skylight-panters.vercel.app/) | Base44 portfolio experience | Base44, React |
| [Digital Tech Hub](https://digital-tech-hub.vercel.app/) | Full-stack e-commerce platform | Next.js, TypeScript, Node.js, MongoDB |
| [High Paid Jobs](https://high-paid-jobs-one.vercel.app/) | Job discovery experience | React, Vercel |
| [Scale Startup](https://scale-startup-project-txlg.vercel.app/) | Startup product landing page | React, Vercel |
| [Pearl Animation Landing Page](https://gsap-animation-landing-page-pearl.vercel.app/) | Animated visual landing page | React, GSAP, Vercel |

## Tech Stack

- React 19
- Vite
- JavaScript and JSX
- CSS with responsive media queries and keyframe animation
- Intersection Observer for scroll reveals
- Space Grotesk, Manrope, and DM Mono typography
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/rumachoudhury/ruma-app.git
cd ruma-app
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
├── App.jsx                         # Application entry component
├── App.css                         # Portfolio layout, themes, and animations
├── index.css                       # Global browser defaults
├── main.jsx                        # React and Vite bootstrap
├── data/
│   └── projects.js                 # Profile and project data
├── components/portfolio/
│   ├── About.jsx                   # About section
│   ├── Contact.jsx                 # Contact CTA section
│   ├── Expertise.jsx               # Technology list
│   ├── Footer.jsx                  # Social links and copyright footer
│   ├── ProjectCard.jsx             # Reusable project card
│   ├── Projects.jsx                # Project grid
│   ├── Reveal.jsx                  # Intersection Observer reveal wrapper
│   └── Services.jsx                # Services section
└── pages/
    └── Home.jsx                    # Main page composition

public/
├── resume.html                     # Standalone printable resume
└── *.png                           # Project preview screenshots
```

## Resume

The Resume buttons open [`/resume.html`](public/resume.html), a responsive standalone resume page with print styles. Use the browser print dialog to save it as a PDF.

## Contact

**Ruma Choudhury**  
Full-Stack Developer<br />
[rumachoudhury7862@gmail.com](mailto:rumachoudhury7862@gmail.com)<br />
[GitHub](https://github.com/rumachoudhury) · [LinkedIn](https://www.linkedin.com/in/ruma-choudhury)

## License

This repository is a personal portfolio project. Project descriptions, screenshots, and brand content are presented for portfolio purposes.
