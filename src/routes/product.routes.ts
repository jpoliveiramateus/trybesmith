import { Router } from 'express';

import ProductController from '../controllers/ProductController';

import middleware from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);

router.post('/', middleware.validateCreateProduct, productController.create);

export default router;