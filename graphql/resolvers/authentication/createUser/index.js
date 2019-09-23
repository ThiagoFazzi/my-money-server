import bcrypt from 'bcryptjs';
import { mongoose } from '../../../../mongoose';

const User = mongoose.models.user;

export const createUser = {
  createUser: args => {
    return User.findOne({ email: args.userInput.email })
      .then(user => {
        if (user) {
          throw new Error('User exists already.');
        }
        return bcrypt.hash(args.userInput.password, 12);
      })
      .then(hashedPassord => {
        const user = new User({
          email: args.userInput.email,
          userName: args.userInput.userName,
          password: hashedPassord,
        });
        return user
          .save()
          .then(result => {
            return {
              ...result._doc,
              password: null,
              _id: result.id,
              userName: result.userName,
            };
          })
          .catch(err => {
            throw err;
          });
      })
      .catch(err => {
        throw err;
      });
  },
};
