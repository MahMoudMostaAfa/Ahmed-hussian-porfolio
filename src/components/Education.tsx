import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data/education";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center z-10">
                <GraduationCap
                  className="text-primary-600 dark:text-primary-400"
                  size={24}
                />
              </div>

              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200 dark:bg-dark-600 -z-10"></div>
              )}

              {/* Content */}
              <div className=" ml-20">
                <div className="flex items-center mb-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mr-4">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600">
                  <div className="mb-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Faculty:</span>{" "}
                      {edu.faculty}
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Section:</span>{" "}
                      {edu.section}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Year:</span> {edu.year}
                    </p>
                  </div>

                  <div className="mt-4 py-3 px-4 bg-primary-50 dark:bg-primary-900/20 rounded text-primary-700 dark:text-primary-300 text-sm">
                    Currently pursuing a degree in Commerce with focus on
                    business and finance principles.
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
