import { RequestHandler, Router } from 'express';
import { protectedRoute } from '../../../lib/middlewares/auth';
import { validateToken } from '../auth/controllers';
import { createUserHandler } from './controllers';

const router = Router();

router.post('/', createUserHandler);

router.use(protectedRoute(validateToken));
router.get('/', (_, res) => {
  res.send('Users');
});

export default router;
