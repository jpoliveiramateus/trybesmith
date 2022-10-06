import jwt, { Secret } from 'jsonwebtoken';

import UserModel from '../models/UserModel';

import IUser from '../interfaces/user.interface';

import CustomError from '../helpers/customError';

const { JWT_SECRET } = process.env;

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async login(username: string, password: string): Promise<string> {
    const user = await this.model.getByUsernameAndPassword(username, password);

    if (!user) throw new CustomError('Username or password invalid', 401);
    
    const token = this.generateToken(user);
    return token;
  }

  private generateToken = (user: IUser): string => {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, JWT_SECRET as Secret);
    return token;
  };
}

export default LoginService;