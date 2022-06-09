import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import { validateTokenResponse } from '../proto/authPackage/validateTokenResponse';

type verifyAuthToken = (token: string) => Promise<validateTokenResponse>;

export function protectedRoute(verfiyToken: verifyAuthToken) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: 'No authorization token provided',
        error: 'User not authenticatee'
      });
    }

    const token = authorization.split(' ')[1];

    try {
      const decoded = await verfiyToken(token);

      if (!decoded.success) {
        return res.status(401).json({
          success: false,
          message: 'Invalid token',
          error: 'User not authenticatee'
        });
      }
      req.user = decoded.data?.user!;
      next();
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ success: false, message: 'Invalid authorization token' });
      }

      return res.status(500).json({ success: false, message: 'Error validating token' });
    }
  };
}
