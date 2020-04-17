const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require("graphql-import");
const resolvers = require('./src/resolvers')
const pathTypeDefs = "./src/schema/Index.graphql";

const server = new ApolloServer({
  typeDefs: importSchema(pathTypeDefs),
  resolvers: resolvers,
});

server.listen().then(({ url }) => {
    console.log('Executando em', url)
})