import express from 'express';
import { getImages } from './controllers/getImages';

const router = express.Router();

router.post('', getImages); 

export default router;