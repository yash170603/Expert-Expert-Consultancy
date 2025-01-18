import React from "react";
import Bannerjpg from "../assets/01.jpg";
import { motion } from "framer-motion";

const AboutUs = React.forwardRef((props, ref) => {  // props  need to be passed even if not being used
  return (
    <div className="py-16  p-2   border-spacing-1">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-yellow-400 sm:text-4xl mb-6">
            About Us
          </h2>
          <p className="text-3xl  text-white hover:underline hover:cursor-pointer">
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
