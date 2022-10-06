import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

import IUser from '../interfaces/user.interface';

import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<void> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }

  public async getByUsernameAndPassword(username: string, password: string): Promise<IUser> {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );

    return user as IUser;
  }
}