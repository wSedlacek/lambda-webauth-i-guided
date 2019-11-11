import { Router } from 'express';

import { authRouter } from '../routes/auth.routes';
import { usersRouter } from '../routes/users.routes';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);
apiRouter.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});
