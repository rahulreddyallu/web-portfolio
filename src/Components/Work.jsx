import React from 'react';
import '../Styles/Work.css';

// Project data - update this with your actual projects
const projects = [
  {
    id: 1,
    title: 'QuantM10 Trading Bot',
    url: 'https://github.com/yourusername/quantm10',
    status: 'In Progress',
    description: 'An algorithmic trading bot leveraging machine learning for market signal generation and automated execution strategies.',
    tags: ['Python', 'Machine Learning', 'FinTech', 'Trading APIs']
  },
  {
    id: 2,
    title: 'SaaS Integration Platform',
    url: 'https://github.com/yourusername/saas-integration',
    status: 'Completed',
    description: 'Enterprise-grade integration platform managing data flows between multiple SaaS vendors and client systems.',
    tags: ['API Integration', 'Data Migration', 'Enterprise Software']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    url: null,
    status: 'Live',
    description: 'Personal portfolio website showcasing projects and professional experience, built with modern web technologies.',
    tags: ['React', 'JavaScript', 'Responsive Design']
  }
];

export default function Work() {
  return (
    <div className="Work">
      <div className="work-section">
        <h2 id="work-heading">My Work</h2>
        <p className="work-intro">
          Here are some projects I've been working on. Each one represents a unique challenge 
          and an opportunity to learn and grow as a developer and analyst.
        </p>

        <div className="project-list" role="list">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
              role="listitem"
            >
              {/* Project Title */}
              <h3 className="project-title">
                {project.url ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>

              {/* Status Badge */}
              <span 
                className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}
                aria-label={`Project status: ${project.status}`}
              >
                {project.status}
              </span>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="project-tags" role="list" aria-label="Technologies used">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="tag"
                    role="listitem"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
