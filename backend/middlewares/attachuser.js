import User from "../models/user";

export const attachUser = async (req, res, next) => {
  try {
    if (!req.userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Attach user object to request
    next();
  } catch (error) {
    console.error("AttachUser Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
