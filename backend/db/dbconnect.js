import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  process.exit(1);
}

let isConnected = false; // Track connection status

export const dbconnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("✅ Database connection successful");
  } catch (error) {
    isConnected = false;
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export { isConnected }; // Export the connection status
