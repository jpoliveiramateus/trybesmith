import { Router } from 'express';

import OrderController from '../controllers/OrderController';

import middleware from '../middlewares/order.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

router.post('/', middleware.validateCreateOrder, orderController.create);

export default router;