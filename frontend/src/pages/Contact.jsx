import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations.jsx';

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:ndlalekhya98@gmail.com"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
