import bcrypt from 'bcryptjs'
import { mongoose } from '../../../mongoose'

const User = mongoose.models.user

export const createUser = {
  createUser: args => {
    return User.findOne({ email: args.userInput.email })
      .then(user => {
        if (user) {
          throw new Error('User exists already.')
        }
        return bcrypt.hash(args.userInput.password, 12)
      })
      .then(hashedPassord => {
        const user = new User({
          email: args.userInput.email,
          userName: args.userInput.userName,
          password: hashedPassord,
          createdDate: Date(),
          updatedDate: Date()
        })
        return user
          .save()
          .then(result => {
            return {
              ...result._doc,
              password: null,
              _id: result.id,
              email: result.email,
              userName: result.userName,
              photo: result.photo,
              createdDate: result.createdDate,
              updatedDate: result.updatedDate
            }
          })
          .catch(err => {
            throw err
          })
      })
      .catch(err => {
        throw err
      })
  }
}
