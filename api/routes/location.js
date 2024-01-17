import express from 'express';
import { getLocationInfo } from '../controller/LocationController.js';
const router = express.Router();

router.get('/:seq', getLocationInfo);

export default router;