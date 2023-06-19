import { Request, Response, NextFunction } from 'express';

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
) => { 
  const { name, price, orderId } = req.body;
  if (!name) {
    return res.status(422).json({ message: 'Name is required' });
  }
  if (!price) {
    return res.status(422).json({ message: 'Price is required' });
  }
  if (!orderId) {
    return res.status(422).json({ message: 'Order ID is required' });
  }
  next();
};