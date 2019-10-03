import { mongoose } from '../../../mongoose'
import { isAuth } from '../../../helpers/isAuth'

const User = mongoose.models.user

export const getUser = {
  getUser: async (args, req) => {
    isAuth(req.isAuth)

    try {
      const userResponse = await User.findById(req.userId)
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