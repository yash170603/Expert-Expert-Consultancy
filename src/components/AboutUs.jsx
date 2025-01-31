// import React from "react";
// import Bannerjpg from "../assets/01.jpg";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const AboutUs = React.forwardRef((props, ref) => {  // props  need to be passed even if not being used
//   return (
//     <div className="py-10  p-2   border-spacing-1">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-6">
//           <span className="relative inline-block">
//           <span className="text-yellow-400">About Us</span>
//           <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
//         </span>
//           </h2>
//           <p className="text-lg  text-white hover:cursor-pointer">
//             Expert Educational Consultancy was conceptualised and incorporated
//             in 1995 with a permanent office in Delhi, in response to the growing
//             concerns in MBBS / BDS / BAMS / BHMS / MD / MS / Diploma / FCPS /
//             CPS admissions in India about fraud, misguidance and cheating by
//             several unscrupulous touts masquerading as admission counsellors. To
//             combat this growing issue and offer complete transparency, Expert
//             Educational Consultancy uses Artificial Intelligence and Data
//             Analytics to help students.
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="overflow-hidden rounded-lg">
//             <img
//               src={Bannerjpg || "/placeholder.svg"}
//               alt="About Us Image"
//               className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition ease-in-out m-0.5"
//             />
//           </div>

//           <div> 
//             <Link to={'/qna'}>
//              <h2>Know more about us!</h2>
//             </Link>
              
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// });

// export default AboutUs;

import React from "react"
import Bannerjpg from "../assets/01.jpg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const AboutUs = React.forwardRef((props, ref) => {
  // props  need to be passed even if not being used
  return (
    <div className="py-10 p-2 border-spacing-1">
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
          <p className="text-lg text-white hover:cursor-pointer">
            Expert Educational Consultancy was conceptualised and incorporated in 1995 with a permanent office in Delhi,
            in response to the growing concerns in MBBS / BDS / BAMS / BHMS / MD / MS / Diploma / FCPS / CPS admissions
            in India about fraud, misguidance and cheating by several unscrupulous touts masquerading as admission
            counsellors. To combat this growing issue and offer complete transparency, Expert Educational Consultancy
            uses Artificial Intelligence and Data Analytics to help students.
          </p>
          <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to="/qna"
                className="inline-block bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Know more about us!
              </Link>
            </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Bannerjpg || "/placeholder.svg"}
              alt="About Us Image"
              className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition ease-in-out duration-300"
            />
           
          </div>
        </motion.div>
      </div>
    </div>
  )
})

export default AboutUs

