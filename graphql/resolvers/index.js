import { test } from './test'
import { auth } from './authentication'
import { user } from './user'

export const resolvers = {
  ...test,
  ...auth,
  ...user
}
