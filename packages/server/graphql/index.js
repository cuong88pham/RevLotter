import path from 'path';

import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import { verifyIdToken } from '../services/rev-firebase';

const env = process.env.NODE_ENV || 'development';

const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'), {
  recursive: true
});

const resolversArray = fileLoader(path.join(__dirname, '/**/*.resolver.js'), {
  recursive: true
});

const typeDefs = mergeTypes(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray, { all: true });
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    const currentToken = (req.headers.authorization || '').substr(7);

    try {
      const { currentUser } = await verifyIdToken(currentToken);

      return { currentUser, req, res };
    } catch (error) {
      throw error;
    }
  },
  formatError: error => {
    if (env === 'production') {
      delete error.extensions.exception;
    }

    return error;
  }
});
