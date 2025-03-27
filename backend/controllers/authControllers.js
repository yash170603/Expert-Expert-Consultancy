 
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// register user Data - Store User Data
export const register = async (req, res) => {
  try {
    const { personalDetails, neetDetails, additionalDetails } = req.body;

    console.log("Received Data from Frontend:", req.body);

    // Validate required fields
    if (
      !personalDetails?.firstName ||
      !personalDetails?.lastName ||
      !personalDetails?.email ||
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

      return res.status(400).json({ message: "All fields are required!!" });
    }
    if(personalDetails.password.length < 8){
      return res.status(400).json({ message: "Password should be atleast 8 characters"
       });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: personalDetails.email });
    if (existingUser) {
      return res.status(400).json({ message: " User already exists with this email" });
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
      disable: additionalDetails.disable, // Ensure this field exists in schema
      quota: additionalDetails.quota,
      feeBudget: additionalDetails.annualFeeBudget,
      fatherOccupation: additionalDetails.fatherOccupation,
      motherOccupation: additionalDetails.motherOccupation,
    });

    console.log(" User stored  in DB:", newUser);

    res.status(201).json({ message: " User Registered  successfully", }); // user: newUser  -> not adding this now inside respone, might add later if needed
  } catch (error) {
    console.error(" Error storing data:", error);
    res.status(500).json({ message: " Error storing data", error: error.message });
  }
};

// Login user
export const logIn = async (req, res) => {
  const cookie = req.cookies;
   
  console.log("Cookie recieved form client", cookie);
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const checkingUser = await User.findOne({ email: email });
    if (!checkingUser) {
      return res.status(400).json({ message: " User does not exist with this email" });
    }

    // check password
    const passwordDecoded = await bcrypt.compare(password, checkingUser.password);
    if (!passwordDecoded) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // create token and add it to cookie
    // this jwt.sign uses the jwt secret, and auth middleware uses the same secret to decode the incoming password, so that it can be verified
    const token = jwt.sign({ id: checkingUser._id, }, process.env.JWT_SECRET, { expiresIn: "7d" });
    console.log("Token generated:", token);
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.status(200).json({ message: "User Logged In successfully" });

  } catch (error) {
    console.error(" Error logging in:", error);
    res.status(500).json({ message: " Error logging in", error: error.message });
  }



}


// Logout user
export const logOut = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User Logged Out successfully" });
}