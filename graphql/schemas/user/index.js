export const user = `
  type User {
    _id: ID!
    email: String!
    userName: String
    photo: String
    createdDate: String
    updatedDate: String
  }

  input UserInput {
    email: String!
    password: String!
    userName: String!
  }

  input UserProfileInput {
    userName: String
    photo: String
  } 

  type AuthData {
    userId: String!
    token: String!
    tokenExpiration: Int!
    user: User!
  }
`;

//createdEvents: [Event!]
