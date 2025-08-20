import express from "express";
import {
  getUser,
  login,
  logout,
  signup,
} from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", getUser);
router.post("/logout", logout);
export default router;
