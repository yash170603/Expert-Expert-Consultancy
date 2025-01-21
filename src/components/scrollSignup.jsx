import { Timeline } from "./componentsdd/ui/timeline";
import SignupForm from "./SignUpPage";
import React from "react";
import NeetDetails from "./Neet.Details.Form";
import AdditionalDetails from "./AdditionalDetails";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast, {Toaster} from "react-hot-toast";

const ScrollSignup = () => {
  const [submitting, setSubmitting] = useState(false);
 
   var formDatnna=''
   const handleSubmit = async ()=>{

      try {
        const dataaaa=["i ",'want','to','submit','this','data'];
        setSubmitting(true);
        const response= await axios.post('http://localhost:3000/api/signup', dataaaa); // this is jsut the temporary backend
           console.log(response);
           toast.success('Signup successful!');
      } catch (error) {
        console.log(error);  // be sure to remove it later
        setSubmitting(false);
         toast.error('An error occurred. Please try again later.');
      }
         
   }
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
      title: "Additional Details",
      content: (
        <div>
          <AdditionalDetails />
        </div>
      ),
    },
  ];
  return (
  
    <div className="h-screen w-full- bg-blue-950 ">
      <Toaster position="top-center" reverseOrder={false} />
      <Timeline data={data} />
      <div className="flex flex-col items-center justify-between bg-blue-950 mb-2  ">

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline w-fit"
          type="submit"
          disabled={submitting}
           onClick={handleSubmit} 
        >
          {submitting === true ? (
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
