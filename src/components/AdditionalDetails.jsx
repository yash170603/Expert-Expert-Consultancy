import React from "react";
import { useSignUp } from "./context/SignUpContext";

const AdditionalDetails = () => {
  const { formData, updateFormData } = useSignUp();

  const quotaOptions = ["None", "OBC", "SC", "ST", "EWS"];

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
      {/* Disability Section */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Disability:
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="disability"
              value="Yes"
              checked={formData.additionalDetails.disable === "Yes"}
              onChange={() =>
                updateFormData("additionalDetails", { disable: "Yes" })
              }
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              name="disability"
              value="No"
              checked={formData.additionalDetails.disable === "No"}
              onChange={() =>
                updateFormData("additionalDetails", { disable: "No" })
              }
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Quota Selection */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="quota"
        >
          Quota:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quota"
          value={formData.additionalDetails.quota}
          onChange={(e) =>
            updateFormData("additionalDetails", { quota: e.target.value })
          }
        >
          {quotaOptions.map((quota) => (
            <option key={quota} value={quota}>
              {quota}
            </option>
          ))}
        </select>
      </div>

      {/* Annual Fee Budget */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="annualFeeBudget"
        >
          Annual Fee Budget:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="annualFeeBudget"
          type="number"
          value={formData.additionalDetails.annualFeeBudget}
          onChange={(e) =>
            updateFormData("additionalDetails", {
              annualFeeBudget: e.target.value,
            })
          }
        />
      </div>

      {/* Father's Occupation */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fatherOccupation"
        >
          Father's Occupation:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fatherOccupation"
          type="text"
          value={formData.additionalDetails.fatherOccupation}
          onChange={(e) =>
            updateFormData("additionalDetails", {
              fatherOccupation: e.target.value,
            })
          }
        />
      </div>

      {/* Mother's Occupation */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="motherOccupation"
        >
          Mother's Occupation:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="motherOccupation"
          type="text"
          value={formData.additionalDetails.motherOccupation}
          onChange={(e) =>
            updateFormData("additionalDetails", {
              motherOccupation: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
