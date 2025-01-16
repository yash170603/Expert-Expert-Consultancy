import React, { useRef } from 'react';
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";

const NeetPG = () => {
  const aboutUsRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const sectionRefs = {
    aboutUs: aboutUsRef,
    whyUs: whyUsRef,
    testimonials: testimonialsRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <div className="container mx-auto p-4">
        <section ref={aboutUsRef} className=" md:py-16 lg:py-24">
          <AboutUs />
        </section>
        <section ref={whyUsRef} className=" md:py-16 lg:py-24">
          <WhyUs />
        </section>
        <section ref={testimonialsRef} className=" md:py-16 lg:py-24">
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default NeetPG;