export const userMutations = `
# Adds a User to db with the given email and password. Permission will be set to public.
register(email: String!, password: String!): User!

# Removes a user from the db by passing the user email
deleteUserByEmail(email: String!): User

# Updates a valid users document by passing the user email
updateUserPermission(email: String!, permission: String!): User

# Checks the credentials, and sends back a JWT
login(email: String!, password: String!): String
`;

export const userQueries = `
users: [User]!
findUserByEmail(email: String!): User!
`;

export const userTypes = `
type User {
  _id: ID!
  email: String!
  password: String
  permission: String!
}
`;
