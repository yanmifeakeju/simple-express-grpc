import * as grpc from '@grpc/grpc-js';
import intializeGRPCServer from '../lib/grpc/server';
import UserService from './users';
import AuthService from './auth';
import { config } from '../config/config';

const PORT = 8080;
const server = new grpc.Server();
server.addService(UserService.service, UserService.handlers);
server.addService(AuthService.service, AuthService.handlers);
intializeGRPCServer(server, config.grpc.port);
