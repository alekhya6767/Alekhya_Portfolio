import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';
import useSmoothScroll from '../../hooks/useSmoothScroll';

const Layout = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  
  // Apply smooth scrolling for anchor links
  useSmoothScroll();
  
  // Set theme class on the root element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div 
      className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}
    >
      
      <Header />
      
      <main className="flex-grow overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
