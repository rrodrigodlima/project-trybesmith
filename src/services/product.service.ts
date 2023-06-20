import ProductsModel, { ProductSequelizeModel } from '../database/models/product.model';

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

const getAll = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductsModel.findAll();
  return products;
};

export default { create, getAll };