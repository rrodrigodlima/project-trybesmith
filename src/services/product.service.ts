import ProductsModel from '../database/models/product.model';

import { ProductTypeData, ProductTypeResponse } from '../types/Product';

const create = async (newProductData: ProductTypeData): Promise<ProductTypeResponse> => {
  const { name, price, orderId } = newProductData;

  const product = await ProductsModel.create({
    name,
    price,
    orderId,
  });

  return {
    id: product.dataValues.id,
    name: product.dataValues.name,
    price: product.dataValues.price,
  };
};

export default { create };