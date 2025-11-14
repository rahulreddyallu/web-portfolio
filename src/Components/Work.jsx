import React from 'react';
import Hero from './Hero';
import '../Styles/Work.css';

// Example project data structure
const projects = [
  {
    title: "Portfolio Website (Current Project)",
    status: "In Progress",
    description: "Personal web portfolio – design, development, and full-stack implementation.",
    tags: ["React", "Design", "UI/UX", "Frontend"],
    url: "https://github.com/rahulreddyallu/web-portfolio"
  },
  {
    title: "Design Concepts",
    status: "Concept",
    description: "Experimental design systems and user flows for future products.",
    tags: ["Concept", "Figma", "Prototype"]
  },
  // Add more projects here with title, description, tags, and links.
];

export default function Work() {
  return (
    <main className="Work" aria-label="Work Showcase">
      <Hero />
      <section className="work-section">
        <h2>Projects & Progress</h2>
        <p className="work-intro">
          Here’s a snapshot of my work—covering design and development from ideation to implementation.
        </p>
        <div className="project-list">
          {projects.map((project, idx) => (
            <article className="project-card" key={idx}>
              <h3 className="project-title">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : project.title}
              </h3>
              <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
