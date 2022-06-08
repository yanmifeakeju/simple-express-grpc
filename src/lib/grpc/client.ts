import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../lib/proto/users';
import { config } from '../../config/config';

const PROTO_FILE = `${config.grpc.protofilePath}/users.proto`;
const packgeDef = protoLoader.loadSync(PROTO_FILE);
const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as ProtoGrpcType;

function getClient<T>(service: string) {
  const PROTO_FILE = `${config.grpc.protofilePath}/${service}.proto`;
  const packgeDef = protoLoader.loadSync(PROTO_FILE);
  const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as T;
  return grpcObj;
}

export default getClient;
