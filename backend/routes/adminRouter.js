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


// auth routes for admin

adminRouter.post("/check-admin", (req, res) => {
  try {
    res.status(200).json("this is the admin route health check");
  } catch (error) {
    console.log("This is the error at admin router", error);
    res.status(500).json({ message: "There was an internal Server error for admin routes " });
  }
});

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
