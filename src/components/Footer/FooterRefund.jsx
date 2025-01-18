import React from "react";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <Link to="/refund-rule">
      <button className="bg-[rgb(247,186,52)] text-white py-2 px-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 ease-in-out">
        REFUND POLICIES
      </button>
    </Link>
  );
};

export default Refund;
