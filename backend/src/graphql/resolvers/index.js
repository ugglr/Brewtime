// User Related resolvers
import {
  register,
  users,
  findUserByEmail,
  deleteUserByEmail,
  updateUserPermission,
} from './users';

export const resolvers = {
  Query: { users, findUserByEmail },
  Mutation: { register, deleteUserByEmail, updateUserPermission },
};
