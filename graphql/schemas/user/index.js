export const user = `
  type User {
    _id: ID!
    email: String!
    userName: String
  }

  input UserInput {
    email: String!
    password: String!
    userName: String!
  }

  type AuthData {
    userId: String!
    token: String!
    tokenExpiration: Int!
    user: User!
  }
`;

//createdEvents: [Event!]
