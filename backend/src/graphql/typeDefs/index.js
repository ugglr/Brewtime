import { gql } from 'apollo-server-express';

import { userMutations, userQueries, userTypes } from './users';

export const typeDefs = gql`
  #Queries
  type Query {
    ###### USER RELATED QUERIES #########
    ${userQueries}
  }
  # Mutations
  type Mutation {
    ###### USER RELATED MUTATIONS #######
    ${userMutations}

  }
  ###### TYPES ##########################
  ${userTypes}
`;
