import React, { createContext, useState, useContext } from "react";

// Create the context to store form data
const SignupContext = createContext();

// Provider component to wrap around all forms
export const SignupProvider = ({ children }) => {
  // Store all form data in a single state
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    neetDetails: {
      score: "",
      rank: "",
      category: "",
      course: "", // Dropdown: ["None", "MBBS", "BAMS", "BHMS", "BDS"]
      domicile: "", // Dropdown: All Indian states
    },
    additionalDetails: {
      disability: "", // Radio: "Yes" or "No"
      quota: "", // Dropdown: ["None", "OBC", "SC", "ST", "EWS"]
      annualFeeBudget: "",
      motherOccupation: "",
      fatherOccupation: "", // Fixed typo
    },
  });

  // Function to update specific sections of the form
  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  return (
    <SignupContext.Provider value={{ formData, updateFormData }}>
      {children}
    </SignupContext.Provider>
  );
};

// Custom hook to access the context in other components
export const useSignUp = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignUp must be used within a SignupProvider");
  }
  return context;
};
