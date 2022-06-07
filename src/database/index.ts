import mongoose from './connect';
import User from './schemas/Users';
import Directory from './schemas/Directory';

const db = {
  users: mongoose.model('User', User),
  directories: mongoose.model('Directory', Directory)
};

export default db;
