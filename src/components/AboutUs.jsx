import React from "react";
import Bannerjpg from "../assets/01.jpg";
import { motion } from "framer-motion";

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <div className="py-10  p-2   border-spacing-1">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-6">
          <span className="relative inline-block">
          <span className="text-yellow-400">About Us</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
        </span>
          </h2>
          <p className="text-lg  text-white hover:cursor-pointer">
            Expert Educational Consultancy was conceptualised and incorporated
            in 1995 with a permanent office in Delhi, in response to the growing
            concerns in MBBS / BDS / BAMS / BHMS / MD / MS / Diploma / FCPS /
            CPS admissions in India about fraud, misguidance and cheating by
            several unscrupulous touts masquerading as admission counsellors. To
            combat this growing issue and offer complete transparency, Expert
            Educational Consultancy uses Artificial Intelligence and Data
            Analytics to help students.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={Bannerjpg || "/placeholder.svg"}
              alt="About Us Image"
              className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition ease-in-out m-0.5"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AboutUs;
