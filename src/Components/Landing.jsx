import React from 'react';
import { Link } from 'react-router-dom';
import Work from './Work';
import '../Styles/Landing.css';

export default function Landing() {
  return (
    <div className="Landing">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <h1 id="hero-heading">Hi, I'm Rahul Reddy Allu</h1>
          <p className="hero-tagline">
            A passionate Business Analyst and developer crafting engaging digital experiences 
            with a focus on SaaS integrations and FinTech innovation.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="hero-actions">
            <a 
              href="https://github.com/rahulreddyallu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn"
              aria-label="Visit my GitHub profile"
            >
              My GitHub
            </a>
            
            <a 
              href="/path-to-your-cv.pdf" 
              download
              className="action-btn"
              aria-label="Download my CV"
            >
              Download CV
            </a>
            
            <Link 
              to="/contact" 
              className="action-btn"
              aria-label="Go to contact page"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="featured-work" aria-labelledby="work-heading">
        <Work />
      </section>
    </div>
  );
}
