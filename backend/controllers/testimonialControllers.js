import Testimonial from "../models/testimonial.js";

// ✅ GET all testimonials
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
};

// ✅ ADD a new testimonial
export const addTestimonial = async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging
    console.log("Uploaded Image:", req.file); // Debugging

    const { name, text, rating, designation } = req.body;
    const image = req.file ? `backend/assets/testimonial/${req.file.filename}` : null;



    if (!name || !text || !rating || !designation || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTestimonial = new Testimonial({ name, text, rating, designation, image });
    await newTestimonial.save();

    res.status(201).json({ message: "Testimonial added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating testimonial" });
  }
};

// ✅ UPDATE a testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (req.file) {
      updatedData.image = `backend/assets/testimonial/${req.file.filename}`;
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error updating testimonial" });
  }
};

// ✅ DELETE a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting testimonial" });
  }
};
