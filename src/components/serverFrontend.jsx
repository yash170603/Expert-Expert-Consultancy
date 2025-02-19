import React, { useState } from "react";
import axios from "axios";

const ServerFrontend = () => {
  const [data, setData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getData");

      // Ensure the response structure is correct
      if (response.data && Array.isArray(response.data.data)) {
        setData(response.data);
        setButtonClicked(true);
        console.log("Response from server:", response.data);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <p className="mb-4">
        Click this button to fetch the data that you provided
      </p>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mb-6"
      >
        Click me
      </button>

      {buttonClicked && Array.isArray(data?.data) && data.data.length > 0 ? (
        <div className="space-y-6 bg-gray-100 p-4 rounded">
          {data.data.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold mb-2">Personal Details</h2>
              <p>
                <strong>Email:</strong> {item.email || "N/A"}
              </p>
              <p>
                <strong>First Name:</strong> {item.firstName || "N/A"}
              </p>
              <p>
                <strong>Last Name:</strong> {item.lastName || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {item.phone || "N/A"}
              </p>
              <p>
                <strong>Date of Birth:</strong> {item.dob || "N/A"}
              </p>
              <p>
                <strong>Gender:</strong> {item.gender || "N/A"}
              </p>

              <h2 className="text-xl font-bold mt-4 mb-2">NEET Details</h2>
              <p>
                <strong>Category:</strong> {item.category || "N/A"}
              </p>
              <p>
                <strong>Preferred Course:</strong>{" "}
                {item.preferredCourse || "N/A"}
              </p>
              <p>
                <strong>Rank:</strong> {item.neetRank || "N/A"}
              </p>
              <p>
                <strong>Score:</strong> {item.neetScore || "N/A"}
              </p>
              <p>
                <strong>Domicile State:</strong> {item.domicileState || "N/A"}
              </p>

              <h2 className="text-xl font-bold mt-4 mb-2">
                Additional Details
              </h2>
              <p>
                <strong>Annual Fee Budget:</strong> {item.feeBudget || "N/A"}
              </p>
              <p>
                <strong>Father's Occupation:</strong>{" "}
                {item.fatherOccupation || "N/A"}
              </p>
              <p>
                <strong>Mother's Occupation:</strong>{" "}
                {item.motherOccupation || "N/A"}
              </p>
              <p>
                <strong>Disability Quota:</strong>{" "}
                {item.disabilityQuota || "N/A"}
              </p>
              <p>
                <strong>State Quota:</strong> {item.stateQuota || "N/A"}
              </p>
              <p>
                <strong>12th Percentage:</strong> {item.percentage12th || "N/A"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        buttonClicked && <p className="text-red-500">No data available</p>
      )}
    </div>
  );
};

export default ServerFrontend;
