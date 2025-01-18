import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { text: "25+ years of experience", icon: "⭐" },
  { text: "AI-powered counseling", icon: "🤖" },
  { text: "Transparent admission process", icon: "📝" },
  { text: "Expert guidance for NEET PG", icon: "🎓" },
  { text: "Personalized career planning", icon: "🎯" },
  { text: "High success rate", icon: "🏆" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function WhyChooseUs() {
  return (
    <div className="bg-blue-950 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-6 text-center relative"
        >
          <span className="relative inline-block">
          <span className="text-yellow-400">Why Choose Us</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
        </span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center p-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center mr-3">
                  <span className="text-xl">{reason.icon}</span>
                </div>
                <p className="text-lg text-white group-hover:translate-x-2 transition-transform duration-300">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

