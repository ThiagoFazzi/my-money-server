import { mongoose } from '../../../mongoose'
import { isAuth } from '../../../helpers/isAuth'

const User = mongoose.models.user

export const updateUser = {
  updateUser: async (args, req) => {
    isAuth(req.isAuth)

    try {
      const userResponse = await User.findByIdAndUpdate(
        req.userId,
        {
          $set: {
            userName: args.userProfileInput.userName,
            photo: args.userProfileInput.photo,
            updatedDate: Date()
          }
        },
        { new: true }
      )
      return {
        ...userResponse._doc,
        password: null,
        _id: userResponse._id,
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
