import { useState, useEffect } from "react";
import axios from "axios";

const TestimonialManager = () => {
  const [testimonialList, setTestimonialList] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    name: "",
    text: "",
    rating: 5,
    designation: "",
    image: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // ✅ Fetch testimonials from backend
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/admin/testimonials",{withCredentials:true}
        );
        setTestimonialList(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    loadTestimonials();
  }, []);

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    setCurrentTestimonial({ ...currentTestimonial, image: e.target.files[0] });
  };

  // ✅ Add or Update Testimonial
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", currentTestimonial.name);
      formData.append("text", currentTestimonial.text);
      formData.append("rating", currentTestimonial.rating);
      formData.append("designation", currentTestimonial.designation);

      // ✅ Preserve existing image when editing
      if (
        currentTestimonial.image &&
        typeof currentTestimonial.image !== "string"
      ) {
        formData.append("image", currentTestimonial.image);
      }

      if (isEditing) {
        await axios.put(
          `http://localhost:3001/api/admin/testimonials/${editId}`,
          formData,
          { withCredentials:true }
        );
        setTestimonialList((prev) =>
          prev.map((t) =>
            t._id === editId
              ? { ...t, ...currentTestimonial, image: t.image }
              : t
          )
        );
        window.location.reload();
      } else {
        const response = await axios.post(
          "http://localhost:3001/api/admin/testimonials",
          formData,
          { withCredentials:true } 
        );
        setTestimonialList([response.data, ...testimonialList]);
        window.location.reload();
      }

      setCurrentTestimonial({
        name: "",
        text: "",
        rating: 5,
        designation: "",
        image: null,
      });
      setShowForm(false);
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  // ✅ Delete Testimonial
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/testimonials/${id}`,{withCredentials:true});
      setTestimonialList((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  // ✅ Edit Testimonial
  const handleEdit = (testimonial) => {
    setCurrentTestimonial({ ...testimonial }); // Preserve existing image
    setEditId(testimonial._id);
    setIsEditing(true);
    setShowForm(true);
  };

  return (
    <div className="w-full max-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        TESTIMONIAL MANAGER
      </h1>

      {/* Add Testimonial Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setShowForm(!showForm);
            setIsEditing(false);
            setCurrentTestimonial({
              name: "",
              text: "",
              rating: 5,
              designation: "",
              image: null,
            });
          }}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
        >
          {showForm ? "Close " : "Add Testimonial"}
        </button>
      </div>

      {/* Add/Edit Testimonial Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow-md rounded-lg mb-6"
        >
          <input
            type="text"
            placeholder="Name"
            value={currentTestimonial.name}
            onChange={(e) =>
              setCurrentTestimonial({
                ...currentTestimonial,
                name: e.target.value,
              })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <textarea
            placeholder="Testimonial Text"
            value={currentTestimonial.text}
            onChange={(e) =>
              setCurrentTestimonial({
                ...currentTestimonial,
                text: e.target.value,
              })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="number"
            min="1"
            max="5"
            placeholder="Rating"
            value={currentTestimonial.rating}
            onChange={(e) =>
              setCurrentTestimonial({
                ...currentTestimonial,
                rating: e.target.value,
              })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Designation"
            value={currentTestimonial.designation}
            onChange={(e) =>
              setCurrentTestimonial({
                ...currentTestimonial,
                designation: e.target.value,
              })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border p-2 rounded mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            {isEditing ? "Update Testimonial" : "Add Testimonial"}
          </button>
        </form>
      )}

      {/* Testimonial List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="table-auto w-full">
            <thead className="bg-blue-200 sticky top-0">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Text</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Designation</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonialList.map((testimonial) => (
                <tr key={testimonial._id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={`http://localhost:3001/assets/testimonial/${testimonial.image
                        .split("/")
                        .pop()}`}
                      className="w-20 h-20 object-cover rounded-lg"
                      alt="Testimonial"
                    />
                  </td>
                  <td className="px-6 py-4">{testimonial.name}</td>
                  <td className="px-6 py-4">{testimonial.text}</td>
                  <td className="px-6 py-4">{testimonial.rating}</td>
                  <td className="px-6 py-4">{testimonial.designation}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestimonialManager;
