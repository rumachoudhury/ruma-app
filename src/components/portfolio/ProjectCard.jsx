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

export default function ProjectCard({ project }) {
	return (
		<article className={`project-card ${project.accent}`}>
			<div className={`project-art ${project.image ? "has-image" : ""}`}>
				{project.image && (
					<img src={project.image} alt={`${project.title} project preview`} />
				)}
				<span>{project.id}</span>
				{!project.image && <div />}
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
				<div className="project-actions">
					<ExternalLink className="project-link" href={project.url}>
						{project.repoUrl ? "View live project" : "View repository"} <Arrow />
					</ExternalLink>
					{project.repoUrl && (
						<ExternalLink className="project-link secondary" href={project.repoUrl}>
							Code <Arrow />
						</ExternalLink>
					)}
				</div>
			</div>
		</article>
	);
}
