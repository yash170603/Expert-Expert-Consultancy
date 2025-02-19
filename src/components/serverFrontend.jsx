import React, { useState } from "react";
import axios from "axios";

const ServerFrontend = () => {
  const [data, setData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/api/getData");
      setData(response.data);
      setButtonClicked(true);
      console.log("This is the response from the server:", response);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <p className="mb-4">Click the button to fetch the data you provided</p>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mb-6"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Click me"}
      </button>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display fetched data */}
      {buttonClicked && !loading && data?.data?.length > 0 ? (
        <div className="space-y-6 bg-gray-100 p-4 rounded">
          {data.data.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold mb-2">Personal Details</h2>
              <p>
                <strong>Email:</strong> {item.personalDetails?.email || "N/A"}
              </p>
              <p>
                <strong>First Name:</strong>{" "}
                {item.personalDetails?.firstName || "N/A"}
              </p>
              <p>
                <strong>Last Name:</strong>{" "}
                {item.personalDetails?.lastName || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {item.personalDetails?.phone || "N/A"}
              </p>

              <h2 className="text-xl font-bold mt-4 mb-2">NEET Details</h2>
              <p>
                <strong>Category:</strong> {item.neetDetails?.category || "N/A"}
              </p>
              <p>
                <strong>Course:</strong> {item.neetDetails?.course || "N/A"}
              </p>
              <p>
                <strong>Rank:</strong> {item.neetDetails?.rank || "N/A"}
              </p>
              <p>
                <strong>Score:</strong> {item.neetDetails?.score || "N/A"}
              </p>

              <h2 className="text-xl font-bold mt-4 mb-2">
                Additional Details
              </h2>
              <p>
                <strong>Annual Fee Budget:</strong>{" "}
                {item.additionalDetails?.annualFeeBudget || "N/A"}
              </p>
              <p>
                <strong>Father's Occupation:</strong>{" "}
                {item.additionalDetails?.fatherOccupation || "N/A"}
              </p>
              <p>
                <strong>Mother's Occupation:</strong>{" "}
                {item.additionalDetails?.motherOccupation || "N/A"}
              </p>
              <p>
                <strong>Disabled?:</strong>{" "}
                {item.additionalDetails?.disable || "N/A"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        buttonClicked &&
        !loading && <p className="text-gray-500">No data available.</p>
      )}
    </div>
  );
};

export default ServerFrontend;
