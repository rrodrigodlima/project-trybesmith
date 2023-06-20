import { Request, Response, NextFunction } from 'express';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';

type TypeResponse = {
  status: number;
  message: string;
};

const validateUserId = async (userId: number): Promise<TypeResponse> => {
  if (!userId) {
    return { status: 400, message: '"userId" is required' };
  }
  if (typeof userId !== 'number') {
    return { status: 422, message: '"userId" must be a number' };
  }
  const user = await UserModel.findOne({ where: { id: userId } });
  if (!user) {
    return { status: 404, message: '"userId" not found' };
  }
  return { status: 200, message: '' };
};

const validateProductIds = async (productIds: number): Promise<TypeResponse> => {
  if (!productIds) {
    return { status: 400, message: '"productIds" is required' };
  }
  if (!Array.isArray(productIds)) {
    return { status: 422, message: '"productIds" must be an array' };
  }
  if (productIds.length < 1) {
    return { status: 422, message: '"productIds" must include only numbers' };
  }
  const products = (await ProductModel.findAll({
    where: { id: productIds },
    attributes: ['id'],
  })).map(({ dataValues: { id } }) => id);
  if (productIds.length !== products.length) {
    return { status: 404, message: '"productId" not found' };
  }
  return { status: 200, message: '' };
};

const validateNewOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => { 
  const { userId, productIds } = req.body;
  const validateId = await validateUserId(userId);

  if (validateId.status !== 200) {
    return res.status(validateId.status).json({ message: validateId.message });
  }

  const validateProducts = await validateProductIds(productIds);
  
  if (validateProducts.status !== 200) {
    return res.status(validateProducts.status).json({ message: validateProducts.message });
  }
  next();
};

export default validateNewOrder;