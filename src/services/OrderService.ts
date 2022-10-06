import OrderModel from '../models/OrderModel';
import IOrder from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(productsIds: number[], userId: number): Promise<IOrder> {
    const order = await this.model.create(productsIds, userId);
    return order;
  }
}

export default OrderService;