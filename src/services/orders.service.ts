import { OrderDataType, OrderResponseType } from 'src/types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

const getAll = async (): Promise<OrderSequelizeModel[]> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  return orders;
};

const create = async (newOrderData: OrderDataType): Promise<OrderResponseType> => {
  const { userId, productIds = [] } = newOrderData;
  const { dataValues: { id: orderId } } = await OrderModel.create({ userId, productIds });
  productIds.forEach(async (id) => {
    await ProductModel.update({ orderId }, { where: { id } });
  });
  return { userId, productIds };
};

export default {
  getAll,
  create,
};