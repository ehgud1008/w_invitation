import express from 'express';
import {getWeddingInfo} from '../controller/WeddingController.js';
const router = express.Router();

router.post('/main', getWeddingInfo);

export default router;