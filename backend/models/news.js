import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Neet UG", "Neet PG"],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

export default News;
