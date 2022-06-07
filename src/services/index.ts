import * as grpc from '@grpc/grpc-js';
import intializeGRPCServer from '../lib/grpc/server';
import UserService from './users';

const PORT = 8080;
const server = new grpc.Server();
server.addService(UserService.service, UserService.handlers);
intializeGRPCServer(server);
