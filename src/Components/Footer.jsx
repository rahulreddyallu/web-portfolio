import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="Footer" id="footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-content">
        <div className="credits">
          &copy; {currentYear} Rahul Reddy Allu
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div className="footer-section">
            <div className="footer-title">Elsewhere</div>
            <ul>
              <li>
                <a href="https://github.com/rahulreddyallu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <span className="footer-icon github" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rahulreddyallu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <span className="footer-icon linkedin" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <div className="footer-title">Contact</div>
            <ul>
              <li>
                <Link to="/contact" aria-label="Go to Contact page">
                  Message
                </Link>
              </li>
              {/* CV route: If /CV is a page, use Link; if it’s a file, use <a> */}
              <li>
                <a href="/CV" aria-label="Open CV file or CV page">
                  CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
