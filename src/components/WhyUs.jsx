import React from "react";

const WhyUs = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gray-300 rounded-lg w-3/4 mx-auto">
      <h1 className="text-3xl font-bold">Why Us</h1>
    </section>
  );
});

export default WhyUs;
