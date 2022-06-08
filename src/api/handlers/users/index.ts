import { Router } from 'express';
import { createUserHandler } from './controllers';

const router = Router();

router.post('/', createUserHandler);

router.get('/', (_, res) => {
  res.send('Users');
});

export default router;
