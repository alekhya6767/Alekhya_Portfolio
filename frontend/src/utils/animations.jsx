import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Animation variants for Framer Motion
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
};

/**
 * Animation variants for staggered children
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Custom hook for scroll animations
 * @param {Object} options - Options for the intersection observer
 * @returns {Array} - Array containing the ref and inView status
 */
export const useScrollAnimation = (options = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return [ref, inView];
};

/**
 * Animated component that fades in when in view
 */
export const AnimateInView = ({ children, variant = 'fadeIn', className = '', ...props }) => {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        fadeIn,
        fadeInUp,
        fadeInDown,
        fadeInLeft,
        fadeInRight,
        scaleIn,
      }[variant] || fadeIn}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated component for page transitions
 */
export const PageTransition = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={fadeIn}
  >
    {children}
  </motion.div>
);

/**
 * Animation for hover effects
 */
export const hoverTapAnimation = {
  hover: { 
    scale: 1.03,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    } 
  },
  tap: { 
    scale: 0.98 
  }
};

/**
 * Animation for button hover effects
 */
export const buttonHoverAnimation = {
  hover: { 
    y: -2,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 15 
    } 
  },
  tap: { 
    scale: 0.98,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }
};

/**
 * Animation for floating elements
 */
export const floatingAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0],
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    } 
  }
};

/**
 * Animation for a subtle pulse effect
 */
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const pulseAnimation = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.02, 1],
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    } 
  }
};
