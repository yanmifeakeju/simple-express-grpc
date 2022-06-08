import { createUserRequest } from '../../lib/proto/userPackage/createUserRequest';
import { createUserResponse__Output } from '../../lib/proto/userPackage/createUserResponse';
import Joi from 'joi';
import db from '../../database';
import { hashPassword } from '../../lib/utils/auth';

export const createNewUser = async ({ email, password, username }: createUserRequest): Promise<createUserResponse__Output> => {
  const validation = Joi.object({ username: Joi.string().required(), email: Joi.string().email().required(), password: Joi.string().required() }).validate({ username, email, password });

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

  const user = await db.users.create({ username, email, password: hashPassword(password!) });

  return { success: true, message: 'User created' };
};
