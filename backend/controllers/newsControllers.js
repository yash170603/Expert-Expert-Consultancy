import News from "../models/news.js";
import mongoose from "mongoose";

// ➤ Add News
export const addNews = async (req, res) => {
  try {
    const { link, image, caption, category } = req.body;

    if (!link || !image || !caption || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newNews = new News({ link, image, caption, category });
    await newNews.save();

    res.status(201).json({ message: "News added successfully", news: newNews });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// ➤ Fetch All News
export const getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 });

    

    res.status(200).json({ news: newsList });
  } catch (error) {
    console.error("❌ Error fetching news:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ➤ Delete News (Fixed Issue)
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    // Corrected function call
    const response = await News.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ error: "News not found" });
    }

    return res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// ➤ Update News
export const updateNews = async (req, res) => {
  try {
    const { link, image, caption, category } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { link, image, caption, category },
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ error: "News not found" });
    }

    res.status(200).json({ message: "News updated successfully", news: updatedNews });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
