import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      return next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  res.status(401);
  throw new Error("Not authorized, token not found");
});




const authorizeAdmin = asyncHandler(async (req,res,next)=>{
    if (req.user && req.user.isAdmin) {
        return next()
    }

    res.status(401).send("not Authorized as admin ")
})

export {authenticate,authorizeAdmin}