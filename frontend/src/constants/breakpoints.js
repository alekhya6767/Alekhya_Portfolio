/**
 * Breakpoint values for responsive design
 * These values should match the ones defined in your Tailwind configuration
 */

export const BREAKPOINTS = {
  // Small screens (default)
  sm: '640px',
  // Medium screens
  md: '768px',
  // Large screens
  lg: '1024px',
  // Extra large screens
  xl: '1280px',
  // 2X large screens
  '2xl': '1536px',
};

/**
 * Media query helper functions
 * Usage: ${mediaQuery.md} { ... } in styled-components or CSS-in-JS
 */
export const mediaQuery = {
  sm: `@media (min-width: ${BREAKPOINTS.sm})`,
  md: `@media (min-width: ${BREAKPOINTS.md})`,
  lg: `@media (min-width: ${BREAKPOINTS.lg})`,
  xl: `@media (min-width: ${BREAKPOINTS.xl})`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']})`,
  
  // Max-width queries
  maxSm: `@media (max-width: ${parseInt(BREAKPOINTS.sm) - 1}px)`,
  maxMd: `@media (max-width: ${parseInt(BREAKPOINTS.md) - 1}px)`,
  maxLg: `@media (max-width: ${parseInt(BREAKPOINTS.lg) - 1}px)`,
  maxXl: `@media (max-width: ${parseInt(BREAKPOINTS.xl) - 1}px)`,
  
  // Range queries
  smOnly: `@media (min-width: ${BREAKPOINTS.sm}) and (max-width: ${parseInt(BREAKPOINTS.md) - 1}px)`,
  mdOnly: `@media (min-width: ${BREAKPOINTS.md}) and (max-width: ${parseInt(BREAKPOINTS.lg) - 1}px)`,
  lgOnly: `@media (min-width: ${BREAKPOINTS.lg}) and (max-width: ${parseInt(BREAKPOINTS.xl) - 1}px)`,
  xlOnly: `@media (min-width: ${BREAKPOINTS.xl}) and (max-width: ${parseInt(BREAKPOINTS['2xl']) - 1}px)`,
};

/**
 * Get the current breakpoint based on window width
 * @returns {string} Current breakpoint key (sm, md, lg, xl, 2xl)
 */
export const getCurrentBreakpoint = () => {
  if (typeof window === 'undefined') return 'sm';
  
  const width = window.innerWidth;
  
  if (width >= parseInt(BREAKPOINTS['2xl'])) return '2xl';
  if (width >= parseInt(BREAKPOINTS.xl)) return 'xl';
  if (width >= parseInt(BREAKPOINTS.lg)) return 'lg';
  if (width >= parseInt(BREAKPOINTS.md)) return 'md';
  return 'sm';
};

/**
 * Check if the current viewport matches a specific breakpoint or larger
 * @param {string} breakpoint - The breakpoint to check against (sm, md, lg, xl, 2xl)
 * @returns {boolean} True if the current viewport matches or is larger than the specified breakpoint
 */
export const isBreakpointOrLarger = (breakpoint) => {
  if (typeof window === 'undefined') return false;
  
  const width = window.innerWidth;
  return width >= parseInt(BREAKPOINTS[breakpoint] || '0');
};

/**
 * Check if the current viewport is smaller than a specific breakpoint
 * @param {string} breakpoint - The breakpoint to check against (sm, md, lg, xl, 2xl)
 * @returns {boolean} True if the current viewport is smaller than the specified breakpoint
 */
export const isBreakpointSmaller = (breakpoint) => {
  if (typeof window === 'undefined') return true;
  
  const width = window.innerWidth;
  return width < parseInt(BREAKPOINTS[breakpoint] || '9999');
};

export default {
  BREAKPOINTS,
  mediaQuery,
  getCurrentBreakpoint,
  isBreakpointOrLarger,
  isBreakpointSmaller,
};
