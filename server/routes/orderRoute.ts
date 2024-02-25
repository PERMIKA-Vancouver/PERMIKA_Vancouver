import express from 'express';
import {
  createMerchandiseController,
  createOrderController,
  createPromoCodeController,
  getItemController,
  getMerchandisesController,
  getOrdersController,
  getPromoCodeController,
  updateMerchandiseController,
  updatePromoCodeController,
} from './controllers';

const router = express.Router();

router.get('', getOrdersController);
router.post('', createOrderController);
router.post('/promocode', createPromoCodeController);
router.put('/promocode', updatePromoCodeController);
router.get('/promocode', getPromoCodeController);
router.post('/merchandise', createMerchandiseController);
router.get('/merchandise', getMerchandisesController);
router.put('/merchandise/:id', updateMerchandiseController);
router.get('/item/:id', getItemController);

export default router;
