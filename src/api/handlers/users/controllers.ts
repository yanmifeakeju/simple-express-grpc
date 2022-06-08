import { RequestHandler } from 'express';
import * as grpc from '@grpc/grpc-js';
import { config } from '../../../config/config';
import getClient from '../../../lib/grpc/client';
import { ProtoGrpcType } from '../../../lib/proto/users';

const client = getClient<ProtoGrpcType>('users');
const usersSerivce = new client.userPackage.User(`0.0.0.0:${config.grpc.port}`, grpc.credentials.createInsecure());

export const createUserHandler: RequestHandler = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    usersSerivce.createUser({ email, password, username }, (err, response) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }

      const responsCode = response?.success ? 201 : 400;
      res.status(responsCode).json(response);
    });
  } catch (error) {
    res.status(500).json({ message: 'Error occured in creating user' });
  }
};
