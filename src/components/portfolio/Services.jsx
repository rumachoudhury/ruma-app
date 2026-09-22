const services = [
  [
    "01",
    "Frontend Development",
    "High-performance, SEO-friendly interfaces with Next.js and React, built to scale with your product.",
  ],
  [
    "02",
    "Responsive Design",
    "Mobile-first experiences that feel considered and effortless across every screen size.",
  ],
  [
    "03",
    "API Development",
    "RESTful APIs with thoughtful authentication, validation, documentation, and maintainable structure.",
  ],
  [
    "04",
    "Database Design",
    "Efficient MongoDB schemas and data flows designed for reliable, growing applications.",
  ],
  [
    "05",
    "UI/UX Implementation",
    "Pixel-conscious interfaces translated into interactive products with clear, useful motion.",
  ],
  [
    "06",
    "Performance Optimization",
    "Faster websites through code splitting, sensible architecture, and focused performance work.",
  ],
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My Services</p>
          <h2>Useful by design.</h2>
        </div>
        <span className="index-label">03 / Services</span>
      </div>
      <div className="services-grid">
        {services.map(([number, title, description]) => (
          <article className="service-item" key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
