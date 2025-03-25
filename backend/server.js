import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // ✅ Required for __dirname in ES Modules
import { dbconnect } from "./db/dbconnect.js";
import router from "./routes/route.js";
import adminRoutes from "./routes/adminRoute.js";

const app = express();
const port = process.env.PORT || 3000;

// ✅ Fix __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Define the correct static folder path
const testimonialPath = path.join(__dirname, "assets/testimonial");

//console.log("🔍 Serving static files from:", testimonialPath); // Debugging log

// ✅ Middleware setup
app.use(express.json());
app.use(cors());

// ✅ Serve static images correctly
app.use("/assets/testimonial", express.static(testimonialPath));

// ✅ Connect to database before starting the server
dbconnect()
  .then(() => {
    console.log("✅ Database Connected Successfully");

    app.use("/api", router);
    app.use("/api/admin", adminRoutes);

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
    process.exit(1);
  });
