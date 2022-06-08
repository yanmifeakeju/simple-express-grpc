import { ProtoGrpcType } from '../../lib/proto/users';
import { UserHandlers } from '../../lib/proto/userPackage/User';
import initServiceDefinition from '../../lib/grpc/loadServiceDefintion';
import { createNewUser } from './handlers';

const { userPackage } = initServiceDefinition<ProtoGrpcType>('users');
const { service } = userPackage.User;

const handlers: UserHandlers = {
  async createUser(call, callback) {
    const response = await createNewUser(call.request);
    callback(null, response);
  }
};

export default { service, handlers };
