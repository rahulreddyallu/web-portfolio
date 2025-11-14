import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/NavBar.css';

const NAV_ITEMS = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const TITLES = [
  "Rahul's Work",
  "About Rahul",
  "Contact Rahul"
];

export default function NavBar() {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update active index based on current route
  useEffect(() => {
    const idx = NAV_ITEMS.findIndex(item => item.path === location.pathname);
    setActiveIdx(idx >= 0 ? idx : 0);
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  // Update page title
  useEffect(() => {
    document.title = TITLES[activeIdx] || 'Rahul Reddy Allu';
  }, [activeIdx]);

  // Handle scroll for navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`NavBar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Logo/Name */}
        <Link to="/" className="nav-logo" aria-label="Home">
          <span className="logo-text">Rahul Reddy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${activeIdx === idx ? 'active' : ''}`}
              aria-current={activeIdx === idx ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="menu-icon"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="mobile-logo">Rahul Reddy</span>
            <button
              className="mobile-close-btn"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${activeIdx === idx ? 'active' : ''}`}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
