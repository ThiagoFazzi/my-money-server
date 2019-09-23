import { createUser } from './createUser';
import { signIn } from './signIn';
import { getUser } from './getUser';
import { updateUser } from './updateUser';

export const auth = {
  ...createUser,
  ...signIn,
  ...getUser,
  ...updateUser,
};
