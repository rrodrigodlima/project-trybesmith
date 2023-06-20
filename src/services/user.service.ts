import jwt from 'jsonwebtoken';
import { UserLoginResponse, UserLogin } from '../types/User';

const login = async (
  { id, username }: Omit<UserLogin, 'password'>,
): Promise<UserLoginResponse> => jwt.sign({
  id,
  username,
}, '666');

export default {
  login,
};