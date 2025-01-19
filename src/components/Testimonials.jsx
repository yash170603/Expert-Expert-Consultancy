

import React from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    text: "Expert Educational Consultancy guided me through the entire NEET PG process. Their AI-powered counseling was a game-changer!",
    rating: 5,
    designation: "MD Pediatrics"
  },
  {
    name: "Dr. Rahul Patel",
    text: "I couldn't have achieved my dream of pursuing MD without the support and guidance from Expert Educational Consultancy.",
    rating: 5,
    designation: "MD Internal Medicine"
  },
  {
    name: "Dr. Ananya Reddy",
    text: "The personalized career planning provided by Expert Educational Consultancy helped me make informed decisions about my specialization.",
    rating: 4,
    designation: "MS Orthopedics"
  },
  {
    name: "Dr. Vikram Singh",
    text: "Their comprehensive study materials and mock tests were instrumental in my NEET PG preparation. Highly recommended!",
    rating: 5,
    designation: "MD Radiology"
  },
  {
    name: "Dr. Meera Kapoor",
    text: "The mentorship program exceeded my expectations. The personalized attention helped me secure my desired specialization.",
    rating: 5,
    designation: "MD Dermatology"
  },
  {
    name: "Dr. Arjun Kumar",
    text: "The mock counseling sessions gave me confidence and clarity about the admission process. Thank you for the guidance!",
    rating: 4,
    designation: "MS General Surgery"
  }
];

const Testimonials= React.forwardRef((props,ref) => {
  return (
    <div className="py-12 relative bg-blue-950">
      {/* Background Elements */}
      <div className="absolute top-20 left-5 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        <span className="relative inline-block">
          <span className="text-yellow-400">Testimonials</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
        </span>
      </motion.h2>

      <div className="relative px-8 max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group h-[220px]"
              >
                <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 h-full transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-yellow-400/10">
                  {/* Gradient borders */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-yellow-400/50 to-yellow-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-yellow-400/50 to-yellow-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-t from-yellow-400/50 to-yellow-400 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  </div>
                  
                  <Quote className="w-8 h-8 text-yellow-400/30 absolute top-4 right-4" />
                  
                  <p className="text-white/90 mb-4 text-base relative z-10 line-clamp-3 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="absolute bottom-6 left-6">
                    <p className="font-semibold text-yellow-400 text-lg mb-0.5">
                      {testimonial.name}
                    </p>
                    <p className="text-white/60 text-sm mb-2">
                      {testimonial.designation}
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 z-10 transition-all hover:bg-white/20 hover:scale-105">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 z-10 transition-all hover:bg-white/20 hover:scale-105">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
});

export default Testimonials;









