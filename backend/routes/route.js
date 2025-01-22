const express = require('express');
const router = express.Router();


const {getData, postData}= require('../controllers/controllers.js');

router.get('/getData', getData);
router.post('/postData', postData);


module.exports = router;