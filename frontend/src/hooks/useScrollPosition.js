import { useState, useEffect } from 'react';

/**
 * A custom React hook that tracks the scroll position of the page or a specific element.
 * @param {Object} options - Configuration options.
 * @param {string} [options.elementId] - The ID of the element to track scroll position for. If not provided, tracks window scroll.
 * @param {boolean} [options.throttle=100] - Throttle time in milliseconds for scroll events.
 * @returns {Object} - Returns an object with scroll position and scroll percentage.
 */
const useScrollPosition = ({ elementId, throttle = 100 } = {}) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    scrollPercentage: 0,
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId = null;
    let element = null;
    
    if (elementId) {
      element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found.`);
        return;
      }
    }

    const handleScroll = () => {
      // Throttle the scroll event
      if (timeoutId) {
        return;
      }

      timeoutId = setTimeout(() => {
        if (element) {
          // For element scroll
          const { scrollTop, scrollLeft, scrollHeight, clientHeight } = element;
          const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
          
          setScrollPosition({
            x: scrollLeft,
            y: scrollTop,
            scrollPercentage,
            isAtTop: scrollTop === 0,
            isAtBottom: Math.ceil(scrollTop + clientHeight) >= scrollHeight,
          });
        } else {
          // For window scroll
          const { scrollX, scrollY, innerHeight } = window;
          const { scrollHeight } = document.documentElement;
          const scrollPercentage = (scrollY / (scrollHeight - innerHeight)) * 100;
          
          setScrollPosition({
            x: scrollX,
            y: scrollY,
            scrollPercentage,
            isAtTop: scrollY === 0,
            isAtBottom: Math.ceil(scrollY + innerHeight) >= scrollHeight,
          });
        }
        
        timeoutId = null;
      }, throttle);
    };

    // Add event listener
    const target = element || window;
    target.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set initial values
    handleScroll();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      target.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [elementId, throttle]);

  return scrollPosition;
};

export default useScrollPosition;
