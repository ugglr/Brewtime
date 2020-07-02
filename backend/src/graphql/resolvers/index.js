// User Related resolvers
import { register, users, findUserByEmail, deleteUserByEmail } from './users';

export const resolvers = {
  Query: { users, findUserByEmail },
  Mutation: { register, deleteUserByEmail },
};
