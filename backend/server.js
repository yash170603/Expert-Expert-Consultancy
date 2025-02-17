// const express = require('express');
//const cors = require('cors');
import express from 'express';
import cors from 'cors';
import router  from './routes/route.js';


const app = express();
app.use(express.json());
app.use(cors());
const port = 3001
const handler = router;


app.use('/api', handler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})