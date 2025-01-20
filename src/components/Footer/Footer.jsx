// import React from "react";
// import { motion } from "framer-motion";

// import FooterSection2 from "./FooterSection2";
// import FooterSocialHandle from "./FooterSocialHandles";
// import FooterReachUs from "./FooterReachUs";

// const Footer = React.forwardRef((props,ref) => {
//   return (
//     <footer className="py-16 bg-[#f7f7f7]">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="container mx-auto px-6"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
//           {/* First Section: Reach Us */}
//           <div className="space-y-6">
//             <FooterReachUs />
//           </div>

//           {/* Second Section */}
//           <div className="space-y-6">
//             <FooterSection2 />
//           </div>

//           {/* Third Section: Social Icons */}
//           <div className="space-y-6">
//             <FooterSocialHandle />
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// });

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaBuilding, FaInstagram, FaFacebook, FaTelegram, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = React.forwardRef((props, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <footer className="bg-blue-950 backdrop-blur-md border-t border-blue-950 mt-auto">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Reach Us Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Reach Us</h3>
              <div className="space-y-3">
                <a href="mailto:info@expertedu.com"  target="_blank" 
                   className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                  <span>info@expertedu.com</span>
                </a>
                <a href="tel:9313555010"   target="_blank"
                   className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>+91 93135 55010</span>
                </a>
                <a href="https://www.google.com/maps/place/Expert+Educational+Consultancy+Estd.+1995/@28.712546,77.1371463,17z/data=!3m1!4b1!4m6!3m5!1s0x390d017caca5521d:0xfab588b644feabdd!8m2!3d28.712546!4d77.1371463!16s%2Fg%2F1tf34b9f?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D" 
                   className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                   target="_blank">
                  <FaBuilding className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="group-hover:text-yellow-400 text-sm">
                    104, Aditya Complex 2, D-Block,
                    Central Market, Prashant Vihar,
                    Delhi-110085
                  </span>
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              <p className="text-sm text-gray-300">Get daily updates about our services</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-yellow-400 text-[#1B224B] rounded-md hover:bg-yellow-300 transition-colors"
                  >
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>

            {/* Social & Links Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
              <div className="flex space-x-3 mb-4">
                <a href="https://www.facebook.com/people/Expert-Educational-Consultancy-Estd1995/100067182972359/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <FaFacebook className="w-5 h-5 text-blue-500" />
                </a>
                <a href= "https://www.instagram.com/experteducationalconsultancy/?hl=en"target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <FaInstagram className="w-5 h-5 text-pink-500" />
                </a>
                <a href="https://t.me/ExpertNEETUG"target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <FaTelegram className="w-5 h-5 text-blue-400" />
                </a>
              </div>
              <div className="space-y-2">
                <Link to="/terms-and-conditions"
                      className="block w-full px-3 py-1.5 bg-white/5 text-white text-sm text-center rounded-lg hover:bg-white/10 transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/refund-rule"
                      className="block w-full px-3 py-1.5 bg-white/5 text-white text-sm text-center rounded-lg hover:bg-white/10 transition-colors">
                  Refund Policies
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-center text-gray-400 text-xs">
              © {new Date().getFullYear()} Expert Educational Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;



