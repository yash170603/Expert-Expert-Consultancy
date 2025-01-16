import React from "react";

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gray-200 rounded-lg w-3/4 mx-auto">
      <h1 className="text-3xl font-bold">About Us</h1>
      
    </section>
  );
});

export default AboutUs;
