import { getUserDetails,updateUser,getAllNews,getAllTestimonials } from "../controllers/userControllers.js";


import express from "express";

export const userRouter = express.Router();

// Define Routes
userRouter.get("/getUser", getUserDetails);
userRouter.get("/getAllNews", getAllNews);
userRouter.get("/getAllTestimonials", getAllTestimonials);
userRouter.put("/updateUser", updateUser);
