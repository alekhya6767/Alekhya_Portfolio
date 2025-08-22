import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/alekhya6767', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/alekhya-nakka-990312158/', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:ndlalekhya98@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Divyasri Lakshmi Alekhya Nakka</h3>
            <p className="mb-6">
              Firmware & Software Engineer passionate about building innovative solutions and creating impactful digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <a href="mailto:contact@example.com" className="hover:text-primary-400 transition-colors">
                  ndlalekhya98@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">
                  +1 (669) 499-7016
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span>San Jose, CA</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {currentYear} Alekhya Nakka. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <span className="mr-1">Made with</span>
            <FiHeart className="text-red-500 mx-1" />
            <span className="ml-1">by Alekhya Nakka</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
