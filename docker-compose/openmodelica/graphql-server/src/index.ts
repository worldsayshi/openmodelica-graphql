const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  
  type Model {
    name: String
  }
  
  type Query {
    models: [Model]
    model(name: String): Model
  }
  
  type MutationResult {
    ok: Boolean
  }
  
  type Mutation {
    putModel(name: String, model: String): MutationResult
    startModel(name: String): MutationResult
    stopModel(name: String): MutationResult
  }
`;

const resolvers = {
  Query: {
    models: () => [],
  },
};


new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});