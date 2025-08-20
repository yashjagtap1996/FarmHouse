import express from "express";
import { saveContactDetails } from "../controller/contactDetails.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/", saveContactDetails);

export default router;
