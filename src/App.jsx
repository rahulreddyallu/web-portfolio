import './App.css';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

// Lazy load route components for performance optimization
const Landing = lazy(() => import('./Components/Landing'));
const Work = lazy(() => import('./Components/Work'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));

/**
 * Loading Fallback Component
 * Displays while lazy-loaded components are being fetched
 */
const LoadingFallback = () => (
  <div className="loading-fallback" role="status" aria-live="polite">
    <div className="spinner-container">
      <div className="spinner" aria-label="Loading content"></div>
      <p className="loading-text">Loading...</p>
    </div>
  </div>
);

/**
 * Error Boundary Component
 * Catches and handles errors in child components
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // You can also send error reports to an analytics service here
    // Example: sendErrorToAnalytics(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null,
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">Oops! Something went wrong</h1>
            <p className="error-message">
              We encountered an unexpected error. Don't worry, your data is safe.
            </p>
            
            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Only)</summary>
                <pre className="error-stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="error-actions">
              <button 
                onClick={this.handleReset}
                className="error-btn error-btn-primary"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="error-btn error-btn-secondary"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Scroll to Top Component
 * Automatically scrolls to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

/**
 * Page Title Manager
 * Updates document title based on current route
 */
function PageTitleManager() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Rahul Reddy Allu | Portfolio',
      '/work': 'My Work | Rahul Reddy Allu',
      '/about': 'About Me | Rahul Reddy Allu',
      '/contact': 'Contact | Rahul Reddy Allu'
    };

    document.title = titles[location.pathname] || 'Rahul Reddy Allu';

    // Add meta description based on page
    const descriptions = {
      '/': 'Business Analyst and Developer specializing in SaaS integrations and FinTech solutions.',
      '/work': 'Explore my portfolio of projects in SaaS integration, data analysis, and algorithmic trading.',
      '/about': 'Learn more about my journey from Civil Engineering to Business Analysis and Software Development.',
      '/contact': 'Get in touch for collaboration opportunities or project inquiries.'
    };

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptions[location.pathname] || descriptions['/'];

  }, [location]);

  return null;
}

/**
 * App Component Layout
 */
function AppLayout() {
  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar />
        
        <main className="App-content" role="main">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Redirect /home to / */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              
              {/* 404 Fallback - Redirect unknown paths to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

/**
 * Main App Component
 */
function App() {
  useEffect(() => {
    // Prevent flash of unstyled content
    document.documentElement.classList.add('js-enabled');

    // Add smooth scrolling support
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitleManager />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
