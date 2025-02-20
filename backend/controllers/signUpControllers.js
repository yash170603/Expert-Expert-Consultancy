import User from "../models/user.js";
import bcrypt from "bcryptjs";

// ✅ GET Data - Fetch Users
export const getData = async (req, res) => {
  try {
    console.log("✅ The API was hit");

    const users = await User.find(); // Fetch all users from DB

    res.json({
      message: "Data retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ message: "❌ Error retrieving data", error: error.message });
  }
};

// ✅ POST Data - Store User Data
export const postData = async (req, res) => {
  try {
    const { personalDetails, neetDetails, additionalDetails } = req.body;

    console.log("📩 Received Data from Frontend:", req.body);

    // Validate required fields
    if (
      !personalDetails?.firstName ||
      !personalDetails?.lastName ||
      !personalDetails?.email ||
      !personalDetails?.phone ||
      !personalDetails?.password ||
      !neetDetails?.score ||
      !neetDetails?.rank ||
      !neetDetails?.category ||
      !neetDetails?.course ||
      !neetDetails?.domicile ||
      !additionalDetails?.disable || // Ensure consistency with schema
      !additionalDetails?.quota ||
      !additionalDetails?.annualFeeBudget ||
      !additionalDetails?.fatherOccupation ||
      !additionalDetails?.motherOccupation
    ) {
      return res.status(400).json({ message: "⚠️ All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: personalDetails.email });
    if (existingUser) {
      return res.status(400).json({ message: "⚠️ User already exists with this email" });
    }

    // Hash password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(personalDetails.password, salt);

    // Store in DB
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
      disabilityQuota: additionalDetails.disable, // Ensure this field exists in schema
      feeBudget: additionalDetails.annualFeeBudget,
      fatherOccupation: additionalDetails.fatherOccupation,
      motherOccupation: additionalDetails.motherOccupation,
    });

    console.log("🛠 Storing User in DB:", newUser);

    res.status(201).json({ message: "✅ Data stored successfully", user: newUser });
  } catch (error) {
    console.error("❌ Error storing data:", error);
    res.status(500).json({ message: "❌ Error storing data", error: error.message });
  }
};
