import { hello } from './hello';
import { auth } from './authentication';

export const resolvers = {
  ...hello,
  ...auth,
};
