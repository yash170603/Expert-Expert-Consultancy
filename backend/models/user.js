import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  neetScore: { type: Number, required: true },
  neetRank: { type: Number, required: true },
  category: { type: String, required: true },
  preferredCourse: { type: String, required: true },
  domicileState: { type: String, required: true },
  disabilityQuota: { type: String, required: true },
  feeBudget: { type: Number, required: true },
  fatherOccupation: { type: String, required: true },
  motherOccupation: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
