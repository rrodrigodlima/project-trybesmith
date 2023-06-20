import { NextFunction as Next, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

type TokenType = {
  id: number;
  username: string;
  iat: number;
};

export default async (req: Request, res: Response, next: Next): Promise<Response | void> => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { id } = <TokenType>jwt.verify(token, '666');
    const user = await UserModel.findOne({ where: { id } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.locals.loggedUser = user.dataValues;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};