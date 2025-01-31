// const express = require('express');

// const {getData, postData}= require('../controllers/controllers.js'); ---> this was commonJs module, converted to ES6 module now. so using import export.-< better bractice

import express from 'express';



const router = express.Router();
import {getData, postData} from '../controllers/controllers.js';


router.get('/getData', getData);
router.post('/postData', postData);


export default router;