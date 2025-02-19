import { Timeline } from "./componentsdd/ui/timeline";
import SignupForm from "./SignUpPage";
import NeetDetails from "./Neet.Details.Form";
import AdditionalDetails from "./AdditionalDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUp } from "./context/SignupContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ScrollSignup = () => {
  const [submitting, isSubmitting] = useState(false);
  const { formData } = useSignUp(); // Access the context data
  const navigate = useNavigate();

  console.log("Full Form Data on Render:", formData); // Debugging

  const handleSubmit = async () => {
    try {
      isSubmitting(true);

      // Debugging: Ensure personal details exist
      console.log(
        "Before Cleaning - Personal Details:",
        formData?.personalDetails
      );

      // Ensure only required fields are included
      const cleanedFormData = {
        ...formData,
        personalDetails: {
          ...formData.personalDetails,
          firstName: formData.personalDetails?.firstName?.trim() || "",
          lastName: formData.personalDetails?.lastName?.trim() || "",
          email: formData.personalDetails?.email?.trim() || "",
          phone: formData.personalDetails?.phone?.trim() || "",
          password: formData.personalDetails?.password?.trim() || "",
        },
        neetDetails: {
          ...formData.neetDetails,
          domicile: formData.neetDetails?.domicile?.trim(),
        },
        additionalDetails: {
          ...formData.additionalDetails,
          fatherOccupation:
            formData.additionalDetails?.fatherOccupation?.trim(),
        },
      };

      // Log the cleaned data for debugging
      console.log("Submitting Cleaned Form Data:", cleanedFormData);

      // Debugging: Check if personal details are still missing
      console.log(
        "After Cleaning - Personal Details:",
        cleanedFormData?.personalDetails
      );

      // Validation: Check for empty or undefined fields
      const isFieldEmpty = (field) => !field || field.trim() === "";

      if (
        isFieldEmpty(cleanedFormData.personalDetails?.firstName) ||
        isFieldEmpty(cleanedFormData.personalDetails?.lastName) ||
        isFieldEmpty(cleanedFormData.personalDetails?.email) ||
        isFieldEmpty(cleanedFormData.personalDetails?.phone) ||
        isFieldEmpty(cleanedFormData.personalDetails?.password) ||
        isFieldEmpty(cleanedFormData?.neetDetails?.score) ||
        isFieldEmpty(cleanedFormData?.neetDetails?.rank) ||
        isFieldEmpty(cleanedFormData?.neetDetails?.category) ||
        isFieldEmpty(cleanedFormData?.neetDetails?.course) ||
        isFieldEmpty(cleanedFormData?.neetDetails?.domicile) ||
        isFieldEmpty(cleanedFormData?.additionalDetails?.disable) ||
        isFieldEmpty(cleanedFormData?.additionalDetails?.quota) ||
        isFieldEmpty(cleanedFormData?.additionalDetails?.annualFeeBudget) ||
        isFieldEmpty(cleanedFormData?.additionalDetails?.fatherOccupation) ||
        isFieldEmpty(cleanedFormData?.additionalDetails?.motherOccupation)
      ) {
        toast.error("All fields are required.");
        isSubmitting(false);
        return;
      }

      // Send cleaned data to backend
      const response = await axios.post(
        "http://localhost:3000/api/postData",
        cleanedFormData
      );

      console.log("Response from backend:", response);
      isSubmitting(false);

      if (response.status === 201) {
        toast.success("Signed up successfully!");
        navigate("/sign-in");
      } else {
        toast.error("Internal server error. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
      isSubmitting(false);
    }
  };

  // Timeline sections
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
    <div className="h-screen w-full bg-blue-950">
      <Toaster position="top-center" reverseOrder={false} />
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
