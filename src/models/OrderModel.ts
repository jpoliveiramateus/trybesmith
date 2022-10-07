import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

import IOrder from '../interfaces/order.interface';

import connection from './connection';

import ProductModel from './ProductModel';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pro.id) AS 'productsIds'
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as pro ON ord.id = pro.orderId
      GROUP BY ord.id`,
    );

    return orders as IOrder[];
  }

  public async create(productsIds: number[], userId: number): Promise<IOrder> {
    const productModel = new ProductModel();
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    const insertedProducts = productsIds
      .map((productId) => productModel.update(insertId, productId));

    Promise.all(insertedProducts);

    return { userId, productsIds };
  }
}