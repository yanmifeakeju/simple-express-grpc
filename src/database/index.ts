import mongoose from './connect';
import UserSchema from './models/Users';
import Directory from './models/Directory';

const db = {
  users: mongoose.model('User', UserSchema),
  directories: mongoose.model('Directory', Directory)
};

export default db;
