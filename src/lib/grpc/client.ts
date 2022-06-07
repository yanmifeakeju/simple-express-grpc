import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../lib/proto/users';
import { config } from '../../config/config';

const PROTO_FILE = `${config.grpc.protofilePath}/users.proto`;
const packgeDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as ProtoGrpcType;

export const usersClient = new grpcObj.userPackage.User(`0.0.0.0:${config.grpc.port}`, grpc.credentials.createInsecure());
