

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; 
import cookieParser from "cookie-parser";
import adminRouter from "./routes/adminRouter.js";
import authRouter from "./routes/authrouter.js"
import { dbconnect } from "./db/dbconnect.js";
import { userRouter } from "./routes/userRouter.js";
import { requireAuth } from "./middlewares/authMiddleware.js";
import { adminMiddleware } from "./middlewares/adminMiddleware.js";
import adminAuthRouter from "./routes/adminAuthRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const frontendPort = process.env.FRONTEND_PORT || 5173; // Fixed naming

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 
app.use(cors({
  origin: `http://localhost:${frontendPort}`,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["X-Requested-With","Content-Type", "Authorization"],
}));
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${frontendPort}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

 
app.use(express.json());
app.use(cookieParser());
 
const testimonialPath = path.join(__dirname, "assets/testimonial");
app.use("/assets/testimonial", express.static(testimonialPath));

 
app.use((req, res, next) => {
  console.log(` ${req.method} ${req.originalUrl}`);
  next();
});

 
// this the the userAuth routes
app.use("/api/auth", authRouter);
// this is the user protected routes
app.use("/api/user", requireAuth, userRouter);


// //this will be the adminAuth routes
app.use("/api/admin-auth/", adminAuthRouter);
// // this is the admin protexted routes
app.use("/api/admin/",adminMiddleware,adminRouter);




 
app.use((req, res) => {
  res.status(404).json({ error: " Route Not Found" });
});

 
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

 
dbconnect()
  .then(() => {
    console.log("✅ Database Connected Successfully");
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
    process.exit(1);
  });
