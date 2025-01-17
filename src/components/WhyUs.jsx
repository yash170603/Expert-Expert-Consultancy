import React from "react";


import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'

const reasons = [
  "25+ years of experience",
  "AI-powered counseling",
  "Transparent admission process",
  "Expert guidance for NEET PG",
  "Personalized career planning",
  "High success rate",
] 


const WhyUs = React.forwardRef((props, ref) => {
  return ( 
         
    <div className="py-16">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-extrabold text-yellow-400 underline sm:text-4xl mb-12 text-center"
    >
      Why Choose Us
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center p-4 bg-white rounded-lg shadow-md"
        >
          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
          <p className="text-3xl text-gray-800">{reason}</p>
        </motion.div>
      ))}
    </div>
  </div>
  );
});

export default WhyUs;
