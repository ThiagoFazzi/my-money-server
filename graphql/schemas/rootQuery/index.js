export const rootQuery = `
  type RootQuery {
    signIn(email: String!, password: String!): AuthData
    getUser(userIdInput: UserIdInput): User
  }
`
