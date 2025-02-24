import "dotenv/config"; // Load environment variables
import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import adminRoutes from "./routes/adminRoute.js"; // Import admin routes
import { dbconnect } from "./db/dbconnect.js";

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Connect to database before starting server
dbconnect()
  .then(() => {
    console.log("✅ Database Connected Successfully");

    // Start the server after DB connection is confirmed
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
      console.log("📌 Routes Initialized: /api/, /api/admin");
    });

  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
    process.exit(1); // Exit process if DB fails
  });

// API Routes
app.use("/api/", router);
app.use("/api/admin", adminRoutes);
