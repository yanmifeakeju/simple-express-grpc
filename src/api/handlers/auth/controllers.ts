import { RequestHandler, response } from 'express';
import * as grpc from '@grpc/grpc-js';
import { config } from '../../../config/config';
import getClient from '../../../lib/grpc/client';
import { ProtoGrpcType } from '../../../lib/proto/auth';
import { promisify } from 'util';

import { validateTokenResponse, validateTokenResponse__Output } from '../../../lib/proto/authPackage/validateTokenResponse';

const client = getClient<ProtoGrpcType>('auth');
const authService = new client.authPackage.Auth(`0.0.0.0:${config.grpc.port}`, grpc.credentials.createInsecure());

export const loginUserIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const request = promisify(authService.loginUser.bind(authService));
  const response = await request({ email, password });
  const responsCode = response?.success ? 201 : 400;
  return res.status(responsCode).json(response);
};

export const validateToken = async (token: string) => {
  const request = promisify(authService.validateToken.bind(authService));
  const response = await request({ token });
  return response as validateTokenResponse;
};
