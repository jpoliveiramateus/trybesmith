import OrderModel from '../models/OrderModel';
import IOrder from '../interfaces/oder.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;