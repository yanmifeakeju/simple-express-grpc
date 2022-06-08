import { Router } from 'express';
import { createUserHandler } from './routers';

const router = Router();

router.post('/', createUserHandler);
router.get('/', (req, res) => {
  res.send('Users');
});

export default router;
