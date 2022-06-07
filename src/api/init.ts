import express, { Router } from 'express';

export const startServer = async (routes: Router, port: number) => {
  const app = express();
  app.use(express.json());

  app.use('/api', routes);

  app.get('/', (_, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => console.log('Server started'));
};
