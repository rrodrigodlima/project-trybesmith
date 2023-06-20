import { Request, Response } from 'express';
import { UserLogin } from 'src/types/User';

import userService from '../services/user.service';

const login = async (
  req: Request<unknown, unknown, UserLogin>,
  res: Response,
): Promise<Response> => {
  try {
    const token = await userService.login(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    const { message } = error as Error;
    return res.status(400).json({ message });
  }
};

export default {
  login,
};