import React from "react";
import { motion } from "framer-motion"
import { Star } from 'lucide-react'
 

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    text: "Expert Educational Consultancy guided me through the entire NEET PG process. Their AI-powered counseling was a game-changer!",
    rating: 5,
  },
  {
    name: "Dr. Rahul Patel",
    text: "I couldn't have achieved my dream of pursuing MD without the support and guidance from Expert Educational Consultancy.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Reddy",
    text: "The personalized career planning provided by Expert Educational Consultancy helped me make informed decisions about my specialization.",
    rating: 4,
  },
]

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <div className="py-16 ">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-7xl font-extrabold text-yellow-400 underline sm:text-4xl mb-12 text-center"
      >
        Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-600 mb-4 text-2xl ">{testimonial.text}</p>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
              <div className="flex ">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Testimonials;
