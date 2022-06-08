import { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { getAuthToken, hashPassword, verifyPassword } from '../../lib/utils/auth';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = hashPassword(this.password);
});

UserSchema.methods.getSignedJwtToken = function () {
  return getAuthToken(this._id);
};

UserSchema.methods.matchPassword = function (enteredPassword: string) {
  return verifyPassword(enteredPassword, this.password);
};

export default UserSchema;
