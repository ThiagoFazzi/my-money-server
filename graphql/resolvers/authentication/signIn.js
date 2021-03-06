import bcrypt from 'bcryptjs'
import { mongoose } from '../../../mongoose'
import jwt from 'jsonwebtoken'

const User = mongoose.models.user

export const signIn = {
  signIn: async ({ email, password }) => {
    const user = await User.findOne({ email: email })
    if (!user) {
      return {
        error: 'User does not exist',
        data: null
      }
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      return {
        error: 'Login fail, try again',
        data: null
      }
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      { expiresIn: '1h' }
    )
    return { userId: user.id, token: token, tokenExpiration: 1, user: user }
  }
}
