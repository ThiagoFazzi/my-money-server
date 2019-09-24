import { mongoose } from '../../../../mongoose'
import { isAuth } from '../../../../helpers/isAuth'

const User = mongoose.models.user

export const getUser = {
  getUser: async (args, req) => {
    isAuth(req.isAuth)
    const user = await User.findById(req.userId)
    if (!user) {
      return {
        error: 'User not found',
        data: null
      }
      //throw new Error('User does not exist');
    } else {
      return {
        ...user._doc,
        password: null,
        _id: user._id,
        email: user.email,
        userName: user.userName,
        photo: user.photo,
        createdDate: user.createdDate,
        updatedDate: user.updatedDate
      }
    }
  }
}
