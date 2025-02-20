import express from "express";
import { addNews, getAllNews, deleteNews, updateNews } from "../controllers/newsControllers.js";

const adminRouter = express.Router();

// News Routes
adminRouter.post("/news/add", addNews);
adminRouter.get("/news/all", getAllNews);
adminRouter.put("/news/:id", updateNews);
adminRouter.delete("/news/:id", deleteNews);

export default adminRouter;
