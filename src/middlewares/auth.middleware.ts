import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import CustomError from '../helpers/customError';

const { JWT_SECRET } = process.env;

export = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw new CustomError('Token not found', 401);

  try {
    jwt.verify(token, JWT_SECRET as Secret);

    return next();
  } catch (err) {
    throw new CustomError('Invalid token', 401);
  }
};