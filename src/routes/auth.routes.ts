import { Router } from 'express';
import { add, findBy } from '../database/users';

export const authRouter = Router();
authRouter.post('/register', async ({ body }, res) => {
  try {
    const saved = await add(body);
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

authRouter.post('/login', async ({ body }, res) => {
  let { username, password } = body;
  try {
    const user = await findBy({ username });
    if (user) res.status(200).json({ message: `Welcome ${user.username}!` });
    else res.status(401).json({ message: 'Invalid Credentials' });
  } catch (error) {
    res.status(500).json(error);
  }
});
