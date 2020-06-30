const hello = require("./hello");

const resolvers = {
  Query: {
    hello,
  },
};

module.exports = resolvers;
