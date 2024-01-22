import express from 'express';
import { createOrderController, getOrdersController } from './controllers';

const router = express.Router();

router.get('', getOrdersController);
router.post('', createOrderController);

export default router;
