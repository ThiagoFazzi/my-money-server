import { createUser } from './createUser';
import { signIn } from './signIn';
import { getUser } from './getUser';

export const auth = {
  ...createUser,
  ...signIn,
  ...getUser,
};
