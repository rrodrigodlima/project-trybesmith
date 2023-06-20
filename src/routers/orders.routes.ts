import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const orderRouter = Router();

orderRouter.get(
  '/',
  ordersController.getAll,
);

export default orderRouter;