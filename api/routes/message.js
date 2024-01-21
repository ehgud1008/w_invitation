import express from 'express';
import { getMessageInfo } from '../controller/MessageController.js';
const router = express.Router();

router.get('/:seq', getMessageInfo);

export default router;