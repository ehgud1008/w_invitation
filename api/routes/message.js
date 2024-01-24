import express from 'express';
import { getMessageInfo, registMessage } from '../controller/MessageController.js';
const router = express.Router();

router.post('/registMessage', registMessage);
router.post('/:seq', getMessageInfo);

export default router;