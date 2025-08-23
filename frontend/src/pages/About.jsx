import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations.jsx';

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          This is the about page. More content coming soon...
        </p>
      </div>
    </motion.div>
  );
};

export default About;
