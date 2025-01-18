import React from "react";
import { motion } from "framer-motion";

import FooterSection2 from "./FooterSection2";
import FooterSocialHandle from "./FooterSocialHandles";
import FooterReachUs from "./FooterReachUs";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {/* First Section: Reach Us */}
          <div className="space-y-6">
            <FooterReachUs />
          </div>

          {/* Second Section */}
          <div className="space-y-6">
            <FooterSection2 />
          </div>

          {/* Third Section: Social Icons */}
          <div className="space-y-6">
            <FooterSocialHandle />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
