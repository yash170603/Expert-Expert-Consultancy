// // const express = require('express');

// // const {getData, postData}= require('../controllers/controllers.js'); ---> this was commonJs module, converted to ES6 module now. so using import export.-< better bractice

// import express from 'express';



// const router = express.Router();
// import {getData, postData} from '../controllers/controllers.js';


// router.get('/getData', getData);
// router.post('/postData', postData);


// export default router;
import express from "express";
import { register,logIn, logOut ,verifyUser,deleteUser} from "../controllers/authControllers.js";


const authrouter = express.Router();

// Define Routes
authrouter.post("/signup", register);
authrouter.post("/login", logIn);
authrouter.get("/logout",logOut);
authrouter.post("/verify",verifyUser)
authrouter.delete("/deleteUser",deleteUser)

export default authrouter;
