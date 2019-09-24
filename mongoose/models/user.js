import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  updatedDate: {
    type: Date,
    required: false
  },
  photo: {
    type: String
  }
  // createdAccount: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Accont',
  //   },
  // ],
})

export default model('User', userSchema)
