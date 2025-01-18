import React, { useRef } from "react";
import TopComponent from "./TopComponent";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer.jsx";

const NeetPG = () => {
  const aboutUsRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const refs = {
    aboutUsRef,
    whyUsRef,
    testimonialsRef,
  };

  const scrollToSection = (section) => {
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar scrollToSection={scrollToSection} />
      <TopComponent />
      <div className=" mx-auto px-4 space-y-24 py-24 ">
        <section
          ref={aboutUsRef}
          id="about-us"
          className="border-2 rounded-xl border-white  p-4"
        >
          <AboutUs />
        </section>

        <section
          ref={whyUsRef}
          id="why-us"
          className="border-2 rounded-xl border-white p-4"
        >
          <WhyUs />
        </section>
        <section
          ref={testimonialsRef}
          id="testimonials"
          className="border-2 rounded-xl border-white p-4"
        >
          <Testimonials />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default NeetPG;
