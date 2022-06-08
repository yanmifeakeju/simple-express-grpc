import initServiceDefinition from '../../lib/grpc/loadServiceDefintion';
import { ProtoGrpcType } from '../../lib/proto/auth';
import { AuthHandlers } from '../../lib/proto/authPackage/Auth';
import { loginUserIn } from './handlers';

const { authPackage } = initServiceDefinition<ProtoGrpcType>('auth');
const { service } = authPackage.Auth;

const handlers: AuthHandlers = {
  async loginUser(call, callback) {
    const response = await loginUserIn(call.request);
    callback(null, response);
  }
};

export default { service, handlers };
