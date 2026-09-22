const expertise = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "shadcn/ui",
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My Expertise</p>
          <h2>Tools for the work.</h2>
        </div>
        <span className="index-label">02 / Expertise</span>
      </div>
      <div className="expertise-list">
        {expertise.map((skill, index) => (
          <div className="expertise-item" key={skill}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{skill}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
