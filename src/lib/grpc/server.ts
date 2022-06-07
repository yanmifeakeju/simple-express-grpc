import * as grpc from '@grpc/grpc-js';
import { config } from '../../config/config';

const intializeGRPCServer = (server: grpc.Server) => {
  server.bindAsync(`0.0.0.0:${config.grpc.port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Server listening on port ${port}`);
    server.start();
  });
};

export default intializeGRPCServer;
