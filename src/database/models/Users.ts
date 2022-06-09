import { JwtPayload } from 'jsonwebtoken';
import { HydratedDocument, Model, Schema } from 'mongoose';
import { getAuthToken, hashPassword, verifyPassword, verifyAuthToken } from '../../lib/utils/auth';

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserMethods {
  getSignedJwtToken: () => string;
  matchPassword: (enteredPassword: string) => boolean;
}
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  validateAuthToken: (token: string) => Promise<HydratedDocument<IUser>>;
}

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
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

UserSchema.statics.validateAuthToken = function (token: string) {
  const decoded = verifyAuthToken(token);
  const hasUserId = (decoded: any): decoded is JwtPayload => 'id' in decoded;
  if (!hasUserId(decoded)) return null;
  return this.findById(decoded.id);
};

UserSchema.methods.getSignedJwtToken = function () {
  return getAuthToken(this._id);
};

UserSchema.methods.matchPassword = function (enteredPassword: string) {
  return verifyPassword(enteredPassword, this.password);
};

export default UserSchema;
