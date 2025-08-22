import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../constants';

/**
 * Hook to detect if the current viewport matches a specific breakpoint or larger
 * @param {string} breakpoint - The breakpoint to check against (sm, md, lg, xl, 2xl)
 * @returns {boolean} - True if the current viewport matches or is larger than the specified breakpoint
 */
export const useBreakpointOrLarger = (breakpoint) => {
  const [isLarger, setIsLarger] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsLarger(width >= parseInt(BREAKPOINTS[breakpoint] || '0'));
    };

    // Initial check
    checkBreakpoint();

    // Add event listener for window resize
    window.addEventListener('resize', checkBreakpoint);

    // Clean up
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, [breakpoint]);

  return isLarger;
};

/**
 * Hook to detect if the current viewport is smaller than a specific breakpoint
 * @param {string} breakpoint - The breakpoint to check against (sm, md, lg, xl, 2xl)
 * @returns {boolean} - True if the current viewport is smaller than the specified breakpoint
 */
export const useBreakpointSmaller = (breakpoint) => {
  const [isSmaller, setIsSmaller] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsSmaller(width < parseInt(BREAKPOINTS[breakpoint] || '9999'));
    };

    // Initial check
    checkBreakpoint();

    // Add event listener for window resize
    window.addEventListener('resize', checkBreakpoint);

    // Clean up
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, [breakpoint]);

  return isSmaller;
};

/**
 * Returns the current breakpoint based on window width
 * @returns {string} - Current breakpoint (sm, md, lg, xl, 2xl)
 */
export const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= parseInt(BREAKPOINTS['2xl'])) setBreakpoint('2xl');
      else if (width >= parseInt(BREAKPOINTS.xl)) setBreakpoint('xl');
      else if (width >= parseInt(BREAKPOINTS.lg)) setBreakpoint('lg');
      else if (width >= parseInt(BREAKPOINTS.md)) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    // Initial check
    updateBreakpoint();

    // Add event listener for window resize
    window.addEventListener('resize', updateBreakpoint);

    // Clean up
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

/**
 * Returns an object with boolean values for each breakpoint
 * @returns {Object} - Object with boolean values for each breakpoint
 */
export const useBreakpointStatus = () => {
  const [breakpoints, setBreakpoints] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateBreakpoints = () => {
      const width = window.innerWidth;
      
      setBreakpoints({
        isSm: width >= parseInt(BREAKPOINTS.sm),
        isMd: width >= parseInt(BREAKPOINTS.md),
        isLg: width >= parseInt(BREAKPOINTS.lg),
        isXl: width >= parseInt(BREAKPOINTS.xl),
        is2Xl: width >= parseInt(BREAKPOINTS['2xl']),
      });
    };

    // Initial check
    updateBreakpoints();

    // Add event listener for window resize
    window.addEventListener('resize', updateBreakpoints);

    // Clean up
    return () => window.removeEventListener('resize', updateBreakpoints);
  }, []);

  return breakpoints;
};

/**
 * Returns the appropriate value based on the current breakpoint
 * @param {Object} values - Object with breakpoint keys and corresponding values
 * @param {*} defaultValue - Default value if no breakpoint matches
 * @returns {*} - The value for the current breakpoint or the default value
 */
export const useResponsiveValue = (values, defaultValue = null) => {
  const breakpoint = useCurrentBreakpoint();
  return values[breakpoint] || defaultValue;
};

/**
 * Returns a style object with responsive values based on breakpoints
 * @param {Object} styles - Object with breakpoint keys and corresponding style objects
 * @returns {Object} - Merged style object for the current breakpoint
 */
export const useResponsiveStyles = (styles) => {
  const breakpoint = useCurrentBreakpoint();
  return styles[breakpoint] || {};
};
