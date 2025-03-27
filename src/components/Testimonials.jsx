import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"; // Icons

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch Testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/testimonials"
        );

        if (Array.isArray(response.data)) {
          setTestimonials(response.data);
        } else {
          console.error("⚠️ Unexpected API response format:", response.data);
          setError("Invalid API response format.");
        }

        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please try again later.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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
        {loading ? (
          <p className="text-center text-white">Loading testimonials...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-400">
            No testimonials available.
          </p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
                  className="relative group h-[250px] flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-yellow-400/10"
                >
                  {/* Testimonial Image */}

                  <div className="w-20 h-32 rounded-lg overflow-hidden border-2 border-yellow-400 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <Quote className="w-6 h-6 text-yellow-400/30 mb-2" />
                    <p className="text-white/90 mb-3 text-base line-clamp-3 leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Name, Designation & Rating */}
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-yellow-400 text-lg mb-0.5">
                          {testimonial.name}
                        </p>
                        <p className="text-white/60 text-sm">
                          {testimonial.designation}
                        </p>
                      </div>
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
        )}

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
};

export default Testimonials;
