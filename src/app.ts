import express, { NextFunction, Request, Response } from 'express';

import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';
import loginRoutes from './routes/login.routes';

import CustomError from './helpers/customError';

const app = express();

app.use(express.json());

app.use('/orders', orderRoutes);

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/login', loginRoutes);

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => (
  res.status(err.statusCode || 500).json({ message: err.message })
));

export default app;
