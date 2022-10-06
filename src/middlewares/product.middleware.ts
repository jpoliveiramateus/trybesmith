import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const validateCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemas.createProductSchema.validate(req.body);

  if (error) {
    return res
      .status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message });
  }

  next();
};

export = {
  validateCreateProduct,
};