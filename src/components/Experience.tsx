import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Through various roles and internships, I've gained practical experience in banking
            operations, professional skill development, and sustainability initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-dark-600 group"
            >
              <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                  <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {exp.title}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-4">
                  {exp.company}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-dark-600">
                  <motion.a
                    href="#contact"
                    className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;