import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`Hero ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background Blobs */}
      <div className="hero-background">
        <div 
          className="blob blob-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="blob blob-2"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        <div 
          className="blob blob-3"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Rahul Reddy Allu</span>
          </h1>
          
          <p className="hero-description">
            Business Analyst & Developer specializing in{' '}
            <span className="highlight">SaaS integrations</span>,{' '}
            <span className="highlight">data analysis</span>, and{' '}
            <span className="highlight">FinTech solutions</span>.
          </p>

          <div className="hero-cta">
            <Link to="/contact" className="cta-primary">
              Get in Touch
            </Link>
            <Link to="/work" className="cta-secondary">
              View My Work
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
