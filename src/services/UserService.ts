import jwt, { Secret } from 'jsonwebtoken';

import UserModel from '../models/UserModel';

import IUser from '../interfaces/user.interface';

const { JWT_SECRET } = process.env;

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: IUser): Promise<string> {
    await this.model.create(user);
    const token = this.generateToken(user);
    return token;
  }

  private generateToken = (user: IUser): string => {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, JWT_SECRET as Secret);
    return token;
  };
}

export default UserService;