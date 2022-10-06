import { Request, Response } from 'express';

import jwt, { Secret } from 'jsonwebtoken';

import OrderService from '../services/OrderService';

import IToken from '../interfaces/token.interface';

const { JWT_SECRET } = process.env;

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const { productsIds } = req.body;
    
    const decoded = jwt.verify(token as string, JWT_SECRET as Secret) as IToken;
    
    const userId = decoded.id;

    const order = await this.service.create(productsIds, userId);
    res.status(201).json(order);
  };
}

export default OrderController;