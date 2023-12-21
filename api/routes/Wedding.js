import express from 'express';
import {getWeddingInfo} from '../controller/WeddingController.js';
const router = express.Router();

router.get('/:url', getWeddingInfo);

export default router;