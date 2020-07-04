// User Related resolvers
import {
  register,
  login,
  users,
  findUserByEmail,
  deleteUserByEmail,
  updateUserPermission,
} from './users';

export const resolvers = {
  Query: { users, findUserByEmail },
  Mutation: { register, deleteUserByEmail, updateUserPermission, login },
};
