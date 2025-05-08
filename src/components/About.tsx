import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Map, Flag, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const infoItems = [
    { icon: <Calendar size={20} />, label: "Date", value: personalInfo.dateOfBirth },
    { icon: <Flag size={20} />, label: "Nationality", value: personalInfo.nationality },
    { icon: <Map size={20} />, label: "Location", value: personalInfo.location },
    { icon: <Phone size={20} />, label: "Phone", value: personalInfo.phone },
    { icon: <Mail size={20} />, label: "Email", value: personalInfo.email },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full md:w-4/5 h-80 md:h-96 bg-gradient-to-br from-secondary-500 to-primary-600 absolute -top-4 -left-4 rounded-lg opacity-20 dark:opacity-10"></div>
            <div className="w-full md:w-4/5 h-80 md:h-96 bg-gray-200 dark:bg-dark-700 rounded-lg overflow-hidden border border-gray-300 dark:border-dark-600 shadow-lg relative z-10">
              {/* Replace with actual profile/about image when available */}
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ahmed Hussien working" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
            >
              Personal Information
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {infoItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1 p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                    <p className="text-gray-800 dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-gray-600 dark:text-gray-300"
            >
              I am a first-year commerce student at Cairo University with a passion for banking and finance. 
              My experience includes training at HSBC Bank, where I gained valuable insights into banking operations
              and customer service. I am dedicated to continuous learning and professional development.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;