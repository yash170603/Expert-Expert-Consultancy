import mongoose from "mongoose";

// Function to capitalize first letter of each word
const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    designation: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

// Middleware to format name before saving
testimonialSchema.pre("save", function (next) {
  this.name = capitalizeWords(this.name);
  this.designation = capitalizeWords(this.designation);
  next();
});

export default mongoose.model("Testimonial", testimonialSchema);
