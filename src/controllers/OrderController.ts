import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };
}

export default OrderController;