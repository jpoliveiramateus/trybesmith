import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }
}

export default ProductService;