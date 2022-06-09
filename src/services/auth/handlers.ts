import Joi from 'joi';
import db from '../../database';
import { loginUserRequest, loginUserRequest__Output } from '../../lib/proto/authPackage/loginUserRequest';
import { loginUserResponse } from '../../lib/proto/authPackage/loginUserResponse';

export const loginUserIn = async ({ email, password }: loginUserRequest): Promise<loginUserResponse> => {
  try {
    const validation = Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() }).validate({ email, password });
    if (validation.error) return { success: false, message: validation.error.message };

    const user = await db.users.findOne({ email });

    if (!user) return { success: false, message: 'Invalid Credentials' };
    if (!user.matchPassword(password)) return { success: false, message: 'Invalid Credentials' };

    return { success: true, message: 'Login Successful', data: { user: { email, username: user.username }, token: user.getSignedJwtToken() } };
  } catch (error) {
    return { success: false, message: 'Error occured in logging in user' };
  }
};
