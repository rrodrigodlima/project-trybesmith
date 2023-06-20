export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type UserLogin = {
  id?: number;
  username: string;
  password: string;
};

export type UserLoginResponse = string;