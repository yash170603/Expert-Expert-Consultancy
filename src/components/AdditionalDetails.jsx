import React from "react";

const AdditionalDetails = () => {
  const quota = ["General", "OBC-CENTRAL", "OBC-State", "EWS", "ST", "SC"];

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      style={{
        position: "relative",
        left: "-180px",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-80 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
        <form>
          {/* Disability Question */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Are you a person with a disability?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pwd"
                  value="false"
                  className="text-blue-600"
                />
                <span>No</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pwd"
                  value="true"
                  className="text-blue-600"
                />
                <span>Yes</span>
              </label>
            </div>
          </div>

          {/* Quota */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="quota"
            >
              Quota
            </label>
            <select
              id="quota"
              name="quota"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {quota.map((quot, index) => (
                <option key={index} value={quot}>
                  {quot}
                </option>
              ))}
            </select>
          </div>

          {/* Annual Fee Budget */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="annualFee"
            >
              Annual Fee Budget (INR)
            </label>
            <input
              type="number"
              id="annualFee"
              name="annualFee"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter fee budget"
            />
          </div>

          {/* Parent's Occupation */}
          <div>
            <h6 className="text-lg font-medium text-gray-800 mb-4">
              Parent's Occupation
            </h6>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="motherOccupation"
              >
                Mother's Occupation
              </label>
              <input
                type="text"
                id="motherOccupation"
                name="motherOccupation"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Mother's occupation"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="fatherOccupation"
              >
                Father's Occupation
              </label>
              <input
                type="text"
                id="fatherOccupation"
                name="fatherOccupation"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Father's occupation"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionalDetails;
