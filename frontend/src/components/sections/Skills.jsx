import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSettings, FiGlobe, FiTool, FiCpu } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FiCode className="w-6 h-6" />,
    skills: [
      { name: 'C', level: 95, color: 'bg-blue-500' },
      { name: 'C++', level: 95, color: 'bg-blue-600' },
      { name: 'Python', level: 90, color: 'bg-yellow-500' },
      { name: 'Bash', level: 85, color: 'bg-gray-600' },
      { name: 'Java', level: 75, color: 'bg-red-500' },
      { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
      { name: 'SQL', level: 80, color: 'bg-blue-400' },
    ]
  },
  {
    title: 'Web Technologies',
    icon: <FiGlobe className="w-6 h-6" />,
    skills: [
      { name: 'HTML/CSS', level: 85, color: 'bg-orange-500' },
      { name: 'Django', level: 85, color: 'bg-green-600' },
      { name: 'RESTful APIs', level: 90, color: 'bg-purple-500' },
      { name: 'JSON', level: 90, color: 'bg-gray-500' },
      { name: 'OpenAPI/Swagger', level: 80, color: 'bg-green-500' },
      { name: 'Next.js', level: 75, color: 'bg-black' },
    ]
  },
  {
    title: 'Firmware & Embedded',
    icon: <FiCpu className="w-6 h-6" />,
    skills: [
      { name: 'Embedded Systems', level: 95, color: 'bg-red-600' },
      { name: 'RTOS', level: 90, color: 'bg-purple-600' },
      { name: 'Interrupt Handling', level: 95, color: 'bg-indigo-600' },
      { name: 'Memory Programming', level: 90, color: 'bg-pink-600' },
      { name: 'Multithreading', level: 90, color: 'bg-teal-600' },
      { name: 'Real-Time Debugging', level: 95, color: 'bg-orange-600' },
      { name: 'Peripheral Drivers', level: 90, color: 'bg-cyan-600' },
    ]
  },
  {
    title: 'Protocols & Interfaces',
    icon: <FiSettings className="w-6 h-6" />,
    skills: [
      { name: 'I2C', level: 90, color: 'bg-blue-700' },
      { name: 'SPI', level: 90, color: 'bg-green-700' },
      { name: 'UART', level: 95, color: 'bg-purple-700' },
      { name: 'USB', level: 85, color: 'bg-red-700' },
      { name: 'TCP/IP', level: 85, color: 'bg-indigo-700' },
      { name: 'HTTP', level: 90, color: 'bg-pink-700' },
    ]
  },
  {
    title: 'Testing & Validation',
    icon: <FiDatabase className="w-6 h-6" />,
    skills: [
      { name: 'Unit Testing', level: 90, color: 'bg-emerald-600' },
      { name: 'Integration Testing', level: 95, color: 'bg-lime-600' },
      { name: 'Regression Testing', level: 90, color: 'bg-amber-600' },
      { name: 'Pytest', level: 85, color: 'bg-yellow-600' },
      { name: 'Python Scripting', level: 90, color: 'bg-blue-500' },
      { name: 'System Testing', level: 90, color: 'bg-violet-600' },
    ]
  },
  {
    title: 'Tools & Environment',
    icon: <FiTool className="w-6 h-6" />,
    skills: [
      { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
      { name: 'Jira', level: 85, color: 'bg-blue-600' },
      { name: 'VS Code', level: 90, color: 'bg-blue-500' },
      { name: 'Jenkins', level: 80, color: 'bg-red-500' },
      { name: 'CI/CD Pipelines', level: 85, color: 'bg-green-600' },
      { name: 'Linux (Ubuntu)', level: 90, color: 'bg-orange-500' },
    ]
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical expertise across firmware development, 
            embedded systems, and full-stack web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                  <div className="text-primary-600 dark:text-primary-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Development Methodologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Agile', 'Scrum', 'Test-Driven Development (TDD)', 'CI/CD'].map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-primary-50 dark:bg-primary-900 rounded-lg"
              >
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {methodology}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Operating Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Operating Systems
          </h4>
          <div className="flex justify-center flex-wrap gap-3">
            {[
              { name: 'Linux (Ubuntu)' },
              { name: 'Windows' },
              { name: 'Mac OS' }
            ].map((os, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors cursor-default"
              >
                {os.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
