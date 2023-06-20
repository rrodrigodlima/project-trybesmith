import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (
  _req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const orders = (await ordersService.getAll())
      .map(({ dataValues }) => ({
        ...dataValues,
        productIds: dataValues.productIds?.map(({ id }) => id),
      }));
    return res.status(200).json(orders);
  } catch (error) {
    const { message } = error as Error;
    return res.status(400).json({ message });
  }
};

export default { getAll };