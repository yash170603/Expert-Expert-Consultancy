import express from "express";

 import {  logIn, logOut } from "../controllers/adminAuthController.js"

const adminAuthRouter = express.Router();

adminAuthRouter.post("/login",logIn)
adminAuthRouter.get("/logout",logOut)

export default adminAuthRouter;