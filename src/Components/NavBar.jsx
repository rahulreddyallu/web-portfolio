import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/NavBar.css';

export default function NavBar() {
  const icons = [
    { name: "Work", width: 77.09, height: 32.5 },
    { name: "About", width: 85.63, height: 32.5 },
    { name: "Contact", width: 102, height: 32.5 }
  ];

  const iconTr = [
    { name: "Work", tX: 133.9 },
    { name: "About", tX: 135 },
    { name: "Contact", tX: 143 }
  ];

  const location = useLocation(); // Get the current location
  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem('index');
    return savedIndex ? parseInt(savedIndex) : 0;
  });

  const [isScrolled, setScroll] = useState(false);

  useEffect(() => {
    const titles = ["Rahul's Work", "Who’s Rahul?", "Lets Connect!"];
    document.title = titles[index];
  }, [index]);

  useEffect(() => {
    const scrolled = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener('scroll', scrolled);
    return () => {
      window.removeEventListener('scroll', scrolled);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('index', index);
  }, [index]);

  // Update index based on the current location
  useEffect(() => {
    switch (location.pathname) {
      case '/about':
        setIndex(1);
        break;
      case '/contact':
        setIndex(2);
        break;
      default:
        setIndex(0);
    }
  }, [location.pathname]);

  return (
    <div className={`NavBar ${isScrolled ? 'scroll' : ''}`}>
      <div className="bubble" style={{ transform: `translateX(${index * iconTr[index].tX}px)`, height: icons[index].height, width: icons[index].width }}></div>
      <Link to='/' onClick={() => setIndex(0)}>Work</Link>
      <Link to='/about' onClick={() => setIndex(1)}>About</Link>
      <Link to='/contact' onClick={() => setIndex(2)}>Contact</Link>
    </div>
  );
}
