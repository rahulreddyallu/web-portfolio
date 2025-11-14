import React from 'react';
import Work from './Work';
import '../Styles/Landing.css';

export default function Landing() {
  return (
    <main className="Landing" role="main" aria-label="Home Landing">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Rahul Reddy Allu</h1>
          <p className="hero-tagline">
            A passionate web developer crafting engaging digital experiences.<br/>
            Explore my work, get to know me, and let’s connect!
          </p>
          <div className="hero-actions">
            <a href="https://github.com/rahulreddyallu" className="action-btn" target="_blank" rel="noopener noreferrer">
              My GitHub
            </a>
            <a href="/CV" className="action-btn" aria-label="Download CV">
              CV
            </a>
            <a href="/contact" className="action-btn" aria-label="Contact Rahul">
              Contact
            </a>
          </div>
        </div>
      </section>
      <section className="featured-work" aria-label="Featured Work">
        <Work />
      </section>
    </main>
  );
}
