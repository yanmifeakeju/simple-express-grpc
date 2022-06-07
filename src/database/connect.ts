import mongoose from 'mongoose';
import { config } from '../config/config';

mongoose.connect(config.mongo.uri!);
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

export default mongoose;
