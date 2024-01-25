import express from 'express';
import { getContactInfo } from '../controller/ContactController.js';
const router = express.Router();

router.get('/:seq', getContactInfo);

export default router;