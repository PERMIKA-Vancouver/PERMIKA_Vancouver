import express from 'express';
import {
  createOrderController,
  createPromoCodeController,
  getOrdersController,
} from './controllers';

const router = express.Router();

router.get('', getOrdersController);
router.post('', createOrderController);
router.post('/promocode', createPromoCodeController);

export default router;
