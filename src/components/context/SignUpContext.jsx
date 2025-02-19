import React, { createContext, useState, useContext } from "react";

// Create the context to store form data
const SignupContext = createContext();

// This is the provider component, which will wrap around all the forms
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
      course: "",
      domicile: "",
    },
    additionalDetails: {
      disable: "",
      quota: "",
      annualFeeBudget: "",
      motherOccupation: "",
      fatherOccupation: "",
    },
  });

  // Function to update only specific parts of the form data
  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  console.log("✅ SignupProvider is rendering!");
  console.log("🔹 Current Form Data:", formData);

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
