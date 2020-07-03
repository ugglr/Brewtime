// User Related resolvers
import {
  register,
  users,
  findUserByEmail,
  deleteUserByEmail,
  updateUser,
} from './users';

export const resolvers = {
  Query: { users, findUserByEmail },
  Mutation: { register, deleteUserByEmail, updateUser },
};
