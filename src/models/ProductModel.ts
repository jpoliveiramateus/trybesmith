import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as IProduct[];
  }
}