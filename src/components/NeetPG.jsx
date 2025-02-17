
// new code with Services component
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TopComponent from "./TopComponent"
import AboutUs from "./AboutUs"
import WhyUs from "./WhyUs"
import Testimonials from "./Testimonials"
import Navbar from "./Navbar"
import MissionVision from "./VisionMission"
import Footer from "./Footer/Footer.jsx"
import { Particles } from "./Particles"
import { NEETPGNews } from "./NeetPGNews.jsx"
import ServiceList from "./ServiceList" // Import the ServiceList component

const NeetPG = () => {
  const aboutUsRef = useRef(null)
  const whyUsRef = useRef(null)
  const serviceListRef = useRef(null) // New ref for ServiceList
  const testimonialsRef = useRef(null)
  const mainRef = useRef(null)
  const footRef = useRef(null)

  const refs = {
    aboutUsRef,
    whyUsRef,
    serviceListRef, // Add the new ref
    testimonialsRef,
    footRef,
  }

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.3])

  const scrollToSection = (section) => {
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-blue-950 via-[#1B224B] to-blue-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <Particles className="absolute inset-0" quantity={100} />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 z-0">
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        />
      </div>

      <Navbar scrollToSection={scrollToSection} />

      <main ref={mainRef} className="relative flex-grow z-10">
        <TopComponent />
        <div className="container mx-auto px-4 space-y-32 py-24">
          <motion.section
            ref={aboutUsRef}
            id="about-us"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <AboutUs />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-600/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <MissionVision />
            </div>
          </motion.section>

          <motion.section
            ref={whyUsRef}
            id="why-us"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <WhyUs />
            </div>
          </motion.section>

          {/* New ServiceList section */}
          <motion.section
            ref={serviceListRef}
            id="service-list"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <ServiceList />
            </div>
          </motion.section>

          <motion.section
            ref={testimonialsRef}
            id="testimonials"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <Testimonials />
            </div>
          </motion.section>

          <motion.section
            ref={footRef}
            id="neetpgnews"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
            <div className="relative p-6">
              <NEETPGNews />
            </div>
          </motion.section>
        </div>
      </main>
      <motion.section
        ref={footRef}
        id="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20" />
        <div className="relative p-6">
          <Footer />
        </div>
      </motion.section>
    </div>
  )
}

export default NeetPG




