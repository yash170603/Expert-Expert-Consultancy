import express from "express";

 import {  logIn, logOut } from "../controllers/adminAuthController.js"

const adminAuthRouter = express.Router();


adminAuthRouter.post("/",(req,res)=>{
        try {
                res.status(200).json("this is the admin auth route health check")
        } catch (error) {
             console.log("This is the error at admin auth router",error)
             res.status(500).json({message:"THere was an internal Server error for admin routes "})
        }
})
adminAuthRouter.post("/login",logIn)
adminAuthRouter.get("/logout",logOut)

export default adminAuthRouter;