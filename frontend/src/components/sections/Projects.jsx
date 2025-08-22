import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCode } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../../utils/animations.jsx';

const ProjectCard = ({ project, index, isPinned = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
        isPinned ? 'border-2 border-primary-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPinned && (
        <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Pinned
        </div>
      )}
      
      <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {project.homepage ? (
          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://source.unsplash.com/random/600x400/?${project.language || 'code'},${project.name}`}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-800">
            <FiCode className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description || 'No description provided.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.language && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              {project.language}
            </span>
          )}
          {project.topics && project.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FiStar className="mr-1" />
              {project.stargazers_count || 0}
            </span>
            <span className="flex items-center">
              <FiGitBranch className="mr-1" />
              {project.forks_count || 0}
            </span>
          </div>
          <span>{formatDate(project.updated_at)}</span>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center space-x-4"
            >
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiGithub className="mr-2" />
                Code
              </a>
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Static project data to avoid GitHub API issues
const staticProjects = [
  {
    id: 1,
    name: 'FinSage - AI-Powered Personal Finance Application',
    description: 'A full-stack finance platform using Supabase (PostgreSQL), Next.js, and Groq AI API, processing 1,000+ daily transactions with LLM-powered expense categorization.',
    html_url: 'https://github.com/alekhya6767/finsage',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 2,
    updated_at: '2025-01-15',
    topics: ['nextjs', 'ai', 'finance', 'supabase']
  },
  {
    id: 2,
    name: 'Django Restaurant Reservation System',
    description: 'A full-stack restaurant booking system similar to OpenTable using Django, Python, and SQL. Features RESTful APIs, real-time table availability, and AJAX-based live updates.',
    html_url: 'https://github.com/alekhya6767/restaurant-reservation',
    homepage: null,
    language: 'Python',
    stargazers_count: 8,
    forks_count: 3,
    updated_at: '2025-03-20',
    topics: ['django', 'python', 'sql', 'ajax']
  },
  {
    id: 3,
    name: 'Embedded Systems Printer Firmware',
    description: 'Common firmware development for HP printers including middleware, printing features, media handling, and sensor integration using C++ and Python.',
    html_url: 'https://github.com/alekhya6767/printer-firmware',
    homepage: null,
    language: 'C++',
    stargazers_count: 12,
    forks_count: 4,
    updated_at: '2024-12-10',
    topics: ['embedded', 'firmware', 'cpp', 'rtos']
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'Personal portfolio website built with React, Vite, and Tailwind CSS. Features dark/light mode, responsive design, and smooth animations.',
    html_url: 'https://github.com/alekhya6767/portfolio',
    homepage: 'https://alekhya6767.github.io/portfolio',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2025-01-21',
    topics: ['react', 'portfolio', 'tailwindcss', 'vite']
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(staticProjects);

  // Extract unique languages for filtering
  const languages = ['All', ...new Set(staticProjects.map(project => project.language).filter(Boolean))];

  // Filter projects based on active filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(staticProjects);
    } else {
      setFilteredProjects(staticProjects.filter(project => project.language === filter));
    }
  };


  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A showcase of my firmware development, embedded systems, and full-stack web development projects. 
            From AI-powered finance applications to restaurant reservation systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleFilterChange(language)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === language
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {language}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
