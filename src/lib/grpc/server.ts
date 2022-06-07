import * as grpc from '@grpc/grpc-js';

const PORT = 8080;

const intializeGRPCServer = (server: grpc.Server) => {
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Server listening on port ${port}`);
    server.start();
  });
};

export default intializeGRPCServer;
