import { hashSync } from 'bcryptjs';
import { db } from '../../knexfile';
import { User } from '../models/User';

export const find = async () => await db('users').select('id', 'username');

export const findBy = async (filter: Partial<User>) =>
  await db<User>('users')
    .select<User>('id', 'username')
    .where(filter)
    .first();

export const add = async (user: User) => {
  const encrypted = { ...user, password: hashSync(user.password, 12) };
  const [id] = await db<User>('users').insert(encrypted, 'id');
  return await findById(id);
};

export const findById = async (id: string) =>
  await db<User>('users')
    .select<User>('id', 'username')
    .where({ id })
    .first();
