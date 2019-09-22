import mongoose from 'mongoose';

export const startConnection = async (userName, userPassword, dbName) => {
  try {
    await mongoose.connect(
      `mongodb+srv://${userName}:${userPassword}@cluster0-uj9z7.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    throw error.message;
  }
};
