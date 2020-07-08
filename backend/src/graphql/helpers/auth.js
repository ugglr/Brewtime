import { AuthenticationError } from 'apollo-server-express';

export const hasPermission = (user) => {
  if (!user) throw new AuthenticationError('not authorized...');

  const { permission } = user;
  if (permission !== 'admin')
    throw new AuthenticationError('not authorized...');
};
