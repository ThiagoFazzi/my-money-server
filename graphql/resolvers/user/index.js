import { createUser } from './createUser'
import { updateUser } from './updateUser'
import { getUser } from './getUser'

export const user = {
  ...createUser,
  ...updateUser,
  ...getUser
}
