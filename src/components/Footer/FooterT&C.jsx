import React from "react";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
  return (
    <Link to="/terms-and-conditions">
      <button className="bg-[rgb(247,186,52)] text-white py-2 px-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 ease-in-out">
        TERMS & CONDITIONS
      </button>
    </Link>
  );
};

export default TermAndCondition;
