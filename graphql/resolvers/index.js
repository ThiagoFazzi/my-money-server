import { hello } from './hello'
import { auth } from './authentication'
import { user } from './user'

export const resolvers = {
  ...hello,
  ...auth,
  ...user
}
