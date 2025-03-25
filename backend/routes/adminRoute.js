import express from "express";
import upload from "../middlewares/upload.js";
import { 
  addTestimonial, 
  getAllTestimonials, 
  updateTestimonial, 
  deleteTestimonial 
} from "../controllers/testimonialControllers.js";
import { addNews, getAllNews, deleteNews, updateNews } from "../controllers/newsControllers.js";

const adminRouter = express.Router();

// ✅ News Routes
adminRouter.post("/news/add", addNews);
adminRouter.get("/news/all", getAllNews);
adminRouter.put("/news/:id", updateNews);
adminRouter.delete("/news/:id", deleteNews);

// ✅ Testimonial Routes
adminRouter.post("/testimonials", upload.single("image"), addTestimonial);
adminRouter.get("/testimonials", getAllTestimonials);
adminRouter.put("/testimonials/:id", upload.single("image"), updateTestimonial);
adminRouter.delete("/testimonials/:id", deleteTestimonial);

export default adminRouter;
