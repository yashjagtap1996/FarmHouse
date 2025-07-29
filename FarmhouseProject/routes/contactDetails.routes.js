import express from "express";
import {
  getContactPage,
  saveContactDetails,
} from "../controller/contactDetails.controller.js";

const router = express.Router();

router.get("/", getContactPage);
router.post("/", saveContactDetails);

export default router;
