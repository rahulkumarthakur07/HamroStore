import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/createToken.js";
import { json } from "express";

// Use named export to match your router import
export const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Enter all the fields" });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    generateToken(res, newUser._id);

    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Enter all the fields" });
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // success
  generateToken(res, existingUser._id);

  res.status(200).json({
    id: existingUser._id,
    username: existingUser.username,
    email: existingUser.email,
    isAdmin: existingUser.isAdmin,
  });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    htttpOnly: true,
    expiresIn: new Date(0),
  });

  res.status(200).json({ message: "Logged out Successfully" });
});

export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(401);
    throw new Error("user not forund");
  }
});

export const getcurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

  export const updateCurrentUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword || user.password;
      }

      const updatedUser = await user.save();

      return res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    }
    res.status(404);
    throw new Error("User not found");
  });

  export const deleteUserById = asyncHandler( async (req , res)=>{
    const user = await User.findById(req.params.id)
    if (user) {
      if (user.isAdmin) {
      res.status(400)
      throw new Error("Cannot delete admin User")
    }
    await User.deleteOne({_id:user._id})
    res.json({message:"user removed"})
    }else{
      res.status(404)
      throw new Error("User not found");
      
    }
  })
