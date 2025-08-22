import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub className="w-6 h-6" />, url: 'https://github.com/alekhya6767', label: 'GitHub' },
    { icon: <FiLinkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/alekhya-nakka-990312158/', label: 'LinkedIn' },
    { icon: <FiMail className="w-6 h-6" />, url: 'mailto:ndlalekhya98@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-400 transition-colors"
                aria-label={link.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Alekhya Nakka. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
