export const rootQuery = `
  type RootQuery {
    signIn(email: String!, password: String!): AuthData
    getUser(userId: String!): User
    hello: String
  }
`;
