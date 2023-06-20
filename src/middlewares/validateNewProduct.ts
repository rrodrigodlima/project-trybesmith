import { Request, Response, NextFunction } from 'express';

const validateProductFields = (type: 'name' | 'price', field: string) => {
  if (!field) {
    return { status: 400, message: `"${type}" is required` };
  }
  if (typeof field !== 'string') {
    return { status: 422, message: `"${type}" must be a string` };
  }
  if (field.length < 3) {
    return { status: 422, message: `"${type}" length must be at least 3 characters long` };
  }
  return { status: 200, message: '' };
};

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
) => { 
  const { name, price } = req.body;
  const validateName = validateProductFields('name', name);
  if (validateName.status !== 200) {
    return res.status(validateName.status).json({ message: validateName.message });
  }
  const validatePrice = validateProductFields('price', price);
  if (validatePrice.status !== 200) {
    return res.status(validatePrice.status).json({ message: validatePrice.message });
  }
  
  next();
};
