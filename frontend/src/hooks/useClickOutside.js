import { useEffect, useRef } from 'react';

/**
 * A custom React hook that triggers a callback when a click occurs outside of the specified element.
 * @param {Function} handler - The callback function to execute when a click outside is detected.
 * @param {boolean} [listenWhen=true] - Whether the event listener should be active.
 * @returns {Object} - A ref that should be attached to the element to detect clicks outside of.
 */
const useClickOutside = (handler, listenWhen = true) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!listenWhen) return;

    const handleClick = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      
      handler(event);
    };

    // Using capture phase to ensure we catch the event before it bubbles up
    document.addEventListener('mousedown', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('mousedown', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, [handler, listenWhen]);

  return ref;
};

export default useClickOutside;
