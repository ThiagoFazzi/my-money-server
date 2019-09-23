export const rootMutation = `
  type RootMutation {
    createUser(userInput: UserInput): User
    updateUser(userProfileInput: UserProfileInput): User
  }
`;
