// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import authrouter from "./routes/authroutes.js";
// import adminRouter from "./routes/adminRouter.js"; // Import admin routes
// import { dbconnect } from "./db/dbconnect.js";

// import cookieParser from "cookie-parser";
// //import { attachUser } from "./middlewares/attachuser.js";
// import {userRouter} from "./routes/userRouter.js";
// import { requireAuth } from "./middlewares/authMiddleware.js";



// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3001;
// const frontendPort = process.env.frontendPort || 5173;


// // Middleware setup
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   credentials: true,
//   origin: "http://localhost:5173",
// }));


// // Connect to database before starting server
// dbconnect()
//   .then(() => {
//     console.log("✅ Database Connected Successfully");

//     // Start the server after DB connection is confirmed
//     app.listen(port, () => {
//       console.log(` Server running at http://localhost:${port}`);
//       console.log(" Routes Initialized: /api/, /api/admin");
//     });

//   })
//   .catch((err) => {
//     console.error(" Database Connection Failed:", err);
//     process.exit(1); // Exit process if DB fails
//   });

// // API Routes
// //app.use("/api/auth",requireAuth, authrouter);

// app.use("/api/auth", authrouter);
// app.use("/api/admin/",requireAuth, adminRouter);
// app.use("/api/user/",  requireAuth, userRouter); // Attach user to request before user routes


import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authrouter from "./routes/authroutes.js";
import adminRouter from "./routes/adminRouter.js";
import { dbconnect } from "./db/dbconnect.js";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRouter.js";
import { requireAuth } from "./middlewares/authMiddleware.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const frontendPort = process.env.frontendPort || 5173;

// ✅ Fix: Correct CORS configuration
app.use(cors({
  origin: `http://localhost:${frontendPort}`, // No trailing slash
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
}));

// ✅ Explicitly handle preflight requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${frontendPort}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

// Middleware setup
app.use(express.json());
app.use(cookieParser());

// ✅ Ensure database is connected before starting server
dbconnect()
  .then(() => {
    console.log("✅ Database Connected Successfully");

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
      console.log("📌 Routes Initialized: /api/, /api/admin");
    });
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
    process.exit(1);
  });

// ✅ API Routes
app.use((req, res, next) => {
  console.log(`🌐 ${req.method} Request: ${req.originalUrl}`);
  next();
});

app.use("/api/auth/", authrouter);
app.use("/api/admin/", requireAuth, adminRouter);
app.use("/api/user/", requireAuth, userRouter);
