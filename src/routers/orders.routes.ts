import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateNewOrder from '../middlewares/validateNewOrder';

const orderRouter = Router();

orderRouter.get(
  '/',
  ordersController.getAll,
);

orderRouter.post(
  '/',
  validateToken,
  validateNewOrder,
  ordersController.create,
);

export default orderRouter;