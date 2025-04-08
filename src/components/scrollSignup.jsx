import { Timeline } from "./componentsdd/ui/timeline"; // ✅ Ensure correct path
import SignupForm from "./SignUpPage";
import NeetDetails from "./Neet.Details.Form";
import AdditionalDetails from "./AdditionalDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUp } from "./context/SignUpContext"; // ✅ Ensure correct import path
import toast, { Toaster } from "react-hot-toast"; 
import { apiClient } from "../lib/axios.config";


const ScrollSignup = () => {
  const [submitting, setSubmitting] = useState(false);
  const { formData } = useSignUp(); // ✅ Access the context data
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      // ✅ Remove empty or null fields before submitting
      const cleanedData = JSON.parse(
        JSON.stringify(formData, (key, value) =>
          value === "" || value === null ? undefined : value
        )
      );

      console.log(
        "📩 Submitting Cleaned Data:",
        JSON.stringify(cleanedData, null, 2)
      );

      if (!cleanedData || Object.keys(cleanedData).length === 0) {
        toast.error("⚠️ Form data is empty. Please fill all required fields.");
        setSubmitting(false);
        return;
      }

      // const response = await apiClient.post(
      //   "/auth/signup",
      //   cleanedData
      // );
      const response = await apiClient.post(
        "/auth/signup", //http://localhost:3001
        cleanedData
      );
      console.log("🚀 Server Response:", response);

      if (response.status === 201) {
        toast.success("✅ Signed up successfully!");
        localStorage.setItem("email", cleanedData?.personalDetails?.email);

        setTimeout(() => {
          navigate("/verify-email");  // before we were directly going to /sign_in
        }, 2000);
      } else {
        toast.error("⚠️ Unexpected response. Please try again later.");
      }
    } catch (error) {
     
      console.log("Signup  Error at scrollsignup:", error);
    } finally {
      setSubmitting(false);  
    }
  };

  
  
  const data = [
    { title: "Personal Details", content: <SignupForm /> },
    { title: "Neet Details", content: <NeetDetails /> },
    { title: "Additional Details", content: <AdditionalDetails /> },
  ];

  return (
    <div className="h-screen w-full bg-blue-950">
      <Toaster />
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
            <Link
              to="/sign-in"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
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




// if (error.response) {
//   // Server ne response diya, lekin error ke saath
//   if (error.response.status === 400) {
//     toast(
//      `Error: ${error.response?.data?.message || "Unknown error"}`
//     );
//   } else if (error.response.status === 500) {
//     //toast(` ❌ Internal server error, please try again later`);
//     toast(`Error: ${error.response.data?.error || "Unknown error"}`);
//   }
// } else if (error.request) {
//   // Request gayi thi, par server ne koi response nahi diya
//   toast(" ❌ No response from server, check your internet connection.");
// } else {
//   // Koi aur error (jaise ki syntax error, wrong API call)
//   toast(` ❌ Error: ${error.message}`);
// }