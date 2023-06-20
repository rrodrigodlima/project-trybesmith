import { Request, Response } from 'express';

import productService from '../services/product.service';

import { ProductTypeData } from '../types/Product';

const create = async (
  req: Request<unknown, unknown, ProductTypeData>,
  res: Response,
): Promise<Response> => {
  try {
    const newProduct = await productService.create(req.body);

    return res.status(201).json(newProduct);
  } catch (error) {
    const { message } = error as Error;
    
    return res.status(400).json({ message });
  }
};

const getAll = async (
  _req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const products = await productService.getAll();

    return res.status(200).json(products);
  } catch (error) {
    const { message } = error as Error;

    return res.status(400).json({ message });
  }
};

export default { create, getAll };