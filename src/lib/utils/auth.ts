import bcrypt from 'bcryptjs';

export const hashPassword = (password: string) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const verifyPassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);
