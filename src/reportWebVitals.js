/**
 * Web Vitals Performance Monitoring
 * 
 * This utility measures and reports Core Web Vitals metrics:
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FID (First Input Delay): Interactivity
 * - FCP (First Contentful Paint): Load performance
 * - LCP (Largest Contentful Paint): Load performance
 * - TTFB (Time to First Byte): Server response time
 * 
 * Usage in index.js:
 * - For development: reportWebVitals(console.log)
 * - For analytics: reportWebVitals(sendToAnalytics)
 */

const reportWebVitals = (onPerfEntry) => {
  // Validate callback function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamic import to reduce initial bundle size
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        try {
          // Cumulative Layout Shift - measures visual stability
          // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
          getCLS(onPerfEntry);

          // First Input Delay - measures interactivity
          // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
          getFID(onPerfEntry);

          // First Contentful Paint - measures loading performance
          // Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
          getFCP(onPerfEntry);

          // Largest Contentful Paint - measures loading performance
          // Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
          getLCP(onPerfEntry);

          // Time to First Byte - measures connection and server response time
          // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
          getTTFB(onPerfEntry);

        } catch (error) {
          // Gracefully handle any errors in metric collection
          console.warn('Error collecting Web Vitals:', error);
        }
      })
      .catch((error) => {
        // Handle module loading errors
        console.warn('Failed to load web-vitals library:', error);
      });
  }
};

/**
 * Example: Send metrics to Google Analytics
 * 
 * function sendToGoogleAnalytics({ name, delta, value, id }) {
 *   if (window.gtag) {
 *     window.gtag('event', name, {
 *       event_category: 'Web Vitals',
 *       event_label: id,
 *       value: Math.round(name === 'CLS' ? delta * 1000 : delta),
 *       non_interaction: true,
 *     });
 *   }
 * }
 * 
 * Usage: reportWebVitals(sendToGoogleAnalytics);
 */

/**
 * Example: Send metrics to custom analytics endpoint
 * 
 * async function sendToAnalytics({ name, delta, value, id }) {
 *   const body = JSON.stringify({ name, delta, value, id });
 *   
 *   if (navigator.sendBeacon) {
 *     navigator.sendBeacon('/analytics', body);
 *   } else {
 *     try {
 *       await fetch('/analytics', { 
 *         method: 'POST', 
 *         body,
 *         headers: { 'Content-Type': 'application/json' },
 *         keepalive: true 
 *       });
 *     } catch (error) {
 *       console.warn('Failed to send analytics:', error);
 *     }
 *   }
 * }
 * 
 * Usage: reportWebVitals(sendToAnalytics);
 */

/**
 * Development logging helper
 * This formats the metrics in a readable way for console output
 */
export const logWebVitals = ({ name, value, delta, id, rating }) => {
  console.group(`⚡ ${name} Metric`);
  console.log(`Value: ${value.toFixed(2)}ms`);
  console.log(`Delta: ${delta.toFixed(2)}ms`);
  console.log(`Rating: ${rating}`);
  console.log(`ID: ${id}`);
  console.groupEnd();
};

/**
 * Helper to determine if metrics are within acceptable thresholds
 */
export const getMetricStatus = (name, value) => {
  const thresholds = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FID: { good: 100, needsImprovement: 300 },
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    TTFB: { good: 800, needsImprovement: 1800 }
  };

  const threshold = thresholds[name];
  
  if (!threshold) return 'unknown';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};

export default reportWebVitals;
