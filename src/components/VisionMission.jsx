import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaGraduationCap } from 'react-icons/fa';

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-blue-950 p-8 w-full max-w-7xl mx-auto font-sans min-h-[400px] rounded-3xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-10"
      >
        <motion.h1 
          className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
        >
          <span className="relative inline-block">
          <span className="text-yellow-400">Our Vision and Mission</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
        </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-blue-700/50 flex flex-col items-center justify-center text-center relative group overflow-hidden"
          >
            <FaLightbulb className="text-5xl mb-4 text-yellow-400" />
            <div className="space-y-4">
              <p className="text-lg text-white">
                1. To provide guidance to the Medical Students in fulfilling their dreams with pure honesty and dedication.
              </p>
              <p className="text-lg text-white">
                2. To Support Medical aspirants and their Parents in reducing their mental pressure while serving them with a hassle-free admission procedure.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-400/50 to-yellow-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-yellow-400/50 to-yellow-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-t from-yellow-400/50 to-yellow-400 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-blue-700/50 flex flex-col items-center justify-center text-center relative group overflow-hidden"
          >
            <FaGraduationCap className="text-5xl mb-4 text-yellow-400" />
            <p className="text-lg text-white">
              Our mission is to be a facilitator helping medical aspirants in obtaining Admission at best medical colleges as per their preference, rank and budget where they can be groomed into the finest doctors which our country desires.
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-400/50 to-yellow-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-yellow-400/50 to-yellow-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-t from-yellow-400/50 to-yellow-400 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionVision;

