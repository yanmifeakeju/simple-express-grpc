import { IUser } from '../../database/models/Users';

export {};

declare global {
  namespace Express {
    interface Request {
      user: Partial<IUser>;
    }
  }
}
