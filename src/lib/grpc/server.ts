import * as grpc from '@grpc/grpc-js';

const intializeGRPCServer = (server: grpc.Server, port: number) => {
  server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Server listening on port ${port}`);
    server.start();
  });
};

export default intializeGRPCServer;
