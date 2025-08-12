import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import session from "express-session";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      userName: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      passWord: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.passWord);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    req.session.user = {
      id: user._id,
      name: user.userName,
      email: user.email,
    };
    return res.status(200).json({ message: `Welcome ${user.userName}` });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getUser = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const user = await User.findById(req.session.user.id).select("-passWord");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({ error: "Server error" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
};
