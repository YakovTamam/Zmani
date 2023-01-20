import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import Business from "../models/businessModel.js";

const protect = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.business = await Business.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Token Faild!");
    }
  }

  if (!token) {
    res.status(401).json({ msg: "You are not logged in!" });
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ msg: "Not authorized as an admin" });
  }
};

const business = (req, res, next) => {
  if (req.business && req.business.isBusiness) {
    next();
  } else {
    res.status(401).json({ msg: "Not authorized as a bussines" });
  }
};
export { protect, admin, business };
