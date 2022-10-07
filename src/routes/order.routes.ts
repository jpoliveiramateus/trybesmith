import { Router } from 'express';

import OrderController from '../controllers/OrderController';

import middleware from '../middlewares/order.middleware';
import auth from '../middlewares/auth.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

router.post('/', auth, middleware.validateCreateOrder, orderController.create);

export default router;