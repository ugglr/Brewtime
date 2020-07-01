require('dotenv').config();
// Express
const express = require('express');
const mongoose = require('mongoose');
// Apollo / GQL
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const startServer = async () => {
  console.log('[SERVER] Starting express server...');
  const app = express();

  console.log('[SERVER] Starting apollo server...');
  const server = new ApolloServer({ typeDefs, resolvers });

  // Apply Middlewares
  console.log('[SERVER] Applying middleware...');
  server.applyMiddleware({ app });

  // Connect MongoDB with mongoose
  console.log('[SERVER] Connecting to MongoDB...');

  mongoose
    .connect(`${process.env.MONGO_CONNECTION_STRING}`, {
      useNewUrlParser: true,
    })
    .then(() =>
      app.listen({ port: 4000 }, () =>
        console.log(
          `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
      )
    )
    .catch((mongoConnectionError) => {
      console.log(
        '[SERVER] We have a problem connecting to MongoDB...',
        mongoConnectionError
      );
      throw new Error(mongoConnectionError);
    });
};

startServer();
