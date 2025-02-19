// // const express = require('express');
// //const cors = require('cors');
// import express from 'express';
// import cors from 'cors';
// import router  from './routes/route.js';


// const app = express();
// app.use(express.json());
// app.use(cors());
// const port = 3000
// const handler = router;


// app.use('/api', handler)

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// Import necessary modules
import "dotenv/config"; // Auto-load .env variables
import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import { dbconnect } from "./db/dbconnect.js";

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Connect to database first, then start the server
dbconnect()
  .then(() => {
    console.log("✅ Database Connected Successfully");
    
    // Start the server only after DB connection
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });

  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
    process.exit(1); // Exit the process if DB connection fails
  });

// API Routes
app.use("/api", router);
