import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
  mongo: {
    uri: MONGO_URI
  },

  server: {
    port: SERVER_PORT
  }
};
