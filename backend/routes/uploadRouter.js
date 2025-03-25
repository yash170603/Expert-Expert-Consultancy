import express from "express";
import upload from "../middlewares/upload.js";

const uploadRouter = express.Router();

// ✅ Handle image upload separately
uploadRouter.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  res.status(200).json({ imagePath: `/assets/testimonial/${req.file.filename}` });
});

export default uploadRouter;
