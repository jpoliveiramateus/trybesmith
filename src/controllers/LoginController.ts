import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

import 'express-async-errors';

class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const token = await this.service.login(username, password);
    return res.status(200).json({ token });
  };
}

export default LoginController;