import { dbconnect, isConnected } from "../db/dbconnect.js";
import User from "../models/user.js"; 
import bcrypt from "bcryptjs"; 

dbconnect()
  .then(() => console.log("✅ Database connection confirmed in API handlers"))
  .catch((err) => console.error("❌ Database connection failed in API handlers", err));

export const getData = (req, res) => {
  console.log("The API was hit");

  res.json({
    message: "This is the response which you send",
    data: [],
  });
};

export const postData = async (req, res) => {
  try {
    console.log("Received request:", req.body);

    if (!isConnected) {
      console.error("❌ Database not connected");
      return res.status(500).json({ message: "Database connection error" });
    }

    const { personalDetails, neetDetails, additionalDetails } = req.body;

    if (!personalDetails || !neetDetails || !additionalDetails) {
      console.error("❌ Missing required data");
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const existingUser = await User.findOne({ email: personalDetails.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    const hashedPassword = await bcrypt.hash(personalDetails.password, 10);
    
    const newUser = await User.create({
      firstName: personalDetails.firstName,
      lastName: personalDetails.lastName,
      email: personalDetails.email,
      phone: personalDetails.phone,
      password: hashedPassword,
      neetScore: neetDetails.score,
      neetRank: neetDetails.rank,
      category: neetDetails.category,
      preferredCourse: neetDetails.course,
      domicileState: neetDetails.domicile,
      disabilityQuota: additionalDetails.disable,
      feeBudget: additionalDetails.annualFeeBudget,
      fatherOccupation: additionalDetails.fatherOccupation,
      motherOccupation: additionalDetails.motherOccupation,
    });

    console.log("✅ User created successfully:", newUser);
    res.status(201).json({ message: "Data stored successfully", user: newUser });

  } catch (error) {
    console.error("❌ Error storing data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
