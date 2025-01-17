import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import neet from "../assets/neet.jpg";

const TopComponent = ({ refs }) => {
  // const scrollToSection = (section) => {
  //   if (refs[section]?.current) {
  //     refs[section].current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="relative h-screen  flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute w-full h-full object-cover"
    >
      <source
        src="https://www.theanimationguys.com/wp-content/uploads/2023/01/TAG_Banner_007.mp4?_=1"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 text-center text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Expert Educational Consultancy
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl mb-8"
      >
        Your Gateway to Medical Excellence
      </motion.p>
      {/* <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        src={neet}
        alt="NEET wooden blocks with medical elements"
        className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
      /> */}
    </div>
  </div>
  );
};

export default TopComponent;

// Content
//       <div className="relative z-20"> {/* Ensure content is above video */}
//         <div className="container mx-auto px-4 pt-24">
//           <div className="relative max-w-3xl mx-auto">
//             <motion.img
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//               src={neet}
//               alt="NEET wooden blocks with medical elements"
//               className="w-full rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </div>