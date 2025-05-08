import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 px-4 flex flex-col justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <p className="text-primary-600 dark:text-primary-400 mb-2 font-medium">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            A dedicated commerce student with experience in banking operations
            and sustainability initiatives. Passionate about finance, teamwork,
            and continuous learning.
          </p>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#about"
              className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-gray-800 dark:text-white rounded-full font-medium transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <ArrowDown size={16} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 opacity-70 dark:opacity-50 absolute top-2 left-4 blur-xl"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden border-4 border-white dark:border-dark-600 shadow-lg relative z-10">
              <img
                src="/profile.jpg"
                alt="Ahmed Hussien"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-0 right-0 mx-auto w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a
          href="#about"
          className="text-gray-500 dark:text-gray-400 flex flex-col items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
