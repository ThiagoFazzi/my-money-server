import { createUser } from './createUser';
import { signIn } from './signIn';

export const auth = {
  ...createUser,
  ...signIn,
};
