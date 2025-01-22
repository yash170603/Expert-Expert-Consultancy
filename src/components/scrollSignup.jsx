// import { Timeline } from "./componentsdd/ui/timeline";
// import SignupForm from "./SignUpPage";
// import React from "react";
// import NeetDetails from "./Neet.Details.Form";
// import AdditionalDetails from "./AdditionalDetails";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";
// const ScrollSignup = () => {
//   const [submitting, isSubmitting] = useState(false);
//   const data = [
//     {
//       title: "Personal Details",
//       content: <SignupForm />,
//     },
//     {
//       title: "Neet Details",
//       content: (
//         <div>
//           <NeetDetails />
//         </div>
//       ),
//     },
//     {
//       title: "Addition Details",
//       content: (
//         <div>
//           <AdditionalDetails />
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="h-screen w-full bg-blue-950 ">
//       <Timeline data={data} />
//       <div className="flex flex-col items-center justify-between bg-blue-950 mb-2  ">

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline w-fit"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting === true ? (
//             <div className="flex justify-center items-center">
//               <Loader2 className="animate-spin mr-2" size={18} />
//               <span>Signing Up...</span>
//             </div>
//           ) : (
//             "Sign Up"
//           )}
//         </button>
//         <div className="text-center mt-6">
//         <p className="text-white">
//           Already have an account?{" "}
//           <Link to="/sign-in" className="text-blue-500 hover:text-blue-700 font-semibold">
//             Sign In
//           </Link>
//         </p>
//       </div>

//         <p className="text-center text-white text-2xl bg-gray-500  mt-4 w-full p-6">
//         &copy; Expert Educational Consultancy. All rights reserved.
//       </p>
//       </div>

      
//     </div>
//   );
// };

// export default ScrollSignup;


import { Timeline } from "./componentsdd/ui/timeline";
import SignupForm from "./SignUpPage";
import NeetDetails from "./Neet.Details.Form";
import AdditionalDetails from "./AdditionalDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUp } from "./context/SignUpContext"; // Adjust the import path as necessary
import toast from "react-hot-toast";
import axios from "axios";

const ScrollSignup = () => {
  const [submitting, isSubmitting] = useState(false);
  const { formData} = useSignUp(); // Access the context data

  const handleSubmit =  async  () => {
     try {
         isSubmitting(true);
         toast.success("Signed up successfully!");
         console.log("button was clicked and send data api was called")
         console.log("this is contextFormData",formData);

         const response = await  axios.post("http://localhost:3000/api/postData", formData);

          console.log(response);
          isSubmitting(false);
          console.log("button is clicked")


     } catch (error) {
         console.log(error);
         toast.error("THere was an error caught in the catch block");
     }

     finally{
      
     }
  };

  const data = [
    {
      title: "Personal Details",
      content: <SignupForm />,
    },
    {
      title: "Neet Details",
      content: <NeetDetails />,
    },
    {
      title: "Additional Details",
      content: <AdditionalDetails />,
    },
  ];

  return (
    <div className="h-screen w-full bg-blue-950 ">
      <Timeline data={data} />
      <div className="flex flex-col items-center justify-between bg-blue-950 mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-fit"
          type="submit"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? (
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
        <p className="text-center text-white text-2xl bg-gray-500 mt-4 w-full p-6">
          &copy; Expert Educational Consultancy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ScrollSignup;