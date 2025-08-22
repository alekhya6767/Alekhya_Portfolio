import { useState, useEffect, useCallback } from 'react';

/**
 * A custom React hook that returns a debounced version of the passed value.
 * @param {*} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before updating the debounced value.
 * @returns {*} - The debounced value.
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up the timeout
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout on value or delay change
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * A custom React hook that returns a debounced version of the passed function.
 * @param {Function} callback - The function to be debounced.
 * @param {number} delay - The delay in milliseconds before the function is called.
 * @param {Array} deps - Dependencies array for the callback function.
 * @returns {Function} - The debounced function.
 */
const useDebouncedCallback = (callback, delay = 500, deps = []) => {
  // Memoize the callback with dependencies
  const memoizedCallback = useCallback(callback, deps);
  
  // Create a ref to store the timeout ID
  const timeoutRef = useRef();

  // Clear the timeout when the component unmounts or dependencies change
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [memoizedCallback, delay]);

  // Return the debounced function
  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      memoizedCallback(...args);
    }, delay);
  }, [memoizedCallback, delay]);
};

export { useDebounce, useDebouncedCallback };
