import express from 'express';
import {registRSVP} from '../controller/RSVPController.js';

const router = express.Router();

router.post('/registRSVP', registRSVP);

export default router;
