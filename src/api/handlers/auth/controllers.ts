import { RequestHandler, response } from 'express';
import * as grpc from '@grpc/grpc-js';
import { config } from '../../../config/config';
import getClient from '../../../lib/grpc/client';
import { ProtoGrpcType } from '../../../lib/proto/auth';
import { promisify } from 'util';

import { validateTokenResponse, validateTokenResponse__Output } from '../../../lib/proto/authPackage/validateTokenResponse';

const client = getClient<ProtoGrpcType>('auth');
const authService = new client.authPackage.Auth(`0.0.0.0:${config.grpc.port}`, grpc.credentials.createInsecure());

export const loginUserIn: RequestHandler = (req, res) => {
  const { email, password } = req.body;
  authService.loginUser({ email, password }, (err, response) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const responsCode = response?.success ? 201 : 400;
    return res.status(responsCode).json(response);
  });
};

export const validateToken = async (token: string) => {
  const request = promisify(authService.validateToken.bind(authService));
  const response = await request({ token });
  return response as validateTokenResponse;
};
