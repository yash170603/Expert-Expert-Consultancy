import React from "react";

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gray-400 rounded-lg w-3/4 mx-auto">
      <h1 className="text-3xl font-bold">Testimonials</h1>
    </section>
  );
});

export default Testimonials;
