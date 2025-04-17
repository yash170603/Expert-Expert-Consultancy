import Admin from "../models/admin.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const logIn = async (req, res) => {
       const cookie = req.cookies;

       console.log("Cookie recieved form client/admin", cookie);
       const { email, password } = req.body;

       // Validate required fields
       if (!email || !password) {
              return res.status(400).json({ message: "All fields are required" });
       }
       try {
              const checkingAdmin = await Admin.findOne({ email: email });
              if (!checkingAdmin) {
                     return res.status(400).json({ message: " Admin does not exist with this email" });
              }

              // check password
              const passwordDecoded = await bcrypt.compare(password, checkingAdmin.password);
              if (!passwordDecoded) {
                     return res.status(400).json({ message: "Invalid Credentials" });
              }

              // create token and add it to cookie
              // this jwt.sign uses the jwt secret, and auth middleware uses the same secret to decode the incoming password, so that it can be verified
              const token = jwt.sign({ id: checkingAdmin._id,userType:"admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });
              console.log("Token generated:", token);
              
              res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1000 });
              res.status(200).json({ message: "Admin Logged In successfully" });

       } catch (error) {
              console.error(" Error logging in:", error);
              res.status(500).json({ message: " Error logging in", error: error.message });
       }



}

export const logOut = async (req, res) => {
       try {
              res.clearCookie("token", {
                     httpOnly: true,
                     secure: true,
                     sameSite: "strict",
                   });
              res.status(200).json({ message: "Admin Logged Out successfully" });
       } catch (error) {
              console.error("Error logging out:", error);
              res.status(500).json({ message: "Error logging out", error: error.message });
       }
}