import { Router } from 'express';

import UserController from '../controllers/UserController';

import middleware from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.post('/', middleware.validateCreateUser, userController.create);

export default router;