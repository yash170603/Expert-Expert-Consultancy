import jwt from "jsonwebtoken";

export  const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("Token at line 6 at autMiiddlware", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.userId = decoded.id; // Attach user ID to request
    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

