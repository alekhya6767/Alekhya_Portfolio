import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations.jsx';
import ProjectsList from '../components/sections/Projects';

const ProjectsPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Projects</h1>
        <ProjectsList />
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
