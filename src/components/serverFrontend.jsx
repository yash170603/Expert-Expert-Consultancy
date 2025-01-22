import React, { useState } from 'react';
import axios from 'axios';

const ServerFrontend = () => {
    const [data, setData] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/getData');
            setData(response.data);
            setButtonClicked(true);
            console.log("This is the response from the server:", response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <p className="mb-4">Click this button to fetch the data that you provided</p>
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mb-6"
            >
                Click me
            </button>

            {buttonClicked && data && data.data && (
                <div className="space-y-6 bg-gray-100 p-4 rounded">
                    {data.data.map((item, index) => (
                        <div key={index} className="p-4 bg-white rounded shadow">
                            <h2 className="text-xl font-bold mb-2">Personal Details</h2>
                            <p><strong>Email:</strong> {item.personalDetails.email}</p>
                            <p><strong>First Name:</strong> {item.personalDetails.firstName}</p>
                            <p><strong>Last Name:</strong> {item.personalDetails.lastName}</p>
                            <p><strong>Phone:</strong> {item.personalDetails.phone}</p>

                            <h2 className="text-xl font-bold mt-4 mb-2">NEET Details</h2>
                            <p><strong>Category:</strong> {item.neetDetails.category}</p>
                            <p><strong>Course:</strong> {item.neetDetails.course}</p>
                            <p><strong>Rank:</strong> {item.neetDetails.rank}</p>
                            <p><strong>Score:</strong> {item.neetDetails.score}</p>

                            <h2 className="text-xl font-bold mt-4 mb-2">Additional Details</h2>
                            <p><strong>Annual Fee Budget:</strong> {item.additionalDetails.annualFeeBudget}</p>
                            <p><strong>Father's Occupation:</strong> {item.additionalDetails.fatherOccupation}</p>
                            <p><strong>Mother's Occupation:</strong> {item.additionalDetails.motherOccupation}</p>
                            <p><strong>Diabled?:</strong> {item.additionalDetails.disable}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServerFrontend;
