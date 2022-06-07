import { config } from '../config/config';
import { startServer } from './init';
import routes from './handlers';

startServer(routes, config.server.port);
