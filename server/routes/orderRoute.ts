import express from 'express';
import {
  createMerchandiseController,
  createOrderController,
  createPromoCodeController,
  getOrdersController,
} from './controllers';

const router = express.Router();

router.get('', getOrdersController);
router.post('', createOrderController);
router.post('/promocode', createPromoCodeController);
router.post('/merchandise', createMerchandiseController);

export default router;
