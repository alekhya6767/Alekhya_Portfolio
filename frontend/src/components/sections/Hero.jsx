import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { ComputersCanvas } from '../canvas';

const Hero = () => {
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/alekhya6767', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/alekhya-nakka-990312158/', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:ndlalekhya98@gmail.com', label: 'Email' },
  ];
  
  const resumeUrl = '/resume.pdf'; // Update this with the actual resume URL

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 opacity-90">
          {/* Animated grid pattern */}
          <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`}>
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center w-full"
        >
            <motion.p
              variants={item}
              className="text-primary-600 dark:text-primary-400 text-lg font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Divyasri Lakshmi Alekhya Nakka
            </motion.h1>
            
            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Firmware Engineer | C++ Enthusiast | Embedded Systems Developer
            </motion.h2>
            
            <motion.h3 
              variants={item}
              className="text-xl text-primary-600 dark:text-primary-400 mb-6 font-medium"
            >
              MS in Software Engineering (San Jose State University)
            </motion.h3>
            
            <motion.div
              variants={item}
              className="max-w-3xl mx-auto mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">HP</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Firmware Engineer</div>
                </div>
                <div className="p-4 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">C++</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Primary Language</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-primary-500/20"
              >
                Get In Touch
              </a>
              <a
                href={resumeUrl}
                download
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-md transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={item} className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm hover:shadow-md"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{link.label}</span>
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
