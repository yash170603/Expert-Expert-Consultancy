import { Timeline } from "./componentsdd/ui/timeline";
import SignupForm from "./SignUpPage";
import React from "react";
import NeetDetails from "./Neet.Details.Form";
import AdditionalDetails from "./AdditionalDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
const ScrollSignup = () => {
  const [submitting, isSubmitting] = useState(false);
  const data = [
    {
      title: "Personal Details",
      content: <SignupForm />,
    },
    {
      title: "Neet Details",
      content: (
        <div>
          <NeetDetails />
        </div>
      ),
    },
    {
      title: "Addition Details",
      content: (
        <div>
          <AdditionalDetails />
        </div>
      ),
    },
  ];
  return (
    <div className="h-screen w-full bg-blue-950 ">
      <Timeline data={data} />
      <div className="flex flex-col items-center justify-between bg-blue-950 mb-2  ">

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline w-fit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting === true ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin mr-2" size={18} />
              <span>Signing Up...</span>
            </div>
          ) : (
            "Sign Up"
          )}
        </button>
        <div className="text-center mt-6">
        <p className="text-white">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-500 hover:text-blue-700 font-semibold">
            Sign In
          </Link>
        </p>
      </div>

        <p className="text-center text-white text-2xl bg-gray-500  mt-4 w-full p-6">
        &copy; Expert Educational Consultancy. All rights reserved.
      </p>
      </div>

      
    </div>
  );
};

export default ScrollSignup;
