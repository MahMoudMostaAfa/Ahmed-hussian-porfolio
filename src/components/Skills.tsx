import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I have developed a diverse set of skills through my education and professional experiences,
            enabling me to excel in both academic and workplace environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-100 dark:border-dark-700 shadow-sm"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <Check size={18} />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;