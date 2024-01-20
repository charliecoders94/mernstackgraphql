const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");
const ClientModel = require("../models/ClientModel");
const ProjectModel = require("../models/ProjectModel");
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
const ProjectType = new GraphQLObjectType({
  name: "Projects",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return ClientModel.findById(parent.clientId);
      },
    },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ClientModel.findById(args.id);
      },
    },
    AllClients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return ClientModel.find();
      },
    },
    Allprojects:{
        type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return ProjectModel.find();
      },
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
