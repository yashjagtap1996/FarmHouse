import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

export const signupPage = (req, res) => {
  res.render("signup", { errors: {}, data: {}, toast: null });
};

export const signup = async (req, res) => {
  const errors = validationResult(req);
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  const data = { firstName, lastName, email, password, confirmPassword };

  if (!errors.isEmpty()) {
    return res.render("signup", {
      errors: errors.mapped(),
      data,
      toast: null,
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signup", {
        errors: {},
        data,
        toast: { message: "Email already exists.", type: "error" },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      userName: `${firstName} ${lastName}`,
      email,
      passWord: hashedPassword,
    });

    await user.save();

    return res.render("signup", {
      errors: {},
      data: {},
      toast: { message: "Account created successful!", type: "success" },
    });
  } catch (err) {
    console.log("Error in signup:", err);
    return res.render("signup", {
      errors: {},
      data,
      toast: { message: "Something went wrong", type: "error" },
    });
  }
};
