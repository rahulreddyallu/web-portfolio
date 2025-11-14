import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/NavBar.css';

const NAV_ITEMS = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

// Bubble animation config for each tab (responsive values)
const BUBBLE_CONFIG = [
  { width: 77, tX: 0 },
  { width: 85, tX: 80 },
  { width: 102, tX: 175 }
];

const TITLES = [
  "Rahul's Work",
  "Who’s Rahul?",
  "Let's Connect!"
];

export default function NavBar() {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState(() => {
    const idx = NAV_ITEMS.findIndex(item => item.path === location.pathname);
    return idx >= 0 ? idx : 0;
  });
  const [isScrolled, setScrolled] = useState(false);

  // Change page title based on route
  useEffect(() => {
    document.title = TITLES[activeIdx] || 'Rahul Reddy Allu';
  }, [activeIdx]);

  // Sticky navbar effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sync active index to location change (SPA correct navigation)
  useEffect(() => {
    const idx = NAV_ITEMS.findIndex(item => item.path === location.pathname);
    setActiveIdx(idx >= 0 ? idx : 0);
  }, [location.pathname]);

  return (
    <nav className={`NavBar${isScrolled ? ' scroll' : ''}`} role="navigation" aria-label="Site Navigation">
      <div
        className="nav-bubble"
        style={{
          width: BUBBLE_CONFIG[activeIdx].width,
          transform: `translateX(${BUBBLE_CONFIG[activeIdx].tX}px)`
        }}
        aria-hidden="true"
      />
      {NAV_ITEMS.map((item, idx) => (
        <Link
          key={item.name}
          to={item.path}
          className={`nav-link${activeIdx === idx ? ' active' : ''}`}
          tabIndex={0}
          aria-current={activeIdx === idx ? "page" : undefined}
          onClick={() => setActiveIdx(idx)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
