import { Router } from 'express';
import validateNewProduct from '../middlewares/validateNewProduct';
import productController from '../controllers/product.controller';

const productsRouter = Router();

productsRouter.post(
  '/',
  validateNewProduct,
  productController.create,
);
export default productsRouter;