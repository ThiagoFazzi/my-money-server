import bcrypt from 'bcryptjs'
import { mongoose } from '../../../mongoose'

const User = mongoose.models.user

export const createUser = {
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email })
      if (user) {
        return {
          error: 'User exists already.',
          data: null
        }
      }
    } catch (error) {
      return {
        error: `${error.message}`,
        data: null
      }
    }

    const hashPassword = await bcrypt.hash(args.userInput.password, 12)

    const user = new User({
      email: args.userInput.email,
      userName: args.userInput.userName,
      password: hashPassword,
      createdDate: Date(),
      updatedDate: Date()
    })

    try {
      const userResponse = await user.save()
      return {
        ...userResponse._doc,
        password: null,
        _id: userResponse.id,
        email: userResponse.email,
        userName: userResponse.userName,
        photo: userResponse.photo,
        createdDate: userResponse.createdDate,
        updatedDate: userResponse.updatedDate
      }
    } catch (error) {
      return {
        error: `${error.message}`,
        data: 'null'
      }
    }
  }
}
