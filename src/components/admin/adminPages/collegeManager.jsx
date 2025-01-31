
import { useState } from "react";

const initialColleges = [
  { id: 1, name: "AIIMS Delhi", state: "Delhi", approxPercentile: "99.9%" },
  { id: 2, name: "Maulana Azad Medical College", state: "Delhi", approxPercentile: "99.0%" },
  { id: 3, name: "Madras Medical College", state: "Tamil Nadu", approxPercentile: "98.5%" },
  { id: 4, name: "King George's Medical University", state: "Uttar Pradesh", approxPercentile: "97.5%" },
];

const CollegeManager = () => {
  const [colleges, setColleges] = useState(initialColleges);
  const [showForm, setShowForm] = useState(false);
  const [newCollege, setNewCollege] = useState({ name: "", state: "", approxPercentile: "" });
  const [editCollegeId, setEditCollegeId] = useState(null);
  const [editData, setEditData] = useState({ name: "", state: "", approxPercentile: "" });

  // Handle input change
  const handleChange = (e) => {
    setNewCollege({ ...newCollege, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Add new college
  const addCollege = (e) => {
    e.preventDefault();
    if (newCollege.name && newCollege.state && newCollege.approxPercentile) {
      setColleges([...colleges, { id: Date.now(), ...newCollege, approxPercentile: `${newCollege.approxPercentile}%` }]);
      setNewCollege({ name: "", state: "", approxPercentile: "" });
      setShowForm(false);
    }
  };

  // Delete college
  const handleDelete = (id) => {
    setColleges(colleges.filter((college) => college.id !== id));
  };

  // Edit college
  const handleEdit = (college) => {
    setEditCollegeId(college.id);
    setEditData({ name: college.name, state: college.state, approxPercentile: college.approxPercentile.replace("%", "") });
  };

  // Save edited college
  const saveEdit = (id) => {
    setColleges(
      colleges.map((college) =>
        college.id === id ? { ...college, ...editData, approxPercentile: `${editData.approxPercentile}%` } : college
      )
    );
    setEditCollegeId(null);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex h-full">
        {/* Left Sidebar */}
   
        {/* Right Section */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold text-center mb-6"> College Manager</h1>

          {/* Add College Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-600 transition-all"
            >
              {showForm ? "Cancel" : "Add College"}
            </button>
          </div>

          {/* Add College Form */}
          {showForm && (
            <form onSubmit={addCollege} className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  value={newCollege.name}
                  onChange={handleChange}
                  placeholder="College Name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={newCollege.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="number"
                  name="approxPercentile"
                  value={newCollege.approxPercentile}
                  onChange={handleChange}
                  placeholder="Approx Percentile"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  required
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
                  Add College
                </button>
              </div>
            </form>
          )}

          {/* College List */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-blue-200 text-left">
                  <th className="px-6 py-4 min-w-[200px]">College Name</th>
                  <th className="px-6 py-4 min-w-[150px]">State</th>
                  <th className="px-6 py-4 min-w-[150px]">Approx. Percentile</th>
                  <th className="px-6 py-4 min-w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college, index) => (
                  <tr key={college.id} className="border-t">
                    {editCollegeId === college.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleEditChange}
                            className="border border-gray-300 p-2 rounded-lg w-full"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            name="state"
                            value={editData.state}
                            onChange={handleEditChange}
                            className="border border-gray-300 p-2 rounded-lg w-full"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            name="approxPercentile"
                            value={editData.approxPercentile}
                            onChange={handleEditChange}
                            className="border border-gray-300 p-2 rounded-lg w-full"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => saveEdit(college.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-[100px] text-center"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditCollegeId(null)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-[100px] text-center"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4">{college.name}</td>
                        <td className="px-6 py-4">{college.state}</td>
                        <td className="px-6 py-4">{college.approxPercentile}</td>
                        <td className="px-6 py-4 flex gap-2">
                          <button
                            onClick={() => handleEdit(college)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-[100px] text-center"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(college.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-[100px] text-center"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeManager;
