import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Firmware Engineer',
    company: 'HP Inc.',
    period: '2020 - 2024 (4+ years)',
    description: [
      'Developed common firmware for home, enterprise, and large-format printers using C++ and Python',
      'Worked extensively on middleware, printing features, media handling, sensors, and web services',
      'Performed firmware flashing, middleware testing, feature development, and debugging',
      'Conducted code analysis and debugging using kernel logs, boot logs, and Systrace tokens for root cause analysis',
      'Ensured seamless integration and reliable performance across multiple product lines',
      'Contributed to CI/CD pipelines using Jenkins for automated testing and deployment',
    ],
    icon: <FiBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    type: 'work',
  },
];

const education = [
  {
    id: 1,
    degree: 'MS in Software Engineering',
    institution: 'San Jose State University',
    period: 'Spring 2025 (Incoming)',
    description: [
      'Accepted to multiple prestigious universities including UMass Amherst, Virginia Tech, Penn State, and Georgia Tech',
      'Focus on advanced software engineering principles and practices',
      'Preparing to advance expertise in C++ ecosystem and embedded systems',
    ],
    icon: <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    type: 'education',
  },
  {
    id: 2,
    degree: 'B.Tech in Information Technology',
    institution: 'SASTRA University',
    period: '2016 - 2020',
    description: [
      'GPA: 7.9/10',
      'Strong foundation in computer science and programming fundamentals',
      'Specialized coursework in software development and system design',
    ],
    icon: <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    type: 'education',
  },
];

const TimelineItem = ({ item, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
      )}
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-gray-800">
        {item.icon}
      </div>
      <div className="ml-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.role || item.degree}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {item.company || item.institution} • {item.period}
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
          {item.description.map((desc, index) => (
            <li key={index} className="text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            My professional journey in firmware engineering at HP and academic achievements, 
            showcasing expertise in embedded systems and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <FiBriefcase className="mr-2 text-primary-600 dark:text-primary-400" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TimelineItem 
                    item={exp} 
                    isLast={index === experiences.length - 1} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <FiAward className="mr-2 text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TimelineItem 
                    item={edu} 
                    isLast={index === education.length - 1} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
