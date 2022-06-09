import mongoose from './connect';
import UserSchema, { IUser, UserModel, IUserMethods } from './models/Users';
import Directory from './models/Directory';

const db = {
  users: mongoose.model<IUser, UserModel>('User', UserSchema),
  directories: mongoose.model('Directory', Directory)
};

export default db;
