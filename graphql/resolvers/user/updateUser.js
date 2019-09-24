import { mongoose } from '../../../mongoose'
import { isAuth } from '../../../helpers/isAuth'

const User = mongoose.models.user

export const updateUser = {
  updateUser: async (args, req) => {
    isAuth(req.isAuth)
    const user = new User({
      userName: args.userProfileInput.userName,
      photo: args.userProfileInput.photo,
      updatedDate: Date()
    })
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          userName: user.userName,
          photo: user.photo,
          updatedDate: user.updatedDate
        }
      },
      { new: true }
    )
    return {
      ...updatedUser._doc,
      password: null,
      _id: updatedUser._id,
      email: updatedUser.email,
      userName: updatedUser.userName,
      photo: updatedUser.photo,
      createdDate: updatedUser.createdDate,
      updatedDate: updatedUser.updatedDate
    }
  }
}
