import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

// Lazy load major route components for performance
const Landing = lazy(() => import('./Components/Landing'));
const Work = lazy(() => import('./Components/Work'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/web-portfolio">
        <NavBar />
        {/* Suspense provides a graceful loading experience for routes */}
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect legacy /web-portfolio */}
            <Route path="/web-portfolio" element={<Navigate to="/work" />} />
            {/* Fallback: 404 page */}
            <Route path="*" element={<div className="not-found">Page Not Found</div>} />
          </Routes>
        </Suspense>
        {/* Enhanced footer at the bottom of every route for accessibility and navigation */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
