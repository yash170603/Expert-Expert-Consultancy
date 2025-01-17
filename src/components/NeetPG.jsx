import React, { useRef } from "react";
import TopComponent from "./TopComponent";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";

const NeetPG = () => {
  const aboutUsRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <div className=" min-h-screen">
      <section>
        <TopComponent refs={{ aboutUsRef, whyUsRef, testimonialsRef }} />
      </section>
      <section ref={aboutUsRef} className="md:py-16 lg:py-24">
        <AboutUs />
      </section>
      <section ref={whyUsRef} className="md:py-16 lg:py-24">
        <WhyUs />
      </section>
      <section ref={testimonialsRef} className="md:py-16 lg:py-24">
        <Testimonials />
      </section>
    </div>
  );
};

export default NeetPG;
