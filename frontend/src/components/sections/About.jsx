import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiSettings, FiBookOpen, FiAward } from 'react-icons/fi';
import { ProgressBar } from '../common/ProgressBar';

const skills = [
  { name: 'C++', level: 95 },
  { name: 'Python', level: 90 },
  { name: 'C', level: 90 },
  { name: 'Embedded Systems', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'Bash', level: 85 },
];

const services = [
  {
    icon: <FiCpu className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Firmware Development',
    description: 'Specialized in embedded systems, RTOS, interrupt handling, and memory-constrained programming for printer firmware.',
  },
  {
    icon: <FiCode className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with Django, Next.js, and modern JavaScript frameworks.',
  },
  {
    icon: <FiSettings className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: 'System Integration',
    description: 'Expert in middleware testing, debugging, and ensuring seamless integration across platforms.',
  },
];

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            I am a Firmware Engineer with over 4 years of experience at HP, specializing in C++, Python, 
            and Embedded Systems. My expertise spans the full development lifecycle, from firmware flashing 
            and middleware testing to feature development and debugging. I'm passionate about advancing in 
            the C++ ecosystem and embedded systems while building robust, scalable, and innovative solutions.
          </p>
        </motion.div>

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <FiBookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">MS in Software Engineering</h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium">San Jose State University</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2025-2026 | GPA: 3.8/4.0</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                  Also accepted to UMass Amherst, Virginia Tech, Penn State, Georgia Tech
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech in Information Technology</h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium">SASTRA University</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2016–2020 | GPA: 7.9/10</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-primary-50 dark:bg-gray-800 rounded-lg p-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Let's work together on your next project
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm always open to discussing firmware development, embedded systems, or software engineering opportunities.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default About;
