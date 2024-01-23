import express from 'express';
import {
  createMerchandiseController,
  createOrderController,
  createPromoCodeController,
  getOrdersController,
  getPromoCodeController,
  updatePromoCodeController,
} from './controllers';

const router = express.Router();

router.get('', getOrdersController);
router.post('', createOrderController);
router.post('/promocode', createPromoCodeController);
router.put('/promocode', updatePromoCodeController);
router.get('/promocode', getPromoCodeController);
router.post('/merchandise', createMerchandiseController);

export default router;
