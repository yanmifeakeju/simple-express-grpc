import { createUserRequest } from '../../lib/proto/userPackage/createUserRequest';
import Joi from 'joi';
import db from '../../database';
import { hashPassword, verifyPassword } from '../../lib/utils/auth';

export const createNewUser = async ({ email, password, username }: createUserRequest) => {
  const validation = Joi.object({ username: Joi.string().required(), email: Joi.string().email().required(), password: Joi.string().required() }).validate({ username, email, password });

  // const hash = hashPassword('dimdim');

  if (validation.error) {
    return {
      success: false,
      message: validation.error.message
    };
  }

  const isEmailExist = await db.users.findOne({ email });
  if (isEmailExist) return { success: false, message: 'Email already exist' };

  const isUsernameExist = await db.users.findOne({ username });
  if (isUsernameExist) return { success: false, message: 'Username already exist' };

  const hashed = hashPassword(password!);
  const verified = verifyPassword(password!, hashed);

  console.log(verified);

  const user = await db.users.create({ username, email, password });

  return { success: true, message: 'User created' };
};
