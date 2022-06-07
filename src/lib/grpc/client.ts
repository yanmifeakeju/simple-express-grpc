import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../lib/proto/users';

const PORT = 8080;
const PROTO_FILE = '../proto/users.proto';
const packgeDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as ProtoGrpcType;

export const usersClient = new grpcObj.userPackage.User(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());
