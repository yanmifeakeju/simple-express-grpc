import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../../config/config';

export const hashPassword = (password: string) => bcrypt.hashSync(password, bcrypt.genSaltSync());

export const verifyPassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);

export const getAuthToken = (id: string) => {
  return jwt.sign({ id }, config.auth.jwt.secret!, {
    expiresIn: config.auth.jwt.expiresIn
  });
};

export const verifyAuthToken = (token: string) => {
  return jwt.verify(token, config.auth.jwt.secret!);
};
