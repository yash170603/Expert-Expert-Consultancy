import React from "react";
import { useSignUp } from "./context/SignUpContext";

const SignupForm = () => {
  const { formData, updateFormData } = useSignUp();

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
      {/* First Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
          type="text"
          value={formData.personalDetails.firstName}
          onChange={(e) =>
            updateFormData("personalDetails", { firstName: e.target.value })
          }
          required
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
          type="text"
          value={formData.personalDetails.lastName}
          onChange={(e) =>
            updateFormData("personalDetails", { lastName: e.target.value })
          }
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          value={formData.personalDetails.email}
          onChange={(e) =>
            updateFormData("personalDetails", { email: e.target.value })
          }
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          name="phone"
          type="tel"
          value={formData.personalDetails.phone}
          onChange={(e) =>
            updateFormData("personalDetails", { phone: e.target.value })
          }
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          value={formData.personalDetails.password}
          onChange={(e) =>
            updateFormData("personalDetails", { password: e.target.value })
          }
          required
        />
      </div>
    </div>
  );
};

export default SignupForm;
