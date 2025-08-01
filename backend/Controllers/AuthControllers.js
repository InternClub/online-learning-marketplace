import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { response } from "express";
import User from "../schema/User.js";

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      email,
      password,
      role,
    } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exist, you can login",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userModal = new User({
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign(
      { userId: userModal._id, role: userModal.role }, // payload
      process.env.JWT_SECRET, // secret key
      { expiresIn: process.env.JWT_EXPIRE } // optional expiry
    );

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: true, // Only send over HTTPS
      sameSite: "Strict", // Prevent CSRF
      maxAge: 3600000, // 1 hour
    });

    // console.log(userModal);
    await userModal.save();
    return res.status(200).json({
      message: "SignUp Successfully",
      user: {
        firstName: userModal.firstName,
        lastName: userModal.lastName,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. please signup first",
        success: false,
      });
    }
    // 2. verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        console.log(user);
        
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }
    //3. Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    //4. set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, //set to true if only using https locally
      sameSite: "Strict",
      maxAge: 3600000,
    });
    // send response
    return res.status(200).json({
      message: "Login Successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
      success: true,
    });
  } catch (error) {
    console.log("Login error:", error.message);
    return res
      .status(500)
      .json({ message: "login error from backend", success: false });
  }
};
