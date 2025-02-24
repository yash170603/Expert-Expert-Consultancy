import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentManager = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getData") // ✅ Backend runs on 3000
      .then((response) => {
        setStudents(response.data.data); // ✅ Ensure correct key
        setFilteredStudents(response.data.data); // Initially, show all students
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching student data:", error);
        setError("Failed to load student data");
        setLoading(false);
      });
  }, []);

  // Handle Search Input Change
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter students by email or phone number
    const filtered = students.filter(
      (student) =>
        student.email.toLowerCase().includes(query) ||
        student.phone.includes(query)
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="w-full h-screen p-6 bg-gray-100 flex flex-col items-center">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-gray-800 text-center w-full mb-4">
        Student Information
      </h1>

      {/* Search Bar (Aligned to Right) */}
      <div className="w-full flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by Email or Phone..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-400 px-4 py-2 rounded-md w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
      </div>

      {/* Student List (Scrollable) */}
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-y-auto max-h-[70vh]">
          <table className="table-auto w-full">
            {/* Table Headings */}
            <thead
              className="sticky top-0 bg-[rgb(132,177,229)]
 text-white shadow-md"
            >
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Contact No.</th>
                <th className="px-6 py-4 text-left">Email</th>
              </tr>
            </thead>

            {/* Table Data */}
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-red-500">
                    {error}
                  </td>
                </tr>
              ) : filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="px-6 py-4">
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="px-6 py-4">{student.phone}</td>
                    <td className="px-6 py-4">{student.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    No matching students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentManager;
