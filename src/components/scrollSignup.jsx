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
import axios from "axios";

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

      const response = await axios.post(
        "http://localhost:3000/api/postData",
        cleanedData
      );

      if (response.status === 201) {
        toast.success("✅ Signed up successfully!");
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000); 
      } else {
        toast.error("⚠️ Unexpected response. Please try again later.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("❌ An error occurred while signing up. Please try again.");
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
      <Toaster  />
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
