import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },

    // ✅ Email validation
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "⚠️ Please enter a valid email address",
      ],
    },

    otp: {
      type: String, required: true, trim: true
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    // // ✅ Phone number validation (Only 10-digit numbers allowed)
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^\d{10}$/, "⚠️ Phone number must be exactly 10 digits"],
    },

    // ✅ Password validation (Minimum 8 characters required)
    password: {
      type: String,
      required: true,
      minlength: [8, "⚠️ Password must be at least 8 characters long"],
    },

    // ✅ NEET Score validation (Must be ≤ 720)
    neetScore: {
      type: Number,
      required: true,
      min: [0, "⚠️ NEET Score cannot be negative"],
      max: [720, "⚠️ NEET Score cannot be more than 720"],
    },

    neetRank: { type: Number, required: true, min: [1, "⚠️ NEET Rank must be positive"] },

    category: { type: String, required: true, trim: true },
    preferredCourse: { type: String, required: true, trim: true },
    domicileState: { type: String, required: true, trim: true },

    disable: { type: String, required: true, trim: true },
    quota: { type: String, required: true, trim: true },

    // ✅ Fee Budget validation (Must be positive)
    feeBudget: {
      type: Number,
      required: true,
      min: [0, "⚠️ Fee Budget cannot be negative"],
    },

    fatherOccupation: { type: String, required: true, trim: true },
    motherOccupation: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

