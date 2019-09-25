import { createUser } from './createUser'
import { updateUser } from './updateUser'

export const user = {
  ...createUser,
  ...updateUser
}
