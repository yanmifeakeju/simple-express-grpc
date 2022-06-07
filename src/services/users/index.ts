import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../lib/proto/users';
import { UserHandlers } from '../../lib/proto/userPackage/User';
import { config } from '../../config/config';

const PROTO_FILE = `${config.grpc.protofilePath}/users.proto`;
const packgeDef = protoLoader.loadSync(PROTO_FILE);

const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as ProtoGrpcType;
const { service } = grpcObj.userPackage.User;

const handlers: UserHandlers = {
  createUser: (call, callback) => {
    const { username, email, password } = call.request;
    console.log(username, email, password);
    callback(null, { success: true, message: 'User created' });
  }
};

export default { service, handlers };
