import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { otpEntered: "" },
  });
  const localEmail = localStorage.getItem("email");
  console.log(
    "this is the localstorage email at line 21 verifyPage",
    localEmail
  );
  const onSubmit = async ({ otpEntered }) => {
    setLoading(true);

    if (!localEmail) {
      toast.error("No email found in localStorage. Please sign up again.");
      navigate("/sign-up");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/verify",
        {
          otp: otpEntered,
          localEmail,
        }
      );

      if (response.status === 200) {
        toast.success("🎉 Account verified successfully!");
        localStorage.removeItem("email");
        setTimeout(() => navigate("/sign-in"), 2000);
      } 
    } catch (error) {
      console.error("Verification error at line 47 :", error);
      setTimeout(() => {
        toast.error("⚠️ Invalid OTP or something went wrong!");
      },2000);

      const localEmail = localStorage.getItem("email");
      console.log(
        "this is the localstorage email at line 49 verifyPage in catch block",
        localEmail
      );
      try {
        const deleteResponse = await axios.delete(
          "http://localhost:3001/api/auth/deleteUser",
          {
            localEmail,
          }
        );
        if (deleteResponse.status === 200) {
          toast.error(
            "User deleted due to failed verification. Please try again."
          );
          setTimeout(() => navigate("/sign-up"), 2000);
        }
      } catch (deleteError) {
        console.error("User deletion failed:", deleteError);
        setTimeout(()=>{toast.error("there was some issue in deleting the user, after the verification was failed")},3000)
        setTimeout(() => navigate("/sign-up"), 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Verify Your Account</h2>
        <p className="text-center text-gray-600">
          Enter the OTP sent to your email
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium">OTP</label>
            <input
              type="text"
              placeholder="Enter the OTP"
              {...register("otpEntered", {
                required: "OTP is required",
                minLength: {
                  value: 4,
                  message: "OTP must be at least 4 digits",
                },
              })}
              className="w-full px-3 py-2 border rounded text-center text-2xl tracking-widest"
            />
            {errors.otpEntered && (
              <p className="text-red-500 text-sm">
                {errors.otpEntered.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
