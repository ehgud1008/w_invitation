import express from 'express';
import { getWeddingFiles } from '../controller/FileController.js';
const router = express.Router();

router.get('/:seq', getWeddingFiles);

export default router;