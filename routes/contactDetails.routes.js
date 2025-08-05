import express from "express";
import {
  getContactPage,
  saveContactDetails,
} from "../controller/contactDetails.controller.js";
import { contactValidationRules } from "../middleware/validators/contactDetails.validator.js";

const router = express.Router();

router.get("/contact", getContactPage);
router.post("/contact", contactValidationRules, saveContactDetails);

export default router;
