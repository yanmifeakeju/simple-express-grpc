import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
const GRPC_PORT = process.env.GRPC_PORT ? Number(process.env.GRPC_PORT) : 8080;
const PATH_TO_PROTO = process.env.PATH_TO_PROTO_FILE;

export const config = {
  mongo: {
    uri: MONGO_URI
  },

  server: {
    port: SERVER_PORT
  },

  grpc: {
    port: GRPC_PORT,
    protofilePath: PATH_TO_PROTO
  }
};
