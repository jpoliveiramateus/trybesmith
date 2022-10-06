import { Router } from 'express';

import LoginController from '../controllers/LoginController';

import middleware from '../middlewares/login.middleware';

const router = Router();

const loginController = new LoginController();

router.post('/', middleware.validateLogin, loginController.login);

export default router;