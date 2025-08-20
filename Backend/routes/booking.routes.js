import express from "express";
import { bookingDetails } from "../controller/bookingDetails.controller.js";

const router = express.Router();

router.post("/", bookingDetails);
export default router;
