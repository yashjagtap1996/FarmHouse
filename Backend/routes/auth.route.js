import express from "express";
import { checkAuth } from "../controller/auth.controller.js";

const router = express.Router();

router.get("/check", checkAuth);

export default router;
