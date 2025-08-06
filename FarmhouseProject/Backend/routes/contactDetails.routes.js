import express from 'express'
import { saveContactDetails } from '../controller/contactDetails.controller.js';

const router = express.Router();

router.post('/',saveContactDetails);

export default router;