import Router from 'express';
import userRouter from './routes/user.router.js';

const router = Router();

userRouter(router);

export default router;
