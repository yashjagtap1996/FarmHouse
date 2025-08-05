import express from "express";
import { signup, signupPage } from "../controller/user.controller.js";
import { signupValidationRules } from "../middleware/validators/signup.validator.js";

const router = express.Router();

router.get("/signup", signupPage);
router.post("/signup", signupValidationRules, signup);

export default router;
