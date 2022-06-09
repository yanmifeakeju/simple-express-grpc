import { RequestHandler, Router } from 'express';
import { protectedRoute } from '../../../lib/middlewares/auth';
import { validateToken } from '../auth/controllers';
import { createUserHandler } from './controllers';

const router = Router();

router.post('/', createUserHandler);

router.use(protectedRoute(validateToken));
router.get('/', (req, res) => res.status(200).json({ success: true, message: 'User retrieved', data: req.user }));

export default router;
