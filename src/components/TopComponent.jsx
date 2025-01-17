import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import neet from "../assets/neet.jpg";

const TopComponent = ({ refs }) => {
  const scrollToSection = (section) => {
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-500 h-3/4 w-3/4">
      <Navbar scrollToSection={scrollToSection} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", paddingTop: "5rem" }}>
        <div className="relative">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={neet}
            alt="NEET wooden blocks with medical elements"
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              display: "block",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopComponent;

