import { Router } from 'express';
import validateNewLogin from '../middlewares/validateNewLogin';
import userController from '../controllers/user.controller';

const loginRouter = Router();

loginRouter.post(
  '/',
  validateNewLogin,
  userController.login,
);

export default loginRouter;