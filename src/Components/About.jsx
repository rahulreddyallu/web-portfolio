import React, { useState, useEffect } from 'react';
import '../Styles/About.css';
import myImage from '../Assets/Portrait1-2.png';

export default function About() {
  // Animated gradient background
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientOpacity = Math.min(scrollY / 500, 0.3);

  return (
    <div className="About">
      {/* Animated Background */}
      <div 
        className="about-bg-gradient"
        style={{
          opacity: 0.6 + gradientOpacity,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Main Content Container */}
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1>About Me</h1>
          <p className="about-subtitle">
            Business Analyst | SaaS Integration Specialist | FinTech Enthusiast
          </p>
        </header>

        {/* Content Grid */}
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text">
            <section className="about-section">
              <h2>Who I Am</h2>
              <p>
                I'm a <strong>Business Analyst</strong> specializing in SaaS integrations and 
                enterprise database migrations. I bridge the gap between technical implementation 
                and customer success, ensuring seamless platform adoption.
              </p>
              <p>
                With a background in <strong>Civil Engineering</strong> and a passion for technology, 
                I've transitioned into the world of software and finance, where I combine analytical 
                thinking with technical execution.
              </p>
            </section>

            <section className="about-section">
              <h2>What I Do</h2>
              <ul className="skills-list">
                <li>
                  <span className="skill-icon">🔗</span>
                  <div>
                    <strong>SaaS Integration Management</strong>
                    <p>Designing and implementing seamless data flows between enterprise systems</p>
                  </div>
                </li>
                <li>
                  <span className="skill-icon">📊</span>
                  <div>
                    <strong>Data Analysis & Migration</strong>
                    <p>Managing complex database migrations and ensuring data integrity</p>
                  </div>
                </li>
                <li>
                  <span className="skill-icon">💹</span>
                  <div>
                    <strong>FinTech Development</strong>
                    <p>Building algorithmic trading systems and market analysis tools</p>
                  </div>
                </li>
                <li>
                  <span className="skill-icon">🤝</span>
                  <div>
                    <strong>Client Relationship Management</strong>
                    <p>Supporting enterprise clients through platform adoption and optimization</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="about-section">
              <h2>My Journey</h2>
              <p>
                From engineering foundations to business analysis and software development, 
                my career has been driven by curiosity and a commitment to continuous learning. 
                I'm currently focused on <strong>algorithmic trading</strong> and building 
                products that solve real-world problems.
              </p>
            </section>
          </div>

          {/* Image Section */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={myImage} 
                alt="Rahul Reddy Allu - Business Analyst and Developer" 
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always open to discussing new opportunities, collaborations, or just connecting 
            with fellow professionals in tech and finance.
          </p>
          <a href="/contact" className="cta-button">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
