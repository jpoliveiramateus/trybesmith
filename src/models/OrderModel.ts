import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/oder.interface';
import connection from './connection';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT ord.id, ord.userId, GROUP_CONCAT(pro.id) AS 'productsIds'
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as pro ON ord.id = pro.orderId
      GROUP BY ord.id`,
    );

    const newListOrderWithProductsIds = orders.map((order) => {
      const productsIds = order.productsIds.split(',');
      const convertIdsForNumber = productsIds.map(Number);

      return { ...order, productsIds: convertIdsForNumber };
    });

    return newListOrderWithProductsIds as IOrder[];
  }
}