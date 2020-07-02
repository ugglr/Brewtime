import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  #Queries
  type Query {
    ###### USER RELATED QUERIES #########
    users: [User]!
    findUserByEmail(email: String!): User!
  }
  # Mutations
  type Mutation {
    ###### USER RELATED MUTATIONS #######
    # Adds a User to db with the given email and password
    register(email: String!, password: String!): User!
    # Removed a user from the db by passing the user email
    deleteUserByEmail(email: String!): User
  }
  ###### TYPES ##########################
  #User type
  type User {
    _id: ID!
    email: String!
    password: String
  }
`;
