import jwt from "jsonwebtoken";

export  const adminMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("Token at line 6 at  admin auth Miiddlware", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token for admin :", decoded);
    req.AdminEmail = decoded.email; // Attach adminEmailID to request, but i dont think there is any use of this
      if(decoded.userType !== 'admin') {
        return res.status(403).json({ message: "Forbidden - Not an admin" });
      }
    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

