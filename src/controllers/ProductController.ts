import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const productCreated = await this.service.create({ name, amount });
    res.status(201).json(productCreated);
  };
}

export default ProductController;