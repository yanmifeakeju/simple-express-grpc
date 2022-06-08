import { Router } from 'express';
import { loginUserIn } from './controllers';

const router = Router();

router.post('/', loginUserIn);

export default router;
