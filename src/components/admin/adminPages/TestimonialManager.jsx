

import { useState } from "react"; 
const initialTestimonials = [
  {
    name: "Dr. Priya Sharma",
    text: "Expert Educational Consultancy guided me through the entire NEET PG process. Their AI-powered counseling was a game-changer!",
    rating: 5,
    designation: "MD Pediatrics",
  },
  {
    name: "Dr. Rahul Patel",
    text: "I couldn't have achieved my dream of pursuing MD without the support and guidance from Expert Educational Consultancy.",
    rating: 5,
    designation: "MD Internal Medicine",
  },
  {
    name: "Dr. Ananya Reddy",
    text: "The personalized career planning provided by Expert Educational Consultancy helped me make informed decisions about my specialization.",
    rating: 4,
    designation: "MS Orthopedics",
  },
  {
    name: "Dr. Vikram Singh",
    text: "Their comprehensive study materials and mock tests were instrumental in my NEET PG preparation. Highly recommended!",
    rating: 5,
    designation: "MD Radiology",
  },
  {
    name: "Dr. Meera Kapoor",
    text: "The mentorship program exceeded my expectations. The personalized attention helped me secure my desired specialization.",
    rating: 5,
    designation: "MD Dermatology",
  },
  {
    name: "Dr. Arjun Kumar",
    text: "The mock counseling sessions gave me confidence and clarity about the admission process. Thank you for the guidance!",
    rating: 4,
    designation: "MS General Surgery",
  },
];

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    name: "",
    text: "",
    rating: 5,
    designation: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTestimonial((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleAddOrUpdateTestimonial = () => {
    if (
      !currentTestimonial.name.trim() ||
      !currentTestimonial.text.trim() ||
      !currentTestimonial.designation.trim() ||
      isNaN(currentTestimonial.rating) ||
      currentTestimonial.rating < 1 ||
      currentTestimonial.rating > 5
    ) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    if (isEditing && editIndex !== null) {
      setTestimonials((prev) =>
        prev.map((item, index) =>
          index === editIndex ? currentTestimonial : item
        )
      );
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTestimonials((prev) => [...prev, currentTestimonial]);
    }

    setCurrentTestimonial({ name: "", text: "", rating: 5, designation: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentTestimonial(testimonials[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowForm(true); // Make sure to show the form on edit
  };

  const handleDelete = (index) => {
    setTestimonials((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-screen">
      <div className="flex h-full">
     

        <div className="flex-1 p-4">
          <div className="flex items-center justify-center h-[20px]">
            <h1 className="text-3xl font-bold">TESTIMONIAL MANAGER</h1>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-600 transition-all"
            >
              {showForm ? "Cancel" : "Add New Testimonial"}
            </button>
          </div>

          {showForm && (
            <div className="mb-6 p-6 border rounded-lg shadow-md bg-gray-100">
              <h2 className="text-lg font-semibold mb-4">
                {isEditing ? "Edit Testimonial" : "Add New Testimonial"}
              </h2>
              <div className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={currentTestimonial.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  name="designation"
                  value={currentTestimonial.designation}
                  onChange={handleInputChange}
                  placeholder="Designation"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="number"
                  name="rating"
                  value={currentTestimonial.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  placeholder="Rating (1-5)"
                  className="border p-3 rounded-lg w-full"
                />
                <textarea
                  name="text"
                  value={currentTestimonial.text}
                  onChange={handleInputChange}
                  placeholder="Testimonial"
                  className="border p-3 rounded-lg w-full"
                  rows="4"
                />
                <button
                  onClick={handleAddOrUpdateTestimonial}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                >
                  {isEditing ? "Update" : "Add"} Testimonial
                </button>
              </div>
            </div>
          )}

          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-blue-200 text-left">
                  <th className="px-6 py-4 min-w-[150px]">Name</th>
                  <th className="px-6 py-4 min-w-[150px]">Designation</th>
                  <th className="px-6 py-4 min-w-[100px]">Rating</th>
                  <th className="px-6 py-4 min-w-[300px]">Testimonial</th>
                  <th className="px-6 py-4 min-w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4">{testimonial.name}</td>
                    <td className="px-6 py-4">{testimonial.designation}</td>
                    <td className="px-6 py-4">{testimonial.rating}</td>
                    <td className="px-6 py-4">{testimonial.text}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 mb-[0.5px]">
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 w-[120px] text-center"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-[120px] text-center"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
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

export default TestimonialManager;
