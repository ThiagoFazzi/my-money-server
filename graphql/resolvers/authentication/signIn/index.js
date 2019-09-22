import bcrypt from 'bcryptjs';
import { mongoose } from '../../../../mongoose';
import jwt from 'jsonwebtoken';

const User = mongoose.models.user;

export const signIn = {
  signIn: async ({ email, password }) => {
    console.log('entrei');
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return {
        error: 'User does not exist',
        data: null,
      };
      //throw new Error('User does not exist');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Login fail, try again');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      { expiresIn: '1h' }
    );
    return { userId: user.id, token: token, tokenExpiration: 1, user: user };
  },
};
