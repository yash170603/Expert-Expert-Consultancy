import React from "react";
import Bannerjpg from "../assets/01.jpg"


const AboutUs = React.forwardRef((props, ref) => {
  return (

    <section  ref={ref} className="h-screen flex items-center justify-center bg-gray-200 rounded-lg w-3/4 mx-auto" >
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div
            className="max-w-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Expert Educational Consultancy was conceptualised and incorporated
              in 1995 with a permanent office in Delhi, in response to the
              growing concerns in MBBS / BDS / BAMS / BHMS / MD / MS / Diploma / FCPS / CPS
              admissions in India about fraud, misguidance and cheating by
              several unscrupulous touts masquerading as admission counsellors.
              To combat this growing issue and offer complete transparency,
              Expert Educational Consultancy uses Artificial Intelligence and
              Data Analytics to help students.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={Bannerjpg}
              alt="About Us Image" 
              className="object-cover rounded shadow-md w-full h-auto"
            />
          </motion.div>
        </div>
    </div>
</section>
  );
});


export default AboutUs;
